import {
  buildHotelCatalogContext,
  getCatalogHotelSlugs,
  resolveCatalogRecommendations,
} from "@/features/ai/data/hotel-catalog";
import type { AiChatRequest } from "@/features/ai/schemas/ai.schema";
import { aiStructuredResponseSchema } from "@/features/ai/schemas/ai-response.schema";
import type { AiAssistantReply, AiHotelRecommendation } from "@/features/ai/types";
import type { Locale } from "@/i18n/routing";
import { getGeminiStructuredModel } from "@/lib/gemini/client";
import { getGeminiModelCandidates } from "@/lib/gemini/config";
import { isRetryableGeminiError } from "@/lib/gemini/errors";
import { getLocaleLanguageInstruction } from "@/lib/i18n/locale-language";

function buildSystemPrompt(locale: Locale) {
  const responseLanguage = getLocaleLanguageInstruction(locale);

  return `You are Novigo AI, a premium hotel booking assistant for the NOVIGO travel platform.

You MUST respond with JSON only (handled by schema). Fields:
- message: brief, helpful conversational text (2-4 sentences max). Do NOT list hotels in prose when you add them to recommendations.
- recommendations: 0-4 hotels from the catalog as clickable cards. Use exact slug values only.

Rules:
- When the user asks for hotel suggestions, ALWAYS populate recommendations with matching catalog hotels.
- Each recommendation needs a concise reason tailored to the user's request.
- If the user asks a general question without needing hotels, return an empty recommendations array.
- Never invent slugs outside the allowed list.
- ALWAYS write the message field and every recommendation reason in ${responseLanguage}. This is the user's selected site language (locale: ${locale}). Use ${responseLanguage} even if the user writes in another language, unless they explicitly ask you to switch languages.
- Ask one focused follow-up in message if dates/budget/guests are missing.

Allowed hotel slugs:
${getCatalogHotelSlugs().join(", ")}

Catalog:
${buildHotelCatalogContext()}`;
}

type ChatMessage = AiChatRequest["messages"][number];

function toGeminiHistory(messages: ChatMessage[]) {
  return messages.map((message) => ({
    role: message.role === "assistant" ? ("model" as const) : ("user" as const),
    parts: [{ text: message.content }],
  }));
}

async function requestStructuredReplyWithModel(
  modelName: string,
  messages: ChatMessage[],
  locale: Locale,
): Promise<AiAssistantReply> {
  const lastMessage = messages.at(-1);

  if (!lastMessage || lastMessage.role !== "user") {
    throw new Error("The last message must be from the user.");
  }

  const model = getGeminiStructuredModel(buildSystemPrompt(locale), modelName);
  const history = toGeminiHistory(messages.slice(0, -1));
  const chat = model.startChat({ history });
  const result = await chat.sendMessage(lastMessage.content);
  const rawText = result.response.text().trim();

  let parsedJson: unknown;

  try {
    parsedJson = JSON.parse(rawText);
  } catch {
    throw new Error("AI returned invalid JSON.");
  }

  const parsed = aiStructuredResponseSchema.safeParse(parsedJson);

  if (!parsed.success) {
    throw new Error("AI response did not match the expected format.");
  }

  const recommendations: AiHotelRecommendation[] = resolveCatalogRecommendations(
    parsed.data.recommendations,
  );

  return {
    message: parsed.data.message.trim(),
    recommendations,
  };
}

export async function createStructuredAssistantReply(
  messages: ChatMessage[],
  locale: Locale = "tr",
): Promise<AiAssistantReply> {
  const candidates = getGeminiModelCandidates();
  let lastError: unknown;

  for (const modelName of candidates) {
    try {
      return await requestStructuredReplyWithModel(modelName, messages, locale);
    } catch (error) {
      lastError = error;

      if (!isRetryableGeminiError(error)) {
        throw error;
      }

      console.warn(`Gemini model ${modelName} unavailable, trying fallback...`, error);
    }
  }

  throw lastError ?? new Error("All Gemini models are temporarily unavailable.");
}

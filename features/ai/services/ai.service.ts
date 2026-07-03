import { buildHotelCatalogContext } from "@/features/ai/data/hotel-catalog";
import type { AiChatRequest } from "@/features/ai/schemas/ai.schema";
import { getGeminiGenerativeModel } from "@/lib/gemini/client";

const SYSTEM_PROMPT = `You are Novigo AI, a premium hotel booking assistant for the NOVIGO travel platform.

Your job:
- Help users discover and compare hotels based on their trip goals, budget, dates, and preferences.
- Recommend specific hotels from the catalog when relevant.
- Explain trade-offs clearly (location vs price, boutique vs resort, etc.).
- Complement — not replace — classic destination search on NOVIGO.

Rules:
- Be concise, warm, and travel-focused.
- When recommending hotels, include name, location, rating, indicative price, and why it fits.
- Reference hotel paths from the catalog (e.g. /hotels/ciragan-palace).
- If details are missing (dates, budget, travelers), ask one focused follow-up question.
- Do not invent hotels outside the catalog; suggest similar catalog options or broader search instead.
- Respond in the same language the user writes in.

Catalog (destinations + hotels available on NOVIGO today):
${buildHotelCatalogContext()}`;

type ChatMessage = AiChatRequest["messages"][number];

function toGeminiHistory(messages: ChatMessage[]) {
  return messages.map((message) => ({
    role: message.role === "assistant" ? ("model" as const) : ("user" as const),
    parts: [{ text: message.content }],
  }));
}

export async function* streamAssistantReply(messages: ChatMessage[]) {
  const lastMessage = messages.at(-1);

  if (!lastMessage || lastMessage.role !== "user") {
    throw new Error("The last message must be from the user.");
  }

  const model = getGeminiGenerativeModel(SYSTEM_PROMPT);
  const history = toGeminiHistory(messages.slice(0, -1));
  const chat = model.startChat({ history });
  const result = await chat.sendMessageStream(lastMessage.content);

  for await (const chunk of result.stream) {
    const text = chunk.text();

    if (text) {
      yield text;
    }
  }
}

export async function createAssistantReply(messages: ChatMessage[]) {
  let content = "";

  for await (const chunk of streamAssistantReply(messages)) {
    content += chunk;
  }

  return content.trim();
}

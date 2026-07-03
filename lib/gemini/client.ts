import { GoogleGenerativeAI, SchemaType, type GenerativeModel } from "@google/generative-ai";

import { getGeminiModel, isGeminiConfigured } from "@/lib/gemini/config";

let geminiClient: GoogleGenerativeAI | null = null;

export function getGeminiClient() {
  if (!isGeminiConfigured()) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  if (!geminiClient) {
    geminiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!.trim());
  }

  return geminiClient;
}

export function getGeminiGenerativeModel(
  systemInstruction: string,
  modelName: string = getGeminiModel(),
): GenerativeModel {
  return getGeminiClient().getGenerativeModel({
    model: modelName,
    systemInstruction,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1200,
    },
  });
}

export function getGeminiStructuredModel(
  systemInstruction: string,
  modelName: string = getGeminiModel(),
): GenerativeModel {
  return getGeminiClient().getGenerativeModel({
    model: modelName,
    systemInstruction,
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 1200,
      responseMimeType: "application/json",
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          message: {
            type: SchemaType.STRING,
            description: "Short conversational reply for the traveler.",
          },
          recommendations: {
            type: SchemaType.ARRAY,
            description: "Hotels from the catalog to show as clickable cards.",
            items: {
              type: SchemaType.OBJECT,
              properties: {
                slug: {
                  type: SchemaType.STRING,
                  description: "Exact hotel slug from the catalog.",
                },
                reason: {
                  type: SchemaType.STRING,
                  description: "One sentence on why this hotel fits the request.",
                },
              },
              required: ["slug", "reason"],
            },
          },
        },
        required: ["message", "recommendations"],
      },
    },
  });
}

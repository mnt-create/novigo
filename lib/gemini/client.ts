import { GoogleGenerativeAI } from "@google/generative-ai";

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

export function getGeminiGenerativeModel(systemInstruction: string) {
  return getGeminiClient().getGenerativeModel({
    model: getGeminiModel(),
    systemInstruction,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1200,
    },
  });
}

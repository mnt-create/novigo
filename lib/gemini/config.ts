export function isGeminiConfigured() {
  return Boolean(process.env.GEMINI_API_KEY?.trim());
}

export function getGeminiModel() {
  return process.env.GEMINI_MODEL?.trim() || "gemini-2.0-flash";
}

export const GEMINI_FALLBACK_MODELS = [
  "gemini-2.0-flash",
  "gemini-2.5-flash",
  "gemini-2.5-flash-lite",
] as const;

export function getGeminiModelCandidates() {
  const primary = getGeminiModel();
  return [...new Set([primary, ...GEMINI_FALLBACK_MODELS])];
}

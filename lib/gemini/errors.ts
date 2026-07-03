type GeminiErrorLike = {
  status?: number;
  statusText?: string;
  message?: string;
};

export function getGeminiErrorMessage(error: unknown): { message: string; status: number } {
  const apiError = error as GeminiErrorLike;
  const message = apiError.message ?? "Unknown Gemini error.";
  const status = apiError.status ?? 500;

  if (status === 400 && /api key/i.test(message)) {
    return {
      status: 400,
      message: "Invalid Gemini API key. Check GEMINI_API_KEY in .env.local.",
    };
  }

  if (status === 403) {
    return {
      status: 403,
      message: "Gemini API access denied. Verify your API key and Google AI Studio project.",
    };
  }

  if (status === 429 || /quota|rate limit|resource exhausted/i.test(message)) {
    return {
      status: 429,
      message:
        "Gemini rate limit or quota reached. Wait a moment or check your limits in Google AI Studio.",
    };
  }

  return { status, message };
}

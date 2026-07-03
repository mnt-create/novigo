type GeminiErrorLike = {
  status?: number;
  statusText?: string;
  message?: string;
};

function extractStatus(error: GeminiErrorLike): number {
  if (error.status) return error.status;

  const match = error.message?.match(/\[(\d{3})\s[^\]]*\]/);
  return match ? Number(match[1]) : 500;
}

export function isRetryableGeminiError(error: unknown): boolean {
  const apiError = error as GeminiErrorLike;
  const status = extractStatus(apiError);
  const message = apiError.message ?? "";

  if (status === 503 || status === 429 || status === 500 || status === 404) return true;

  return /high demand|unavailable|try again later|overloaded|resource exhausted|rate limit|not found|not supported/i.test(
    message,
  );
}

export function getUserFacingAiErrorMessage(): string {
  return "no_results";
}

export function getGeminiErrorMessage(error: unknown): { message: string; status: number } {
  const apiError = error as GeminiErrorLike;
  const message = apiError.message ?? "Unknown Gemini error.";
  const status = extractStatus(apiError);

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

  if (status === 503 || /high demand|unavailable|try again later|overloaded/i.test(message)) {
    return {
      status: 503,
      message:
        "Gemini is temporarily busy (high demand). Please wait a few seconds and try again.",
    };
  }

  return { status, message };
}

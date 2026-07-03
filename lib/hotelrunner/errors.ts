type HotelRunnerErrorLike = {
  status?: number;
  message?: string;
};

export function getHotelRunnerErrorMessage(error: unknown): {
  message: string;
  status: number;
} {
  const apiError = error as HotelRunnerErrorLike;
  const message = apiError.message ?? "Unknown HotelRunner error.";
  const status = apiError.status ?? 500;

  if (status === 401 || status === 403) {
    return {
      status,
      message:
        "HotelRunner authentication failed. Check HOTELRUNNER_HR_ID and HOTELRUNNER_TOKEN in .env.local.",
    };
  }

  if (status === 429) {
    return {
      status: 429,
      message: "HotelRunner rate limit reached. Max 5 requests/minute per property.",
    };
  }

  return { status, message };
}

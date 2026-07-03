import {
  getHotelRunnerBaseUrl,
  getHotelRunnerHrId,
  getHotelRunnerToken,
  isHotelRunnerConfigured,
} from "@/lib/hotelrunner/config";

type HotelRunnerRequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  searchParams?: Record<string, string | number | boolean | undefined | string[]>;
  cache?: RequestCache;
  revalidate?: number | false;
};

export class HotelRunnerClient {
  private readonly hrId: string;
  private readonly token: string;
  private readonly baseUrl: string;

  constructor(hrId: string, token: string, baseUrl: string) {
    this.hrId = hrId;
    this.token = token;
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }

  async request<T>(path: string, options: HotelRunnerRequestOptions = {}): Promise<T> {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const url = new URL(`${this.baseUrl}${normalizedPath}`);

    url.searchParams.set("hr_id", this.hrId);
    url.searchParams.set("token", this.token);

    if (options.searchParams) {
      Object.entries(options.searchParams).forEach(([key, value]) => {
        if (value === undefined) return;

        if (Array.isArray(value)) {
          value.forEach((item) => url.searchParams.append(`${key}[]`, item));
          return;
        }

        url.searchParams.set(key, String(value));
      });
    }

    const response = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      cache: options.cache ?? "no-store",
      next:
        options.revalidate === false
          ? undefined
          : { revalidate: options.revalidate ?? 60 },
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      const error = new Error(
        errorBody || `HotelRunner API error: ${response.status} ${response.statusText}`,
      ) as Error & { status?: number };
      error.status = response.status;
      throw error;
    }

    return response.json() as Promise<T>;
  }
}

let hotelRunnerClient: HotelRunnerClient | null = null;

export function getHotelRunnerClient() {
  if (!isHotelRunnerConfigured()) {
    throw new Error("HotelRunner API credentials are not configured.");
  }

  if (!hotelRunnerClient) {
    hotelRunnerClient = new HotelRunnerClient(
      getHotelRunnerHrId(),
      getHotelRunnerToken(),
      getHotelRunnerBaseUrl(),
    );
  }

  return hotelRunnerClient;
}

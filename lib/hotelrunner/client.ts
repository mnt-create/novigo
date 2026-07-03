import { getServerEnv } from "@/lib/env";

type HotelRunnerRequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  searchParams?: Record<string, string | number | boolean | undefined>;
};

export class HotelRunnerClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, "");
  }

  async request<T>(path: string, options: HotelRunnerRequestOptions = {}): Promise<T> {
    const url = new URL(`${this.baseUrl}${path}`);

    if (options.searchParams) {
      Object.entries(options.searchParams).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.set(key, String(value));
        }
      });
    }

    const response = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`HotelRunner API error: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}

let hotelRunnerClient: HotelRunnerClient | null = null;

export function getHotelRunnerClient() {
  const { HOTELRUNNER_API_KEY, HOTELRUNNER_API_URL } = getServerEnv();

  if (!HOTELRUNNER_API_KEY || !HOTELRUNNER_API_URL) {
    throw new Error("HotelRunner API credentials are not configured.");
  }

  if (!hotelRunnerClient) {
    hotelRunnerClient = new HotelRunnerClient(HOTELRUNNER_API_KEY, HOTELRUNNER_API_URL);
  }

  return hotelRunnerClient;
}

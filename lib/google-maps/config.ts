import { clientEnv } from "@/lib/env";

export const googleMapsConfig = {
  apiKey: clientEnv.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  defaultCenter: { lat: 41.0082, lng: 28.9784 },
  defaultZoom: 12,
} as const;

export function isGoogleMapsConfigured() {
  return Boolean(googleMapsConfig.apiKey);
}

import { demoRoomPresentation } from "@/features/hotels/data/hotelrunner-demo";
import type { HotelRoomListing } from "@/features/hotels/types";
import {
  fetchHotelRunnerReservations,
  fetchHotelRunnerRooms,
} from "@/features/hotels/repositories/hotelrunner.repository";
import {
  getHotelRunnerPropertyName,
  shouldUseHotelRunnerDemo,
} from "@/lib/hotelrunner/config";
import type { HotelRunnerRoom } from "@/lib/hotelrunner/types";

function slugifyRateCode(rateCode: string) {
  return rateCode
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function mapHotelRunnerRoomToListing(
  room: HotelRunnerRoom,
  propertyName: string,
  source: HotelRoomListing["source"],
): HotelRoomListing {
  const presentation = demoRoomPresentation[room.rate_code];

  return {
    id: room.rate_code,
    slug: slugifyRateCode(room.rate_code),
    name: room.name,
    description: room.description,
    policy: room.policy,
    propertyName,
    invCode: room.inv_code,
    rateCode: room.rate_code,
    roomCapacity: room.room_capacity,
    adultCapacity: room.adult_capacity,
    currency: room.sales_currency,
    channels: room.channel_codes,
    sellOnline: room.sell_online,
    isMaster: room.is_master,
    pricingType: room.pricing_type,
    source,
    city: presentation?.city,
    country: presentation?.country,
    rating: presentation?.rating,
    reviewCount: presentation?.reviewCount,
    priceFrom: presentation?.priceFrom,
    imageUrl: presentation?.imageUrl,
    amenities: presentation?.amenities,
  };
}

export type HotelInventoryResult = {
  source: HotelRoomListing["source"];
  propertyName: string;
  rooms: HotelRoomListing[];
  warning?: string;
  isDemo: boolean;
};

export async function getHotelInventory(): Promise<HotelInventoryResult> {
  const isDemo = shouldUseHotelRunnerDemo();
  const propertyName = getHotelRunnerPropertyName();

  try {
    const response = await fetchHotelRunnerRooms();
    const source = isDemo ? "hotelrunner-demo" : "hotelrunner";

    return {
      source,
      isDemo,
      propertyName,
      rooms: response.rooms
        .filter((room) => room.sell_online && !room.is_master)
        .map((room) => mapHotelRunnerRoomToListing(room, propertyName, source)),
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "HotelRunner inventory request failed.";

    return {
      source: "mock",
      isDemo: false,
      propertyName: "NOVIGO Demo Collection",
      rooms: [],
      warning: message,
    };
  }
}

export async function getHotelRunnerReservations(
  params: Parameters<typeof fetchHotelRunnerReservations>[0] = {},
) {
  const isDemo = shouldUseHotelRunnerDemo();
  const response = await fetchHotelRunnerReservations(params);

  return {
    ...response,
    source: isDemo ? ("hotelrunner-demo" as const) : ("hotelrunner" as const),
  };
}

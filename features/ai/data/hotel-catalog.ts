import type { HotelCardData } from "@/components/shared/hotel-card";
import {
  popularDestinations,
  recommendedHotels,
} from "@/features/marketing/data/homepage";

const hotelCatalog = new Map(recommendedHotels.map((hotel) => [hotel.slug, hotel]));

export function buildHotelCatalogContext() {
  return JSON.stringify(
    {
      destinations: popularDestinations.map((destination) => ({
        slug: destination.slug,
        name: destination.name,
        country: destination.country,
        hotelCount: destination.hotelCount,
      })),
      hotels: recommendedHotels.map((hotel) => ({
        slug: hotel.slug,
        name: hotel.name,
        city: hotel.city,
        country: hotel.country,
        rating: hotel.rating,
        reviewCount: hotel.reviewCount,
        priceFrom: hotel.priceFrom,
        currency: hotel.currency,
        amenities: hotel.amenities,
      })),
    },
    null,
    2,
  );
}

export function getCatalogHotelBySlug(slug: string): HotelCardData | undefined {
  return hotelCatalog.get(slug);
}

export function getCatalogHotelSlugs() {
  return recommendedHotels.map((hotel) => hotel.slug);
}

export function resolveCatalogRecommendations(
  recommendations: { slug: string; reason: string }[],
) {
  return recommendations
    .map((item) => {
      const hotel = getCatalogHotelBySlug(item.slug);
      if (!hotel) return null;

      return {
        hotel,
        reason: item.reason,
      };
    })
    .filter((item): item is { hotel: HotelCardData; reason: string } => item !== null);
}

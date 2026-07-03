import {
  popularDestinations,
  recommendedHotels,
} from "@/features/marketing/data/homepage";

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
        path: `/hotels/${hotel.slug}`,
      })),
    },
    null,
    2,
  );
}

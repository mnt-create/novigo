export type Hotel = {
  id: string;
  slug: string;
  name: string;
  description: string;
  city: string;
  country: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  currency: string;
  imageUrl: string;
  amenities: string[];
  latitude: number;
  longitude: number;
};

export type HotelAvailability = {
  hotelId: string;
  roomTypeId: string;
  available: boolean;
  price: number;
  currency: string;
};

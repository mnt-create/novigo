export type HotelRoomListing = {
  id: string;
  slug: string;
  name: string;
  description: string;
  policy: string;
  propertyName: string;
  invCode: string;
  rateCode: string;
  roomCapacity: number;
  adultCapacity: number;
  currency: string;
  channels: string[];
  sellOnline: boolean;
  isMaster: boolean;
  pricingType: string;
  source: "hotelrunner" | "hotelrunner-demo" | "mock";
  city?: string;
  country?: string;
  rating?: number;
  reviewCount?: number;
  priceFrom?: number;
  imageUrl?: string;
  amenities?: string[];
};

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

export type HotelInventorySource = "hotelrunner" | "mock";

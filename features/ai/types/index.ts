export type AiMessageRole = "user" | "assistant" | "system";

export type AiHotelRecommendation = {
  hotel: {
    slug: string;
    name: string;
    city: string;
    country: string;
    rating: number;
    reviewCount: number;
    priceFrom: number;
    currency: string;
    imageUrl: string;
    amenities?: string[];
    badge?: string;
  };
  reason: string;
};

export type AiMessage = {
  id: string;
  role: AiMessageRole;
  content: string;
  createdAt: string;
  recommendations?: AiHotelRecommendation[];
};

export type AiAssistantReply = {
  message: string;
  recommendations: AiHotelRecommendation[];
};

export type AiSearchIntent = {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  budget?: number;
  preferences?: string[];
  summary: string;
};

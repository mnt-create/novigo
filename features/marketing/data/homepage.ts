import type { DestinationCardData } from "@/components/shared/destination-card";
import type { HotelCardData } from "@/components/shared/hotel-card";

export const heroContent = {
  title: "Dünyanın dört bir yanındaki konaklama yerlerini keşfedin",
  subtitle: "AI destekli akıllı arama ile size en uygun oteli saniyeler içinde bulun.",
  imageUrl:
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=80",
} as const;

export const aiAssistantContent = {
  title: "Yapay Zeka Seyahat Asistanı",
  beta: true,
  placeholder: "Seyahatinizi anlatın — gerisini AI halleder...",
  suggestions: [
    "Balayı için romantik otel öner",
    "Her şey dahil sahil oteli bul",
    "İstanbul'da iş seyahati için otel",
    "Aile dostu resort öner",
  ],
  features: [
    "Kişiselleştirilmiş otel önerileri sunar",
    "Bütçenize uygun seçenekler bulur",
    "Seyahat planınızı optimize eder",
    "7/24 anında yanıt verir",
  ],
} as const;

export const trustFeatures = [
  {
    title: "En İyi Fiyat Garantisi",
    description: "Daha uygun fiyat bulursanız farkı iade ediyoruz.",
  },
  {
    title: "Ücretsiz İptal",
    description: "Seçili otellerde ücretsiz iptal imkânı.",
  },
  {
    title: "Güvenli Ödeme",
    description: "256-bit SSL ile korunan ödeme altyapısı.",
  },
  {
    title: "7/24 Destek",
    description: "Her an yanınızda müşteri hizmetleri.",
  },
] as const;

export const popularDestinations: DestinationCardData[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    country: "Türkiye",
    hotelCount: 823,
    imageUrl:
      "https://images.unsplash.com/photo-1524231757912-21fb7021d0a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "antalya",
    name: "Antalya",
    country: "Türkiye",
    hotelCount: 612,
    imageUrl:
      "https://images.unsplash.com/photo-1590073242678-70ee3d21725e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "bodrum",
    name: "Bodrum",
    country: "Türkiye",
    hotelCount: 284,
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "kapadokya",
    name: "Kapadokya",
    country: "Türkiye",
    hotelCount: 156,
    imageUrl:
      "https://images.unsplash.com/photo-1640130601230-7cbd966329dc?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "fethiye",
    name: "Fethiye",
    country: "Türkiye",
    hotelCount: 198,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "izmir",
    name: "İzmir",
    country: "Türkiye",
    hotelCount: 341,
    imageUrl:
      "https://images.unsplash.com/photo-1569336410460-444ee1a2ce4e?auto=format&fit=crop&w=800&q=80",
  },
];

export type RecommendedHotel = HotelCardData & {
  scoreLabel: string;
  discountLabel?: string;
  isPopular?: boolean;
};

export const recommendedHotels: RecommendedHotel[] = [
  {
    slug: "mandarin-oriental-bodrum",
    name: "Mandarin Oriental Bodrum",
    city: "Bodrum",
    country: "Türkiye",
    rating: 9.2,
    reviewCount: 1240,
    priceFrom: 8450,
    currency: "TRY",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    amenities: ["Spa", "Wi-Fi", "Havuz"],
    discountLabel: "%20 indirim",
    scoreLabel: "9.2 Mükemmel",
  },
  {
    slug: "ciragan-palace",
    name: "Çırağan Palace Kempinski",
    city: "İstanbul",
    country: "Türkiye",
    rating: 9.4,
    reviewCount: 2100,
    priceFrom: 12200,
    currency: "TRY",
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    amenities: ["Spa", "Wi-Fi", "Havuz"],
    isPopular: true,
    scoreLabel: "9.4 Mükemmel",
  },
  {
    slug: "maxx-royal-antalya",
    name: "Maxx Royal Belek",
    city: "Antalya",
    country: "Türkiye",
    rating: 9.1,
    reviewCount: 980,
    priceFrom: 9800,
    currency: "TRY",
    imageUrl:
      "https://images.unsplash.com/photo-1571008887538-b36bb745f9cb?auto=format&fit=crop&w=800&q=80",
    amenities: ["Spa", "Wi-Fi", "Havuz"],
    discountLabel: "%15 indirim",
    scoreLabel: "9.1 Mükemmel",
  },
  {
    slug: "four-seasons-sultanahmet",
    name: "Four Seasons Sultanahmet",
    city: "İstanbul",
    country: "Türkiye",
    rating: 9.6,
    reviewCount: 890,
    priceFrom: 15600,
    currency: "TRY",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    amenities: ["Spa", "Wi-Fi", "Havuz"],
    scoreLabel: "9.6 Mükemmel",
  },
];

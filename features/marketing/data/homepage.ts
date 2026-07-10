import type { DestinationCardData } from "@/components/shared/destination-card";

export { recommendedHotels } from "@/features/marketing/data/recommended-hotels";

export const heroContent = {
  title: "Find your perfect stay with AI",
  subtitle:
    "Search thousands of hotels worldwide and let Novigo AI surface the stays that match your style, budget, and travel dates.",
  collageImages: [
    {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
      alt: "Luxury hotel pool at sunset",
    },
    {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      alt: "Boutique hotel exterior",
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      alt: "Resort beachfront view",
    },
    {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      alt: "Premium hotel suite",
    },
  ],
  aiCta: "Describe your trip to Novigo AI",
} as const;

export const aiAssistantContent = {
  title: "Meet Novigo AI",
  eyebrow: "Your travel co-pilot",
  description:
    "Not sure where to stay? Tell Novigo AI about your trip and get curated hotel picks in seconds — alongside traditional search when you already know what you need.",
  placeholder: "e.g. Romantic boutique hotel in Cappadocia with balloon views...",
  suggestions: [
    "Weekend in Paris under €200/night",
    "Family resort in Antalya with kids club",
    "Business hotel near Istanbul airport",
    "Luxury desert escape in Dubai",
  ],
  capabilities: [
    "Understands natural-language trip requests",
    "Compares hotels by vibe, location, and value",
    "Suggests alternatives when dates are sold out",
    "Works alongside classic destination search",
  ],
} as const;

export const trustFeatures = [
  {
    title: "Secure booking",
    description: "256-bit encryption and trusted payment partners protect every reservation.",
  },
  {
    title: "Verified hotels",
    description: "Every property is vetted for quality standards and accurate listing details.",
  },
  {
    title: "AI-powered recommendations",
    description: "Smart matching helps you discover stays tailored to how you actually travel.",
  },
  {
    title: "24/7 support",
    description: "Real humans and AI assistance whenever your plans change on the road.",
  },
] as const;

export const popularDestinations: DestinationCardData[] = [
  {
    slug: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    hotelCount: 823,
    imageUrl:
      "https://images.unsplash.com/photo-1733814191571-bd733a99c680?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "antalya",
    name: "Antalya",
    country: "Turkey",
    hotelCount: 612,
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "cappadocia",
    name: "Cappadocia",
    country: "Turkey",
    hotelCount: 156,
    imageUrl:
      "https://images.unsplash.com/photo-1682687982107-14492010e05e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    hotelCount: 1240,
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    hotelCount: 890,
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    hotelCount: 760,
    imageUrl:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80",
  },
];


export const siteConfig = {
  name: "NOVIGO",
  tagline: "Travel Smarter with AI",
  description:
    "Discover and book hotels worldwide with intelligent search, real-time availability, and personalized AI recommendations.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    support: "mailto:support@novigo.com",
    privacy: "/privacy",
    terms: "/terms",
  },
} as const;

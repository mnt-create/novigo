export const siteConfig = {
  name: "Nexify",
  tagline: "Human Creativity. AI Intelligence.",
  description:
    "Don't start from scratch. Professionally designed websites, intelligently personalized by AI. Designed by humans. Personalized by AI. Controlled by you.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  philosophy: "Human Creativity. AI Intelligence.",
  positioning: "Designed by Humans. Personalized by AI. Controlled by You.",
  links: {
    support: "mailto:support@nexify.app",
    privacy: "/privacy",
    terms: "/terms",
  },
} as const;

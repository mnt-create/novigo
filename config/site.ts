export const siteConfig = {
  name: "NOVIGO",
  tagline: "AI ile daha akıllı seyahat et",
  description:
    "Akıllı arama, anlık müsaitlik ve kişiselleştirilmiş AI önerileriyle dünya genelinde otelleri keşfet ve rezerve et.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    support: "mailto:support@novigo.com",
    privacy: "/privacy",
    terms: "/terms",
  },
} as const;

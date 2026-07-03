export const routes = {
  home: "/",
  search: "/search",
  hotels: "/hotels",
  hotel: (slug: string) => `/hotels/${slug}`,
  destinations: "/destinations",
  offers: "/offers",
  ai: "/ai",
  login: "/login",
  register: "/register",
  profile: "/profile",
  bookings: "/bookings",
  favorites: "/favorites",
  settings: "/settings",
  help: "/help",
  about: "/about",
  contact: "/contact",
  admin: "/admin",
  checkout: "/checkout",
  // Legacy aliases — remove after Sprint 5 auth migration
  signIn: "/login",
  signUp: "/register",
  account: "/profile",
  api: {
    ai: "/api/ai",
    stripeWebhook: "/api/webhooks/stripe",
    hotels: "/api/hotels",
  },
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

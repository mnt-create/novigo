import type { LucideIcon } from "lucide-react";
import { LayoutTemplate, Palette, Sparkles, CreditCard } from "lucide-react";

import { routes } from "@/constants/routes";

export type MarketingNavItem = {
  id: "templates" | "howItWorks" | "forDesigners" | "pricing";
  href: string;
  icon: LucideIcon;
};

export const mainNavItems: MarketingNavItem[] = [
  { id: "templates", href: routes.templates, icon: LayoutTemplate },
  { id: "howItWorks", href: routes.howItWorks, icon: Sparkles },
  { id: "forDesigners", href: routes.forDesigners, icon: Palette },
  { id: "pricing", href: routes.pricing, icon: CreditCard },
];

/** Footer links — only routes that exist in this app (no broken destinations). */
export const footerColumnIds = {
  product: {
    id: "product",
    links: [
      { id: "templates", href: routes.templates },
      { id: "howItWorks", href: routes.howItWorks },
      { id: "aiAssistant", href: routes.ai },
      { id: "pricing", href: routes.pricing },
    ],
  },
  explore: {
    id: "explore",
    links: [
      { id: "forDesigners", href: routes.forDesigners },
      { id: "hotels", href: routes.hotels },
      { id: "search", href: routes.search },
      { id: "getStarted", href: routes.register },
    ],
  },
  company: {
    id: "company",
    links: [
      { id: "signIn", href: routes.login },
      { id: "signUp", href: routes.register },
      { id: "profile", href: routes.profile },
      { id: "myBookings", href: routes.bookings },
    ],
  },
  legal: {
    id: "legal",
    links: [
      { id: "privacy", href: routes.privacy },
      { id: "terms", href: routes.terms },
    ],
  },
} as const;

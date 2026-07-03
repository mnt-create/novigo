import type { LucideIcon } from "lucide-react";
import {
  BedDouble,
  Bus,
  Car,
  PartyPopper,
  Plane,
} from "lucide-react";

import { routes } from "@/constants/routes";

export type NavItem = {
  id: "accommodation" | "flights" | "carRental" | "transfer" | "events";
  href: string;
  icon: LucideIcon;
  active?: boolean;
  phase?: 1 | 2;
};

export const mainNavItems: NavItem[] = [
  { id: "accommodation", href: routes.search, icon: BedDouble, active: true, phase: 1 },
  { id: "flights", href: routes.search, icon: Plane, phase: 2 },
  { id: "carRental", href: routes.search, icon: Car, phase: 2 },
  { id: "transfer", href: routes.search, icon: Bus, phase: 2 },
  { id: "events", href: routes.search, icon: PartyPopper, phase: 2 },
];

export const footerColumnIds = {
  explore: {
    id: "explore",
    links: [
      { id: "hotels", href: routes.hotels },
      { id: "destinations", href: routes.destinations },
      { id: "offers", href: routes.offers },
      { id: "aiAssistant", href: routes.ai },
    ],
  },
  company: {
    id: "company",
    links: [
      { id: "about", href: routes.about },
      { id: "careers", href: routes.about },
      { id: "press", href: routes.about },
      { id: "partners", href: routes.contact },
    ],
  },
  support: {
    id: "support",
    links: [
      { id: "helpCenter", href: routes.help },
      { id: "contact", href: routes.contact },
      { id: "myBookings", href: routes.bookings },
      { id: "faq", href: routes.help },
    ],
  },
  legal: {
    id: "legal",
    links: [
      { id: "privacy", href: "/privacy" },
      { id: "terms", href: "/terms" },
      { id: "cookies", href: "/privacy" },
      { id: "kvkk", href: "/privacy" },
    ],
  },
} as const;

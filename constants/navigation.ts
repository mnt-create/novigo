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
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  phase?: 1 | 2;
};

export const mainNavItems: NavItem[] = [
  { label: "Konaklama", href: routes.search, icon: BedDouble, active: true, phase: 1 },
  { label: "Uçak Bileti", href: routes.search, icon: Plane, phase: 2 },
  { label: "Araç Kiralama", href: routes.search, icon: Car, phase: 2 },
  { label: "Transfer", href: routes.search, icon: Bus, phase: 2 },
  { label: "Etkinlikler", href: routes.search, icon: PartyPopper, phase: 2 },
];

export const footerColumns = {
  explore: {
    title: "Keşfet",
    links: [
      { label: "Oteller", href: routes.hotels },
      { label: "Destinasyonlar", href: routes.destinations },
      { label: "Kampanyalar", href: routes.offers },
      { label: "AI Asistan", href: routes.ai },
    ],
  },
  company: {
    title: "Şirket",
    links: [
      { label: "Hakkımızda", href: routes.about },
      { label: "Kariyer", href: routes.about },
      { label: "Basın", href: routes.about },
      { label: "İş ortakları", href: routes.contact },
    ],
  },
  support: {
    title: "Destek",
    links: [
      { label: "Yardım Merkezi", href: routes.help },
      { label: "İletişim", href: routes.contact },
      { label: "Rezervasyonlarım", href: routes.bookings },
      { label: "SSS", href: routes.help },
    ],
  },
  legal: {
    title: "Yasal",
    links: [
      { label: "Gizlilik", href: "/privacy" },
      { label: "Kullanım Koşulları", href: "/terms" },
      { label: "Çerez Politikası", href: "/privacy" },
      { label: "KVKK", href: "/privacy" },
    ],
  },
} as const;

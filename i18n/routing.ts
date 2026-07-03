import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "tr"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "tr",
  localePrefix: "always",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

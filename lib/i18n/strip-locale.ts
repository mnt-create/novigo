import { routing, type Locale } from "@/i18n/routing";

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && routing.locales.includes(first as Locale)) {
    const rest = segments.slice(1).join("/");
    return {
      locale: first as Locale,
      pathname: rest ? `/${rest}` : "/",
    };
  }

  return {
    locale: null as Locale | null,
    pathname,
  };
}

export function withLocale(locale: Locale, pathname: string) {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

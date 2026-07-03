import type { Locale } from "@/i18n/routing";

const localeLanguageInstructions: Record<Locale, string> = {
  en: "English",
  es: "Spanish (Español)",
  tr: "Turkish (Türkçe)",
};

export function getLocaleLanguageInstruction(locale: Locale) {
  return localeLanguageInstructions[locale] ?? localeLanguageInstructions.tr;
}

export function isAppLocale(value: string): value is Locale {
  return value === "en" || value === "es" || value === "tr";
}

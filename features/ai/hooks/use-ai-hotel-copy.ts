"use client";

import { useLocale, useTranslations } from "next-intl";

import { getAiHotelStayTimes } from "@/features/ai/data/hotel-details";
import type { Locale } from "@/i18n/routing";

const numberLocales: Record<Locale, string> = {
  en: "en-US",
  es: "es-ES",
  tr: "tr-TR",
};

function translateOptional(translator: ReturnType<typeof useTranslations>, key: string) {
  return translator.has(key) ? translator(key) : undefined;
}

export function useAiHotelCopy() {
  const t = useTranslations("Ai");
  const locale = useLocale() as Locale;
  const numberLocale = numberLocales[locale] ?? "tr-TR";

  function translateCity(city: string) {
    const key = `cities.${city}`;
    return t.has(key) ? t(key) : city;
  }

  function translateCountry(country: string) {
    const key = `countries.${country}`;
    return t.has(key) ? t(key) : country;
  }

  function translateAmenity(amenity: string) {
    const key = `amenities.${amenity}`;
    return t.has(key) ? t(key) : amenity;
  }

  function translateBadge(badge: string) {
    const key = `badges.${badge}`;
    return t.has(key) ? t(key) : badge;
  }

  function getHotelDetail(slug: string) {
    const baseKey = `hotels.${slug}`;
    const tagline = translateOptional(t, `${baseKey}.tagline`);
    if (!tagline) return undefined;

    const highlights = ["0", "1", "2"]
      .map((index) => translateOptional(t, `${baseKey}.highlights.${index}`))
      .filter((item): item is string => Boolean(item));

    const stayTimes = getAiHotelStayTimes(slug);

    return {
      tagline,
      description: t(`${baseKey}.description`),
      highlights,
      checkIn: stayTimes?.checkIn ?? "15:00",
      checkOut: stayTimes?.checkOut ?? "12:00",
    };
  }

  return {
    locale,
    numberLocale,
    t,
    translateCity,
    translateCountry,
    translateAmenity,
    translateBadge,
    getHotelDetail,
  };
}

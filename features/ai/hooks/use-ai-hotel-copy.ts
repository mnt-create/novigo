"use client";

import { useLocale, useTranslations } from "next-intl";

import { getAiHotelStayTimes } from "@/features/ai/data/hotel-details";
import { getHotelDetailCopy } from "@/features/ai/data/hotel-detail-copy";
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
    const copy = getHotelDetailCopy(locale, slug);
    const messagesCopy = translateOptional(t, `hotels.${slug}.tagline`)
      ? {
          tagline: t(`hotels.${slug}.tagline`),
          description: t(`hotels.${slug}.description`),
          highlights: ["0", "1", "2"]
            .map((index) => translateOptional(t, `hotels.${slug}.highlights.${index}`))
            .filter((item): item is string => Boolean(item)),
        }
      : null;

    const source = messagesCopy?.tagline ? messagesCopy : copy;
    if (!source?.tagline) return undefined;

    const stayTimes = getAiHotelStayTimes(slug);

    return {
      tagline: source.tagline,
      description: source.description,
      highlights: source.highlights,
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

import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { shadows } from "@/config/design-tokens";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export type DestinationCardData = {
  slug: string;
  name: string;
  country: string;
  imageUrl: string;
  hotelCount?: number;
  href?: string;
};

type DestinationCardProps = {
  destination: DestinationCardData;
  className?: string;
};

const numberLocales = {
  en: "en-US",
  es: "es-ES",
  tr: "tr-TR",
} as const;

async function DestinationCard({ destination, className }: DestinationCardProps) {
  const t = await getTranslations("DestinationCard");
  const locale = await getLocale();
  const href = destination.href ?? `/destinations/${destination.slug}`;
  const numberLocale = numberLocales[locale as keyof typeof numberLocales] ?? "en-US";

  return (
    <Link
      href={href}
      data-slot="destination-card"
      className={cn(
        "group relative block aspect-[3/4] overflow-hidden rounded-2xl",
        shadows.cardHover,
        className,
      )}
    >
      <Image
        src={destination.imageUrl}
        alt={destination.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-white">
        <p className="text-sm text-white/80">{destination.country}</p>
        <h3 className="text-xl font-semibold tracking-tight">{destination.name}</h3>
        {destination.hotelCount !== undefined ? (
          <Badge variant="secondary" className="bg-white/15 text-white hover:bg-white/20">
            {t("properties", {
              count: destination.hotelCount.toLocaleString(numberLocale),
            })}
          </Badge>
        ) : null}
      </div>
    </Link>
  );
}

export { DestinationCard };

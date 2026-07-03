"use client";

import Image from "next/image";
import { CalendarDays, MapPin, MessageCircle, Sparkles, X } from "lucide-react";

import { PriceBadge } from "@/components/shared/price-badge";
import { Rating } from "@/components/shared/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAiHotelCopy } from "@/features/ai/hooks/use-ai-hotel-copy";
import type { AiHotelRecommendation } from "@/features/ai/types";
import { cn } from "@/lib/utils";

type AiHotelDetailPanelProps = {
  recommendation: AiHotelRecommendation;
  onClose: () => void;
  onAskAboutHotel: (hotelName: string) => void;
  className?: string;
  variant?: "panel" | "sheet";
};

export function AiHotelDetailPanel({
  recommendation,
  onClose,
  onAskAboutHotel,
  className,
  variant = "panel",
}: AiHotelDetailPanelProps) {
  const { t, numberLocale, translateCity, translateCountry, translateAmenity, translateBadge, getHotelDetail } =
    useAiHotelCopy();
  const { hotel, reason } = recommendation;
  const detail = getHotelDetail(hotel.slug);
  const ratingMax = hotel.rating > 5 ? 10 : 5;

  return (
    <div
      className={cn(
        "flex h-full flex-col bg-card",
        variant === "panel" && "border-l border-border/60",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="size-4 text-brand-blue" />
          {t("cards.hotelPreview")}
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label={t("cards.closePreview")}
        >
          <X className="size-4" />
        </Button>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={hotel.imageUrl}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 420px"
            priority
          />
          {hotel.badge ? (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground hover:bg-primary">
              {translateBadge(hotel.badge)}
            </Badge>
          ) : null}
        </div>

        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{hotel.name}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              {translateCity(hotel.city)}, {translateCountry(hotel.country)}
            </p>
          </div>

          <Rating
            value={hotel.rating}
            max={ratingMax}
            reviewCount={hotel.reviewCount}
            reviewLocale={numberLocale}
            size="sm"
          />

          {detail?.tagline ? (
            <p className="text-sm font-medium text-foreground">{detail.tagline}</p>
          ) : null}
        </div>

        <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-brand-blue">
            {t("cards.whyPicked")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">{reason}</p>
        </div>

        {detail?.description ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("cards.aboutStay")}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{detail.description}</p>
          </div>
        ) : null}

        {detail?.highlights?.length ? (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{t("cards.highlights")}</h3>
            <ul className="space-y-2">
              {detail.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {hotel.amenities?.length ? (
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity) => (
              <Badge key={amenity} variant="secondary" className="font-normal">
                {translateAmenity(amenity)}
              </Badge>
            ))}
          </div>
        ) : null}

        {detail ? (
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {t("cards.checkIn")} {detail.checkIn}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {t("cards.checkOut")} {detail.checkOut}
            </span>
          </div>
        ) : null}
      </div>

      <div className="space-y-3 border-t border-border/60 bg-muted/20 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{t("cards.from")}</p>
            <PriceBadge
              amount={hotel.priceFrom}
              currency={hotel.currency}
              locale={numberLocale}
              suffix={t("cards.perNight")}
            />
          </div>
        </div>

        <Button
          className="w-full bg-brand-blue hover:bg-brand-blue/90"
          onClick={() => onAskAboutHotel(hotel.name)}
        >
          <MessageCircle className="size-4" />
          {t("cards.askAboutHotel")}
        </Button>
      </div>
    </div>
  );
}

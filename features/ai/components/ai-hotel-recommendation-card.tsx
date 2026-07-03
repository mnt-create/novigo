"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

import { Rating } from "@/components/shared/rating";
import { PriceBadge } from "@/components/shared/price-badge";
import { Card } from "@/components/ui/card";
import { useAiHotelCopy } from "@/features/ai/hooks/use-ai-hotel-copy";
import type { AiHotelRecommendation } from "@/features/ai/types";
import { cn } from "@/lib/utils";

type AiHotelRecommendationCardProps = {
  recommendation: AiHotelRecommendation;
  isSelected?: boolean;
  onSelect?: (recommendation: AiHotelRecommendation) => void;
  className?: string;
};

export function AiHotelRecommendationCard({
  recommendation,
  isSelected = false,
  onSelect,
  className,
}: AiHotelRecommendationCardProps) {
  const { t, numberLocale, translateCity, translateCountry } = useAiHotelCopy();
  const { hotel, reason } = recommendation;
  const ratingMax = hotel.rating > 5 ? 10 : 5;

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.(recommendation)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect?.(recommendation);
        }
      }}
      className={cn(
        "cursor-pointer overflow-hidden border-border/60 p-0 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:outline-none",
        isSelected && "ring-2 ring-brand-blue",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:h-32 sm:w-36">
          <Image
            src={hotel.imageUrl}
            alt={hotel.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 144px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-4">
          <div className="space-y-2">
            <div>
              <h4 className="line-clamp-1 font-semibold">{hotel.name}</h4>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" />
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

            <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">{reason}</p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <PriceBadge
              amount={hotel.priceFrom}
              currency={hotel.currency}
              locale={numberLocale}
              suffix={t("cards.perNight")}
              variant="muted"
            />
            <span className="inline-flex h-8 items-center gap-1 rounded-lg bg-brand-blue px-3 text-xs font-medium text-white">
              {t("cards.viewDetails")}
              <ArrowRight className="size-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

type AiHotelRecommendationListProps = {
  recommendations: AiHotelRecommendation[];
  selectedSlug?: string;
  onSelectHotel?: (recommendation: AiHotelRecommendation) => void;
  className?: string;
};

export function AiHotelRecommendationList({
  recommendations,
  selectedSlug,
  onSelectHotel,
  className,
}: AiHotelRecommendationListProps) {
  const { t } = useAiHotelCopy();

  if (recommendations.length === 0) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {t("cards.recommendedStays")}
      </p>
      <div className="grid gap-3">
        {recommendations.map((recommendation) => (
          <AiHotelRecommendationCard
            key={recommendation.hotel.slug}
            recommendation={recommendation}
            isSelected={selectedSlug === recommendation.hotel.slug}
            onSelect={onSelectHotel}
          />
        ))}
      </div>
    </div>
  );
}

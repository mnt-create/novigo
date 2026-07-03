import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { PriceBadge } from "@/components/shared/price-badge";
import { Rating } from "@/components/shared/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { shadows } from "@/config/design-tokens";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

export type HotelCardData = {
  slug: string;
  name: string;
  city: string;
  country: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  currency: string;
  imageUrl: string;
  amenities?: string[];
  badge?: string;
};

type HotelCardProps = {
  hotel: HotelCardData;
  className?: string;
  ctaLabel?: string;
};

function HotelCard({ hotel, className, ctaLabel = "View hotel" }: HotelCardProps) {
  const location = `${hotel.city}, ${hotel.country}`;
  const topAmenities = hotel.amenities?.slice(0, 2) ?? [];
  const ratingMax = hotel.rating > 5 ? 10 : 5;
  const hotelUrl = routes.hotel(hotel.slug);

  return (
    <Card
      data-slot="hotel-card"
      className={cn("group flex h-full flex-col overflow-hidden p-0", shadows.cardHover, className)}
    >
      <Link href={hotelUrl} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={hotel.imageUrl}
            alt={hotel.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {hotel.badge ? (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground hover:bg-primary">
              {hotel.badge}
            </Badge>
          ) : null}
        </div>
      </Link>

      <CardContent className="flex flex-1 flex-col space-y-3 pt-4">
        <div className="space-y-1">
          <Link href={hotelUrl} className="block">
            <h3 className="line-clamp-1 text-base font-semibold transition-colors group-hover:text-brand-blue">
              {hotel.name}
            </h3>
          </Link>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {location}
          </p>
        </div>

        <Rating
          value={hotel.rating}
          max={ratingMax}
          reviewCount={hotel.reviewCount}
          size="sm"
        />

        {topAmenities.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {topAmenities.map((amenity) => (
              <Badge key={amenity} variant="secondary" className="font-normal">
                {amenity}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between gap-3 border-t bg-muted/30 px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground">From</p>
          <PriceBadge amount={hotel.priceFrom} currency={hotel.currency} variant="muted" />
        </div>
        <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90" asChild>
          <Link href={hotelUrl}>{ctaLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export { HotelCard };

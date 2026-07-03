import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Waves, Wifi, Wind } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { RecommendedHotel } from "@/features/marketing/data/homepage";
import { recommendedHotels } from "@/features/marketing/data/homepage";
import { routes } from "@/constants/routes";
import { formatPrice } from "@/lib/format/currency";
import { cn } from "@/lib/utils";

const amenityIcons: Record<string, React.ReactNode> = {
  Spa: <Wind className="size-3.5" />,
  "Wi-Fi": <Wifi className="size-3.5" />,
  Havuz: <Waves className="size-3.5" />,
};

function RecommendedHotelCard({ hotel }: { hotel: RecommendedHotel }) {
  return (
    <Card className="w-[300px] shrink-0 overflow-hidden p-0 shadow-sm ring-1 ring-border/60 sm:w-[320px]">
      <div className="relative aspect-[4/3]">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="320px"
        />
        {hotel.discountLabel ? (
          <Badge className="absolute top-3 left-3 bg-emerald-600 text-white hover:bg-emerald-600">
            {hotel.discountLabel}
          </Badge>
        ) : null}
        {hotel.isPopular ? (
          <Badge className="absolute top-3 left-3 bg-brand-blue text-white hover:bg-brand-blue">
            Popüler
          </Badge>
        ) : null}
        <Button
          variant="ghost"
          size="icon-sm"
          className="absolute top-3 right-3 bg-white/90 text-foreground hover:bg-white"
          aria-label="Favorilere ekle"
        >
          <Heart className="size-4" />
        </Button>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 font-semibold">{hotel.name}</h3>
          <Badge className="shrink-0 bg-brand-blue text-white hover:bg-brand-blue">
            {hotel.scoreLabel}
          </Badge>
        </div>

        <p className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-3.5" />
          {hotel.city}, {hotel.country}
        </p>

        <div className="flex flex-wrap gap-2">
          {hotel.amenities?.map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {amenityIcons[amenity]}
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between gap-3 border-t border-border/60 pt-3">
          <div>
            <p className="text-xs text-muted-foreground">gecelik</p>
            <p className="text-lg font-bold tabular-nums">
              {formatPrice(hotel.priceFrom, { currency: hotel.currency, locale: "tr-TR" })}
            </p>
          </div>
          <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90" asChild>
            <Link href={routes.hotel(hotel.slug)}>Oda seç</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function HomeRecommendedHotels() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Sizin için önerilen oteller
          </h2>
          <Link
            href={routes.hotels}
            className="text-sm font-medium text-brand-blue hover:underline"
          >
            Tümünü gör
          </Link>
        </div>

        <div className={cn("flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden")}>
          {recommendedHotels.map((hotel) => (
            <RecommendedHotelCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}

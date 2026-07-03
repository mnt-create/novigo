import Link from "next/link";
import { MapPin, Users, Wifi } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { shadows } from "@/config/design-tokens";
import type { HotelRoomListing } from "@/features/hotels/types";
import { routes } from "@/constants/routes";
import { formatPrice } from "@/lib/format/currency";
import { cn } from "@/lib/utils";

type HotelRoomCardProps = {
  room: HotelRoomListing;
  className?: string;
};

export function HotelRoomCard({ room, className }: HotelRoomCardProps) {
  const detailHref = routes.hotel(room.slug);

  return (
    <Card className={cn("flex h-full flex-col overflow-hidden p-0", shadows.cardHover, className)}>
      {room.imageUrl ? (
        <div
          className="aspect-[4/3] bg-cover bg-center"
          style={{ backgroundImage: `url(${room.imageUrl})` }}
        />
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-muted/40">
          <Wifi className="size-10 text-muted-foreground/40" />
        </div>
      )}

      <CardContent className="flex flex-1 flex-col gap-3 pt-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{room.propertyName}</Badge>
            {room.source === "hotelrunner" ? (
              <Badge className="bg-brand-blue text-primary-foreground hover:bg-brand-blue">
                Live inventory
              </Badge>
            ) : null}
            {room.source === "hotelrunner-demo" ? (
              <Badge className="bg-brand-navy text-white hover:bg-brand-navy">
                Demo inventory
              </Badge>
            ) : null}
          </div>
          <h3 className="text-lg font-semibold">{room.name}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{room.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Users className="size-3.5" />
            Up to {room.adultCapacity} adults
          </span>
          {room.city && room.country ? (
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3.5" />
              {room.city}, {room.country}
            </span>
          ) : null}
        </div>

        {room.channels.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {room.channels.slice(0, 3).map((channel) => (
              <Badge key={channel} variant="outline" className="font-normal capitalize">
                {channel}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="mt-auto flex items-center justify-between gap-3 border-t bg-muted/30 px-4 py-3">
        <div>
          {room.priceFrom ? (
            <>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="font-semibold tabular-nums">
                {formatPrice(room.priceFrom, { currency: room.currency, locale: "en-US" })}
              </p>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              {room.source === "hotelrunner-demo" ? "Demo rate via HotelRunner" : "Live rates via HotelRunner"}
            </p>
          )}
        </div>
        <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90" asChild>
          <Link href={detailHref}>View details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

type HotelInventoryGridProps = {
  rooms: HotelRoomListing[];
};

export function HotelInventoryGrid({ rooms }: HotelInventoryGridProps) {
  if (rooms.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/60 bg-card p-10 text-center">
        <p className="font-medium">No sellable rooms found</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Check your HotelRunner property mapping and ensure rooms are marked as sell online.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {rooms.map((room) => (
        <HotelRoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}

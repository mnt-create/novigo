import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { HotelInventoryGrid } from "@/features/hotels/components/hotel-inventory-grid";
import { getHotelInventory } from "@/features/hotels/services/hotel.service";
import { createMetadata } from "@/config/seo";
import { spacing, typography } from "@/config/design-tokens";
import { isHotelRunnerDemoMode, isHotelRunnerConfigured } from "@/lib/hotelrunner/config";

export const metadata = createMetadata({
  title: "Hotels",
  description: "Browse HotelRunner inventory in demo or live mode on NOVIGO.",
  path: "/hotels",
});

export default async function HotelsPage() {
  const inventory = await getHotelInventory();
  const isLive = inventory.source === "hotelrunner";
  const isDemo = inventory.isDemo;

  return (
    <section className={`${spacing.section} bg-surface-subtle`}>
      <Container size="wide">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">{inventory.propertyName}</Badge>
            {isDemo ? (
              <Badge className="bg-brand-navy text-white hover:bg-brand-navy">
                HotelRunner demo
              </Badge>
            ) : null}
            {isLive ? (
              <Badge className="bg-brand-blue text-primary-foreground hover:bg-brand-blue">
                HotelRunner live
              </Badge>
            ) : null}
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className={typography.h1}>Hotels & room inventory</h1>
            <p className="text-muted-foreground">
              {isDemo
                ? "Local demo mode simulates HotelRunner room inventory, channels, and rate codes without calling the live API."
                : isLive
                  ? "Room types synced from your connected HotelRunner property."
                  : "Hotel inventory is temporarily unavailable."}
            </p>
          </div>

          {isDemo ? (
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-sm text-muted-foreground shadow-sm">
              <p className="font-medium text-foreground">Yerel demo modu aktif</p>
              <p className="mt-2">
                Gerçek HotelRunner API&apos;si çağrılmıyor. Demo otel:{" "}
                <strong>{inventory.propertyName}</strong> — 4 oda tipi, kanal kodları ve
                rezervasyon örnekleri simüle ediliyor.
              </p>
              <p className="mt-2">
                Canlı moda geçmek için `.env.local` içinde{" "}
                <code className="rounded bg-muted px-1.5 py-0.5">HOTELRUNNER_DEMO_MODE=false</code>{" "}
                yapın ve gerçek anahtarları ekleyin.
              </p>
            </div>
          ) : null}

          {!isDemo && !isHotelRunnerConfigured() ? (
            <div className="rounded-2xl border border-border/60 bg-card p-5 text-sm text-muted-foreground shadow-sm">
              <p className="font-medium text-foreground">HotelRunner yapılandırması eksik</p>
              <p className="mt-2">
                Demo modu kapalı ve canlı anahtarlar tanımlı değil. Ya{" "}
                <code className="rounded bg-muted px-1.5 py-0.5">HOTELRUNNER_DEMO_MODE=true</code>{" "}
                kullanın ya da HotelRunner kimlik bilgilerinizi ekleyin.
              </p>
            </div>
          ) : null}

          {inventory.warning ? (
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
              {inventory.warning}
            </div>
          ) : null}
        </div>

        <HotelInventoryGrid rooms={inventory.rooms} />
      </Container>
    </section>
  );
}

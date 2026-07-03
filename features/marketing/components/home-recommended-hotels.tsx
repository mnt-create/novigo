import { getTranslations } from "next-intl/server";

import { HotelCard } from "@/components/shared/hotel-card";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { spacing } from "@/config/design-tokens";
import { routes } from "@/constants/routes";
import { HomeSectionHeader } from "@/features/marketing/components/home-section-header";
import { recommendedHotels } from "@/features/marketing/data/homepage";

export async function HomeRecommendedHotels() {
  const t = await getTranslations("Home");

  return (
    <section className={`${spacing.section} bg-surface-subtle`}>
      <Container size="wide">
        <HomeSectionHeader
          title={t("hotelsTitle")}
          description={t("hotelsDescription")}
          href={routes.hotels}
          linkLabel={t("hotelsLink")}
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {recommendedHotels.map((hotel, index) => (
            <MotionReveal key={hotel.slug} delay={index * 0.06}>
              <HotelCard hotel={hotel} ctaLabel={t("viewHotel")} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

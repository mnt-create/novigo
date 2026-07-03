import { HotelCard } from "@/components/shared/hotel-card";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { spacing } from "@/config/design-tokens";
import { routes } from "@/constants/routes";
import { HomeSectionHeader } from "@/features/marketing/components/home-section-header";
import { recommendedHotels } from "@/features/marketing/data/homepage";

export function HomeRecommendedHotels() {
  return (
    <section className={`${spacing.section} bg-surface-subtle`}>
      <Container size="wide">
        <HomeSectionHeader
          title="Recommended hotels"
          description="Top-rated stays picked for exceptional comfort, location, and guest reviews."
          href={routes.hotels}
          linkLabel="Browse all hotels"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {recommendedHotels.map((hotel, index) => (
            <MotionReveal key={hotel.slug} delay={index * 0.06}>
              <HotelCard hotel={hotel} ctaLabel="View hotel" />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

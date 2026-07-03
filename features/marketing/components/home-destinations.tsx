import { getTranslations } from "next-intl/server";

import { DestinationCard } from "@/components/shared/destination-card";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { spacing } from "@/config/design-tokens";
import { routes } from "@/constants/routes";
import { HomeSectionHeader } from "@/features/marketing/components/home-section-header";
import { popularDestinations } from "@/features/marketing/data/homepage";

export async function HomeDestinations() {
  const t = await getTranslations("Home");

  return (
    <section className={spacing.section}>
      <Container size="wide">
        <HomeSectionHeader
          title={t("destinationsTitle")}
          description={t("destinationsDescription")}
          href={routes.destinations}
          linkLabel={t("destinationsLink")}
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {popularDestinations.map((destination, index) => (
            <MotionReveal key={destination.slug} delay={index * 0.05}>
              <DestinationCard destination={destination} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

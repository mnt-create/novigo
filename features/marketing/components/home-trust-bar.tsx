import { getTranslations } from "next-intl/server";
import { BadgeCheck, Bot, Headphones, ShieldCheck } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { spacing } from "@/config/design-tokens";

const icons = [ShieldCheck, BadgeCheck, Bot, Headphones] as const;

export async function HomeTrustBar() {
  const t = await getTranslations("Home.trust");

  return (
    <section
      className={`border-t border-border/60 bg-background ${spacing.sectionSm}`}
    >
      <Container size="wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {icons.map((Icon, index) => (
            <MotionReveal key={index} delay={index * 0.05}>
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{t(`${index}.title`)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {t(`${index}.description`)}
                  </p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

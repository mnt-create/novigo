import { BadgeCheck, Bot, Headphones, ShieldCheck } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { spacing } from "@/config/design-tokens";
import { trustFeatures } from "@/features/marketing/data/homepage";

const icons = [ShieldCheck, BadgeCheck, Bot, Headphones] as const;

export function HomeTrustBar() {
  return (
    <section className={`border-t border-border/60 bg-background ${spacing.sectionSm}`}>
      <Container size="wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <MotionReveal key={feature.title} delay={index * 0.05}>
                <div className="flex gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

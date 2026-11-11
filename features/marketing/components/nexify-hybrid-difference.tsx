"use client";

import { MousePointer2, Palette, Sparkles, type LucideIcon } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { hybridDifference } from "@/features/marketing/data/nexify-homepage";
import { spacing } from "@/config/design-tokens";

const icons: Record<(typeof hybridDifference.features)[number]["icon"], LucideIcon> = {
  Palette,
  Sparkles,
  MousePointer2,
};

export function NexifyHybridDifference() {
  return (
    <section className={spacing.section}>
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow={hybridDifference.eyebrow}
            title={hybridDifference.title}
            description={hybridDifference.description}
          />
        </MotionReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hybridDifference.features.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <MotionReveal key={feature.id} delay={index * 0.06}>
                <article className="group h-full rounded-3xl border border-violet-100/80 bg-gradient-to-br from-white via-white to-violet-50/60 p-7 shadow-[0_20px_50px_-36px_rgba(91,33,182,0.45)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="inline-flex size-11 items-center justify-center rounded-2xl bg-violet-700 text-white shadow-lg shadow-violet-700/25">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

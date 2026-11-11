"use client";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { howItWorks } from "@/features/marketing/data/nexify-homepage";
import { spacing } from "@/config/design-tokens";

export function NexifyHowItWorks() {
  return (
    <section id={howItWorks.id} className={`${spacing.section} scroll-mt-24 bg-slate-950 text-white`}>
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            title={howItWorks.title}
            description={howItWorks.description}
            titleClassName="text-white"
            className="[&_p:last-child]:text-slate-300 [&_p:first-child]:text-cyan-300"
          />
        </MotionReveal>

        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          {howItWorks.steps.map((step, index) => (
            <MotionReveal key={step.step} delay={index * 0.08} className="flex-1">
              <article className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
                    {step.step}
                  </span>
                  {index < howItWorks.steps.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent lg:block" />
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {step.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

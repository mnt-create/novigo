"use client";

import { Check, Clock3 } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { capabilitiesSection } from "@/features/marketing/data/nexify-homepage";
import { spacing } from "@/config/design-tokens";

export function NexifyCapabilities() {
  return (
    <section className={`${spacing.section} bg-slate-50/80`}>
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow={capabilitiesSection.eyebrow}
            title={capabilitiesSection.title}
            description={capabilitiesSection.description}
          />
        </MotionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {capabilitiesSection.items.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.03}>
              <article className="h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-600 ring-1 ring-slate-200">
                  {item.implemented ? (
                    <>
                      <Check className="size-3.5 text-emerald-600" aria-hidden />
                      Live
                    </>
                  ) : (
                    <>
                      <Clock3 className="size-3.5 text-amber-600" aria-hidden />
                      Coming soon
                    </>
                  )}
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

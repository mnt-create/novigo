"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { pricingSection } from "@/features/marketing/data/nexify-homepage";
import { Link } from "@/i18n/routing";
import { routes } from "@/constants/routes";
import { spacing } from "@/config/design-tokens";
import { cn } from "@/lib/utils";

export function NexifyPricing() {
  return (
    <section id="pricing" className={`${spacing.section} scroll-mt-24`}>
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow={pricingSection.eyebrow}
            title={pricingSection.title}
            description={pricingSection.description}
          />
        </MotionReveal>

        <p className="mt-4 text-center text-xs text-slate-500">{pricingSection.note}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingSection.plans.map((plan, index) => (
            <MotionReveal key={plan.id} delay={index * 0.05}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-7",
                  plan.highlighted
                    ? "border-violet-300 bg-gradient-to-b from-violet-700 to-indigo-800 text-white shadow-[0_30px_70px_-40px_rgba(91,33,182,0.8)]"
                    : "border-violet-100 bg-white text-slate-950 shadow-sm",
                )}
              >
                <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm leading-relaxed",
                    plan.highlighted ? "text-violet-100" : "text-slate-600",
                  )}
                >
                  {plan.blurb}
                </p>
                <p
                  className={cn(
                    "mt-6 text-sm font-medium",
                    plan.highlighted ? "text-cyan-200" : "text-violet-700",
                  )}
                >
                  Price confirmed at launch
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span
                        className={cn(
                          "mt-1 size-1.5 shrink-0 rounded-full",
                          plan.highlighted ? "bg-cyan-300" : "bg-violet-500",
                        )}
                      />
                      <span className={plan.highlighted ? "text-violet-50" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={cn(
                      "h-10 w-full rounded-xl",
                      plan.highlighted
                        ? "bg-white text-violet-800 hover:bg-white/90"
                        : "bg-violet-700 text-white hover:bg-violet-800",
                    )}
                    asChild
                  >
                    <Link href={routes.pricing}>{pricingSection.cta}</Link>
                  </Button>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="h-10 rounded-xl" asChild>
            <Link href={routes.register}>
              Get Started
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { ArrowRight, Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { designersSection } from "@/features/marketing/data/nexify-homepage";
import { Link } from "@/i18n/routing";
import { routes } from "@/constants/routes";
import { spacing } from "@/config/design-tokens";

export function NexifyDesigners() {
  return (
    <section id={designersSection.id} className={`${spacing.section} scroll-mt-24`}>
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-700 via-indigo-700 to-cyan-600 p-8 text-white shadow-[0_30px_80px_-40px_rgba(76,29,149,0.7)] sm:p-12">
          <MotionReveal>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <SectionHeading
                  eyebrow={designersSection.eyebrow}
                  title={designersSection.title}
                  description={designersSection.description}
                  align="left"
                  className="mx-0 max-w-2xl [&_h2]:text-white [&_p:first-child]:text-cyan-100 [&_p:last-child]:text-white/80"
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="h-11 rounded-xl bg-white px-5 text-violet-800 hover:bg-white/90"
                    asChild
                  >
                    <Link href={routes.templates}>
                      {designersSection.hasMarketplace
                        ? designersSection.cta
                        : designersSection.fallbackCta}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {["Composition", "Typography", "Motion", "Systems"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"
                  >
                    <Palette className="size-5 text-cyan-200" aria-hidden />
                    <p className="mt-3 font-semibold">{item}</p>
                    <p className="mt-1 text-sm text-white/70">
                      Human craft before AI adaptation.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}

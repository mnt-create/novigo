"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { finalCta } from "@/features/marketing/data/nexify-homepage";
import { Link } from "@/i18n/routing";
import { routes } from "@/constants/routes";
import { spacing } from "@/config/design-tokens";

export function NexifyFinalCta() {
  return (
    <section className={`${spacing.sectionSm} pb-20`}>
      <Container>
        <MotionReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-200 bg-slate-950 px-8 py-14 text-center text-white sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.25),transparent_35%)]" />
            <div className="relative">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
                {finalCta.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-11 rounded-xl bg-violet-600 px-5 text-white hover:bg-violet-500"
                  asChild
                >
                  <Link href={routes.register}>
                    {finalCta.primaryCta}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 rounded-xl border-white/20 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href={routes.templates}>{finalCta.secondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}

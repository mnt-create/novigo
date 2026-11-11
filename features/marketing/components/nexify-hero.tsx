"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { WebsitePreview } from "@/features/marketing/components/website-preview";
import { heroContent } from "@/features/marketing/data/nexify-homepage";
import { NavLink } from "@/components/layout/nav-link";
import { Link } from "@/i18n/routing";
import { routes } from "@/constants/routes";
import { gradients } from "@/config/design-tokens";

export function NexifyHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-violet-100/80">
      <div className={`absolute inset-0 ${gradients.surface}`} />
      <div className="absolute -left-24 top-10 size-72 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 size-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <Container size="wide" className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-700">
            {heroContent.eyebrow}
          </p>

          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {heroContent.headlineLead}{" "}
            <span className={gradients.brand}>{heroContent.headlineHighlight}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-slate-600 sm:text-lg">
            {heroContent.supporting}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 rounded-xl bg-violet-700 px-5 text-white hover:bg-violet-800"
              asChild
            >
              <Link href={routes.templates}>
                {heroContent.primaryCta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 rounded-xl border-violet-200 bg-white/70 px-5 backdrop-blur-sm"
              asChild
            >
              <NavLink href={routes.howItWorks}>{heroContent.secondaryCta}</NavLink>
            </Button>
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">{heroContent.positioning}</p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0.72, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3"
        >
          {heroContent.stages.map((stage, index) => {
            const variant =
              index === 0 ? "hero-base" : index === 1 ? "hero-ai" : "hero-result";
            return (
              <div key={stage.id} className="relative">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
                      {stage.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{stage.caption}</p>
                  </div>
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-violet-700 ring-1 ring-violet-200">
                    {index + 1}
                  </span>
                </div>
                <WebsitePreview variant={variant} />
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

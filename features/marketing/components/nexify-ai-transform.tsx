"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { IndustryPreview } from "@/features/marketing/components/website-preview";
import {
  aiTransform,
  type AiIndustryId,
} from "@/features/marketing/data/nexify-homepage";
import { spacing } from "@/config/design-tokens";
import { cn } from "@/lib/utils";

export function NexifyAiTransform() {
  const [active, setActive] = useState<AiIndustryId>("architecture");
  const reduceMotion = useReducedMotion();
  const industry = aiTransform.industries.find((item) => item.id === active)!;

  return (
    <section className={`${spacing.section} bg-[linear-gradient(180deg,#f8f5ff_0%,#ffffff_48%,#f0fdfa_100%)]`}>
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow={aiTransform.eyebrow}
            title={aiTransform.title}
            description={aiTransform.description}
          />
        </MotionReveal>

        <div
          role="tablist"
          aria-label="Industry personalization examples"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {aiTransform.industries.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active === item.id}
              onClick={() => setActive(item.id)}
              className={cn(
                "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                active === item.id
                  ? "bg-slate-950 text-white"
                  : "bg-white text-slate-700 ring-1 ring-violet-100 hover:bg-violet-50",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {industry.beforeLabel}
            </p>
            <IndustryPreview industry={active} />
          </div>

          <div className="hidden justify-center lg:flex">
            <div className="inline-flex size-12 items-center justify-center rounded-full bg-violet-700 text-white shadow-lg shadow-violet-700/30">
              <ArrowRight className="size-5" aria-hidden />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">
              {industry.afterLabel}
            </p>
            <IndustryPreview industry={active} personalized />
            <div className="mt-4 rounded-2xl border border-violet-100 bg-white/80 p-4 backdrop-blur-sm">
              <p className="font-semibold text-slate-950">{industry.headline}</p>
              <p className="mt-1 text-sm text-slate-600">{industry.supporting}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

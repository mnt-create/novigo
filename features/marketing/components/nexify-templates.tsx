"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { SectionHeading } from "@/features/marketing/components/section-heading";
import { WebsitePreview } from "@/features/marketing/components/website-preview";
import {
  featuredTemplates,
  marketplaceSection,
  templateCategories,
  type TemplateCategory,
} from "@/features/marketing/data/nexify-homepage";
import { Link } from "@/i18n/routing";
import { routes } from "@/constants/routes";
import { spacing } from "@/config/design-tokens";
import { cn } from "@/lib/utils";

export function NexifyTemplates({
  limit,
  showHeading = true,
  showCta = true,
}: {
  limit?: number;
  showHeading?: boolean;
  showCta?: boolean;
}) {
  const [category, setCategory] = useState<TemplateCategory>("all");

  const templates = useMemo(() => {
    const filtered =
      category === "all"
        ? featuredTemplates
        : featuredTemplates.filter((item) => item.category === category);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);

  return (
    <section id="templates" className={`${spacing.section} scroll-mt-24`}>
      <Container>
        {showHeading ? (
          <MotionReveal>
            <SectionHeading
              eyebrow={marketplaceSection.eyebrow}
              title={marketplaceSection.title}
              description={marketplaceSection.description}
            />
          </MotionReveal>
        ) : null}

        <div className={`${showHeading ? "mt-8" : "mt-2"} flex flex-wrap items-center justify-center gap-2`}>
          {templateCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={cn(
                "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                category === item.id
                  ? "bg-violet-700 text-white shadow-md shadow-violet-700/25"
                  : "bg-violet-50 text-slate-700 hover:bg-violet-100",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          {marketplaceSection.illustrativeNote}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {templates.map((template, index) => (
            <MotionReveal key={template.id} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-[0_18px_50px_-34px_rgba(91,33,182,0.4)] transition-transform duration-300 hover:-translate-y-1">
                <WebsitePreview variant={template.preview} />
                <div className="space-y-2 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold tracking-tight text-slate-950">
                      {template.name}
                    </h3>
                    <span className="rounded-md bg-violet-50 px-2 py-0.5 text-[11px] font-medium text-violet-700">
                      {template.categoryLabel}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {template.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>

        {showCta ? (
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="h-11 rounded-xl bg-violet-700 px-5 text-white hover:bg-violet-800"
              asChild
            >
              <Link href={routes.templates}>
                {marketplaceSection.cta}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

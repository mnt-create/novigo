import { BadgeCheck, Headphones, RefreshCw, ShieldCheck } from "lucide-react";

import { trustFeatures } from "@/features/marketing/data/homepage";

const icons = [BadgeCheck, RefreshCw, ShieldCheck, Headphones] as const;

export function HomeTrustBar() {
  return (
    <section className="border-y border-border/60 bg-white py-10">
      <div className="mx-auto grid w-full max-w-[90rem] gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustFeatures.map((feature, index) => {
          const Icon = icons[index];
          return (
            <div key={feature.title} className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

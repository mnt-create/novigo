import { cn } from "@/lib/utils";

import type { FeaturedTemplate } from "@/features/marketing/data/nexify-homepage";

type WebsitePreviewProps = {
  variant: FeaturedTemplate["preview"] | "hero-base" | "hero-ai" | "hero-result";
  industry?: "architecture" | "saas" | "hotel" | "agency";
  className?: string;
};

const chrome = (
  <div className="flex items-center gap-1.5 border-b border-black/5 bg-white/80 px-3 py-2">
    <span className="size-2 rounded-full bg-[#ff5f57]" />
    <span className="size-2 rounded-full bg-[#febc2e]" />
    <span className="size-2 rounded-full bg-[#28c840]" />
    <div className="ml-3 h-4 flex-1 rounded-md bg-slate-100/90" />
  </div>
);

function PreviewShell({
  className,
  children,
  accent,
}: {
  className?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/40 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] ring-1 ring-black/5",
        className,
      )}
      style={accent ? ({ ["--preview-accent" as string]: accent } as React.CSSProperties) : undefined}
    >
      {chrome}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">{children}</div>
    </div>
  );
}

function MiniNav({ items }: { items: readonly string[] }) {
  return (
    <div className="flex items-center justify-between px-4 pt-3">
      <div className="h-2.5 w-14 rounded-full bg-slate-900/80" />
      <div className="hidden gap-3 sm:flex">
        {items.map((item) => (
          <span key={item} className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
            {item}
          </span>
        ))}
      </div>
      <div className="h-5 w-14 rounded-md bg-[var(--preview-accent,#7c3aed)]" />
    </div>
  );
}

export function WebsitePreview({ variant, industry = "architecture", className }: WebsitePreviewProps) {
  if (variant === "hero-base") {
    return (
      <PreviewShell className={className} accent="#7c3aed">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-slate-100" />
        <MiniNav items={["Work", "About", "Contact"]} />
        <div className="relative px-4 pt-6 sm:px-6">
          <div className="h-2 w-24 rounded-full bg-violet-300/80" />
          <div className="mt-3 h-5 w-3/4 rounded-md bg-slate-900/85" />
          <div className="mt-2 h-3 w-1/2 rounded-md bg-slate-400/50" />
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-200 to-slate-300" />
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-cyan-200 to-blue-300" />
          </div>
        </div>
      </PreviewShell>
    );
  }

  if (variant === "hero-ai") {
    return (
      <PreviewShell className={className} accent="#2563eb">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-cyan-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.25),transparent_45%)]" />
        <MiniNav items={["Brand", "AI", "Refine"]} />
        <div className="relative px-4 pt-5 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-violet-700 ring-1 ring-violet-200">
            Nexify AI adapting…
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-4/5 rounded-md bg-slate-900/80" />
            <div className="h-3 w-3/5 rounded-md bg-cyan-400/70" />
            <div className="h-3 w-2/3 rounded-md bg-violet-300/70" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white/80 p-3 ring-1 ring-violet-100">
              <div className="h-2 w-12 rounded-full bg-violet-400" />
              <div className="mt-2 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 opacity-80" />
            </div>
            <div className="rounded-xl bg-slate-900 p-3 text-white">
              <div className="h-2 w-10 rounded-full bg-white/40" />
              <div className="mt-2 h-8 rounded-lg bg-white/15" />
            </div>
          </div>
        </div>
      </PreviewShell>
    );
  }

  if (variant === "hero-result") {
    return (
      <PreviewShell className={className} accent="#0891b2">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-violet-950 to-cyan-900" />
        <MiniNav items={["Home", "Work", "Book"]} />
        <div className="relative px-4 pt-6 text-white sm:px-6">
          <div className="h-2 w-28 rounded-full bg-cyan-300/80" />
          <div className="mt-3 h-5 w-4/5 rounded-md bg-white/90" />
          <div className="mt-2 h-3 w-1/2 rounded-md bg-white/35" />
          <div className="mt-6 flex gap-2">
            <div className="h-8 w-24 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400" />
            <div className="h-8 w-20 rounded-lg bg-white/10 ring-1 ring-white/20" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-white/10" />
            <div className="h-16 rounded-xl bg-white/15" />
            <div className="h-16 rounded-xl bg-cyan-400/30" />
          </div>
        </div>
      </PreviewShell>
    );
  }

  const industryThemes = {
    architecture: {
      accent: "#57534e",
      bg: "from-stone-100 via-white to-stone-200",
      hero: "from-stone-700 to-stone-900",
      title: "Studio Form",
    },
    saas: {
      accent: "#2563eb",
      bg: "from-blue-50 via-white to-cyan-50",
      hero: "from-blue-600 to-cyan-500",
      title: "Launch Pulse",
    },
    hotel: {
      accent: "#0f766e",
      bg: "from-teal-50 via-white to-amber-50",
      hero: "from-teal-800 to-stone-800",
      title: "Maison Luxe",
    },
    agency: {
      accent: "#db2777",
      bg: "from-fuchsia-50 via-white to-violet-50",
      hero: "from-fuchsia-600 to-violet-700",
      title: "Signal Works",
    },
  } as const;

  if (variant.startsWith("hero") === false && industry && ["architecture", "saas", "hotel", "agency"].includes(industry)) {
    // used by AI transform before/after via dedicated industry variants below
  }

  const map: Record<
    FeaturedTemplate["preview"],
    { accent: string; bg: string; blocks: string }
  > = {
    atelier: {
      accent: "#7c3aed",
      bg: "from-violet-100 via-white to-fuchsia-50",
      blocks: "portfolio",
    },
    pulse: {
      accent: "#2563eb",
      bg: "from-blue-50 via-white to-sky-50",
      blocks: "saas",
    },
    luxe: {
      accent: "#0f766e",
      bg: "from-teal-50 via-white to-stone-100",
      blocks: "hotel",
    },
    studio: {
      accent: "#4f46e5",
      bg: "from-indigo-50 via-white to-violet-50",
      blocks: "agency",
    },
    harbor: {
      accent: "#1d4ed8",
      bg: "from-slate-100 via-white to-blue-50",
      blocks: "business",
    },
    nova: {
      accent: "#0891b2",
      bg: "from-cyan-50 via-white to-blue-50",
      blocks: "saas",
    },
    folio: {
      accent: "#9333ea",
      bg: "from-purple-50 via-white to-pink-50",
      blocks: "portfolio",
    },
    signal: {
      accent: "#db2777",
      bg: "from-pink-50 via-white to-rose-50",
      blocks: "agency",
    },
  };

  const theme = map[variant as FeaturedTemplate["preview"]];
  if (!theme) {
    const t = industryThemes[industry];
    return (
      <PreviewShell className={className} accent={t.accent}>
        <div className={cn("absolute inset-0 bg-gradient-to-br", t.bg)} />
        <MiniNav items={["Work", "About", "Contact"]} />
        <div className="relative px-4 pt-5 sm:px-5">
          <div className={cn("rounded-xl bg-gradient-to-br p-4 text-white", t.hero)}>
            <div className="h-2 w-16 rounded-full bg-white/50" />
            <div className="mt-3 text-[11px] font-semibold tracking-tight">{t.title}</div>
            <div className="mt-2 h-2 w-3/4 rounded-full bg-white/35" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-12 rounded-lg bg-white/80 ring-1 ring-black/5" />
            <div className="h-12 rounded-lg bg-white/80 ring-1 ring-black/5" />
            <div className="h-12 rounded-lg bg-white/80 ring-1 ring-black/5" />
          </div>
        </div>
      </PreviewShell>
    );
  }

  return (
    <PreviewShell className={className} accent={theme.accent}>
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme.bg)} />
      <MiniNav items={["Home", "Work", "Contact"]} />
      <div className="relative px-4 pt-5 sm:px-5">
        <div
          className="rounded-xl p-4 text-white"
          style={{
            background: `linear-gradient(135deg, ${theme.accent}, color-mix(in oklab, ${theme.accent}, #22d3ee 35%))`,
          }}
        >
          <div className="h-2 w-16 rounded-full bg-white/45" />
          <div className="mt-3 h-3 w-3/4 rounded-md bg-white/90" />
          <div className="mt-2 h-2 w-1/2 rounded-md bg-white/40" />
        </div>
        {theme.blocks === "portfolio" || theme.blocks === "agency" ? (
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="aspect-square rounded-lg bg-slate-900/80" />
            <div className="aspect-square rounded-lg bg-[var(--preview-accent)]/30" />
            <div className="aspect-square rounded-lg bg-slate-300" />
          </div>
        ) : theme.blocks === "hotel" ? (
          <div className="mt-3 space-y-2">
            <div className="h-16 rounded-xl bg-gradient-to-r from-teal-700/80 to-stone-700/70" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-white/80 ring-1 ring-black/5" />
              <div className="h-10 rounded-lg bg-white/80 ring-1 ring-black/5" />
            </div>
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-white/85 p-3 ring-1 ring-black/5">
              <div className="h-2 w-10 rounded-full bg-slate-300" />
              <div className="mt-2 h-8 rounded-md bg-slate-100" />
            </div>
            <div className="rounded-xl bg-white/85 p-3 ring-1 ring-black/5">
              <div className="h-2 w-10 rounded-full bg-slate-300" />
              <div className="mt-2 h-8 rounded-md bg-slate-100" />
            </div>
          </div>
        )}
      </div>
    </PreviewShell>
  );
}

export function IndustryPreview({
  industry,
  personalized,
  className,
}: {
  industry: keyof typeof industryCopy;
  personalized?: boolean;
  className?: string;
}) {
  const copy = industryCopy[industry];
  return (
    <PreviewShell className={className} accent={copy.accent}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          personalized ? copy.afterBg : copy.beforeBg,
        )}
      />
      <MiniNav items={copy.nav} />
      <div className="relative px-4 pt-5 sm:px-5">
        <div
          className={cn(
            "rounded-xl p-4",
            personalized ? "text-white" : "bg-white/80 text-slate-900 ring-1 ring-black/5",
          )}
          style={
            personalized
              ? { background: `linear-gradient(135deg, ${copy.accent}, ${copy.accentB})` }
              : undefined
          }
        >
          <div
            className={cn(
              "h-2 w-20 rounded-full",
              personalized ? "bg-white/50" : "bg-slate-300",
            )}
          />
          <p className="mt-3 text-[11px] font-semibold tracking-tight sm:text-xs">
            {personalized ? copy.afterTitle : copy.beforeTitle}
          </p>
          <p
            className={cn(
              "mt-1 line-clamp-2 text-[9px] leading-relaxed sm:text-[10px]",
              personalized ? "text-white/75" : "text-slate-500",
            )}
          >
            {personalized ? copy.afterBody : copy.beforeBody}
          </p>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {copy.tiles.map((tile) => (
            <div
              key={tile}
              className={cn(
                "h-12 rounded-lg sm:h-14",
                personalized ? "bg-white/25" : "bg-slate-200/80",
              )}
            />
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

const industryCopy = {
  architecture: {
    accent: "#57534e",
    accentB: "#1c1917",
    beforeBg: "from-slate-100 via-white to-slate-200",
    afterBg: "from-stone-200 via-white to-stone-100",
    nav: ["Projects", "Studio", "Contact"],
    beforeTitle: "Universal template",
    beforeBody: "Neutral structure ready for brand and industry adaptation.",
    afterTitle: "Spaces that speak quietly",
    afterBody: "Architecture-forward portfolio with material contrast and calm hierarchy.",
    tiles: ["a", "b", "c"],
  },
  saas: {
    accent: "#2563eb",
    accentB: "#06b6d4",
    beforeBg: "from-slate-100 via-white to-slate-200",
    afterBg: "from-blue-50 via-white to-cyan-50",
    nav: ["Product", "Pricing", "Docs"],
    beforeTitle: "Universal template",
    beforeBody: "Neutral structure ready for brand and industry adaptation.",
    afterTitle: "Ship product stories faster",
    afterBody: "SaaS narrative with crisp feature blocks and conversion CTAs.",
    tiles: ["a", "b", "c"],
  },
  hotel: {
    accent: "#0f766e",
    accentB: "#44403c",
    beforeBg: "from-slate-100 via-white to-slate-200",
    afterBg: "from-teal-50 via-white to-amber-50",
    nav: ["Stay", "Suites", "Reserve"],
    beforeTitle: "Universal template",
    beforeBody: "Neutral structure ready for brand and industry adaptation.",
    afterTitle: "Arrive before you check in",
    afterBody: "Hospitality atmosphere with immersive stay storytelling.",
    tiles: ["a", "b", "c"],
  },
  agency: {
    accent: "#db2777",
    accentB: "#7c3aed",
    beforeBg: "from-slate-100 via-white to-slate-200",
    afterBg: "from-fuchsia-50 via-white to-violet-50",
    nav: ["Work", "Services", "Contact"],
    beforeTitle: "Universal template",
    beforeBody: "Neutral structure ready for brand and industry adaptation.",
    afterTitle: "Ideas with unmistakable taste",
    afterBody: "Agency energy with case-study rhythm and bold brand voice.",
    tiles: ["a", "b", "c"],
  },
} as const;

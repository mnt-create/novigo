import { createMetadata } from "@/config/seo";
import { NexifyTemplates } from "@/features/marketing/components/nexify-templates";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Templates",
  description:
    "Browse human-designed website directions on Nexify. Showcase previews today — full marketplace commerce ships with the builder.",
  path: "/templates",
});

export default function TemplatesPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.1),_transparent_50%)]">
      <div className="mx-auto max-w-3xl px-4 pt-14 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-700">
          Template Marketplace
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Designs Worth Starting With
        </h1>
        <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg">
          {siteConfig.positioning} These are illustrative showcase designs — not live
          purchasable listings yet.
        </p>
      </div>
      <NexifyTemplates showHeading={false} showCta={false} />
    </div>
  );
}

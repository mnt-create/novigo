import { NexifyAiTransform } from "@/features/marketing/components/nexify-ai-transform";
import { NexifyCapabilities } from "@/features/marketing/components/nexify-capabilities";
import { NexifyDesigners } from "@/features/marketing/components/nexify-designers";
import { NexifyFinalCta } from "@/features/marketing/components/nexify-final-cta";
import { NexifyHero } from "@/features/marketing/components/nexify-hero";
import { NexifyHowItWorks } from "@/features/marketing/components/nexify-how-it-works";
import { NexifyHybridDifference } from "@/features/marketing/components/nexify-hybrid-difference";
import { NexifyPricing } from "@/features/marketing/components/nexify-pricing";
import { NexifyTemplates } from "@/features/marketing/components/nexify-templates";

export function HomePage() {
  return (
    <>
      <NexifyHero />
      <NexifyHybridDifference />
      <NexifyHowItWorks />
      <NexifyTemplates limit={8} />
      <NexifyAiTransform />
      <NexifyDesigners />
      <NexifyCapabilities />
      <NexifyPricing />
      <NexifyFinalCta />
    </>
  );
}

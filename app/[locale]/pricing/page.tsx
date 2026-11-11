import { createMetadata } from "@/config/seo";
import { NexifyPricing } from "@/features/marketing/components/nexify-pricing";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Explore Nexify plan directions. Amounts and entitlements will come from Stripe when billing goes live — nothing invented here.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.08),_transparent_45%)]">
      <NexifyPricing />
    </div>
  );
}

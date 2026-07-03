import { Bot, CreditCard, MapPin, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Concierge",
    description:
      "Natural language search that understands intent, budget, and travel preferences.",
  },
  {
    icon: MapPin,
    title: "Live Inventory",
    description:
      "Real-time availability and pricing synced from HotelRunner and your PMS partners.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Stripe-powered checkout with fraud protection and global payment methods.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Ready",
    description:
      "Feature-based architecture, Supabase auth, and SEO-first pages built to scale.",
  },
] as const;

export function PlatformFeatures() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight">Built for production scale</h2>
        <p className="mt-3 text-muted-foreground">
          Every layer is separated by concern — from UI components to domain services and external
          integrations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border/70">
            <CardHeader>
              <feature.icon className="size-5 text-primary" />
              <CardTitle className="text-base">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

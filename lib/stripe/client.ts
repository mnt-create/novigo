import { loadStripe, type Stripe } from "@stripe/stripe-js";

import { clientEnv } from "@/lib/env";

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripeBrowserClient() {
  if (!clientEnv.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not configured.");
  }

  if (!stripePromise) {
    stripePromise = loadStripe(clientEnv.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
}

import Stripe from "stripe";

import { getServerEnv } from "@/lib/env";

let stripeClient: Stripe | null = null;

export function getStripeServerClient() {
  const { STRIPE_SECRET_KEY } = getServerEnv();

  if (!STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }

  if (!stripeClient) {
    stripeClient = new Stripe(STRIPE_SECRET_KEY, {
      typescript: true,
    });
  }

  return stripeClient;
}

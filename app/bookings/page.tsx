import { createMetadata } from "@/config/seo";

export const metadata = createMetadata({
  title: "Bookings",
  description: "Manage your hotel reservations and booking history.",
  path: "/bookings",
  noIndex: true,
});

export default function BookingsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">My Bookings</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Authenticated booking management will connect to Supabase and Stripe webhooks.
      </p>
    </section>
  );
}

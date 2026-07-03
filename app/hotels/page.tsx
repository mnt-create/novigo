import { createMetadata } from "@/config/seo";

export const metadata = createMetadata({
  title: "Hotels",
  description: "Browse curated hotels with live availability and pricing.",
  path: "/hotels",
});

export default function HotelsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">Hotels</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Hotel listings powered by HotelRunner inventory will be implemented here.
      </p>
    </section>
  );
}

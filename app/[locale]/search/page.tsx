import { createMetadata } from "@/config/seo";

export const metadata = createMetadata({
  title: "Search",
  description: "Search hotels with AI-powered natural language queries.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">AI Hotel Search</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Search results, filters, and map views will live in the search feature module.
      </p>
    </section>
  );
}

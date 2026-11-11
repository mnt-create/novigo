import { createMetadata } from "@/config/seo";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Terms",
  description: `Terms of use overview for ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Terms of use</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        By using {siteConfig.name}, you agree to use the platform responsibly and in
        accordance with applicable law. Complete terms will be published before public
        launch.
      </p>
    </Container>
  );
}

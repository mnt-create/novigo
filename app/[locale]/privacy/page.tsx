import { createMetadata } from "@/config/seo";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";

export const metadata = createMetadata({
  title: "Privacy",
  description: `Privacy policy overview for ${siteConfig.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Privacy</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        {siteConfig.name} protects account data through Supabase authentication and
        platform security practices. A full legal policy document will replace this
        overview page before public launch.
      </p>
    </Container>
  );
}

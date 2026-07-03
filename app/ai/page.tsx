import { Suspense } from "react";

import { Container } from "@/components/shared/container";
import { Spinner } from "@/components/ui/spinner";
import { AiChat } from "@/features/ai/components/ai-chat";
import { createMetadata } from "@/config/seo";
import { spacing, typography } from "@/config/design-tokens";
import { isGeminiConfigured } from "@/lib/gemini/config";

export const metadata = createMetadata({
  title: "Novigo AI",
  description: "Describe your trip and get AI-powered hotel recommendations on NOVIGO.",
  path: "/ai",
});

function AiChatFallback() {
  return (
    <div className="flex min-h-[560px] items-center justify-center rounded-3xl border border-border/60 bg-card">
      <Spinner className="size-6 text-brand-blue" />
    </div>
  );
}

export default function AiPage() {
  const isConfigured = isGeminiConfigured();

  return (
    <section className={`${spacing.section} bg-surface-subtle`}>
      <Container size="narrow">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Novigo AI
          </p>
          <h1 className={typography.h1}>Your hotel booking co-pilot</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Tell us about your trip — destination, dates, budget, or vibe — and Novigo AI will
            recommend stays from our catalog and help you decide faster.
          </p>
        </div>

        {!isConfigured ? (
          <div className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground shadow-sm">
            <p className="font-medium text-foreground">Gemini yapılandırması eksik</p>
            <p className="mt-2">
              Proje kökündeki <code className="rounded bg-muted px-1.5 py-0.5">.env.local</code>{" "}
              dosyasına şunu ekleyin ve dev sunucusunu yeniden başlatın:
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl bg-muted p-4 text-xs text-foreground">
              {`GEMINI_API_KEY=your-api-key
GEMINI_MODEL=gemini-2.5-flash-lite`}
            </pre>
            <p className="mt-3">
              Ücretsiz API anahtarını{" "}
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-blue hover:underline"
              >
                Google AI Studio
              </a>{" "}
              adresinden oluşturabilirsiniz.
            </p>
          </div>
        ) : (
          <Suspense fallback={<AiChatFallback />}>
            <AiChat />
          </Suspense>
        )}
      </Container>
    </section>
  );
}

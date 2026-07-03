"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Bot, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/container";
import { MotionReveal } from "@/components/shared/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { spacing, typography } from "@/config/design-tokens";
import { routes } from "@/constants/routes";
import { Link, useRouter } from "@/i18n/routing";

const suggestionKeys = ["0", "1", "2", "3"] as const;
const capabilityKeys = ["0", "1", "2", "3"] as const;

export function HomeAiAssistant() {
  const t = useTranslations("Home");
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  function handleSubmit(value: string) {
    const query = value.trim();
    if (!query) return;
    router.push(`${routes.ai}?q=${encodeURIComponent(query)}`);
  }

  return (
    <section className={spacing.section}>
      <Container size="wide">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm ring-1 ring-foreground/5">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 p-6 sm:p-8 lg:p-10">
              <div className="space-y-3">
                <Badge variant="secondary" className="rounded-full px-3 py-1">
                  {t("aiEyebrow")}
                </Badge>
                <h2 className={typography.h2}>{t("aiTitle")}</h2>
                <p className="max-w-xl text-muted-foreground">{t("aiDescription")}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {suggestionKeys.map((key) => (
                  <Button
                    key={key}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-auto whitespace-normal rounded-full px-3 py-1.5 text-left text-xs font-normal"
                    onClick={() => handleSubmit(t(`aiSuggestions.${key}`))}
                  >
                    {t(`aiSuggestions.${key}`)}
                  </Button>
                ))}
              </div>

              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit(prompt);
                }}
              >
                <Input
                  inputSize="lg"
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder={t("aiPlaceholder")}
                  aria-label={t("aiPromptLabel")}
                  className="flex-1"
                />
                <Button type="submit" size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                  <Sparkles className="size-4" />
                  {t("aiSubmit")}
                </Button>
              </form>

              <Button
                variant="ghost"
                className="px-0 text-brand-blue hover:bg-transparent hover:text-brand-blue/90"
                asChild
              >
                <Link href={routes.ai}>
                  {t("aiOpenFull")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            <MotionReveal className="relative border-t border-border/60 bg-muted/30 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Bot className="size-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold">{t("aiPreviewTitle")}</p>
                  <p className="text-sm text-muted-foreground">{t("aiPreviewSubtitle")}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {capabilityKeys.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Check className="size-3" />
                    </span>
                    <span className="text-muted-foreground">{t(`aiCapabilities.${key}`)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-border/60 bg-background p-4 text-sm">
                <p className="font-medium">{t("aiExampleLabel")}</p>
                <p className="mt-2 text-muted-foreground">{t("aiExampleText")}</p>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

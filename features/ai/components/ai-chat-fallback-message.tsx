"use client";

import { Bot, MapPin, SearchX } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AiChatFallbackMessageProps = {
  onRetry?: () => void;
  className?: string;
};

export function AiChatFallbackMessage({ onRetry, className }: AiChatFallbackMessageProps) {
  const t = useTranslations("Ai");

  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-brand-blue">
        <Bot className="size-4" />
      </div>

      <div className="min-w-0 max-w-full flex-1 sm:max-w-[85%]">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="relative bg-gradient-to-br from-brand-blue/10 via-muted/40 to-brand-navy/5 px-5 py-6">
            <div className="pointer-events-none absolute -right-3 -top-3 size-24 rounded-full bg-brand-blue/10 blur-2xl" />
            <div className="relative mx-auto flex max-w-xs flex-col items-center text-center">
              <div className="relative mb-4 flex size-16 items-center justify-center rounded-2xl bg-background/80 shadow-sm ring-1 ring-border/60">
                <SearchX className="size-8 text-brand-blue" strokeWidth={1.5} />
                <MapPin
                  className="absolute -bottom-1 -right-1 size-5 rounded-full bg-brand-blue p-0.5 text-white"
                  strokeWidth={2}
                />
              </div>
              <p className="text-base font-semibold text-foreground">{t("noResultsTitle")}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("noResultsDescription")}
              </p>
            </div>
          </div>

          {onRetry ? (
            <div className="border-t border-border/60 bg-muted/20 px-4 py-3">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full rounded-full"
                onClick={onRetry}
              >
                {t("noResultsRetry")}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

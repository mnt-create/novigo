"use client";

import { useState } from "react";
import { Bot, Check, Send, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aiAssistantContent } from "@/features/marketing/data/homepage";
import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";

export function HomeAiAssistant() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  function handleSubmit(value: string) {
    const query = value.trim();
    if (!query) return;
    router.push(`${routes.ai}?q=${encodeURIComponent(query)}`);
  }

  return (
    <section className="bg-surface-subtle py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-[90rem] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto_280px] lg:px-8 lg:gap-10">
        <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{aiAssistantContent.title}</h2>
                {aiAssistantContent.beta ? (
                  <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100">Beta</Badge>
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground">
                Seyahat kararlarınızı AI ile hızlandırın
              </p>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {aiAssistantContent.suggestions.map((suggestion) => (
              <Button
                key={suggestion}
                type="button"
                variant="outline"
                size="sm"
                className="h-auto whitespace-normal rounded-full px-3 py-1.5 text-left text-xs font-normal"
                onClick={() => handleSubmit(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>

          <form
            className="flex gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(prompt);
            }}
          >
            <Input
              inputSize="lg"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder={aiAssistantContent.placeholder}
              aria-label="AI asistan mesajı"
              className="flex-1"
            />
            <Button type="submit" size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
              <Send className="size-4" />
              <span className="sr-only">Gönder</span>
            </Button>
          </form>
        </div>

        <div className="hidden items-end justify-center lg:flex">
          <div className="flex size-44 items-center justify-center rounded-full bg-brand-blue/10">
            <Bot className="size-24 text-brand-blue/80" strokeWidth={1.25} />
          </div>
        </div>

        <ul className="space-y-4 self-center">
          {aiAssistantContent.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Check className="size-3" />
              </span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

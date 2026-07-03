"use client";

import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { routes } from "@/constants/routes";

const suggestions = [
  "Boutique hotel in Istanbul with sea view under $200",
  "Family-friendly resort in Antalya, July 10–17",
  "Business hotel near Taksim with late checkout",
] as const;

export function HeroSearch() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  function handleSearch(value: string) {
    const query = value.trim();
    if (!query) return;

    const params = new URLSearchParams({ q: query });
    router.push(`${routes.search}?${params.toString()}`);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl space-y-4">
          <Badge variant="secondary" className="gap-1.5">
            <Sparkles className="size-3.5" />
            AI-first hotel discovery
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Book smarter with conversational hotel search
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground">
            NOVIGO combines real-time inventory from HotelRunner, intelligent recommendations,
            and seamless checkout — built for scale.
          </p>
        </div>

        <Card className="max-w-3xl border-border/70 bg-card/90 shadow-lg backdrop-blur">
          <CardContent className="space-y-4 pt-6">
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                handleSearch(prompt);
              }}
            >
              <Input
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Describe your ideal stay..."
                className="h-11 flex-1"
                aria-label="AI hotel search prompt"
              />
              <Button type="submit" size="lg" className="h-11 shrink-0">
                Search with AI
              </Button>
            </form>

            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <Button
                  key={suggestion}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleSearch(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

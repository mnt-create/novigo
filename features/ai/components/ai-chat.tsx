"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Send, Sparkles } from "lucide-react";

import { AiChatFallbackMessage } from "@/features/ai/components/ai-chat-fallback-message";
import { AiHotelDetailPanel } from "@/features/ai/components/ai-hotel-detail-panel";
import { AiMessageBubble, AiTypingIndicator } from "@/features/ai/components/ai-message-bubble";
import type { AiAssistantReply, AiHotelRecommendation, AiMessage } from "@/features/ai/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { routes } from "@/constants/routes";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const suggestionKeys = ["0", "1", "2", "3"] as const;

function createMessage(
  role: AiMessage["role"],
  content: string,
  recommendations?: AiMessage["recommendations"],
): AiMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    recommendations,
    createdAt: new Date().toISOString(),
  };
}

export function AiChat() {
  const t = useTranslations("Home");
  const tAi = useTranslations("Ai");
  const locale = useLocale() as Locale;
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q")?.trim() ?? "";
  const [messages, setMessages] = useState<AiMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [lastFailedQuery, setLastFailedQuery] = useState<string | null>(null);
  const [hasSentInitialQuery, setHasSentInitialQuery] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<AiHotelRecommendation | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const shouldAutoScrollRef = useRef(true);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container || !shouldAutoScrollRef.current) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, showFallback]);

  function handleMessagesScroll() {
    const container = messagesContainerRef.current;
    if (!container) return;

    const distanceFromBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight;

    shouldAutoScrollRef.current = distanceFromBottom < 96;
  }

  useEffect(() => {
    if (!initialQuery || hasSentInitialQuery) return;
    setHasSentInitialQuery(true);
    void sendMessage(initialQuery);
  }, [initialQuery, hasSentInitialQuery]);

  async function sendMessage(rawContent: string) {
    const content = rawContent.trim();
    if (!content || isLoading) return;

    setShowFallback(false);
    setLastFailedQuery(null);
    setInput("");
    shouldAutoScrollRef.current = true;

    const userMessage = createMessage("user", content);
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await fetch(routes.api.ai, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: nextMessages.map(({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })),
        }),
      });

      const payload = (await response.json()) as
        | AiAssistantReply
        | { error?: string; friendly?: boolean };

      if (!response.ok) {
        setShowFallback(true);
        setLastFailedQuery(content);
        return;
      }

      if (!("message" in payload) || !payload.message.trim()) {
        setShowFallback(true);
        setLastFailedQuery(content);
        return;
      }

      setMessages((current) => [
        ...current,
        createMessage("assistant", payload.message, payload.recommendations),
      ]);
    } catch {
      setShowFallback(true);
      setLastFailedQuery(content);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSelectHotel(recommendation: AiHotelRecommendation) {
    setSelectedHotel(recommendation);
  }

  function handleAskAboutHotel(hotelName: string) {
    setSelectedHotel(null);
    void sendMessage(tAi("askAboutHotel", { hotelName }));
  }

  return (
    <>
      <div className="flex h-[min(720px,calc(100svh-17rem))] min-h-[560px] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm ring-1 ring-foreground/5">
        <div className="flex min-w-0 flex-1 flex-col">
          <div
            ref={messagesContainerRef}
            onScroll={handleMessagesScroll}
            className="flex-1 space-y-5 overflow-y-auto overscroll-contain px-4 py-6 sm:px-6"
          >
            {messages.length === 0 ? (
              <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-10 text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Sparkles className="size-7" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{tAi("emptyTitle")}</h2>
                  <p className="text-sm text-muted-foreground">{tAi("emptyDescription")}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {suggestionKeys.map((key) => (
                    <Button
                      key={key}
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-auto whitespace-normal rounded-full px-3 py-1.5 text-left text-xs font-normal"
                      onClick={() => void sendMessage(t(`aiSuggestions.${key}`))}
                      disabled={isLoading}
                    >
                      {t(`aiSuggestions.${key}`)}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <AiMessageBubble
                  key={message.id}
                  message={message}
                  selectedHotelSlug={selectedHotel?.hotel.slug}
                  onSelectHotel={handleSelectHotel}
                />
              ))
            )}

            {isLoading ? <AiTypingIndicator /> : null}

            {showFallback ? (
              <AiChatFallbackMessage
                onRetry={
                  lastFailedQuery
                    ? () => void sendMessage(lastFailedQuery)
                    : undefined
                }
              />
            ) : null}
          </div>

          <div className="border-t border-border/60 bg-muted/20 p-4 sm:p-5">
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                void sendMessage(input);
              }}
            >
              <Input
                inputSize="lg"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t("aiPlaceholder")}
                aria-label={t("aiPromptLabel")}
                disabled={isLoading}
                className="flex-1 bg-background"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !input.trim()}
                className={cn("bg-brand-blue hover:bg-brand-blue/90")}
              >
                <Send className="size-4" />
                {t("aiSubmit")}
              </Button>
            </form>
          </div>
        </div>

        {selectedHotel ? (
          <div className="hidden w-[min(100%,420px)] shrink-0 lg:flex">
            <AiHotelDetailPanel
              recommendation={selectedHotel}
              onClose={() => setSelectedHotel(null)}
              onAskAboutHotel={handleAskAboutHotel}
              className="w-full"
            />
          </div>
        ) : null}
      </div>

      <Sheet
        open={Boolean(selectedHotel) && !isDesktop}
        onOpenChange={(open) => !open && setSelectedHotel(null)}
      >
        <SheetContent side="right" className="w-full p-0 sm:max-w-md lg:hidden">
          {selectedHotel ? (
            <AiHotelDetailPanel
              recommendation={selectedHotel}
              onClose={() => setSelectedHotel(null)}
              onAskAboutHotel={handleAskAboutHotel}
              variant="sheet"
              className="h-full"
            />
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}

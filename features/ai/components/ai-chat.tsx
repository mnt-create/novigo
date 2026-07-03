"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Sparkles } from "lucide-react";

import { AiMessageBubble, AiTypingIndicator } from "@/features/ai/components/ai-message-bubble";
import type { AiMessage } from "@/features/ai/types";
import { aiAssistantContent } from "@/features/marketing/data/homepage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/utils";

function createMessage(role: AiMessage["role"], content: string): AiMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: new Date().toISOString(),
  };
}

export function AiChat() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q")?.trim() ?? "";
  const [messages, setMessages] = useState<AiMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSentInitialQuery, setHasSentInitialQuery] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!initialQuery || hasSentInitialQuery) return;
    setHasSentInitialQuery(true);
    void sendMessage(initialQuery);
  }, [initialQuery, hasSentInitialQuery]);

  async function sendMessage(rawContent: string) {
    const content = rawContent.trim();
    if (!content || isLoading) return;

    setError(null);
    setInput("");

    const userMessage = createMessage("user", content);
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setIsLoading(true);

    const assistantId = crypto.randomUUID();
    setMessages((current) => [
      ...current,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        createdAt: new Date().toISOString(),
      },
    ]);

    try {
      const response = await fetch(routes.api.ai, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "AI request failed.");
      }

      const contentType = response.headers.get("content-type") ?? "";

      if (!contentType.includes("text/plain")) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Unexpected AI response format.");
      }

      if (!response.body) {
        throw new Error("Empty AI response stream.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantContent += decoder.decode(value, { stream: true });
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId
              ? { ...message, content: assistantContent }
              : message,
          ),
        );
      }

      if (!assistantContent.trim()) {
        throw new Error("AI returned an empty response.");
      }
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting Novigo AI.";

      setError(message);
      setMessages((current) => current.filter((item) => item.id !== assistantId));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-[560px] flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm ring-1 ring-foreground/5">
      <div
        ref={scrollRef}
        className="flex-1 space-y-5 overflow-y-auto px-4 py-6 sm:px-6"
      >
        {messages.length === 0 ? (
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 py-10 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Sparkles className="size-7" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">How can Novigo AI help?</h2>
              <p className="text-sm text-muted-foreground">
                Describe your trip and get curated hotel recommendations from our catalog.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {aiAssistantContent.suggestions.map((suggestion) => (
                <Button
                  key={suggestion}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-auto whitespace-normal rounded-full px-3 py-1.5 text-left text-xs font-normal"
                  onClick={() => void sendMessage(suggestion)}
                  disabled={isLoading}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((message) =>
            message.role === "assistant" && !message.content && isLoading ? null : (
              <AiMessageBubble key={message.id} message={message} />
            ),
          )
        )}

        {isLoading && !messages.at(-1)?.content ? <AiTypingIndicator /> : null}

        <div ref={endRef} />
      </div>

      <div className="border-t border-border/60 bg-muted/20 p-4 sm:p-5">
        {error ? (
          <p className="mb-3 rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        ) : null}

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
            placeholder={aiAssistantContent.placeholder}
            aria-label="Message Novigo AI"
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
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

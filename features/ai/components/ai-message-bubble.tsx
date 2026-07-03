"use client";

import { Bot, Sparkles, User } from "lucide-react";

import type { AiMessage } from "@/features/ai/types";
import { cn } from "@/lib/utils";

type AiMessageBubbleProps = {
  message: AiMessage;
};

export function AiMessageBubble({ message }: AiMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}
      data-role={message.role}
    >
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full",
          isUser ? "bg-brand-blue text-white" : "bg-muted text-brand-blue",
        )}
      >
        {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
      </div>

      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[75%]",
          isUser
            ? "bg-brand-blue text-white"
            : "border border-border/60 bg-card text-foreground shadow-sm",
        )}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}

type AiTypingIndicatorProps = {
  className?: string;
};

export function AiTypingIndicator({ className }: AiTypingIndicatorProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-brand-blue">
        <Sparkles className="size-4" />
      </div>
      <div className="rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="size-2 animate-pulse rounded-full bg-brand-blue/70" />
          <span className="size-2 animate-pulse rounded-full bg-brand-blue/70 [animation-delay:150ms]" />
          <span className="size-2 animate-pulse rounded-full bg-brand-blue/70 [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

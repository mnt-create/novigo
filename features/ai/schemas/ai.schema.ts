import { z } from "zod";

import { locales } from "@/i18n/routing";

export const aiChatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().trim().min(1).max(4000),
});

export const aiChatRequestSchema = z.object({
  messages: z.array(aiChatMessageSchema).min(1).max(24),
  locale: z.enum(locales).default("tr"),
});

export type AiChatRequest = z.infer<typeof aiChatRequestSchema>;

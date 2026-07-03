import { z } from "zod";

export const aiRecommendationSchema = z.object({
  slug: z.string().min(1),
  reason: z.string().min(1).max(280),
});

export const aiStructuredResponseSchema = z.object({
  message: z.string().min(1).max(4000),
  recommendations: z.array(aiRecommendationSchema).max(4),
});

export type AiStructuredResponse = z.infer<typeof aiStructuredResponseSchema>;

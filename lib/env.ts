import { z } from "zod";

const serverEnvSchema = z.object({
  GEMINI_API_KEY: z.string().min(1).optional(),
  GEMINI_MODEL: z.string().min(1).optional(),
  STRIPE_SECRET_KEY: z.string().min(1).optional(),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  HOTELRUNNER_DEMO_MODE: z.string().min(1).optional(),
  HOTELRUNNER_HR_ID: z.string().min(1).optional(),
  HOTELRUNNER_TOKEN: z.string().min(1).optional(),
  HOTELRUNNER_API_KEY: z.string().min(1).optional(),
  HOTELRUNNER_PROPERTY_NAME: z.string().min(1).optional(),
  HOTELRUNNER_API_URL: z.string().url().optional(),
});

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1).optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
});

function parseEnv<T extends z.ZodTypeAny>(
  schema: T,
  values: Record<string, string | undefined>,
): z.infer<T> {
  const result = schema.safeParse(values);

  if (!result.success) {
    if (process.env.NODE_ENV === "production") {
      console.error("Invalid environment variables:", result.error.flatten().fieldErrors);
      throw new Error("Invalid environment variables");
    }

    console.warn("Environment validation warnings:", result.error.flatten().fieldErrors);
    return schema.parse({});
  }

  return result.data;
}

export const clientEnv = parseEnv(clientEnvSchema, {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

export function getServerEnv() {
  return parseEnv(serverEnvSchema, {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    GEMINI_MODEL: process.env.GEMINI_MODEL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    HOTELRUNNER_DEMO_MODE: process.env.HOTELRUNNER_DEMO_MODE,
    HOTELRUNNER_HR_ID: process.env.HOTELRUNNER_HR_ID,
    HOTELRUNNER_TOKEN: process.env.HOTELRUNNER_TOKEN,
    HOTELRUNNER_API_KEY: process.env.HOTELRUNNER_API_KEY,
    HOTELRUNNER_PROPERTY_NAME: process.env.HOTELRUNNER_PROPERTY_NAME,
    HOTELRUNNER_API_URL: process.env.HOTELRUNNER_API_URL,
  });
}

import { createStructuredAssistantReply } from "@/features/ai/services/ai.service";
import { aiChatRequestSchema } from "@/features/ai/schemas/ai.schema";
import { isGeminiConfigured } from "@/lib/gemini/config";
import { getGeminiErrorMessage, getUserFacingAiErrorMessage } from "@/lib/gemini/errors";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isGeminiConfigured()) {
    return Response.json(
      {
        error:
          "Gemini is not configured. Add GEMINI_API_KEY to your .env.local file and restart the dev server.",
      },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = aiChatRequestSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Invalid request.", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  try {
    const reply = await createStructuredAssistantReply(
      parsed.data.messages,
      parsed.data.locale,
    );
    return Response.json(reply);
  } catch (error) {
    console.error("Gemini chat error:", error);
    const { status } = getGeminiErrorMessage(error);

    return Response.json(
      {
        error: getUserFacingAiErrorMessage(),
        friendly: true,
      },
      { status: status >= 400 ? status : 500 },
    );
  }
}

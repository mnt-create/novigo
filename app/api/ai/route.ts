import { aiChatRequestSchema } from "@/features/ai/schemas/ai.schema";
import { streamAssistantReply } from "@/features/ai/services/ai.service";
import { isGeminiConfigured } from "@/lib/gemini/config";
import { getGeminiErrorMessage } from "@/lib/gemini/errors";

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
    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const text of streamAssistantReply(parsed.data.messages)) {
            controller.enqueue(encoder.encode(text));
          }

          controller.close();
        } catch (streamError) {
          const { message } = getGeminiErrorMessage(streamError);
          controller.error(new Error(message));
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Gemini chat error:", error);
    const { message, status } = getGeminiErrorMessage(error);

    return Response.json({ error: message }, { status: status >= 400 ? status : 500 });
  }
}

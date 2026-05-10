import type { NextRequest } from "next/server";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";
import { getVectorStore } from "@/lib/vectorstore";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * CORS — the chatbot widget lives on a different origin (the TanStack Start
 * portfolio at /naveenrk on a different port locally and a different domain
 * in production). Set ALLOWED_ORIGIN in production to lock this down to the
 * portfolio's exact origin; falls back to "*" for easy local dev.
 */
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "*";
const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  Vary: "Origin",
};

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest) {
  let payload: { messages?: UIMessage[] };
  try {
    payload = await req.json();
  } catch {
    return Response.json(
      { error: "Invalid JSON body. Expected { messages: UIMessage[] }." },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const messages = payload?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json(
      { error: "Missing or empty `messages` array." },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const lastUserText = extractLastUserText(messages);

  let context = "";
  if (lastUserText) {
    const vectorStore = await getVectorStore();
    const relevantDocs = await vectorStore.similaritySearch(lastUserText, 6);

    context = relevantDocs.map((doc) => doc.pageContent).join("\n\n---\n\n");

    console.log(
      "[chat] retrieved chunks:",
      relevantDocs.map((d) => d.metadata?.source ?? "unknown"),
    );
  }

  const systemPrompt = `You are naveen-bot, Naveen Ramkumar Varadarajan's personal portfolio assistant.
You answer questions from recruiters, hiring managers, and visitors about Naveen — his work, projects, skills, experience, and how to reach him.

Style:
- Concise, professional, friendly, and a little enthusiastic — match the vibe of a great recruiter conversation.
- Refer to Naveen by name or "he" — never as "I" or "me" (you are not Naveen, you are his bot).
- Format URLs as markdown links so the chat UI renders them as clickable.

Grounding rules (very important):
- Answer using ONLY the context provided below. Do NOT invent or guess facts that aren't in the context.
- Never claim Naveen knows a tool/framework/language that isn't mentioned in the context.

Fallback behavior — choose the right one based on the question type:

  (A) SKILL / TECH / TOOL questions ("Do you know X?", "Have you used Y?", "Are you familiar with Z?", "Can you work with [framework]?") where X/Y/Z is NOT in the context:
      → Do NOT redirect to LinkedIn. Instead, lean on his fast-learner story.
      → Reply along the lines of: "Naveen hasn't shipped production code in [X] yet, but he's a famously fast, self-motivated learner. His track record — picking up LangChain/LangGraph from scratch and shipping a production RAG system, jumping across PayPal's hardware stack, ZoomInfo's micro-frontend platform, and Prendio's AI stack — shows he can be productive in a new tool within a week and shipping in it within a month."
      → Optionally tie [X] to an adjacent skill he DOES have (e.g., "and his deep TypeScript + Node.js background means [X] would be a natural extension").
      → Keep it confident and positive, never apologetic.

  (B) Personal / private / outreach / scheduling questions (salary, availability specifics, hobbies, "can we set up a call?", anything requiring a real human reply) where the answer is NOT in the context:
      → Reply along the lines of: "I don't have that detail in my knowledge base — but Naveen would love to hear from you directly. The fastest way to reach him is on [LinkedIn](https://www.linkedin.com/in/naveenramkumar-varadarajan-542001116/), or you can email him at naveenrk93@gmail.com. He usually replies within a day."

  (C) Recruiter outreach, hiring conversations, role discussions:
      → Always point them to LinkedIn first as the next step.

Context:
${context || "No additional context available."}`;

  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: systemPrompt,
    messages: modelMessages,
    maxOutputTokens: 800,
    temperature: 0.7,
  });

  return result.toUIMessageStreamResponse({ headers: CORS_HEADERS });
}

function extractLastUserText(messages: UIMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.role !== "user") continue;

    const text = msg.parts
      ?.filter(
        (p): p is { type: "text"; text: string } =>
          p.type === "text" && typeof (p as { text?: unknown }).text === "string",
      )
      .map((p) => p.text)
      .join(" ")
      .trim();

    if (text) return text;
  }
  return "";
}

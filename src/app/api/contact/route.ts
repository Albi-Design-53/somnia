import type { NextRequest } from "next/server";
import { parseContactInput } from "@/lib/contact-form";
import { sendContactEmail } from "@/lib/send-contact-email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Bitte etwas warten und danach erneut senden." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return Response.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const parsed = parseContactInput(body as Record<string, unknown>);
  if (!parsed.ok) {
    return Response.json({ ok: false, error: parsed.error }, { status: 400 });
  }
  if (parsed.spam) {
    return Response.json({ ok: true });
  }

  try {
    await sendContactEmail(parsed.value);
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      {
        ok: false,
        error:
          "Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an die angezeigte E-Mail-Adresse oder rufen Sie uns an.",
      },
      { status: 502 },
    );
  }
}

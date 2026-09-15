import { site } from "@/content/site";
import {
  formatContactEmail,
  type ContactPayload,
} from "@/lib/contact-form";

const FORMSUBMIT_ORIGIN = "https://www.natur-land.ch";

export function contactRecipient() {
  const override = process.env.CONTACT_TO_EMAIL?.trim();
  return override || site.contact.email;
}

async function postJson(
  url: string,
  body: unknown,
  headers: Record<string, string> = {},
) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12_000);
  try {
    return await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

async function sendWithResend(to: string, payload: ContactPayload) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Resend is not configured.");

  const { subject, text } = formatContactEmail(payload);
  const from =
    process.env.RESEND_FROM?.trim() ||
    "Naturland Website <onboarding@resend.dev>";

  const res = await postJson(
    "https://api.resend.com/emails",
    {
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
    },
    { Authorization: `Bearer ${key}` },
  );

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}`);
  }
}

async function sendWithFormSubmit(to: string, payload: ContactPayload) {
  const { subject, text } = formatContactEmail(payload);
  const res = await postJson(
    `https://formsubmit.co/ajax/${encodeURIComponent(to)}`,
    {
      name: `${payload.firstName} ${payload.lastName}`,
      email: payload.email,
      _replyto: payload.email,
      _subject: subject,
      _template: "table",
      _captcha: "false",
      Vorname: payload.firstName,
      Nachname: payload.lastName,
      Telefon: payload.phone || "—",
      Thema: payload.topic,
      Nachricht: payload.message,
      Text: text,
    },
    {
      Origin: FORMSUBMIT_ORIGIN,
      Referer: `${FORMSUBMIT_ORIGIN}/kontakt`,
    },
  );

  const data = (await res.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;

  const success = data?.success === true || data?.success === "true";
  if (!res.ok || !success) {
    throw new Error(data?.message || `FormSubmit responded ${res.status}`);
  }
}

export async function sendContactEmail(payload: ContactPayload) {
  const to = contactRecipient();
  if (process.env.RESEND_API_KEY) {
    try {
      await sendWithResend(to, payload);
      return;
    } catch {
      // Fall through so the displayed address still receives the message.
    }
  }
  await sendWithFormSubmit(to, payload);
}

import { site } from "@/content/site";
import {
  formatContactEmail,
  type ContactPayload,
} from "@/lib/contact-form";

export function contactRecipient() {
  const override = process.env.CONTACT_TO_EMAIL?.trim();
  return override || site.contact.email;
}

export class NoServerMailerError extends Error {
  constructor() {
    super("NO_SERVER_MAILER");
    this.name = "NoServerMailerError";
  }
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

export async function sendContactEmail(payload: ContactPayload) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new NoServerMailerError();

  const to = contactRecipient();
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

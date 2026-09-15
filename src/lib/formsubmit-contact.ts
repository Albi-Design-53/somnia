import { formatContactEmail, type ContactPayload } from "@/lib/contact-form";

function formSubmitBody(payload: ContactPayload) {
  const { subject, text } = formatContactEmail(payload);
  return {
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
  };
}

export function formSubmitUrl(to: string) {
  return `https://formsubmit.co/ajax/${encodeURIComponent(to)}`;
}

export async function sendContactViaFormSubmit(
  to: string,
  payload: ContactPayload,
) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12_000);
  try {
    const res = await fetch(formSubmitUrl(to), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSubmitBody(payload)),
      signal: controller.signal,
    });
    const data = (await res.json().catch(() => null)) as
      | { success?: boolean | string; message?: string }
      | null;
    const success = data?.success === true || data?.success === "true";
    if (!res.ok || !success) {
      throw new Error(data?.message || `FormSubmit responded ${res.status}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

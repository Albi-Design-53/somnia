import { contactTopics } from "@/content/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

export type ParseContactResult =
  | { ok: true; spam: true }
  | { ok: true; spam: false; value: ContactPayload }
  | { ok: false; error: string };

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export function parseContactInput(
  input: Record<string, unknown>,
): ParseContactResult {
  const honeypot = clip(input.website ?? input.company, 200);
  if (honeypot) return { ok: true, spam: true };

  const firstName = clip(input.firstName, 80);
  const lastName = clip(input.lastName, 80);
  const email = clip(input.email, 120).toLowerCase();
  const phone = clip(input.phone, 40);
  const topic = clip(input.topic, 80);
  const message =
    typeof input.message === "string" ? input.message.trim().slice(0, 4000) : "";

  if (!firstName || !lastName) {
    return { ok: false, error: "Bitte Vor- und Nachname angeben." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Bitte eine gültige E-Mail-Adresse angeben." };
  }
  if (!(contactTopics as readonly string[]).includes(topic)) {
    return { ok: false, error: "Bitte ein Thema wählen." };
  }
  if (message.length < 5) {
    return { ok: false, error: "Bitte eine Nachricht schreiben." };
  }

  return {
    ok: true,
    spam: false,
    value: { firstName, lastName, email, phone, topic, message },
  };
}

export function formatContactEmail(payload: ContactPayload) {
  const name = `${payload.firstName} ${payload.lastName}`;
  return {
    subject: `Anfrage über natur-land.ch: ${payload.topic}`,
    text: [
      "Neue Anfrage über das Kontaktformular auf natur-land.ch",
      "",
      `Name: ${name}`,
      `E-Mail: ${payload.email}`,
      `Telefon: ${payload.phone || "—"}`,
      `Thema: ${payload.topic}`,
      "",
      "Nachricht:",
      payload.message,
    ].join("\n"),
  };
}

export function mailtoForContact(to: string, payload: ContactPayload) {
  const { subject, text } = formatContactEmail(payload);
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactTopics, site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { mailtoForContact, parseContactInput } from "@/lib/contact-form";
import { sendContactViaFormSubmit } from "@/lib/formsubmit-contact";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const parsed = parseContactInput({
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      phone: form.get("phone"),
      topic: form.get("topic"),
      message: form.get("message"),
      website: form.get("website"),
    });

    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }
    if (parsed.spam) {
      setSent(true);
      return;
    }

    const payload = parsed.value;
    setMailto(mailtoForContact(site.contact.email, payload));
    setSending(true);
    try {
      let delivered = false;
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = (await res.json().catch(() => null)) as
          | { ok?: boolean }
          | null;
        if (data?.ok) delivered = true;
      } catch {
        // Browser delivery below still reaches the displayed address.
      }

      if (!delivered) {
        await sendContactViaFormSubmit(site.contact.email, payload);
      }
      setSent(true);
    } catch {
      setError(
        "Die Nachricht konnte nicht gesendet werden. Bitte schreiben Sie direkt an die angezeigte E-Mail-Adresse.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="kontakt" className="bg-cream py-28 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Kontakt</Eyebrow>
            <h2 className="display-md mt-5">
              Sprechen wir über Ihren Schlaf.
            </h2>
            <p className="lede mt-5 max-w-md text-muted">
              Nachrichten, Anregungen, Lob und Kritik – wir freuen uns. Mutter
              und Sohn Graziella und Roger Zwiker melden sich persönlich.
            </p>

            <ul className="mt-10 space-y-5 text-[15px]">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-bronze" />
                <a href={site.contact.phoneHref}>{site.contact.phone}</a>
                <span className="text-muted">/</span>
                <a href={site.contact.phone2Href}>{site.contact.phone2}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-bronze" />
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-bronze" />
                <span>
                  {site.contact.addressLine1}
                  <br />
                  {site.contact.addressLine2}
                </span>
              </li>
            </ul>

            <div className="mt-8 space-y-1 text-[15px] text-muted">
              {site.contact.hours.map((h) => (
                <p key={h.days}>
                  {h.days}: {h.time}
                </p>
              ))}
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              {site.contact.travel.transit}
            </p>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
              {site.contact.travel.carZurich}
            </p>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
              {site.contact.travel.carChur}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            {sent ? (
              <div className="border border-sand bg-ivory px-8 py-16">
                <p className="label text-bronze">Naturland</p>
                <h3 className="mt-3 font-serif text-4xl tracking-[-0.03em]">Vielen Dank.</h3>
                <p className="lede mt-4 max-w-md text-muted">
                  Ihre Nachricht geht an {site.contact.email}. Wir melden uns
                  persönlich.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2">
                <Field label="Vorname" name="firstName" autoComplete="given-name" required />
                <Field label="Nachname" name="lastName" autoComplete="family-name" required />
                <Field
                  label="E-Mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field
                  label="Telefonnummer"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
                <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
                <label className="sm:col-span-2">
                  <span className="label mb-2 block text-muted">
                    Thema
                  </span>
                  <select
                    name="topic"
                    className="field"
                    defaultValue={contactTopics[0]}
                  >
                    {contactTopics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="sm:col-span-2">
                  <span className="label mb-2 block text-muted">
                    Nachricht
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    minLength={5}
                    maxLength={4000}
                    className="field resize-none"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={sending}
                    aria-busy={sending}
                    className="group/btn relative inline-flex overflow-hidden border border-bronze bg-bronze px-8 py-4 text-[13px] font-medium tracking-[0.14em] uppercase text-ivory after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-charcoal after:transition-transform after:duration-300 hover:after:scale-x-100 disabled:pointer-events-none disabled:opacity-60"
                  >
                    <span className="relative z-10 inline-flex items-center gap-3 transition-transform duration-300 group-hover/btn:translate-x-0.5">
                      {sending ? "Wird gesendet" : "Anfrage senden"}
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
                  {error ? (
                    <div className="mt-4 max-w-md text-[15px] leading-relaxed text-muted" role="alert">
                      <p>{error}</p>
                      {mailto ? (
                        <p className="mt-2">
                          <a className="text-ink underline decoration-bronze/60 underline-offset-4" href={mailto}>
                            Nachricht direkt an {site.contact.email} senden
                          </a>
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label>
      <span className="label mb-2 block text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={name === "email" ? 120 : 80}
        className="field"
      />
    </label>
  );
}
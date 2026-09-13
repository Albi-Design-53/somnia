"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactTopics, site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
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
                  Wir haben Ihre Nachricht aufgenommen und melden uns persönlich.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Vorname" name="firstName" required />
                <Field label="Nachname" name="lastName" required />
                <Field label="E-Mail" name="email" type="email" required />
                <Field label="Telefonnummer" name="phone" type="tel" />
                <label className="sm:col-span-2">
                  <span className="label mb-2 block text-muted">
                    Thema
                  </span>
                  <select
                    name="topic"
                    className="field"
                    defaultValue="Schlafberatung"
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
                    className="field resize-none"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group/btn relative inline-flex overflow-hidden border border-bronze bg-bronze px-8 py-4 text-[13px] font-medium tracking-[0.14em] uppercase text-ivory after:absolute after:inset-0 after:origin-left after:scale-x-0 after:bg-charcoal after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    <span className="relative z-10 inline-flex items-center gap-3 transition-transform duration-300 group-hover/btn:translate-x-0.5">
                      Anfrage senden
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="field"
      />
    </label>
  );
}

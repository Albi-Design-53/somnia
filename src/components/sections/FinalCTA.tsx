"use client";

import Image from "next/image";
import { images } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative h-[88svh] min-h-[560px] overflow-hidden bg-cream">
      <div className="hero-kenburns absolute inset-0">
        <Image
          src={images.finalCta}
          alt="Bettrahmen Jana – Einladung zur persönlichen Beratung"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-ink/20"
        aria-hidden
      />
      <Container className="relative z-10 flex h-full items-end pb-16 pt-24 sm:pb-24">
        <div>
          <Reveal>
            <h2 className="display max-w-5xl text-ivory">
              Ihr besserer Schlaf beginnt hier.
            </h2>
          </Reveal>
          <Reveal delay={0.12} variant="fade">
            <p className="lede mt-6 max-w-2xl text-ivory/88">
              Lassen Sie sich persönlich beraten. Natürliche Schlafsysteme,
              Massivholz, vier Schichten – abgestimmt auf Ihren Körper.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/kontakt" variant="light">
                Beratung vereinbaren
              </Button>
              <Button href="/showroom" variant="dark-ghost">
                Showroom besuchen
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

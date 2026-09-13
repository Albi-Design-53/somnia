import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  compact = false,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  const withImage = Boolean(image);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-cream",
        withImage
          ? compact
            ? "h-[64svh] min-h-[420px]"
            : "h-[92svh] min-h-[560px]"
          : "pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24",
      )}
    >
      {withImage ? (
        <>
          <div className="hero-kenburns absolute inset-0">
            <Image
              src={image!}
              alt={imageAlt}
              fill
              priority
              quality={85}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-ink/35"
            aria-hidden
          />
        </>
      ) : null}
      <Container
        className={cn(
          "relative z-10",
          withImage && "flex h-full items-end pb-24 pt-28 sm:pb-20",
        )}
      >
        <Reveal className={cn("max-w-4xl", withImage && "text-ivory")}>
          <Eyebrow className={withImage ? "text-ivory/75" : undefined}>
            {eyebrow}
          </Eyebrow>
          <h1
            className={cn(
              "display-md mt-4",
              withImage ? "text-ivory" : "text-ink",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "lede mt-5 max-w-2xl",
              withImage ? "text-ivory/88" : "text-muted",
            )}
          >
            {text}
          </p>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}

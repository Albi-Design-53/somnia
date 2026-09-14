import Image from "next/image";
import Link from "next/link";
import { productWorlds } from "@/content/product-worlds";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ProductWorldsGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid items-start gap-5 sm:grid-cols-3 lg:gap-6",
        className,
      )}
    >
      {productWorlds.map((world, i) => (
        <Reveal key={world.href} delay={i * 0.06}>
          <Link
            href={world.href}
            className="group relative block overflow-hidden bg-cream"
          >
            <span className={cn("relative block", world.frame)}>
              <Image
                src={world.image}
                alt={world.title}
                fill
                unoptimized
                quality={100}
                className={cn(
                  "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                  world.position ?? "object-[center_42%]",
                )}
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </span>
            <span className="block border-t border-sand/80 px-5 py-6 sm:px-6 sm:py-7">
              <span className="label text-bronze">{world.n}</span>
              <span className="mt-2 block font-serif text-[1.85rem] tracking-[-0.03em] text-ink sm:text-[2.1rem]">
                {world.title}
              </span>
              <span className="mt-2 block text-[15px] leading-relaxed text-muted">
                {world.text}
              </span>
              <span className="label mt-5 inline-flex text-bronze transition-transform duration-300 group-hover:translate-x-1">
                Ansehen →
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { productWorlds } from "@/content/product-worlds";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function ProductWorldsGrid({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-5 lg:gap-6", className)}>
      {productWorlds.map((world, i) => (
        <Reveal key={world.href} delay={i * 0.06}>
          <Link href={world.href} className="group block">
            <article className="overflow-hidden bg-ivory md:grid md:grid-cols-12 md:items-stretch">
              <div className="relative aspect-[16/10] overflow-hidden bg-cream md:col-span-6">
                <Image
                  src={world.image}
                  alt={world.title}
                  fill
                  unoptimized
                  quality={100}
                  className={cn(
                    "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                    world.position ?? "object-center",
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center border-t border-sand/80 px-6 py-6 sm:px-8 sm:py-7 md:col-span-6 md:border-t-0 md:border-l">
                <p className="label text-bronze">{world.n}</p>
                <h3 className="mt-2 font-serif text-[1.75rem] tracking-[-0.03em] text-ink sm:text-[1.9rem]">
                  {world.title}
                </h3>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                  {world.text}
                </p>
                <span className="label mt-4 inline-flex text-ink transition-transform duration-300 group-hover:translate-x-1">
                  Ansehen →
                </span>
              </div>
            </article>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

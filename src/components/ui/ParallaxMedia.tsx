"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";
import { easeOut } from "@/lib/motion";
import { useFineMotion } from "@/hooks/useFineMotion";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
  strength?: number;
};

export function ParallaxMedia({
  src,
  alt,
  sizes,
  className,
  priority,
  unoptimized,
  strength = 28,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const { parallax, reduce, mobile } = useFineMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const amount = mobile ? strength * 0.45 : strength;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [-amount, amount] : [0, 0],
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{ y }}
        className="absolute -top-[10%] left-0 h-[120%] w-full will-change-transform"
        initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0.72, scale: 1.06 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: reduce ? 0 : 1.25, ease: easeOut }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized={unoptimized}
          quality={unoptimized ? 100 : 75}
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}

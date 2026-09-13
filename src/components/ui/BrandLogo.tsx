import Image from "next/image";
import { cn } from "@/lib/cn";

export function BrandLogo({
  className,
  priority,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo-wordmark.png"
      alt="Naturland"
      width={807}
      height={194}
      priority={priority}
      className={cn("h-8 w-auto sm:h-9", className)}
    />
  );
}

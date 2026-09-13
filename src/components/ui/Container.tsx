import { cn } from "@/lib/cn";

export const shellPad =
  "px-5 sm:px-8 lg:px-12 xl:px-[4vw] 2xl:px-[5.5vw]";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full", shellPad, className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label flex items-center gap-3 text-bronze", className)}>
      <span className="h-px w-7 bg-current opacity-45" aria-hidden />
      {children}
    </p>
  );
}

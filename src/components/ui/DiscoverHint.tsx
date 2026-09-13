export function DiscoverHint({ label = "Entdecken" }: { label?: string }) {
  return (
    <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-[5.25rem] w-[5.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/55 bg-bronze/35 text-center text-[12px] font-medium tracking-[0.12em] uppercase text-ivory opacity-0 backdrop-blur-[6px] transition-opacity duration-500 group-hover:opacity-100 [@media(hover:hover)_and_(pointer:fine)]:flex">
      {label}
    </span>
  );
}

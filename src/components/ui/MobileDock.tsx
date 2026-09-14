import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand/80 bg-ivory/94 px-4 pt-3 backdrop-blur-xl md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2">
        <a
          href={site.cta.href}
          className="flex min-h-12 flex-1 items-center justify-center bg-bronze px-4 text-[12px] font-medium tracking-[0.14em] uppercase text-ivory"
        >
          {site.cta.primary}
        </a>
        <a
          href={site.contact.phone2Href}
          aria-label="Anrufen"
          className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/15 text-ink"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  );
}

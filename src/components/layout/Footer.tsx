import Link from "next/link";
import { site } from "@/content/site";
import { productNavGroups } from "@/content/product-worlds";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

const columns = [
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Sortiment",
    links: [
      { label: "Produkte", href: "/produkte" },
      ...productNavGroups.flatMap((group) => [...group.items]),
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Termin vereinbaren", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-sand bg-cream text-ink">
      <Container className="py-20 pb-[calc(6.5rem+env(safe-area-inset-bottom))] lg:py-28 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <BrandLogo className="h-12 w-auto sm:h-14" />
            <p className="label mt-3 text-bronze">
              {site.tagline}
            </p>
            <div className="mt-10 space-y-2 text-[15px] leading-relaxed text-muted">
              <p>
                {site.contact.addressLine1}
                <br />
                {site.contact.addressLine2}
              </p>
              <p>
                <a href={site.contact.phoneHref} className="hover:text-ink">
                  {site.contact.phone}
                </a>
                {" / "}
                <a href={site.contact.phone2Href} className="hover:text-ink">
                  {site.contact.phone2}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.contact.email}`} className="hover:text-ink">
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="label text-bronze">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-sand pt-8 text-[13px] text-stone">
          <p>© {new Date().getFullYear()} Naturland.</p>
        </div>
      </Container>
    </footer>
  );
}

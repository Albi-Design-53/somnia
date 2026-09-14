import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MobileDock } from "@/components/ui/MobileDock";
import { CookieBanner } from "@/components/ui/CookieBanner";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#efe0c8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://natur-land.ch"),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    locale: "de_CH",
    type: "website",
    siteName: site.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: site.name,
  description: site.seo.description,
  telephone: ["+41712780086", "+41794240724"],
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.addressLine1,
    addressLocality: "St. Gallen",
    postalCode: "9000",
    addressCountry: "CH",
  },
  openingHours: "Tu-Fr 10:00-18:00, Sa 10:00-16:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <div className="grain" aria-hidden />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileDock />
        <CookieBanner />
      </body>
    </html>
  );
}

import { site, products, bedTopics, type Product, type DueGuideMode, isMissingValue } from "@/content/site";

export type ProductPageContent = {
  eyebrow: string;
  title: string;
  claim: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageLayout?: "photo" | "sheet";
  imageWidth?: number;
  imageHeight?: number;
  photoCredit?: string;
  gallery: { src: string; alt: string }[];
  specs: { label: string; value: string }[];
  priceFrom: string;
  priceNote: string;
  priceGuide: DueGuideMode | null;
  trust: { title: string; text: string }[];
  sections: { title: string; text: string }[];
  steps: string[];
  parent: { href: string; label: string };
  relatedLayout?: "circle" | "rect";
  related: {
    href: string;
    title: string;
    image: string;
    imageAlt: string;
    category: string;
  }[];
  jsonLd: Record<string, unknown>;
};

type Topic = (typeof bedTopics)[number];

const DEFAULT_PRICE_NOTE =
  "Den verbindlichen Preis inkl. Lieferung und Montage nennen wir in der Beratung. Online erscheint bewusst kein Betrag.";

const DEFAULT_TRUST = [
  {
    title: "Beratung",
    text: "Härte, Mass und Aufbau entscheiden wir im Liegen – im Laden am Gallusplatz oder mit dem mobilen Bettenstudio.",
  },
  {
    title: "Garantie",
    text: "Für fanello-Schlafsysteme: 10 Jahre auf Matratze und Stützelement, 5 Jahre auf den Einlegerahmen. Ob das auf dieses Stück zutrifft, klären wir vor Ort.",
  },
  {
    title: "Herkunft",
    text: "Natürliche, schadstofffreie Rohstoffe. Viele Systeme werden in der Schweiz hergestellt. Die genaue Herkunft des gewählten Aufbaus sagen wir Ihnen in der Beratung.",
  },
] as const;

const MASSIVHOLZ_SLUGS = new Set(["jana", "bondo", "viktoria", "marco"]);

const MASSIVHOLZ_SECTIONS = [
  {
    title: "100 % metallfreie Bauweise",
    text: "Das Gestell wird über präzise Holzsteckverbindungen montiert. Dies garantiert absolute Freiheit von elektromagnetischen Störfeldern, höchste Stabilität und ein vollkommen lautloses, quietschfreies Bettelement.",
  },
  {
    title: "Schweizer Qualitätsfertigung",
    text: "Hergestellt in regionaler Schreinerarbeit aus heimischen Holzarten (wie Arve/Zirbe, Eiche, Kernbuche, Nussbaum, Kirschbaum oder Ahorn). Das sichert kurze Transportwege, nachhaltige Forstwirtschaft und höchste Verarbeitungsstandards.",
  },
  {
    title: "Biologisch geölte Oberfläche",
    text: "Die Veredelung mit natürlichen Ölen lässt die Poren des Holzes offen. Das Bett bleibt atmungsaktiv, unterstützt die Feuchtigkeitsregulierung im Schlafzimmer und fühlt sich haptisch seidenweich und warm an.",
  },
  {
    title: "Modulares Design (4 Rückenlehnen)",
    text: "Das Kopfteil lässt sich variabel aus vier verschiedenen Designvarianten wählen – von schlichten, durchgehenden Holzpaneelen bis hin zu Modellen mit feinen Ausfräsungen oder sanft geschwungenen Ergonomie-Konturen.",
  },
  {
    title: "Flexibilität und Massanfertigung",
    text: "Sondergrössen (z. B. Überlängen von 210/220 cm oder Sonderbreiten), individuelle Einlege-Tiefen für Einlegeroste sowie massgeschneiderte Beistelltische sind auf Kundenwunsch problemlos umsetzbar.",
  },
] as const;

function dueGuide(slug: string): DueGuideMode | null {
  if (slug === "fanello-naturbett") return "system";
  if (slug === "mobiles-bettenstudio") return "visit";
  if (slug === "lignum") return "frame";
  return null;
}

function numericPrice(priceFrom: string) {
  const match = priceFrom.match(/(\d[\d']*)/);
  return match ? match[1].replace(/'/g, "") : undefined;
}

function productHref(product: Product) {
  return product.kind === "matratze"
    ? `/matratzen/${product.slug}`
    : `/betten/${product.slug}`;
}

function publishedSpecs(specs: { label: string; value: string }[]) {
  return specs.filter((spec) => !isMissingValue(spec.value));
}

const FRAME_SLUGS = new Set(["origin", "lignum"]);

function garantieValue(kind: "bett" | "matratze" | "topic", slug: string) {
  if (slug === "fanello-naturbett") {
    return "10 Jahre auf den Rahmen, 5 Jahre auf Matratze und Auflage";
  }
  if (slug === "mobiles-bettenstudio") return null;
  if (kind === "bett" || FRAME_SLUGS.has(slug) || slug === "massivholz" || slug === "natur-boxspringbett") {
    return "10 Jahre";
  }
  return "5 Jahre";
}

function withGarantie(
  specs: { label: string; value: string }[],
  kind: "bett" | "matratze" | "topic",
  slug: string,
) {
  if (specs.some((spec) => spec.label === "Garantie")) return specs;
  const value = garantieValue(kind, slug);
  if (!value) return specs;
  return [...specs, { label: "Garantie", value }];
}

function absoluteUrl(path: string) {
  return new URL(path, "https://natur-land.ch").toString();
}

function productJsonLd(
  name: string,
  description: string,
  image: string,
  urlPath: string,
  extra: Record<string, unknown> = {},
  price?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: absoluteUrl(image),
    url: absoluteUrl(urlPath),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(urlPath),
      availability: "https://schema.org/InStoreOnly",
      priceCurrency: "CHF",
      ...(price ? { price } : {}),
      seller: {
        "@type": "FurnitureStore",
        name: site.legalName,
      },
    },
    ...extra,
  };
}

function productThumb(item: Product) {
  return {
    image: item.cardImage ?? item.image,
    imageAlt:
      item.cardImageAlt ??
      item.imageAlt ??
      `${item.name} – ${item.category}`,
  };
}

function toRelated(item: {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  category: string;
}) {
  return item;
}

export function productToContent(product: Product): ProductPageContent {
  const href = productHref(product);

  const frameSiblings = products
    .filter((item) => MASSIVHOLZ_SLUGS.has(item.slug) && item.slug !== product.slug)
    .map((item) => {
      const thumb = productThumb(item);
      return toRelated({
        href: productHref(item),
        title: item.name,
        image: thumb.image,
        imageAlt: thumb.imageAlt,
        category: item.category,
      });
    });

  const related = MASSIVHOLZ_SLUGS.has(product.slug) ? frameSiblings : [];

  const imageAlt = product.imageAlt ?? `${product.name} – ${product.category}`;
  const isMassivholz = MASSIVHOLZ_SLUGS.has(product.slug);

  return {
    eyebrow: product.category,
    title: product.name,
    claim: isMassivholz ? "" : product.excerpt,
    description: product.description,
    bullets: product.bullets,
    image: product.image,
    imageAlt,
    imageLayout: product.imageLayout,
    imageWidth: product.imageWidth,
    imageHeight: product.imageHeight,
    gallery: product.gallery.map((src, i) => ({
      src,
      alt: i === 0 ? imageAlt : `${product.name}, Detail ${i + 1}`,
    })),
    specs: isMassivholz
      ? []
      : withGarantie(publishedSpecs(product.specs), product.kind, product.slug),
    priceFrom: isMissingValue(product.priceFrom)
      ? "Preise auf Anfrage"
      : product.priceFrom,
    priceNote: product.priceNote ?? DEFAULT_PRICE_NOTE,
    priceGuide: dueGuide(product.slug),
    trust: product.trust ?? [...DEFAULT_TRUST],
    sections: isMassivholz ? [...MASSIVHOLZ_SECTIONS] : (product.sections ?? []),
    steps: [],
    parent:
      product.kind === "matratze"
        ? { href: "/matratzen", label: "Matratzen" }
        : isMassivholz
          ? { href: "/betten", label: "Bettrahmen" }
          : { href: "/produkte", label: "Produkte" },
    relatedLayout: isMassivholz ? "circle" : "rect",
    related,
    jsonLd: productJsonLd(
      product.name,
      product.excerpt,
      product.image,
      href,
      product.kind === "matratze"
        ? { brand: { "@type": "Brand", name: "fanello swiss" } }
        : {},
      numericPrice(product.priceFrom),
    ),
  };
}

export function topicToContent(topic: Topic): ProductPageContent {
  const href = `/betten/${topic.slug}`;
  const related =
    topic.slug === "massivholz"
      ? products
          .filter((item) => MASSIVHOLZ_SLUGS.has(item.slug))
          .map((item) => {
            const thumb = productThumb(item);
            return {
              href: productHref(item),
              title: item.name,
              image: thumb.image,
              imageAlt: thumb.imageAlt,
              category: item.category,
            };
          })
      : [];

  return {
    eyebrow: topic.eyebrow,
    title: topic.title,
    claim: topic.lede,
    description: topic.description,
    bullets: [...topic.points],
    image: topic.image,
    imageAlt: topic.imageAlt,
    gallery: topic.gallery.map((src, i) => ({
      src,
      alt: i === 0 ? topic.imageAlt : `${topic.title}, Ansicht ${i + 1}`,
    })),
    specs:
      topic.slug === "natur-boxspringbett" ||
      topic.slug === "mobiles-bettenstudio"
        ? []
        : withGarantie(publishedSpecs([...topic.specs]), "topic", topic.slug),
    priceFrom: isMissingValue(topic.priceFrom)
      ? "Preise auf Anfrage"
      : topic.priceFrom,
    priceNote: topic.priceNote,
    priceGuide:
      topic.slug === "mobiles-bettenstudio" ||
      topic.slug === "natur-boxspringbett"
        ? null
        : dueGuide(topic.slug),
    trust: [...topic.trust],
    sections: [...topic.sections],
    steps: [...topic.steps],
    parent: { href: "/produkte", label: "Produkte" },
    relatedLayout: topic.slug === "massivholz" ? "circle" : "rect",
    related,
    jsonLd:
      topic.slug === "mobiles-bettenstudio"
        ? {
            "@context": "https://schema.org",
            "@type": "Service",
            name: topic.title,
            description: topic.lede,
            url: absoluteUrl(href),
            image: absoluteUrl(topic.image),
            provider: {
              "@type": "FurnitureStore",
              name: site.legalName,
            },
            areaServed: "CH",
          }
        : productJsonLd(
            topic.title,
            topic.lede,
            topic.image,
            href,
            topic.slug === "massivholz"
              ? {}
              : { brand: { "@type": "Brand", name: "fanello swiss" } },
            topic.slug === "massivholz" ? undefined : numericPrice(topic.priceFrom),
          ),
  };
}

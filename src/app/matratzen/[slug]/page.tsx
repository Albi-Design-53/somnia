import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/content/site";
import { ProductDetail } from "@/components/ui/ProductDetail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.filter((p) => p.kind === "matratze").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = `${product.name} – ${product.category}`;
  return {
    title,
    description: product.excerpt,
    openGraph: {
      title,
      description: product.excerpt,
      images: [product.image],
    },
  };
}

export default async function MattressProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || product.kind !== "matratze") notFound();
  return <ProductDetail product={product} />;
}

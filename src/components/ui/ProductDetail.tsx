import type { Product } from "@/content/site";
import { productToContent } from "@/lib/product-content";
import { ProductPage } from "@/components/ui/ProductPage";

export function ProductDetail({ product }: { product: Product }) {
  return <ProductPage content={productToContent(product)} />;
}

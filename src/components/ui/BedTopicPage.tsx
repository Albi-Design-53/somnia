import { bedTopics } from "@/content/site";
import { topicToContent } from "@/lib/product-content";
import { ProductPage } from "@/components/ui/ProductPage";

type Topic = (typeof bedTopics)[number];

export function BedTopicPage({ topic }: { topic: Topic }) {
  return <ProductPage content={topicToContent(topic)} />;
}

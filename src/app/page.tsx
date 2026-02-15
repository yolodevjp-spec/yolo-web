import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import articlesData from "@/data/articles.json";

const MAIN_CATEGORIES = ["ai", "sales", "marketing", "productivity"];

export const metadata: Metadata = {
  title: "Vertical SaaS Hunter | Home",
  description: "AI、Sales、Marketing、Productivityの記事を集約。垂直型SaaSとビジネス成長のインサイト。",
  openGraph: { title: "Vertical SaaS Hunter | Home", description: "AI、Sales、Marketing、Productivityの記事を集約。" },
};

export default function HomePage() {
  const articles = MAIN_CATEGORIES.flatMap((cat) =>
    (articlesData as Record<string, typeof articlesData.ai>)[cat] || []
  );

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="Category Feed" />
      </main>
    </div>
  );
}

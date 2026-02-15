import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import articlesData from "@/data/articles.json";

const MAIN_CATEGORIES = ["ai", "sales", "marketing", "productivity"];

export const metadata: Metadata = {
  title: "Trend | Vertical SaaS Hunter",
  description: "AI、Sales、Marketing、Productivityのトレンド記事をまとめて閲覧。",
  openGraph: { title: "Trend | Vertical SaaS Hunter", description: "トレンド記事一覧。" },
};

export default function TrendPage() {
  const articles = MAIN_CATEGORIES.flatMap(
    (cat) => (articlesData as Record<string, typeof articlesData.ai>)[cat] || []
  );

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="Trend Feed" />
      </main>
    </div>
  );
}

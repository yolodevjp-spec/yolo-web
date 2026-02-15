import type { Metadata } from "next";
import HeaderShields from "@/components/HeaderShields";
import ArticleGrid from "@/components/ArticleGrid";
import articlesData from "@/data/articles.json";

export const metadata: Metadata = {
  title: "Marketing | Vertical SaaS Hunter",
  description: "MA、SEO、ABM、パフォーマンス広告などマーケティングの記事一覧。",
  openGraph: { title: "Marketing | Vertical SaaS Hunter", description: "マーケティングの記事一覧。" },
};

export default function MarketingPage() {
  const articles = (articlesData as Record<string, typeof articlesData.marketing>).marketing || [];

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <HeaderShields />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="Marketing Feed" />
      </main>
    </div>
  );
}

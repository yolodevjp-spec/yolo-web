import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import articlesData from "@/data/articles.json";

export const metadata: Metadata = {
  title: "Sales | Vertical SaaS Hunter",
  description: "CRM、リードスコアリング、営業予測などセールス強化の記事一覧。",
  openGraph: { title: "Sales | Vertical SaaS Hunter", description: "セールス強化の記事一覧。" },
};

export default function SalesPage() {
  const articles = (articlesData as Record<string, typeof articlesData.sales>).sales || [];

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="Sales Feed" />
      </main>
    </div>
  );
}

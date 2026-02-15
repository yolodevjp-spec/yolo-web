import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import articlesData from "@/data/articles.json";

export const metadata: Metadata = {
  title: "Productivity | Vertical SaaS Hunter",
  description: "Notion、プロジェクト管理、自動化など生産性向上の記事一覧。",
  openGraph: { title: "Productivity | Vertical SaaS Hunter", description: "生産性向上の記事一覧。" },
};

export default function ProductivityPage() {
  const articles = (articlesData as Record<string, typeof articlesData.productivity>).productivity || [];

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="Productivity Feed" />
      </main>
    </div>
  );
}

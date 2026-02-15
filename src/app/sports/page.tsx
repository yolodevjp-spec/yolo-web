import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "スポーツ | YOLO-WEB",
  description: "スポーツ記事一覧",
};

export default function SportsPage() {
  const articles = getArticlesByCategory("sports");
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="スポーツ" />
      </main>
    </div>
  );
}

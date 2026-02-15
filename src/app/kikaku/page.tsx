import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "企画 | YOLO-WEB",
  description: "企画（検証・プロジェクト）記事一覧",
};

export default function KikakuPage() {
  const articles = getArticlesByCategory("kikaku");
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="企画" />
      </main>
    </div>
  );
}

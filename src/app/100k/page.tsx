import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "10万+ | YOLO-WEB",
  description: "10万+記事一覧",
};

export default function Page100k() {
  const articles = getArticlesByCategory("100k");
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="10万+" />
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "トーク | YOLO-WEB",
  description: "トーク（対談・喋り）記事一覧",
};

export default function TalkPage() {
  const articles = getArticlesByCategory("talk");
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="トーク" />
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByCategory } from "@/lib/articles";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "YOLO-WEB | メディア帝国",
  description: "トレンド、10万+、企画、トーク、芸能、スポーツ、音楽、社会、昨日のまとめ。",
  openGraph: { title: "YOLO-WEB", description: "トレンドから昨日のまとめまで。" },
};

export default function HomePage() {
  const articles = getArticlesByCategory("trend");
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="トレンド" />
      </main>
    </div>
  );
}

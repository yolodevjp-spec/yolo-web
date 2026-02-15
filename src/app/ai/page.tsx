import type { Metadata } from "next";
import ArticleGrid from "@/components/ArticleGrid";
import articlesData from "@/data/articles.json";

export const metadata: Metadata = {
  title: "AI | Vertical SaaS Hunter",
  description: "生成AI、機械学習、RAG、エージェントなどAI活用の記事一覧。",
  openGraph: { title: "AI | Vertical SaaS Hunter", description: "AI活用の記事一覧。" },
};

export default function AIPage() {
  const articles = (articlesData as Record<string, typeof articlesData.ai>).ai || [];

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <ArticleGrid articles={articles} title="AI Feed" />
      </main>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import articlesData from "@/data/articles.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articles = (articlesData as Record<string, { slug: string; title: string; excerpt: string }[]>).ai || [];
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Vertical SaaS Hunter`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const articles = (articlesData as Record<string, { slug: string; title: string; excerpt: string; date: string }[]>).ai || [];
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Link href="/ai" className="text-gray-400 hover:text-white text-sm mb-6 inline-block">← AI一覧</Link>
        <article>
          <h1 className="text-3xl font-black mb-4">{article.title}</h1>
          <p className="text-gray-400 text-sm mb-6">{new Date(article.date).toLocaleDateString("ja-JP")}</p>
          <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
        </article>
      </main>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getArticleBySlug, getRelatedArticles, getCategoryLabel } from "@/lib/articles";
import { simpleMarkdownToHtml } from "@/lib/markdown";
import AdSlot from "@/components/AdSlot";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | YOLO-WEB`,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt },
  };
}

function BodyWithAds({ body }: { body: string }) {
  const sections = body.split(/\n\n## /).map((s, i) => (i === 0 ? s : "## " + s));
  const htmlSections = sections.map((s) => simpleMarkdownToHtml(s));
  return (
    <div className="prose-invert">
      {htmlSections.map((html, i) => (
        <div key={i}>
          <div
            className="article-body text-gray-300 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {i < htmlSections.length - 1 && (
            <div className="my-8">
              <AdSlot />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 5);
  const categoryLabel = getCategoryLabel(article.category);

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex gap-10">
          <article className="flex-1 min-w-0 max-w-3xl">
            <Link
              href={`/${article.category}`}
              className="text-gray-400 hover:text-white text-sm mb-6 inline-block"
            >
              ← {categoryLabel}一覧
            </Link>
            <h1 className="text-3xl md:text-4xl font-black mb-4">{article.title}</h1>
            <p className="text-gray-500 text-sm mb-6">
              {new Date(article.date).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={article.thumbnailUrl}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            {article.body ? (
              <BodyWithAds body={article.body} />
            ) : (
              <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
            )}
          </article>

          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                ランキング
              </h3>
              <div className="space-y-4">
                {related.slice(0, 5).map((a, i) => (
                  <Link
                    key={a.id}
                    href={`/articles/${a.slug}`}
                    className="flex gap-3 p-2 rounded-lg hover:bg-gray-800/80 transition"
                  >
                    <span className="text-2xl font-black text-gray-600 w-8">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{a.title}</p>
                      <span className="text-xs text-gray-500">{getCategoryLabel(a.category)}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <AdSlot />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

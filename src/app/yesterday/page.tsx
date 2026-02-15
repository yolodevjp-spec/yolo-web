import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory } from "@/lib/articles";
import YesterdayDashboard from "@/components/yesterday/YesterdayDashboard";

export const metadata: Metadata = {
  title: "昨日のまとめ | YOLO-WEB",
  description: "昨日のまとめインテリジェンス・ダッシュボード",
};

export default function YesterdayPage() {
  const yesterdayArticles = getArticlesByCategory("yesterday");
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = `${yesterday.getFullYear()}.${String(yesterday.getMonth() + 1).padStart(2, "0")}.${String(yesterday.getDate()).padStart(2, "0")}`;

  return (
    <div className="min-h-screen bg-black text-white flex-1 relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(88,28,135,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(190,24,93,0.12) 0%, transparent 50%)",
        }}
      />
      <main className="relative max-w-5xl mx-auto px-4 py-8">
        <header className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 px-6 py-4 mb-8 flex items-center gap-3">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/90 text-white text-lg font-black flex items-center justify-center">①</span>
          <h1 className="text-xl md:text-2xl font-black text-white">昨日のまとめ | {dateStr}</h1>
        </header>

        <YesterdayDashboard />

        <section className="mt-10">
          <h2 className="text-xl font-black mb-4 border-l-4 border-red-600 pl-3">昨日のまとめ 記事一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {yesterdayArticles.slice(0, 9).map((a) => (
              <Link
                key={a.id}
                href={`/articles/${a.slug}`}
                className="block rounded-xl border border-gray-700 overflow-hidden hover:border-gray-500 transition shadow-lg"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <Image src={a.thumbnailUrl} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-white text-sm line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-gray-500 mt-2">{new Date(a.date).toLocaleDateString("ja-JP")}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

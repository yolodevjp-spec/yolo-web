import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory, getCategoryLabel } from "@/lib/articles";

export const metadata: Metadata = {
  title: "昨日のまとめ | YOLO-WEB",
  description: "昨日のまとめインテリジェンス・ダッシュボード",
};

const CATEGORY_KEYS = ["trend", "100k", "kikaku", "talk", "geino", "sports", "music", "society"] as const;

export default function YesterdayPage() {
  const yesterdayArticles = getArticlesByCategory("yesterday");
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const dateLabel = yesterday.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0 space-y-8">
            {/* ① 全体サマリー */}
            <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-wider mb-4">全体サマリー</h2>
              <p className="text-gray-200 leading-relaxed">
                {dateLabel}の監視網では、500チャンネルを対象に異変検知を実施。通常180本/日、異変時最大300本/日の供給体制で、
                再生効率・コメント率に基づく検出を行いました。主要トピックとカテゴリ別ハイライトを以下にまとめます。
              </p>
            </section>

            {/* ② 主要トピック（Event Stack） */}
            <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-wider mb-4">主要トピック（Event Stack）</h2>
              <ul className="space-y-3">
                {[
                  "トレンドワード急上昇とメディア報道の連動",
                  "10万再生超え動画の集中発生（企画・トーク系）",
                  "芸能・スポーツ分野の特異イベント",
                  "社会カテゴリでの議論の高まり",
                ].map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <span className="flex-shrink-0 w-6 h-6 rounded bg-red-600/80 text-xs font-bold flex items-center justify-center">{i + 1}</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </section>

            {/* ③ カテゴリ別ハイライト */}
            <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-wider mb-4">カテゴリ別ハイライト</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATEGORY_KEYS.map((cat) => {
                  const articles = getArticlesByCategory(cat);
                  const recent = articles.slice(0, 2);
                  return (
                    <div key={cat} className="rounded-lg border border-gray-700 p-4">
                      <h3 className="font-bold text-white mb-2">{getCategoryLabel(cat)}</h3>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {recent.map((a) => (
                          <li key={a.id}>
                            <Link href={`/articles/${a.slug}`} className="hover:text-white">
                              {a.title.length > 24 ? a.title.slice(0, 24) + "…" : a.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ④ 数字で見る昨日 */}
            <section className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-wider mb-4">数字で見る昨日</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "監視チャンネル数", value: "500" },
                  { label: "異変検出", value: "12" },
                  { label: "配信記事数", value: "192" },
                  { label: "10万越え動画", value: "28" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-3 rounded-lg bg-black/50">
                    <div className="text-2xl font-black text-white">{value}</div>
                    <div className="text-xs text-gray-500 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 右上: 昨日のMVPチャンネル + 急上昇率NO.1 */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 sticky top-24">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">昨日のMVPチャンネル</h3>
              <div className="space-y-2">
                <p className="font-bold text-white">サンプルチャンネルA</p>
                <p className="text-sm text-gray-400">24h再生効率・コメント率で最高スコア。異変検出の筆頭。</p>
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-6 mb-4">急上昇率 NO.1</h3>
              <div className="space-y-2">
                <p className="font-bold text-white">前日比 +340%</p>
                <p className="text-sm text-gray-400">登録者10万規模ch。1本の動画が24hで30万再生を記録。</p>
              </div>
            </div>
          </aside>
        </div>

        {/* 昨日のまとめ記事一覧 */}
        <section className="mt-10">
          <h2 className="text-2xl font-black mb-6 border-l-8 border-red-600 pl-4">昨日のまとめ 記事一覧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yesterdayArticles.slice(0, 9).map((a) => (
              <Link
                key={a.id}
                href={`/articles/${a.slug}`}
                className="block rounded-lg border border-gray-700 overflow-hidden hover:border-gray-500 transition"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <Image
                    src={a.thumbnailUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white line-clamp-2">{a.title}</h3>
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

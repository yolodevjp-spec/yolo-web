import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return NextResponse.json({
    date: yesterday.toISOString().slice(0, 10),
    totalPosts: 842,
    over100k: 56,
    atmosphereEmoji: "🔥",
    mvpChannel: "大阪VTuberコラボ関連集中",
    mvpOver100k: 56,
    mvpAtmosphere: "👑",
    risingRate: "+340%",
    risingDescription: "登録者10万規模ch・24hで30万再生",
    eventStack: [
      { label: "大型VTuber コラボ関連", count: 7 },
      { label: "A社 社長辞任・開示関連", count: 5 },
      { label: "新作ゲーム○○発表関連", count: 6 },
    ],
    categoryHighlights: [
      { key: "trend", label: "トレンド", color: "text-orange-400", topics: ["芸人コンビAが同時配信", "壮絶ドッキリ! 予告なし力士銀行又"] },
      { key: "kikaku", label: "企画", color: "text-pink-400", topics: ["壮絶ドッキリ! 予告なし力士場", "人気YouTuberが突然の意外秘話"] },
      { key: "talk", label: "トーク", color: "text-amber-500", topics: ["人気YouTuberが突然の意外秘話"] },
      { key: "society", label: "社会", color: "text-sky-400", topics: ["大型タレントXの不仲トラブル"] },
    ],
    peakTime: "18:00〜21:00",
    anomalyDay: true,
    avgConcurrent: 2.9,
    symbolicWords: ["コラボ", "炎上", "引退"],
  });
}

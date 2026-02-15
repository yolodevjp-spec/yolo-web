"use client";

import { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import EventStackCard from "./EventStackCard";
import CategoryHighlightsCard from "./CategoryHighlightsCard";
import NumbersCard from "./NumbersCard";
import SymbolicWordsCard from "./SymbolicWordsCard";

type Summary = {
  totalPosts: number;
  over100k: number;
  atmosphereEmoji: string;
  mvpChannel: string;
  mvpOver100k: number;
  mvpAtmosphere: string;
  risingRate: string;
  risingDescription: string;
  eventStack: { label: string; count: number }[];
  categoryHighlights: { key: string; label: string; color: string; topics: string[] }[];
  peakTime: string;
  anomalyDay: boolean;
  avgConcurrent: number | string;
  symbolicWords: string[];
};

const defaultSummary: Summary = {
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
};

export default function YesterdayDashboard() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    fetch("/api/yesterday-summary")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData(defaultSummary));
  }, []);

  const s = data ?? defaultSummary;

  return (
    <>
      <SummaryCard title="① 全体サマリー">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 text-gray-200">
            <p><span className="text-gray-400">総投稿数:</span> <strong className="text-white">{s.totalPosts}</strong>本</p>
            <p><span className="text-gray-400">10万越え:</span> <strong className="text-white">{s.over100k}</strong>本</p>
            <p><span className="text-gray-400">空気感:</span> <span className="text-xl">{s.atmosphereEmoji}</span></p>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-red-900/40 to-amber-900/30 border border-amber-500/30 p-4 space-y-4">
            <div>
              <h3 className="text-xs font-bold text-amber-400/90 uppercase tracking-wider mb-2">昨日のMVPチャンネル</h3>
              <p className="font-bold text-white">{s.mvpChannel}</p>
              <p className="text-sm text-gray-300 mt-1">10万越え: {s.mvpOver100k}本 / 空気感: {s.mvpAtmosphere}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-amber-400/90 uppercase tracking-wider mb-2">急上昇率 NO.1 データ</h3>
              <p className="font-bold text-white">{s.risingRate}</p>
              <p className="text-sm text-gray-300 mt-1">{s.risingDescription}</p>
            </div>
          </div>
        </div>
      </SummaryCard>

      <SummaryCard title="② 昨日の主要トピック (Event Stack)">
        <EventStackCard items={s.eventStack} />
      </SummaryCard>

      <SummaryCard title="③ カテゴリ別ハイライト">
        <CategoryHighlightsCard items={s.categoryHighlights} />
      </SummaryCard>

      <SummaryCard title="④ 数字で見る昨日">
        <NumbersCard peakTime={s.peakTime} anomalyDay={s.anomalyDay} avgConcurrent={s.avgConcurrent} />
      </SummaryCard>

      <SummaryCard title="⑤ 昨日の象徴ワード">
        <SymbolicWordsCard words={s.symbolicWords} />
      </SummaryCard>
    </>
  );
}

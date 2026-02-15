import { NextResponse } from "next/server";
import { SURVEILLANCE } from "@/lib/surveillance";

/**
 * 500ch監視・異変検知API。
 * Vercel Cron で2時間ごとに呼び出し推奨: vercel.json に cron を設定。
 * 本番では YouTube Data API で監視chの動画・統計を取得し、異変判定を行う。
 */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  // モック: 監視ch数・検出件数・今日の記事予定本数
  const monitored = SURVEILLANCE.CHANNEL_COUNT;
  const detected = 12; // 異変検出数（モック）
  const articlesScheduled = detected > 8 ? SURVEILLANCE.ARTICLES_PER_DAY_ANOMALY : SURVEILLANCE.ARTICLES_PER_DAY_NORMAL;

  return NextResponse.json({
    monitored,
    detected,
    articlesScheduled,
    thresholds: {
      viewEfficiency: SURVEILLANCE.VIEW_EFFICIENCY,
      commentRateMin: SURVEILLANCE.COMMENT_RATE_MIN,
    },
  });
}

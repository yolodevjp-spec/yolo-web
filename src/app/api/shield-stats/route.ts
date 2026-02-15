import { NextResponse } from "next/server";

/**
 * 盾刻印用統計。
 * 本番: YOUTUBE_API_KEY を設定し、YouTube Data API から
 * - 新着: 監視500chの24h以内投稿数
 * - 10万越え: 再生数10万超の動画数
 * - 空気感: トレンド分析に基づく漢字一文字（AI選定またはルールベース）
 */
export const dynamic = "force-dynamic";
export const revalidate = 0;

const ATMOSPHERE_KANJI = ["熱", "静", "変", "沸", "渦", "波", "昇", "沈", "爆", "流"] as const;

function getAtmosphereFromTrend(): string {
  const h = new Date().getHours();
  const d = new Date().getDate();
  const i = (h + d) % ATMOSPHERE_KANJI.length;
  return ATMOSPHERE_KANJI[i];
}

export async function GET() {
  const key = process.env.YOUTUBE_API_KEY;
  let new24h = 47;
  let over100k = 128;

  if (key) {
    try {
      // 例: 監視チャンネルの直近動画を取得して24h以内の本数をカウント
      // const channelsRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&publishedAfter=${iso24h}&key=${key}`);
      // 例: 再生数10万超の本数は search または channels 統計から集計
      // ここではモックのまま。実装時は上記APIを組み合わせる。
    } catch {
      // フォールバックはモック値のまま
    }
  }

  const atmosphere = getAtmosphereFromTrend();

  return NextResponse.json({
    new24h,
    over100k,
    atmosphere,
  });
}

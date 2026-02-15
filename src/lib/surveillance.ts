/**
 * 異変検知アルゴリズム — 500ch監視網
 *
 * 監視対象: 初期500チャンネル（「人気」ではなく「異変」が起きるch）
 *
 * 異変判定:
 * - 再生効率（24h再生÷登録者）: 大規模 0.03+ / 中規模 0.06+ / 小規模 0.10+
 * - 熱量: コメント率 0.4% 以上
 *
 * 供給: 通常180本/日、異変時最大300本/日。2時間おきに完全自動更新。
 */

export const SURVEILLANCE = {
  CHANNEL_COUNT: 500,
  UPDATE_INTERVAL_HOURS: 2,

  /** 再生効率しきい値（24h再生数 / 登録者数） */
  VIEW_EFFICIENCY: {
    LARGE: 0.03,   // 大規模ch
    MEDIUM: 0.06, // 中規模ch
    SMALL: 0.1,   // 小規模ch
  },

  /** コメント率しきい値（コメント数/再生数） */
  COMMENT_RATE_MIN: 0.004, // 0.4%

  /** 1日あたり記事数 */
  ARTICLES_PER_DAY_NORMAL: 180,
  ARTICLES_PER_DAY_ANOMALY: 300,
} as const;

export type ChannelScale = "large" | "medium" | "small";

export function getViewEfficiencyThreshold(scale: ChannelScale): number {
  const map: Record<ChannelScale, number> = {
    large: SURVEILLANCE.VIEW_EFFICIENCY.LARGE,
    medium: SURVEILLANCE.VIEW_EFFICIENCY.MEDIUM,
    small: SURVEILLANCE.VIEW_EFFICIENCY.SMALL,
  };
  return map[scale] ?? SURVEILLANCE.VIEW_EFFICIENCY.MEDIUM;
}

export function isAnomalyByEfficiency(views24h: number, subscribers: number, scale: ChannelScale): boolean {
  if (subscribers <= 0) return false;
  const ratio = views24h / subscribers;
  const threshold = getViewEfficiencyThreshold(scale);
  return ratio >= threshold;
}

export function isAnomalyByHeat(comments: number, views: number): boolean {
  if (views <= 0) return false;
  return comments / views >= SURVEILLANCE.COMMENT_RATE_MIN;
}

/**
 * 記事執筆ポリシー — 450〜550文字・1動画1記事
 *
 * 5つの切り口（いずれか1つを選択）:
 * 1. 人 … 出演者・発信者にフォーカス
 * 2. 空気感 … トレンド・ムードを一言で
 * 3. 企画性 … 企画の型・検証・プロジェクト性
 * 4. 視聴者反応 … YouTube/Xから収集したコメント・反応
 * 5. 時系列 … 出来事の経過・タイムライン
 *
 * 除外ルール（即座に排除）:
 * - 切り抜き
 * - ショート
 * - 暴力
 * - いじめ
 * - アダルト
 * - 私人逮捕系
 */

export const ARTICLE = {
  MIN_CHARS: 450,
  MAX_CHARS: 550,
  ANGLES: ["人", "空気感", "企画性", "視聴者反応", "時系列"] as const,
  EXCLUDE_TAGS: ["切り抜き", "ショート", "暴力", "いじめ", "アダルト", "私人逮捕"],
} as const;

export function isValidLength(body: string): boolean {
  const n = body.replace(/\s/g, "").length;
  return n >= ARTICLE.MIN_CHARS && n <= ARTICLE.MAX_CHARS;
}

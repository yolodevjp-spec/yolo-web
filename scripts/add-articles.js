const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../src/data/articles.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const extra = {
  ai: [
    { id: "ai-21", slug: "llm-ops-monitoring", title: "LLM本番運用とモニタリング", excerpt: "レイテンシ、コスト、品質のダッシュボード設計。", category: "ai", date: "2025-01-23", thumbnailUrl: "/images/shields-header.png" },
    { id: "ai-22", slug: "semantic-search-embedding", title: "セマンティック検索とEmbedding最適化", excerpt: "埋め込みモデル選定とハイブリッド検索の実践。", category: "ai", date: "2025-01-22", thumbnailUrl: "/images/shields-header.png" },
    { id: "ai-23", slug: "ai-customer-segmentation", title: "AIによる顧客セグメンテーション", excerpt: "クラスタリングとLTV予測で施策を最適化。", category: "ai", date: "2025-01-21", thumbnailUrl: "/images/shields-header.png" },
    { id: "ai-24", slug: "conversation-analytics", title: "会話分析AIでサポート品質を可視化", excerpt: "意図分類、感情分析、エスカレーション予測。", category: "ai", date: "2025-01-20", thumbnailUrl: "/images/shields-header.png" },
    { id: "ai-25", slug: "synthetic-data-generation", title: "合成データ生成で学習データを拡張", excerpt: "プライバシー保護と少数クラス対策。", category: "ai", date: "2025-01-19", thumbnailUrl: "/images/shields-header.png" },
    { id: "ai-26", slug: "model-versioning-deployment", title: "モデルバージョニングとデプロイ戦略", excerpt: "Canary、Blue-Green、Shadow deployment。", category: "ai", date: "2025-01-18", thumbnailUrl: "/images/shields-header.png" },
  ],
  sales: [
    { id: "sales-21", slug: "sales-comp-trends", title: "営業報酬の最新トレンド", excerpt: "リモート営業と成果主義のバランス。", category: "sales", date: "2025-01-23", thumbnailUrl: "/images/shields-header.png" },
    { id: "sales-22", slug: "deal-desk-operations", title: "Deal Deskと営業オペレーション", excerpt: "複雑な契約条件の標準化と承認フロー。", category: "sales", date: "2025-01-22", thumbnailUrl: "/images/shields-header.png" },
    { id: "sales-23", slug: "sales-tech-stack", title: "営業テックスタックの統合", excerpt: "CRM、会話AI、契約ツールの連携設計。", category: "sales", date: "2025-01-21", thumbnailUrl: "/images/shields-header.png" },
    { id: "sales-24", slug: "expansion-revenue-playbook", title: "拡大収益のプレイブック", excerpt: "アップセル・クロスセルのタイミングとスクリプト。", category: "sales", date: "2025-01-20", thumbnailUrl: "/images/shields-header.png" },
    { id: "sales-25", slug: "sales-coaching-feedback", title: "営業コーチングとフィードバックループ", excerpt: "デールコール分析と1on1の効率化。", category: "sales", date: "2025-01-19", thumbnailUrl: "/images/shields-header.png" },
    { id: "sales-26", slug: "territory-planning", title: "テリトリー設計とリード配分", excerpt: "公平性と生産性を両立するゾーン設計。", category: "sales", date: "2025-01-18", thumbnailUrl: "/images/shields-header.png" },
  ],
  marketing: [
    { id: "marketing-21", slug: "growth-loop-design", title: "グロースループの設計と計測", excerpt: "バイラル係数とリテンションの掛け算。", category: "marketing", date: "2025-01-23", thumbnailUrl: "/images/shields-header.png" },
    { id: "marketing-22", slug: "customer-story-campaigns", title: "カスタマーストーリーキャンペーン", excerpt: "事例収集からコンテンツ化までの運用。", category: "marketing", date: "2025-01-22", thumbnailUrl: "/images/shields-header.png" },
    { id: "marketing-23", slug: "webinar-demand-gen", title: "ウェビナーでリード獲得を加速", excerpt: "登録からフォローアップまでの自動化。", category: "marketing", date: "2025-01-21", thumbnailUrl: "/images/shields-header.png" },
    { id: "marketing-24", slug: "partner-co-marketing", title: "パートナーコマーケティングの実践", excerpt: "共同ウェビナー、コンテンツ、リード共有。", category: "marketing", date: "2025-01-20", thumbnailUrl: "/images/shields-header.png" },
    { id: "marketing-25", slug: "sales-marketing-alignment", title: "サレスとマーケのアラインメント", excerpt: "SLA、リード定義、ハンドオフの標準化。", category: "marketing", date: "2025-01-19", thumbnailUrl: "/images/shields-header.png" },
    { id: "marketing-26", slug: "brand-voice-guidelines", title: "ブランドボイスとトーンのガイドライン", excerpt: "コンテンツの一貫性を保つライティング基準。", category: "marketing", date: "2025-01-18", thumbnailUrl: "/images/shields-header.png" },
  ],
  productivity: [
    { id: "prod-21", slug: "async-video-communication", title: "非同期動画でコミュニケーション効率化", excerpt: "Loom、Vidyardで説明を残し待ち時間を削減。", category: "productivity", date: "2025-01-23", thumbnailUrl: "/images/shields-header.png" },
    { id: "prod-22", slug: "note-taking-systems", title: "ノート術と情報管理のシステム化", excerpt: "Zettelkasten、PARA、第二の脳の実践。", category: "productivity", date: "2025-01-22", thumbnailUrl: "/images/shields-header.png" },
    { id: "prod-23", slug: "meeting-cost-visibility", title: "会議コストの可視化と削減", excerpt: "参加者×時間で会議の機会費用を算出。", category: "productivity", date: "2025-01-21", thumbnailUrl: "/images/shields-header.png" },
    { id: "prod-24", slug: "sprint-retrospective", title: "スプリントレトロの質を高める", excerpt: "KALM、Start/Stop/Continueの活用。", category: "productivity", date: "2025-01-20", thumbnailUrl: "/images/shields-header.png" },
    { id: "prod-25", slug: "decision-log-adr", title: "意思決定ログとADRの文化", excerpt: "なぜその選択をしたかを残し再現性を確保。", category: "productivity", date: "2025-01-19", thumbnailUrl: "/images/shields-header.png" },
    { id: "prod-26", slug: "tool-sprawl-consolidation", title: "ツールスプロールの統合と整理", excerpt: "重複を減らし連携で生産性を回復。", category: "productivity", date: "2025-01-18", thumbnailUrl: "/images/shields-header.png" },
  ],
};

["ai", "sales", "marketing", "productivity"].forEach((cat) => data[cat].push(...extra[cat]));
const total = data.ai.length + data.sales.length + data.marketing.length + data.productivity.length;
fs.writeFileSync(dataPath, JSON.stringify(data));
console.log("Total articles:", total);

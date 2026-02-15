const fs = require("fs");
const path = require("path");

const UNSPLASH = {
  trend: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  "100k": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  kikaku: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  talk: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  geino: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  sports: "https://images.unsplash.com/photo-1461896836934- voices?w=800&q=80",
  music: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
  society: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
  yesterday: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
};

// Fix typo in sports
UNSPLASH.sports = "https://images.unsplash.com/photo-1461896836934-ff607b4f19e9?w=800&q=80";

const CATEGORY_IMAGES = {
  trend: ["photo-1611162617474-5b21e879e113", "photo-1551288049-bebda4e38f71", "photo-1504711434969-e33886168f5c", "photo-1516321318423-f06f85e504b3", "photo-1522071820081-009f0129c71c"],
  "100k": ["photo-1551288049-bebda4e38f71", "photo-1611162617474-5b21e879e113", "photo-1552664730-d307ca884978", "photo-1460925895917-afdab827c52f", "photo-1556761175-b413da4baf72"],
  kikaku: ["photo-1552664730-d307ca884978", "photo-1556761175-b413da4baf72", "photo-1460925895917-afdab827c52f", "photo-1522071820081-009f0129c71c", "photo-1516321318423-f06f85e504b3"],
  talk: ["photo-1573497019940-1c28c88b4f3e", "photo-1507003211169-0a1dd7228f2d", "photo-1472099645785-5658abf4ff4e", "photo-1519345182560-3f2917c472ef", "photo-1500648767791-00dcc994a43e"],
  geino: ["photo-1514525253161-7a46d19cd819", "photo-1493225457124-a3eb161ffa5f", "photo-1511671782779-c97d3d27a1d4", "photo-1507003211169-0a1dd7228f2d", "photo-1521572163474-6864f9cf17ab"],
  sports: ["photo-1461896836934-ff607b4f19e9", "photo-1571019614242-c5c5dee9f50b", "photo-1517649763962-0c623066013b", "photo-1541534741688-6078c6bfb5c5", "photo-1552674605-db6ffd4facb5"],
  music: ["photo-1511671782779-c97d3d27a1d4", "photo-1493225457124-a3eb161ffa5f", "photo-1514525253161-7a46d19cd819", "photo-1524368535928-5b5e00dd0d14", "photo-1507838153414-b4b713384a76"],
  society: ["photo-1529107386315-e1a2ed48a620", "photo-1504711434969-e33886168f5c", "photo-1522071820081-009f0129c71c", "photo-1552664730-d307ca884978", "photo-1516321318423-f06f85e504b3"],
  yesterday: ["photo-1504711434969-e33886168f5c", "photo-1611162617474-5b21e879e113", "photo-1551288049-bebda4e38f71", "photo-1529107386315-e1a2ed48a620", "photo-1460925895917-afdab827c52f"],
};

function img(cat, i) {
  const list = CATEGORY_IMAGES[cat] || CATEGORY_IMAGES.trend;
  const id = list[i % list.length];
  return `https://images.unsplash.com/${id}?w=800&q=80`;
}

function longBody(prefix) {
  return (
    prefix +
    "\n\n" +
    "本記事では、信頼できる単一ソースに基づき、検証可能な事実のみを掲載しています。複数の専門家への取材と公開情報の照合を経ております。\n\n" +
    "## 背景と経緯\n\n" +
    "関係者への取材および公開資料により、経緯を整理しました。当事者コメントと一次ソースを重視し、推測は排除しています。\n\n" +
    "## 詳細と分析\n\n" +
    "データと証言に基づく分析を以下に示します。今後の動向についても、現時点で確認できる範囲で補足します。\n\n" +
    "## まとめ\n\n" +
    "以上、一ソース一記事の原則に則り、信頼できる情報のみをまとめました。今後の更新は公式発表等に基づき行います。"
  );
}

const TREND_TITLES = [
  "今年最も検索されたトレンドワードを徹底分析",
  "SNSで話題の新サービス、利用者数が急増",
  "若年層に広がる新たな消費トレンド",
  "業界関係者が注目するキーワードTOP10",
  "トレンド調査レポート2025年版",
  "検索急上昇ワードとその背景",
  "地方発のトレンドが全国へ波及",
  "専門家が選ぶ今年のトレンド予測",
  "データで見るトレンドの変遷",
  "トレンドと社会現象の相関分析",
  "次世代トレンドの芽をいち早く捉える",
  "トレンド持続期間の統計的検証",
  "トレンド発信源の可視化",
  "トレンド転換期の兆候を読む",
  "グローバルトレンドと国内の差異",
];

const TITLES_100K = [
  "再生100万回超えコンテンツの共通点",
  "バズった記事に共通する構成要素",
  "100万PV達成メディアの編集方針",
  "エンゲージメントを高めた事例集",
  "拡散されたコンテンツの特徴分析",
  "100万フォロワーアカウントの戦略",
  "バイラルコンテンツの条件",
  "高再生コンテンツの企画プロセス",
  "100万インプレッションの裏側",
  "人気コンテンツのタイトル設計",
  "シェアされやすい記事の型",
  "100万クリックを獲得した施策",
  "エンゲージメント指標の最適化",
  "拡散率を高める配信タイミング",
  "大規模リーチを実現した事例",
];

const KIKAKU_TITLES = [
  "検証プロジェクト：仮説と検証結果の全記録",
  "実証実験レポート：手法とデータの公開",
  "企画「真実検証」の実施報告",
  "プロジェクト進行状況の検証レポート",
  "検証チームによる事実確認の記録",
  "企画「データ検証」中間報告",
  "検証プロジェクトの方法論と結果",
  "実地調査に基づく検証レポート",
  "企画「ソース検証」の完了報告",
  "検証プロジェクトの設計と実行",
  "第三者検証の依頼と結果",
  "企画「再現性検証」の記録",
];

const TALK_TITLES = [
  "業界キーパーソン対談：本音と展望",
  "専門家インタビュー：現場の声",
  "対談：これからの展望を語る",
  "関係者インタビュー全文",
  "鼎談：三者三様の見解",
  "ロングインタビュー：経緯と本意",
  "対談記録：議論のポイント",
  "インタビュー：証言とコメント",
  "対談「未来を語る」",
  "関係者への単独インタビュー",
  "対談：データと経験の接点",
  "インタビュー特集：第一線の声",
];

const GEINO_TITLES = [
  "芸能界の動きをまとめる",
  "エンタメ業界の最新トピック",
  "芸能関係の公式発表まとめ",
  "エンタメニュースの要点",
  "芸能界トレンドの整理",
  "エンタメ業界動向レポート",
  "芸能ニュースの信頼できるまとめ",
  "エンタメ業界の変化を追う",
  "芸能トピックの要点整理",
  "エンタメ業界の公式情報",
  "芸能関連の発表と反応",
  "エンタメ業界の動向分析",
];

const SPORTS_TITLES = [
  "大会結果と選手コメント",
  "試合レポートとデータ分析",
  "スポーツ界の公式発表",
  "試合の経過と結果の記録",
  "選手インタビューと展望",
  "大会レポートと統計",
  "スポーツニュースの要点",
  "試合分析と今後の見通し",
  "公式記録に基づく試合レポート",
  "スポーツ界の動向まとめ",
  "大会結果と専門家コメント",
  "試合のハイライトとデータ",
];

const MUSIC_TITLES = [
  "新譜リリースとアーティストコメント",
  "音楽業界の動向レポート",
  "ライブレポートとセットリスト",
  "アーティストインタビュー",
  "音楽シーンのトレンド",
  "リリース情報とレビュー",
  "音楽業界の公式発表",
  "ライブレポート全文",
  "アーティストの活動報告",
  "音楽業界の統計と動向",
  "新作のコンセプトと反応",
  "音楽イベントのレポート",
];

const SOCIETY_TITLES = [
  "社会現象をデータで読む",
  "政策と社会の動き",
  "社会課題と取り組みの現状",
  "世論調査と専門家の見解",
  "社会ニュースの要点整理",
  "公共性の高いトピックの整理",
  "社会動向のレポート",
  "調査に基づく社会分析",
  "社会現象の背景と展望",
  "公共情報のまとめ",
  "社会トピックの検証",
  "社会動向とデータ",
  "社会ニュースの要点",
  "社会現象の多角的整理",
  "社会課題の現状報告",
];

const YESTERDAY_TITLES = [
  "昨日の主要ニュースまとめ",
  "前日の出来事を時系列で",
  "昨日のトピック整理",
  "前日ニュースの要点",
  "昨日のトレンドまとめ",
  "前日の重要発表一覧",
  "昨日のニュースダイジェスト",
  "前日の出来事の整理",
  "昨日の話題をカテゴリ別に",
  "前日ニュースのハイライト",
  "昨日の主要トピック",
  "前日のニュースまとめ",
  "昨日の出来事の記録",
  "前日ニュースの要点整理",
  "昨日のニュース一覧",
];

const CATS = [
  { key: "trend", titles: TREND_TITLES },
  { key: "100k", titles: TITLES_100K },
  { key: "kikaku", titles: KIKAKU_TITLES },
  { key: "talk", titles: TALK_TITLES },
  { key: "geino", titles: GEINO_TITLES },
  { key: "sports", titles: SPORTS_TITLES },
  { key: "music", titles: MUSIC_TITLES },
  { key: "society", titles: SOCIETY_TITLES },
  { key: "yesterday", titles: YESTERDAY_TITLES },
];

const out = {};
for (const { key, titles } of CATS) {
  out[key] = titles.map((title, i) => {
    const n = i + 1;
    const slugClean = `${key}-${n}`;
    const excerpt = title + "。信頼できる単一ソースに基づく記事です。";
    return {
      id: `${key}-${n}`,
      slug: slugClean,
      title,
      excerpt,
      category: key,
      date: "2025-02-" + String(12 - Math.floor(i / 5)).padStart(2, "0"),
      thumbnailUrl: img(key, i),
      body: longBody("# " + title + "\n\n" + excerpt),
    };
  });
}

const dataPath = path.join(__dirname, "../src/data/articles.json");
fs.writeFileSync(dataPath, JSON.stringify(out, null, 2));
console.log("Total articles:", Object.values(out).reduce((s, arr) => s + arr.length, 0));

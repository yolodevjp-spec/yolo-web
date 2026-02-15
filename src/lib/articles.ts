import articlesData from "@/data/articles.json";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  thumbnailUrl: string;
  body?: string;
};

const data = articlesData as Record<string, Article[]>;

const CATEGORY_KEYS = [
  "trend",
  "100k",
  "kikaku",
  "talk",
  "geino",
  "sports",
  "music",
  "society",
  "yesterday",
] as const;

export function getAllArticles(): Article[] {
  return CATEGORY_KEYS.flatMap((key) => data[key] || []);
}

export function getArticlesByCategory(category: string): Article[] {
  return data[category] || [];
}

export function getArticleBySlug(slug: string): Article | undefined {
  for (const key of CATEGORY_KEYS) {
    const list = data[key] || [];
    const found = list.find((a) => a.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export function getRelatedArticles(article: Article, limit = 5): Article[] {
  const same = getArticlesByCategory(article.category).filter((a) => a.id !== article.id);
  const other = getAllArticles().filter((a) => a.category !== article.category);
  return [...same.slice(0, 2), ...other.slice(0, limit - 2)].slice(0, limit);
}

export function getCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    trend: "トレンド",
    "100k": "10万+",
    kikaku: "企画",
    talk: "トーク",
    geino: "芸能",
    sports: "スポーツ",
    music: "音楽",
    society: "社会",
    yesterday: "昨日のまとめ",
  };
  return map[category] || category;
}

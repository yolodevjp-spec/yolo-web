import { Article } from "@/types/article";

interface ArticleListProps {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <article
          key={article.id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>{article.author}</span>
            <span>•</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{article.readTime}分</span>
            <span>•</span>
            <span>{article.views.toLocaleString()} views</span>
          </div>
        </article>
      ))}
    </div>
  );
}

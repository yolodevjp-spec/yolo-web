"use client";

import { useState } from "react";
import ContentCard, { type Article } from "@/components/ContentCard";

const INITIAL_COUNT = 12;

interface ArticleGridProps {
  articles: Article[];
  title: string;
}

export default function ArticleGrid({ articles, title }: ArticleGridProps) {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const show = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <>
      <h1 className="text-4xl font-black mb-10 border-l-8 border-red-600 pl-4 uppercase">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {show.map((article) => (
          <ContentCard key={article.id} {...article} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + INITIAL_COUNT)}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors"
          >
            もっと見る
          </button>
        </div>
      )}
    </>
  );
}

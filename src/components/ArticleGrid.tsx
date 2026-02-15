"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ContentCard, { type Article } from "@/components/ContentCard";
import AdSlot from "@/components/AdSlot";

const PAGE_SIZE = 12;
const AD_EVERY = 3;

type GridItem = { type: "article"; article: Article } | { type: "ad"; id: string };

function buildItems(articles: Article[]): GridItem[] {
  const items: GridItem[] = [];
  let adIndex = 0;
  articles.forEach((article, i) => {
    if (i > 0 && i % AD_EVERY === 0) {
      items.push({ type: "ad", id: `ad-${adIndex++}` });
    }
    items.push({ type: "article", article });
  });
  return items;
}

interface ArticleGridProps {
  articles: Article[];
  title: string;
}

export default function ArticleGrid({ articles, title }: ArticleGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const items = buildItems(articles);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  const loadMore = useCallback(() => {
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, items.length));
  }, [items.length]);

  useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "200px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      <h1 className="text-4xl font-black mb-10 border-l-8 border-red-600 pl-4 uppercase">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item) =>
          item.type === "article" ? (
            <ContentCard key={item.article.id} {...item.article} />
          ) : (
            <AdSlot key={item.id} />
          )
        )}
      </div>
      {hasMore && <div ref={sentinelRef} className="h-4 w-full" aria-hidden />}
    </>
  );
}

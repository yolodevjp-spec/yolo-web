"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  thumbnailUrl: string;
}

interface ContentCardProps extends Article {
  isAd?: boolean;
}

export default function ContentCard({
  slug,
  title,
  excerpt,
  category,
  date,
  thumbnailUrl,
  isAd = false,
}: ContentCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const href = isAd ? "#" : `/articles/${slug}`;

  const handleClick = (e: React.MouseEvent) => {
    if (isAd) return;
    e.preventDefault();
    setLoading(true);
    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block rounded-lg overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl ${
        isAd ? "border-amber-600/50" : "border-gray-700"
      }`}
    >
      <div className="aspect-video bg-gray-900 relative overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center z-20">
            <div className="h-8 w-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        ) : null}
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-bold bg-black/80 rounded z-10">
          {isAd ? "PR" : category.toUpperCase()}
        </span>
      </div>
      <div className="p-4 bg-gray-900/80 border-t border-gray-800">
        <h3 className="font-bold text-white text-base mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-2">{excerpt}</p>
        <time className="text-xs text-gray-500" dateTime={date}>
          {new Date(date).toLocaleDateString("ja-JP", { year: "numeric", month: "short", day: "numeric" })}
        </time>
      </div>
    </Link>
  );
}

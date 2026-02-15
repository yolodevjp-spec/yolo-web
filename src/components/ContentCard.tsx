import Link from "next/link";
import Image from "next/image";

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

export default function ContentCard({ slug, title, excerpt, category, date, thumbnailUrl, isAd = false }: ContentCardProps) {
  const link = isAd ? "#" : `/${category}/${slug}`;

  return (
    <Link
      href={link}
      className={`block rounded-lg overflow-hidden border transition hover:opacity-90 ${
        isAd ? "border-amber-600/50" : "border-gray-700"
      }`}
    >
      <div className="aspect-video bg-gray-900 relative overflow-hidden">
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

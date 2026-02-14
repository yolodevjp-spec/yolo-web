import Link from "next/link";

interface ContentCardProps {
  thumbnailUrl: string;
  title: string;
  link: string;
  isAd?: boolean;
}

export default function ContentCard({ thumbnailUrl, title, link, isAd = false }: ContentCardProps) {
  return (
    <Link
      href={link}
      className={`block rounded-lg overflow-hidden border transition hover:opacity-90 ${
        isAd ? "border-amber-600/50" : "border-gray-700"
      }`}
    >
      <div className="aspect-video bg-gray-900 relative">
        <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-bold bg-black/80 rounded">
          {isAd ? "PR" : "VIDEO"}
        </span>
      </div>
      <div className="p-3 bg-gray-900/50 border-t border-gray-800">
        <h3 className="font-bold text-white text-sm line-clamp-2">{title}</h3>
      </div>
    </Link>
  );
}

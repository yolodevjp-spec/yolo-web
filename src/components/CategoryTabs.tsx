"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/trend", label: "トレンド" },
  { href: "/100k", label: "10万+" },
  { href: "/kikaku", label: "企画" },
  { href: "/talk", label: "トーク" },
  { href: "/geino", label: "芸能" },
  { href: "/sports", label: "スポーツ" },
  { href: "/music", label: "音楽" },
  { href: "/society", label: "社会" },
  { href: "/yesterday", label: "昨日のまとめ" },
] as const;

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 bg-black/98 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 py-2 min-w-max">
          {TABS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                  isActive
                    ? "text-black bg-white border-black"
                    : "text-gray-400 border-transparent hover:text-white hover:bg-gray-800"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

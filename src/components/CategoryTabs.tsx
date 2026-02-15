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
    <div className="sticky top-0 z-40 bg-black border-b border-gray-800 min-h-[48px] flex items-stretch">
      <div className="max-w-7xl mx-auto w-full px-2 overflow-x-auto overflow-y-hidden scrollbar-hide flex">
        <div className="flex gap-0 py-2 min-w-max items-center">
          {TABS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-t-md text-sm font-bold whitespace-nowrap transition-colors duration-200 border-b-4 -mb-px ${
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

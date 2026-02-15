"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/trend", label: "トレンド" },
  { href: "/trend", label: "芸能" },
  { href: "/trend", label: "10万超え" },
  { href: "/ai", label: "AI" },
  { href: "/sales", label: "Sales" },
  { href: "/marketing", label: "Marketing" },
  { href: "/productivity", label: "Productivity" },
];

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 bg-black/98 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-2 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 py-2 min-w-max">
          {TABS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/trend" && pathname.startsWith(href));
            return (
              <Link
                key={label}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 hover:bg-gray-800 hover:text-white ${
                  isActive ? "bg-red-600 text-white" : "text-gray-400"
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

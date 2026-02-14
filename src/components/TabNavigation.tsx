"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { id: "trend", label: "トレンド" },
  { id: "ai", label: "AI" },
  { id: "productivity", label: "生産性" },
  { id: "marketing", label: "マーケティング" },
  { id: "finance", label: "財務" },
  { id: "hr", label: "人事" },
  { id: "sales", label: "営業" },
  { id: "development", label: "開発" },
  { id: "design", label: "デザイン" },
];

// PinsBarの高さ（py-3 + 画像40px = 約64px）
const PINS_BAR_HEIGHT = 64;

export default function TabNavigation() {
  const pathname = usePathname();
  const currentCategory = pathname.split("/")[1] || "trend";
  const [topOffset, setTopOffset] = useState(PINS_BAR_HEIGHT);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // scrollY > 150でPinsBarが完全に消えるので、その時点でtop-0に
      if (scrollY > 150) {
        setTopOffset(0);
      } else {
        setTopOffset(PINS_BAR_HEIGHT);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期状態を設定

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky z-40 bg-white border-b border-gray-200 overflow-x-auto transition-all duration-200"
      style={{ top: `${topOffset}px` }}
    >
      <div className="flex gap-1 px-2 py-2 min-w-max">
        {categories.map((category) => {
          const isActive = currentCategory === category.id;
          return (
            <Link
              key={category.id}
              href={`/${category.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

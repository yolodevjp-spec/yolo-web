"use client";

import { useEffect, useState } from "react";
import TabNavigation from "./TabNavigation";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

// PinsBarの高さ（py-3 + 画像40px = 約64px）
const PINS_BAR_HEIGHT = 64;

export default function PageLayout({ title, children }: PageLayoutProps) {
  const [topMargin, setTopMargin] = useState(PINS_BAR_HEIGHT);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // scrollY > 150でPinsBarが完全に消えるので、その時点でマージンを0に
      if (scrollY > 150) {
        setTopMargin(0);
      } else {
        setTopMargin(PINS_BAR_HEIGHT);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期状態を設定

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <TabNavigation />
      <main
        className="max-w-4xl mx-auto px-4 py-6 transition-all duration-200"
        style={{ marginTop: `${topMargin}px` }}
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
        {children}
      </main>
    </div>
  );
}

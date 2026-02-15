"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SCROLL_THRESHOLD_START = 20;
const SCROLL_THRESHOLD_HIDE = 120;

type ShieldStats = { new24h: number; over100k: number; atmosphere: string };

const SHIELD_CONFIG = [
  { key: "new24h" as const, label: "新着", sub: "24h", className: "text-red-500 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" },
  { key: "over100k" as const, label: "10万越え", sub: "本", className: "text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]" },
  { key: "atmosphere" as const, label: "空気感", sub: "", className: "text-gray-300 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]" },
] as const;

export default function HeaderShields() {
  const [stats, setStats] = useState<ShieldStats>({ new24h: 0, over100k: 0, atmosphere: "—" });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    fetch("/api/shield-stats")
      .then((r) => r.json())
      .then((d: ShieldStats) => setStats(d))
      .catch(() => setStats({ new24h: 47, over100k: 128, atmosphere: "熱" }));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isShrinking = scrollY > SCROLL_THRESHOLD_START;
  const isHidden = scrollY > SCROLL_THRESHOLD_HIDE;
  const scale = isHidden ? 0 : isShrinking ? Math.max(0.3, 1 - (scrollY - SCROLL_THRESHOLD_START) / (SCROLL_THRESHOLD_HIDE - SCROLL_THRESHOLD_START) * 0.7) : 1;
  const opacity = isHidden ? 0 : isShrinking ? Math.max(0, 1 - (scrollY - SCROLL_THRESHOLD_START) / (SCROLL_THRESHOLD_HIDE - SCROLL_THRESHOLD_START) * 0.9) : 1;

  return (
    <div
      className="overflow-hidden transition-all duration-300 ease-out"
      style={{ height: isHidden ? 0 : "auto", minHeight: isHidden ? 0 : undefined, opacity: isHidden ? 0 : 1 }}
    >
      <header
        className="bg-black transition-transform duration-300 ease-out"
        style={{
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
          transformOrigin: "top center",
        }}
      >
        <div
          className="relative w-full bg-black py-2 transition-all duration-300 ease-out"
          style={{ transform: `scale(${scale})`, opacity }}
        >
          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src="/images/shields-header.png"
              alt="Shields Header"
              width={400}
              height={60}
              className="w-full shield-blend-final"
              priority
            />
            <div className="absolute inset-0 grid grid-cols-3 items-center justify-items-center">
              <div className="flex flex-col items-center justify-center">
                <span className={`text-[10px] md:text-xs font-black tracking-wider ${SHIELD_CONFIG[0].className}`}>
                  新着 {stats.new24h}
                </span>
                <span className={`text-[8px] md:text-[10px] font-bold opacity-95 ${SHIELD_CONFIG[0].className}`}>
                  24h以内
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className={`text-[10px] md:text-xs font-black tracking-wider ${SHIELD_CONFIG[1].className}`}>
                  10万越え {stats.over100k}
                </span>
                <span className={`text-[8px] md:text-[10px] font-bold opacity-95 ${SHIELD_CONFIG[1].className}`}>
                  本
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className={`text-[10px] md:text-xs font-black tracking-wider ${SHIELD_CONFIG[2].className}`}>
                  空気感
                </span>
                <span className={`text-sm md:text-base font-black ${SHIELD_CONFIG[2].className}`}>{stats.atmosphere}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

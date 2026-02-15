"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SCROLL_THRESHOLD_START = 20;
const SCROLL_THRESHOLD_HIDE = 100;

type ShieldStats = { new24h: number; over100k: number; atmosphere: string };

export default function HeaderShields() {
  const [stats, setStats] = useState<ShieldStats>({ new24h: 0, over100k: 0, atmosphere: "—" });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/shield-stats")
      .then((r) => r.json())
      .then((d: ShieldStats) => {
        if (!cancelled) setStats({ new24h: d.new24h ?? 0, over100k: d.over100k ?? 0, atmosphere: d.atmosphere ?? "—" });
      })
      .catch(() => {
        if (!cancelled) setStats({ new24h: 0, over100k: 0, atmosphere: "—" });
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    setScrollY(window.scrollY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isShrinking = scrollY > SCROLL_THRESHOLD_START;
  const isHidden = scrollY > SCROLL_THRESHOLD_HIDE;
  const scale = isHidden ? 0 : isShrinking ? Math.max(0.35, 1 - (scrollY - SCROLL_THRESHOLD_START) / (SCROLL_THRESHOLD_HIDE - SCROLL_THRESHOLD_START) * 0.65) : 1;
  const opacity = isHidden ? 0 : isShrinking ? Math.max(0, 1 - (scrollY - SCROLL_THRESHOLD_START) / (SCROLL_THRESHOLD_HIDE - SCROLL_THRESHOLD_START) * 0.95) : 1;

  return (
    <div
      className="overflow-hidden transition-[height,opacity] duration-300 ease-out"
      style={{
        height: isHidden ? 0 : "var(--shield-header-height, 72px)",
        minHeight: isHidden ? 0 : undefined,
        opacity: isHidden ? 0 : 1,
      }}
    >
      <header
        className="bg-black transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div
          className="relative w-full bg-black py-2 transition-transform duration-300 ease-out origin-top"
          style={{ transform: `scale(${scale})`, opacity }}
        >
          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src="/images/shields-header.png"
              alt=""
              width={400}
              height={60}
              className="w-full shield-blend-final"
              priority
            />
            <div className="absolute inset-0 grid grid-cols-3 items-center justify-items-center pointer-events-none">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-red-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]">新着</span>
                <span className="text-lg md:text-xl font-black tabular-nums text-red-500 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]">{stats.new24h}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]">10万越え</span>
                <span className="text-lg md:text-xl font-black tabular-nums text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]">{stats.over100k}</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-[9px] md:text-[10px] font-black tracking-widest text-gray-300 drop-shadow-[0_0_6px_rgba(192,192,192,0.6)]">空気感</span>
                <span className="text-xl md:text-2xl font-black text-gray-300 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]">{stats.atmosphere}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SCROLL_HIDE_THRESHOLD = 40;

const SHIELD_LABELS = [
  { number: "1,000,000", sub: "PREMIUM OWNER", className: "text-red-500 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" },
  { number: "100,000", sub: "ELITE MEMBER", className: "text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]" },
  { number: "10,000", sub: "RISING STAR", className: "text-gray-300 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]" },
] as const;

export default function HeaderShields() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > SCROLL_HIDE_THRESHOLD);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        hidden ? "h-0 min-h-0 opacity-0" : "opacity-100"
      }`}
    >
      <header
        className={`bg-black transition-transform duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="relative w-full bg-black py-2">
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
              {SHIELD_LABELS.map((item) => (
                <div key={item.sub} className="flex flex-col items-center justify-center">
                  <span className={`text-[10px] md:text-xs font-black tracking-wider ${item.className}`}>
                    {item.number}
                  </span>
                  <span className={`text-[8px] md:text-[10px] font-bold tracking-widest opacity-95 ${item.className}`}>
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

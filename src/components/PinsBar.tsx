"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PinsBar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // scrollY が40pxで開始、150pxで完全に消える計算式
      if (scrollY < 40) {
        setOpacity(1);
      } else if (scrollY >= 40 && scrollY <= 150) {
        // 40pxから150pxの間で線形にフェードアウト
        const fadeRange = 150 - 40; // 110px
        const scrollProgress = scrollY - 40;
        const newOpacity = 1 - scrollProgress / fadeRange;
        setOpacity(Math.max(0, newOpacity));
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期状態を設定

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-4 px-4 py-3 bg-white border-b border-gray-200"
      style={{ opacity }}
    >
      <Image
        src="/pins/new.png"
        alt="New"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
      <Image
        src="/pins/over100k.png"
        alt="Over 100K"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
      <Image
        src="/pins/vibe.png"
        alt="Vibe"
        width={40}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
}

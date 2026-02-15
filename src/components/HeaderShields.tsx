"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SCROLL_HIDE_THRESHOLD = 60;

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
          <Image
            src="/images/shields-header.png"
            alt="Shields Header"
            width={400}
            height={60}
            className="mx-auto w-full max-w-xl shield-blend-final"
            priority
          />
        </div>
      </header>
    </div>
  );
}

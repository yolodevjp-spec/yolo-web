"use client";

import Image from "next/image";

interface HeaderShieldsProps {
  newCount?: number;
  grudenCount?: string;
  goldenHitCount?: number;
  currentVibe?: string;
}

export default function HeaderShields({
  newCount = 68,
  grudenCount = "10万",
  goldenHitCount = 14,
  currentVibe = "祭",
}: HeaderShieldsProps) {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="relative w-full bg-black py-12">
        <Image
          src="/images/shields-header.png"
          alt="Shields Header"
          width={400}
          height={60}
          className="mx-auto w-full max-w-2xl shield-blend-final"
          priority
        />
      </div>
    </header>
  );
}

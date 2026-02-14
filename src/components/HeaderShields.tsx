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
    <header className="sticky top-0 z-50 flex justify-center items-center gap-4 px-4 py-3 bg-black border-b border-gray-800">
      <Image src="/pins/new.png" alt="New" width={40} height={40} className="object-contain" priority />
      <Image src="/pins/over100k.png" alt="Over 100K" width={40} height={40} className="object-contain" priority />
      <Image src="/pins/vibe.png" alt="Vibe" width={40} height={40} className="object-contain" priority />
    </header>
  );
}

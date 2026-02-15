"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-6 py-3">
          <Link
            href="/"
            className={`text-lg font-black whitespace-nowrap transition-colors hover:text-white ${isHome ? "text-white" : "text-gray-400"}`}
          >
            YOLO-WEB
          </Link>
        </div>
      </div>
    </nav>
  );
}

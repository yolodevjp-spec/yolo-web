"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/trend", label: "Trend" },
  { href: "/ai", label: "AI" },
  { href: "/sales", label: "Sales" },
  { href: "/marketing", label: "Marketing" },
  { href: "/productivity", label: "Productivity" },
  { href: "/design", label: "Design" },
  { href: "/development", label: "Development" },
  { href: "/finance", label: "Finance" },
  { href: "/hr", label: "HR" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-black/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-1 py-3 scrollbar-hide">
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 hover:bg-gray-800 hover:text-white ${
                  isActive ? "bg-red-600 text-white" : "text-gray-400"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

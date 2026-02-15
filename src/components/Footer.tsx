"use client";

import Link from "next/link";

const FOOTER_LINKS = [
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

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm">© 2025 Vertical SaaS Hunter. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 Vertical SaaS Hunter. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <Link href="/ai" className="text-gray-400 hover:text-white transition">AI</Link>
            <Link href="/sales" className="text-gray-400 hover:text-white transition">Sales</Link>
            <Link href="/marketing" className="text-gray-400 hover:text-white transition">Marketing</Link>
            <Link href="/productivity" className="text-gray-400 hover:text-white transition">Productivity</Link>
            <Link href="/trend" className="text-gray-400 hover:text-white transition">Trend</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

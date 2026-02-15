import type { Metadata } from "next";
import Link from "next/link";
import HeaderShields from "@/components/HeaderShields";

export const metadata: Metadata = {
  title: "Development | Vertical SaaS Hunter",
  description: "開発・エンジニアリングの記事。Coming soon。",
  openGraph: { title: "Development | Vertical SaaS Hunter", description: "開発の記事。" },
};

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-black text-white flex-1">
      <HeaderShields />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-black mb-10 border-l-8 border-red-600 pl-4 uppercase">Development Feed</h1>
        <div className="text-gray-400 text-center py-16">
          <p className="mb-6">Coming soon. Explore other categories:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ai" className="text-red-600 hover:text-red-500 font-bold">AI</Link>
            <Link href="/sales" className="text-red-600 hover:text-red-500 font-bold">Sales</Link>
            <Link href="/marketing" className="text-red-600 hover:text-red-500 font-bold">Marketing</Link>
            <Link href="/productivity" className="text-red-600 hover:text-red-500 font-bold">Productivity</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

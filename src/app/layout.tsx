export const dynamic = 'force-dynamic';
export const revalidate = 0;
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeaderShields from "@/components/HeaderShields";
import CategoryTabs from "@/components/CategoryTabs";
import Footer from "@/components/Footer";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Vertical SaaS Hunter | AI, Sales, Marketing, Productivity",
  description: "垂直型SaaSとビジネス成長のための記事・インサイトを集約。AI、営業、マーケティング、生産性の最新トレンド。",
  openGraph: {
    title: "Vertical SaaS Hunter",
    description: "垂直型SaaSとビジネス成長のための記事・インサイトを集約。",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black antialiased text-white min-h-screen flex flex-col">
        <Navbar />
        <HeaderShields />
        <CategoryTabs />
        {children}
        <Footer />
      </body>
    </html>
  );
}

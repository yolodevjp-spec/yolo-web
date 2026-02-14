import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-black antialiased text-white min-h-screen">{children}</body>
    </html>
  );
}

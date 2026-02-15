import type { ReactNode } from "react";

interface SummaryCardProps {
  title: string;
  children: ReactNode;
}

export default function SummaryCard({ title, children }: SummaryCardProps) {
  return (
    <section className="rounded-2xl border border-gray-700 bg-gray-900/60 shadow-xl p-6 mb-6">
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{title}</h2>
      {children}
    </section>
  );
}

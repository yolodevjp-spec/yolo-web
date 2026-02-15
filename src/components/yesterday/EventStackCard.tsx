import Link from "next/link";

export interface EventStackItem {
  label: string;
  count: number;
}

interface EventStackCardProps {
  items: EventStackItem[];
}

export default function EventStackCard({ items }: EventStackCardProps) {
  return (
    <ul className="divide-y divide-gray-700">
      {items.map((item, i) => (
        <li key={i}>
          <Link
            href="/trend"
            className="flex items-center gap-3 py-3 text-gray-200 hover:text-white transition"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600/80 text-white text-sm font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <span className="flex-1">
              {item.label} <span className="text-gray-500">(計{item.count}本)</span>
            </span>
            <span className="text-gray-500" aria-hidden>→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

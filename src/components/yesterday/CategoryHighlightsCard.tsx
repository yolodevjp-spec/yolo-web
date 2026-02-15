export interface CategoryHighlight {
  key: string;
  label: string;
  color: string;
  topics: string[];
}

interface CategoryHighlightsCardProps {
  items: CategoryHighlight[];
}

export default function CategoryHighlightsCard({ items }: CategoryHighlightsCardProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((cat) => (
        <div key={cat.key} className="rounded-xl border border-gray-700 p-4">
          <h3 className={`font-bold mb-3 ${cat.color}`}>{cat.label}</h3>
          <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
            {cat.topics.map((t, j) => (
              <li key={j}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const WORD_STYLES: Record<string, string> = {
  "コラボ": "bg-orange-500/80 hover:bg-orange-500",
  "炎上": "bg-red-500/80 hover:bg-red-500",
  "引退": "bg-gray-500/80 hover:bg-gray-500",
};

interface SymbolicWordsCardProps {
  words: string[];
}

export default function SymbolicWordsCard({ words }: SymbolicWordsCardProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {words.map((w) => (
        <span
          key={w}
          className={`inline-flex items-center px-5 py-2 rounded-full text-sm font-bold text-white transition ${WORD_STYLES[w] ?? "bg-gray-600/80"}`}
        >
          {w}
        </span>
      ))}
    </div>
  );
}

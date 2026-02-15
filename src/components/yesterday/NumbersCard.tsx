interface NumbersCardProps {
  peakTime: string;
  anomalyDay: boolean;
  avgConcurrent: string | number;
}

export default function NumbersCard({ peakTime, anomalyDay, avgConcurrent }: NumbersCardProps) {
  return (
    <ul className="divide-y divide-gray-700 space-y-0">
      <li className="py-3 flex justify-between text-gray-200">
        <span className="text-gray-400">ピーク時間帯</span>
        <strong className="text-white">{peakTime}</strong>
      </li>
      <li className="py-3 flex justify-between text-gray-200">
        <span className="text-gray-400">異変日</span>
        <strong className={anomalyDay ? "text-green-400" : "text-gray-400"}>{anomalyDay ? "YES" : "NO"}</strong>
      </li>
      <li className="py-3 flex justify-between text-gray-200">
        <span className="text-gray-400">平均同生数/空枠有数</span>
        <strong className="text-white">{avgConcurrent}</strong>
      </li>
    </ul>
  );
}

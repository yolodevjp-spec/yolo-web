/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans text-white flex items-center justify-center p-10">
      <div className="flex gap-8 items-center">
        
        {/* 1. 新着カード（ネオンレッド＆ブラッシュドシルバー） */}
        <div className="relative w-[300px] h-[450px] rounded-[10px] p-[2px] bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.7)]">
          <div className="w-full h-full rounded-[8px] bg-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden">
            {/* 内部の縦ヘアライン質感 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a] opacity-80 z-0">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent,transparent_1px,#ffffff_1px,#ffffff_2px)] opacity-[0.05]"></div>
            </div>

            {/* シルバーの再生ボタン */}
            <div className="relative z-10 w-32 h-20 bg-gradient-to-br from-[#e0e0e0] via-[#c0c0c0] to-[#a0a0a0] rounded-[15px] flex items-center justify-center mb-10 shadow-[0_5px_20px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.6)]">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
            </div>

            <p className="relative z-10 text-red-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">New Arrival</p>
            <div className="relative z-10 flex items-baseline">
              <span className="text-8xl font-[1000] tracking-tighter text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">68</span>
              <span className="text-xl font-black italic text-red-500 ml-1 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">本</span>
            </div>
          </div>
        </div>

        {/* 2. 10万カード（ネオンゴールド＆ラフテクスチャー） */}
        <div className="relative w-[300px] h-[450px] rounded-[10px] p-[2px] bg-amber-400 shadow-[0_0_40px_rgba(251,191,36,0.7)]">
          <div className="w-full h-full rounded-[8px] bg-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden">
            {/* 内部のざらつき質感 */}
            <div className="absolute inset-0 bg-gray-900 opacity-90 z-0 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')]"></div>
            
            {/* ゴールドの再生ボタン */}
            <div className="relative z-10 w-32 h-20 bg-gradient-to-br from-[#ffd700] via-[#daa520] to-[#b8860b] rounded-[15px] flex items-center justify-center mb-10 shadow-[0_5px_20px_rgba(0,0,0,0.4),inset_0_2px_5px_rgba(255,255,255,0.4)]">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
            </div>

            <p className="relative z-10 text-amber-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">100k Club</p>
            <div className="relative z-10 flex items-baseline">
              <span className="text-8xl font-[1000] tracking-tighter text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">14</span>
              <span className="text-xl font-black italic text-amber-400 ml-1 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">本</span>
            </div>
          </div>
        </div>

        {/* 3. 空気感カード（ネオンブルー＆ダイヤモンド） */}
        <div className="relative w-[300px] h-[450px] rounded-[10px] p-[2px] bg-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.7)]">
          <div className="w-full h-full rounded-[8px] bg-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden">
            {/* 内部の多面ダイヤモンド質感 */}
            <div className="absolute inset-0 bg-white/5 z-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-0 opacity-10 animate-pulse"></div>

            {/* ダイヤモンドの再生ボタン */}
            <div className="relative z-10 w-32 h-20 bg-gradient-to-br from-white via-[#e0f7fa] to-[#b2ebf2] rounded-[15px] flex items-center justify-center mb-10 shadow-[0_5px_20px_rgba(0,0,0,0.4),0_0_30px_rgba(255,255,255,0.8),inset_0_2px_5px_rgba(255,255,255,0.9)]">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-1"></div>
            </div>

            <p className="relative z-10 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2">Current Vibe</p>
            <div className="relative z-10 flex items-baseline">
              <span className="text-8xl font-[1000] tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">祭</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
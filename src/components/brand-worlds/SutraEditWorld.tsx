import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, BookOpen } from 'lucide-react';

interface SutraEditWorldProps {
  className?: string;
  autoPlay?: boolean;
}

export const SutraEditWorld: React.FC<SutraEditWorldProps> = ({
  className = '',
  autoPlay = true,
}) => {
  const [stage, setStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = [
    { num: '01', name: 'MARKET SIGNALS', tag: 'EDITORIAL TYPOGRAPHY' },
    { num: '02', name: '3-TIER PLATFORM', tag: 'EDIT · DASHBOARD · CONSULTING' },
    { num: '03', name: 'VALUE CHAIN', tag: 'CONTENT → INTELLIGENCE' },
    { num: '04', name: 'MONETIZATION', tag: 'STARTER · PRO · PREMIUM' },
    { num: '05', name: 'FINAL RESOLUTION', tag: 'FASHION INTELLIGENCE' },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStage((prev) => {
          if (prev >= 4) {
            setIsPlaying(false);
            return 4;
          }
          return prev + 1;
        });
      }, 1300);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleReset = () => {
    setStage(0);
    setIsPlaying(true);
  };

  return (
    <div className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0B0A09] rounded-3xl border border-[#262320] overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none ${className}`}>
      {/* Editorial Background Coordinates */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Top Header Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">INTELLIGENCE WORLD // SUTRA EDIT</span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#8E8278] text-[11px]">“FASHION INTELLIGENCE & BUSINESS MODEL”</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#C8BFB2] bg-[#141211] px-2.5 py-1 rounded-full border border-[#262320]">
            STAGE 0{stage + 1} / 05
          </span>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-[#141211] hover:bg-[#722F37] text-[#F4F0E8] border border-[#262320] transition-colors"
            title={isPlaying ? 'Pause Animation' : 'Play Sequence'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg bg-[#141211] hover:bg-[#722F37] text-[#F4F0E8] border border-[#262320] transition-colors"
            title="Restart Animation"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Central Visual Animation Canvas */}
      <div className="relative z-10 flex-1 my-4 flex items-center justify-center min-h-[180px]">
        {/* STAGE 01: Dynamic Editorial Words Emerging on Grid */}
        {stage === 0 && (
          <div className="w-full max-w-md space-y-3 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>MARKET SIGNAL DECONSTRUCTION</span>
              <span>INDIA FASHION DATA</span>
            </div>
            <div className="grid grid-cols-3 gap-2 p-4 rounded-2xl bg-[#141211] border border-[#262320]">
              {['MARKET', 'BRANDS', 'CONSUMER', 'TREND', 'PRICE', 'CHANNEL'].map((word, wIdx) => (
                <div
                  key={wIdx}
                  className="p-3 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 text-center font-mono text-xs text-[#F4F0E8] hover:border-[#722F37] transition-all"
                >
                  <span className="text-[8px] text-[#722F37] block">SIG_0{wIdx + 1}</span>
                  <span className="font-semibold">{word}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 02: 3-Part Strategic Platform Grid */}
        {stage === 1 && (
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
            {[
              { title: 'THE WEEKLY EDIT', desc: 'Curated business & trend dispatches', tag: 'CONTENT' },
              { title: 'THE DASHBOARD', desc: 'Category benchmarks & price tracking', tag: 'DATA' },
              { title: '1:1 CONSULTING', desc: 'Bespoke brand & retail advisory', tag: 'STRATEGY' },
            ].map((col, cIdx) => (
              <div key={cIdx} className="p-4 rounded-2xl bg-[#141211] border border-[#722F37] space-y-1.5">
                <div className="flex justify-between text-[9px] font-mono text-[#722F37]">
                  <span>0{cIdx + 1} // PLATFORM</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#0B0A09] border border-[#262320]">{col.tag}</span>
                </div>
                <div className="font-serif text-base text-[#F4F0E8]">{col.title}</div>
                <div className="text-[10px] text-[#8E8278] font-sans">{col.desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* STAGE 03: Connected Value System */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>INTELLIGENCE VALUE SYSTEM</span>
              <span>COMMUNITY TO COMMERCE</span>
            </div>
            <div className="flex items-center justify-between gap-1 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/50 font-mono text-xs text-[#F4F0E8]">
              {['CONTENT', '↓', 'COMMUNITY', '↓', 'INTELLIGENCE', '↓', 'CONSULTING'].map((itm, iIdx) => (
                <span
                  key={iIdx}
                  className={itm === '↓' ? 'text-[#722F37] font-bold' : 'px-2.5 py-1 rounded bg-[#141211] border border-[#262320] text-[10px] font-semibold'}
                >
                  {itm}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Tiered Monetization Architecture */}
        {stage === 3 && (
          <div className="w-full max-w-md space-y-3 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>SUBSCRIPTION ARCHITECTURE</span>
              <span>RECURRING VALUE LOOPS</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { tier: 'STARTER', scope: 'Weekly newsletter & trends' },
                { tier: 'PRO', scope: 'Dashboard & pricing indices' },
                { tier: 'PREMIUM', scope: 'Sutra Circle + 1:1 advisory' },
              ].map((t, tIdx) => (
                <div key={tIdx} className="p-3 rounded-xl bg-[#141211] border border-[#722F37]/60 text-center space-y-1">
                  <div className="font-serif text-sm text-[#F4F0E8]">{t.tier}</div>
                  <div className="text-[8px] font-mono text-[#722F37]">TIER 0{tIdx + 1}</div>
                  <div className="text-[9px] font-sans text-[#8E8278]">{t.scope}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 05: Final Resolution */}
        {stage === 4 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-lg border border-[#A87578]/40">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
              SUTRA EDIT
            </h4>
            <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold">
              FASHION INTELLIGENCE & BUSINESS MODEL
            </div>
            <p className="text-xs text-[#8E8278] font-mono">
              The Weekly Edit · Intelligence Dashboard · 1:1 Brand Consulting Model
            </p>
          </div>
        )}
      </div>

      {/* Bottom Timeline Stepper Ribbon */}
      <div className="relative z-10 border-t border-[#262320] pt-3 flex items-center justify-between gap-2 overflow-x-auto">
        {stages.map((stg, idx) => (
          <button
            key={idx}
            onClick={() => {
              setStage(idx);
              setIsPlaying(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-left transition-all shrink-0 font-mono text-[10px] border ${
              stage === idx
                ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold shadow-md'
                : 'bg-[#141211] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
            }`}
          >
            <span>{stg.num} {stg.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

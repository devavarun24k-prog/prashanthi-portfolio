import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

interface SutraEditWorldProps {
  className?: string;
}

export const SutraEditWorld: React.FC<SutraEditWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'MARKET SIGNALS', desc: 'Fragmented Industry Data Points' },
    { num: '02', name: '3-TIER PLATFORM', desc: 'Weekly Edit · Dashboard · Consulting' },
    { num: '03', name: 'VALUE CHAIN', desc: 'Content → Community → Intelligence' },
    { num: '04', name: 'TIERED MODEL', desc: 'Starter · Pro · Premium Architecture' },
    { num: '05', name: 'FINAL RESOLUTION', desc: 'Fashion Intelligence & Business Model' },
  ];

  const TOTAL_STAGES = stages.length;
  const STAGE_DURATION = 1900; // ms per stage

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Continuous Seamless Animation Loop
  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let startTime = performance.now();
    let animFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = (elapsed % STAGE_DURATION) / STAGE_DURATION;
      const currentStage = Math.floor((elapsed / STAGE_DURATION) % TOTAL_STAGES);

      setStageProgress(progress);
      setStage((prev) => (prev !== currentStage ? currentStage : prev));

      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [isVisible, TOTAL_STAGES]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0B0A09] rounded-3xl border border-[#262320] overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Background Coordinate Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

      {/* Top Header Information Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">
            INTELLIGENCE WORLD // SUTRA EDIT
          </span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#C8BFB2] text-[11px] uppercase transition-all duration-500">
            {stages[stage].name}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E8278]">
          <span className="text-[#722F37] font-bold">0{stage + 1}</span>
          <span>/</span>
          <span>0{TOTAL_STAGES}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] animate-ping ml-1" />
        </div>
      </div>

      {/* Central Visual Animation Canvas */}
      <div className="relative z-10 flex-1 my-4 flex items-center justify-center min-h-[190px]">
        {/* STAGE 01: Fragmented Market Signals */}
        {stage === 0 && (
          <div className="w-full max-w-md space-y-3 animate-fadeIn transition-all duration-700">
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

        {/* STAGE 02: 3-Tier Platform Grid Alignment */}
        {stage === 1 && (
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn transition-all duration-700">
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

        {/* STAGE 03: Connected Value System Flow */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>INTELLIGENCE VALUE SYSTEM</span>
              <span>COMMUNITY TO COMMERCE</span>
            </div>
            <div className="flex items-center justify-between gap-1 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/50 font-mono text-xs text-[#F4F0E8]">
              {['CONTENT', '↓', 'COMMUNITY', '↓', 'TRUST', '↓', 'INTELLIGENCE', '↓', 'CONSULTING'].map(
                (itm, iIdx) => (
                  <span
                    key={iIdx}
                    className={
                      itm === '↓'
                        ? 'text-[#722F37] font-bold'
                        : 'px-2 py-1 rounded bg-[#141211] border border-[#262320] text-[9px] font-semibold'
                    }
                  >
                    {itm}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* STAGE 04: Tiered Business Model Architecture */}
        {stage === 3 && (
          <div className="w-full max-w-md space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>SUBSCRIPTION & BUSINESS ARCHITECTURE</span>
              <span>RECURRING VALUE LOOPS</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { tier: 'STARTER', scope: 'Weekly newsletter & trends' },
                { tier: 'PRO', scope: 'Dashboard & pricing indices' },
                { tier: 'PREMIUM', scope: 'Sutra Circle + 1:1 advisory' },
              ].map((t, tIdx) => (
                <div
                  key={tIdx}
                  className="p-3.5 rounded-xl bg-[#141211] border border-[#722F37]/60 text-center space-y-1"
                >
                  <div className="font-serif text-sm text-[#F4F0E8]">{t.tier}</div>
                  <div className="text-[8px] font-mono text-[#722F37]">TIER 0{tIdx + 1}</div>
                  <div className="text-[9px] font-sans text-[#8E8278]">{t.scope}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 05: Final Resolution & Seamless Loop */}
        {stage === 4 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn transition-all duration-700">
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

      {/* Bottom Passive Segmented Progress Bar */}
      <div className="relative z-10 border-t border-[#262320] pt-3">
        <div className="grid grid-cols-5 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-1 bg-[#141211] rounded-full overflow-hidden border border-[#262320]/60">
                  <div
                    className="h-full bg-[#722F37] transition-all duration-100 ease-linear"
                    style={{
                      width: isCompleted ? '100%' : isCurrent ? `${stageProgress * 100}%` : '0%',
                    }}
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className={isCurrent ? 'text-[#F4F0E8] font-bold' : 'text-[#8E8278]'}>
                    {stg.num}
                  </span>
                  <span className="hidden sm:inline text-[#8E8278] truncate text-[8px]">
                    {stg.name.split(' ')[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

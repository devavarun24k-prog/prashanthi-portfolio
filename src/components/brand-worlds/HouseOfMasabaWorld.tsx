import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Scissors } from 'lucide-react';

interface HouseOfMasabaWorldProps {
  className?: string;
}

export const HouseOfMasabaWorld: React.FC<HouseOfMasabaWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'MOTIF GENESIS', desc: 'Abstract Botanical & Cultural Vector Line' },
    { num: '02', name: 'TEXTILE PATTERN', desc: 'Rhythmic Editorial Print Composition' },
    { num: '03', name: 'SKU GRID MATRIX', desc: '5 Categories · 112 Styles · 1,008 SKUs' },
    { num: '04', name: 'STRATEGY CASCADE', desc: 'Brand → Consumer → Merchandise → Product' },
    { num: '05', name: 'RETAIL RESOLUTION', desc: 'Translating Brand Identity into Retail Experience' },
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
            BRAND WORLD // HOUSE OF MASABA
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
        {/* STAGE 01: Abstract Vector Fashion Motif Line */}
        {stage === 0 && (
          <div className="w-48 h-48 flex items-center justify-center relative animate-fadeIn transition-all duration-700">
            <svg viewBox="0 0 160 160" className="w-full h-full text-[#722F37]">
              <path
                d="M80,20 Q110,60 80,100 Q50,60 80,20 Z"
                fill="none"
                stroke="#722F37"
                strokeWidth="1.8"
                className="animate-pulse"
              />
              <path
                d="M80,40 Q130,80 80,130 Q30,80 80,40 Z"
                fill="none"
                stroke="#F4F0E8"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <circle cx="80" cy="80" r="8" fill="#722F37" />
              <line x1="40" y1="80" x2="120" y2="80" stroke="#C8BFB2" strokeWidth="1" />
              <line x1="80" y1="40" x2="80" y2="120" stroke="#C8BFB2" strokeWidth="1" />
            </svg>
            <div className="absolute -bottom-1 font-mono text-[9px] uppercase tracking-widest text-[#8E8278]">
              [ CULTURAL MOTIF LINE GENESIS ]
            </div>
          </div>
        )}

        {/* STAGE 02: Repeating Textile Pattern Spread */}
        {stage === 1 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>RHYTHMIC TEXTILE PRINT COMPOSITION</span>
              <span>CONTEMPORARY RESORT / PRÊT</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 p-4 rounded-2xl bg-[#141211] border border-[#262320]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-14 rounded-xl border border-[#722F37]/50 bg-[#0B0A09] flex items-center justify-center text-[#F4F0E8] transition-all hover:scale-105"
                >
                  <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#722F37]">
                    <path d="M20,6 Q30,20 20,34 Q10,20 20,6 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="20" cy="20" r="2.5" fill="#F4F0E8" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Structured Merchandise SKU Grid Matrix & Exact Categories */}
        {stage === 2 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>MERCHANDISE MATRIX ARCHITECTURE</span>
              <span>112 STYLES · 1,008 SKUs</span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
              {[
                { name: 'Festive Bias', count: '28 Styles' },
                { name: 'High-End Prêt', count: '32 Styles' },
                { name: 'Wedding Guest', count: '24 Styles' },
                { name: 'Heritage Remix', count: '16 Styles' },
                { name: 'Print Personality', count: '12 Styles' },
              ].map((cat, cIdx) => (
                <div key={cIdx} className="p-2.5 rounded-xl bg-[#141211] border border-[#722F37] text-center space-y-1">
                  <div className="text-[8px] font-mono text-[#722F37]">CAT_0{cIdx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8] leading-tight">{cat.name}</div>
                  <div className="text-[8px] text-[#8E8278] font-mono">{cat.count}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Brand-to-Product Strategy Cascade */}
        {stage === 3 && (
          <div className="w-full max-w-lg p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>STRATEGIC CONVERSION CASCADE</span>
              <span>6-TIER HIERARCHY</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/40 font-mono text-[11px] text-[#F4F0E8]">
              {['BRAND', '↓', 'CONSUMER', '↓', 'MERCHANDISE', '↓', 'ASSORTMENT', '↓', 'VM', '↓', 'PRODUCT'].map((item, idx) => (
                <span
                  key={idx}
                  className={
                    item === '↓'
                      ? 'text-[#722F37] font-bold'
                      : 'px-2 py-1 rounded bg-[#141211] border border-[#262320] text-[10px] font-semibold'
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 05: Final Resolution & Seamless Loop */}
        {stage === 4 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-lg border border-[#A87578]/40">
              <Scissors className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
              HOUSE OF MASABA
            </h4>
            <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold">
              TRANSLATING BRAND IDENTITY INTO RETAIL EXPERIENCE
            </div>
            <p className="text-xs text-[#8E8278] font-mono">
              Assortment Planning · Tiered Pricing Architecture · Indian Sizing Calibration
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

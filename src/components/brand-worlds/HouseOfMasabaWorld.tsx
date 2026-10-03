import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Scissors } from 'lucide-react';

interface HouseOfMasabaWorldProps {
  className?: string;
  autoPlay?: boolean;
}

export const HouseOfMasabaWorld: React.FC<HouseOfMasabaWorldProps> = ({
  className = '',
  autoPlay = true,
}) => {
  const [stage, setStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = [
    { num: '01', name: 'MOTIF GENESIS', tag: 'CULTURAL VECTOR LINE' },
    { num: '02', name: 'TEXTILE PATTERN', tag: 'PRINT COMPOSITION' },
    { num: '03', name: 'SKU GRID MATRIX', tag: '5 CATS · 112 STYLES · 1,008 SKUS' },
    { num: '04', name: 'STRATEGY CASCADE', tag: 'BRAND → CONSUMER → PRODUCT' },
    { num: '05', name: 'FINAL RESOLUTION', tag: 'ASSORTMENT STRATEGY' },
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
      {/* Background Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Top Header Information Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">BRAND WORLD // HOUSE OF MASABA</span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#8E8278] text-[11px]">“BRAND IDENTITY TO RETAIL EXPERIENCE”</span>
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
        {/* STAGE 01: Abstract Vector Fashion Motif Line */}
        {stage === 0 && (
          <div className="w-48 h-48 flex items-center justify-center relative animate-fadeIn">
            <svg viewBox="0 0 160 160" className="w-full h-full text-[#722F37]">
              {/* Botanical & Palm Inspired Geometric Motifs */}
              <path
                d="M80,20 Q110,60 80,100 Q50,60 80,20 Z"
                fill="none"
                stroke="#722F37"
                strokeWidth="1.8"
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
            <div className="absolute bottom-0 font-mono text-[9px] uppercase tracking-widest text-[#8E8278]">
              [ STYLIZED CULTURAL MOTIF VECTOR ]
            </div>
          </div>
        )}

        {/* STAGE 02: Repeating Textile Pattern Spread */}
        {stage === 1 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>RHYTHMIC TEXTILE COMPOSITION</span>
              <span>CONTEMPORARY RESORT / PRET</span>
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

        {/* STAGE 03: Structured Merchandise SKU Grid Matrix */}
        {stage === 2 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>MERCHANDISE MATRIX ARCHITECTURE</span>
              <span>BALANCED CATEGORY MIX</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#141211] border border-[#722F37] text-center space-y-1">
                <div className="text-[10px] font-mono text-[#722F37] uppercase">CATEGORIES</div>
                <div className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">05</div>
                <div className="text-[9px] text-[#8E8278] font-mono">Pret · Resort · Occasion</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#141211] border border-[#722F37] text-center space-y-1">
                <div className="text-[10px] font-mono text-[#722F37] uppercase">TOTAL STYLES</div>
                <div className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">112</div>
                <div className="text-[9px] text-[#8E8278] font-mono">Core & Novelty Mix</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#141211] border border-[#722F37] text-center space-y-1">
                <div className="text-[10px] font-mono text-[#722F37] uppercase">RETAIL SKUs</div>
                <div className="font-serif text-3xl sm:text-4xl text-[#F4F0E8]">1,008</div>
                <div className="text-[9px] text-[#8E8278] font-mono">Size S to XXL Curves</div>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 04: Brand-to-Product Strategy Cascade */}
        {stage === 3 && (
          <div className="w-full max-w-lg p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>STRATEGIC CONVERSION HIERARCHY</span>
              <span>6-LEVEL ASSORTMENT FLOW</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/40 font-mono text-[11px] text-[#F4F0E8]">
              {['BRAND', '↓', 'CONSUMER', '↓', 'MERCHANDISE', '↓', 'ASSORTMENT', '↓', 'VM', '↓', 'PRODUCT'].map((item, idx) => (
                <span
                  key={idx}
                  className={item === '↓' ? 'text-[#722F37] font-bold' : 'px-2 py-1 rounded bg-[#141211] border border-[#262320] text-[10px] font-semibold'}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 05: Final Resolution */}
        {stage === 4 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn">
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

      {/* Bottom Stepper Timeline */}
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

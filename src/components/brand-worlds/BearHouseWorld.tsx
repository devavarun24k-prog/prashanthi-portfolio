import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Layers } from 'lucide-react';

interface BearHouseWorldProps {
  className?: string;
  autoPlay?: boolean;
}

export const BearHouseWorld: React.FC<BearHouseWorldProps> = ({
  className = '',
  autoPlay = true,
}) => {
  const [stage, setStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = [
    { num: '01', name: 'ABSTRACT BEAR MARK', tag: 'GEOMETRIC IDENTITY STUDY' },
    { num: '02', name: 'GRID EXPANSION', tag: 'ARCHITECTURAL LINES' },
    { num: '03', name: 'MERCHANDISE SYSTEM', tag: 'SHIRTS · TROUSERS · FIXTURES' },
    { num: '04', name: 'STORE FLOOR PLAN', tag: 'TOP-DOWN RETAIL ZONING' },
    { num: '05', name: 'CUSTOMER FLOW', tag: 'ENTRY → DISPLAY → MOVEMENT' },
    { num: '06', name: 'EOSS REORGANIZATION', tag: 'STOCKROOM → FLOOR → SALE' },
    { num: '07', name: 'FINAL RESOLUTION', tag: '46-DAY VM EXECUTION' },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStage((prev) => {
          if (prev >= 6) {
            setIsPlaying(false);
            return 6;
          }
          return prev + 1;
        });
      }, 1200);
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
      {/* Editorial Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Top Header Information Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">BRAND WORLD // THE BEAR HOUSE</span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#8E8278] text-[11px]">“FROM PRODUCT TO RETAIL FLOOR”</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#C8BFB2] bg-[#141211] px-2.5 py-1 rounded-full border border-[#262320]">
            STAGE 0{stage + 1} / 07
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
        {/* STAGE 01: Geometric Bear Mark Identity Study */}
        {stage === 0 && (
          <div className="relative w-48 h-48 flex items-center justify-center animate-fadeIn">
            <svg viewBox="0 0 160 160" className="w-full h-full text-[#722F37]">
              {/* Outer Geometric Polygon Mask */}
              <polygon
                points="80,15 125,45 135,95 110,140 50,140 25,95 35,45"
                fill="none"
                stroke="#722F37"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                className="transition-all duration-700 opacity-80"
              />
              {/* Abstract Bear Head Facets */}
              <polygon points="80,30 115,55 80,85 45,55" fill="none" stroke="#F4F0E8" strokeWidth="1.2" />
              <polygon points="80,85 115,55 125,95 80,125" fill="none" stroke="#C8BFB2" strokeWidth="1" />
              <polygon points="80,85 45,55 35,95 80,125" fill="none" stroke="#C8BFB2" strokeWidth="1" />
              {/* Bear Ears Geometrics */}
              <polygon points="45,55 30,30 55,38" fill="none" stroke="#722F37" strokeWidth="1.2" />
              <polygon points="115,55 130,30 105,38" fill="none" stroke="#722F37" strokeWidth="1.2" />
              {/* Snout Focal Node */}
              <circle cx="80" cy="105" r="4" fill="#722F37" />
              <line x1="80" y1="85" x2="80" y2="105" stroke="#722F37" strokeWidth="1.2" />
            </svg>
            <div className="absolute bottom-1 font-mono text-[9px] uppercase tracking-widest text-[#8E8278]">
              [ GEOMETRIC BEAR FACET STUDY ]
            </div>
          </div>
        )}

        {/* STAGE 02: Deconstructed Architectural Grid */}
        {stage === 1 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn">
            <div className="flex justify-between font-mono text-[10px] text-[#722F37]">
              <span>HORIZONTAL STORE MATRIX</span>
              <span>1.5" FIXTURE SPACING SYSTEM</span>
            </div>
            <div className="grid grid-cols-6 gap-2 p-4 rounded-2xl bg-[#141211] border border-[#262320]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="h-14 rounded-lg border border-[#262320] bg-[#0B0A09] flex flex-col justify-between p-1.5 transition-all duration-500 hover:border-[#722F37]"
                >
                  <span className="text-[8px] font-mono text-[#722F37]">G_{i + 1}</span>
                  <div className="w-full h-[1px] bg-[#722F37]/50" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Merchandise System Architecture */}
        {stage === 2 && (
          <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fadeIn">
            {[
              { cat: 'SHIRTS', spec: 'Formal & Linen Lines', code: 'SKU.S_01' },
              { cat: 'TROUSERS', spec: 'Chinos & Smart Tailored', code: 'SKU.T_02' },
              { cat: 'ACCESSORIES', spec: 'Belts & Footwear', code: 'SKU.A_03' },
              { cat: 'FIXTURES', spec: '1.5" Forward Focal Arms', code: 'FIX.R_04' },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#141211] border border-[#722F37]/60 space-y-2">
                <div className="flex items-center justify-between text-[9px] font-mono text-[#722F37]">
                  <span>{item.code}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
                </div>
                <div className="font-serif text-base text-[#F4F0E8]">{item.cat}</div>
                <div className="text-[10px] text-[#8E8278] font-mono">{item.spec}</div>
              </div>
            ))}
          </div>
        )}

        {/* STAGE 04: Top-Down Store Floor Plan */}
        {stage === 3 && (
          <div className="w-full max-w-md p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-3 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#8E8278] border-b border-[#262320] pb-1.5">
              <span className="text-[#722F37] font-semibold">STORE BLUEPRINT (EBO / SIS FORMAT)</span>
              <span>SCALE 1:50</span>
            </div>
            <div className="relative h-28 border border-[#262320] rounded-xl bg-[#0B0A09] p-2 grid grid-cols-12 gap-1.5">
              <div className="col-span-3 border border-[#722F37] bg-[#722F37]/10 rounded flex items-center justify-center text-[9px] font-mono text-[#F4F0E8]">
                THRESHOLD / VM
              </div>
              <div className="col-span-6 border border-[#262320] rounded p-1 flex flex-col justify-between">
                <div className="flex justify-between text-[8px] font-mono text-[#8E8278]">
                  <span>FOCAL TABLE</span>
                  <span>ISLAND</span>
                </div>
                <div className="h-6 rounded bg-[#141211] border border-[#722F37]/40 flex items-center justify-center text-[8px] font-mono text-[#C8BFB2]">
                  HERO DISPLAY
                </div>
              </div>
              <div className="col-span-3 border border-[#262320] rounded flex items-center justify-center text-[9px] font-mono text-[#8E8278]">
                FITTING BAY
              </div>
            </div>
          </div>
        )}

        {/* STAGE 05: Customer Flow Vector Dynamics */}
        {stage === 4 && (
          <div className="w-full max-w-lg p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>ACTIVE FLOW TRAJECTORY</span>
              <span>DWELL-TIME MAXIMIZATION</span>
            </div>
            <div className="flex items-center justify-between gap-2 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/50 font-mono text-xs text-[#F4F0E8]">
              {['ENTRY', '→', 'FOCAL DISPLAY', '→', 'HERO PRODUCT', '→', 'FITTING', '→', 'CHECKOUT'].map((node, nIdx) => (
                <span
                  key={nIdx}
                  className={node === '→' ? 'text-[#722F37]' : 'px-2 py-1 rounded bg-[#141211] border border-[#262320] text-[10px]'}
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 06: EOSS Reorganization Velocity */}
        {stage === 5 && (
          <div className="w-full max-w-lg space-y-2 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>EOSS HIGH-DENSITY TRANSFORMATION</span>
              <span>SIZE-GRID REALLOCATION</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { title: 'STOCKROOM', desc: 'Size-bundle sort (S–XXL)' },
                { title: 'FLOOR', desc: 'Density rail reset' },
                { title: 'DISPLAY', desc: 'Promotion focal arm' },
                { title: 'SALE', desc: 'Shorts wall active' },
              ].map((step, sIdx) => (
                <div key={sIdx} className="p-3 rounded-xl bg-[#722F37]/15 border border-[#722F37] space-y-1">
                  <div className="text-[9px] font-mono text-[#722F37] font-bold">0{sIdx + 1} // STEP</div>
                  <div className="font-serif text-sm text-[#F4F0E8]">{step.title}</div>
                  <div className="text-[9px] font-sans text-[#C8BFB2]">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 07: Final Resolution Spec */}
        {stage === 6 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-lg border border-[#A87578]/40">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
              THE BEAR HOUSE
            </h4>
            <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold">
              46-DAY INDUSTRY INTERNSHIP
            </div>
            <p className="text-xs text-[#8E8278] font-mono">
              Visual Merchandising + Retail Execution · 7 Audited Stores · 2 Flagship Launches
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
            className={`px-2.5 py-1.5 rounded-lg text-left transition-all shrink-0 font-mono text-[10px] border ${
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

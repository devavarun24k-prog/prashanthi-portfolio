import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Layers } from 'lucide-react';

interface BearHouseWorldProps {
  className?: string;
}

export const BearHouseWorld: React.FC<BearHouseWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'BRAND IDENTITY', desc: 'Abstract Bear Mark & Vector Geometry' },
    { num: '02', name: 'PRODUCT SYSTEM', desc: 'Shirts · Trousers · Accessories · Fixtures' },
    { num: '03', name: 'MERCHANDISE ORG', desc: 'Category Sizing Curves & Margin Ratio' },
    { num: '04', name: 'STORE ARCHITECTURE', desc: 'Blueprint Zoning & 1.5" Fixture Rails' },
    { num: '05', name: 'CUSTOMER FLOW', desc: 'Entry → Focal Display → Hero Product → Fitting' },
    { num: '06', name: 'EOSS TRANSFORMATION', desc: 'Stockroom → Floor → Display → Sale' },
    { num: '07', name: 'RETAIL RESOLUTION', desc: '46-Day Industry Internship VM Execution' },
  ];

  const TOTAL_STAGES = stages.length;
  const STAGE_DURATION = 2200; // ms per stage

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Safe timer loop without RAF state thrashing
  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % TOTAL_STAGES);
    }, STAGE_DURATION);

    return () => clearInterval(interval);
  }, [isVisible, TOTAL_STAGES]);

  const currentStage = stages[stage] || stages[0];

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0B0A09] rounded-3xl border border-[#262320] overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Editorial Grid Coordinate Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

      {/* Top Header: Brand Identity & Dynamic Sub-Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">
            BRAND WORLD // THE BEAR HOUSE
          </span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#C8BFB2] text-[11px] uppercase transition-all duration-500">
            {currentStage.name}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E8278]">
          <span className="text-[#722F37] font-bold">{currentStage.num}</span>
          <span>/</span>
          <span>0{TOTAL_STAGES}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] animate-ping ml-1" />
        </div>
      </div>

      {/* Central Continuous Morphing Canvas Spread */}
      <div className="relative z-10 flex-1 my-4 flex items-center justify-center min-h-[190px]">
        {/* STAGE 01: Geometric Bear Mark & Architectural Line Construction */}
        {stage === 0 && (
          <div className="relative w-48 h-48 flex items-center justify-center animate-fadeIn transition-all duration-700">
            <svg viewBox="0 0 160 160" className="w-full h-full text-[#722F37]">
              <polygon
                points="80,15 125,45 135,95 110,140 50,140 25,95 35,45"
                fill="none"
                stroke="#722F37"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                className="opacity-70 animate-pulse"
              />
              <polygon points="80,30 115,55 80,85 45,55" fill="none" stroke="#F4F0E8" strokeWidth="1.4" />
              <polygon points="80,85 115,55 125,95 80,125" fill="none" stroke="#C8BFB2" strokeWidth="1" />
              <polygon points="80,85 45,55 35,95 80,125" fill="none" stroke="#C8BFB2" strokeWidth="1" />
              <polygon points="45,55 30,30 55,38" fill="none" stroke="#722F37" strokeWidth="1.2" />
              <polygon points="115,55 130,30 105,38" fill="none" stroke="#722F37" strokeWidth="1.2" />
              <circle cx="80" cy="105" r="4" fill="#722F37" />
              <line x1="80" y1="85" x2="80" y2="105" stroke="#722F37" strokeWidth="1.2" />
            </svg>
            <div className="absolute -bottom-1 font-mono text-[9px] uppercase tracking-widest text-[#8E8278]">
              [ GEOMETRIC IDENTITY STUDY ]
            </div>
          </div>
        )}

        {/* STAGE 02: Minimal Product System Rectangles */}
        {stage === 1 && (
          <div className="w-full max-w-lg grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fadeIn transition-all duration-700">
            {[
              { cat: 'SHIRTS', spec: 'Linen & Formal Oxford', code: 'PRD.S_01' },
              { cat: 'TROUSERS', spec: 'Chinos & Tailored Fit', code: 'PRD.T_02' },
              { cat: 'ACCESSORIES', spec: 'Leather Belts & Ties', code: 'PRD.A_03' },
              { cat: 'FIXTURES', spec: '1.5" Rail Standard', code: 'FIX.R_04' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#141211] border border-[#722F37]/60 space-y-2 hover:border-[#722F37] transition-all"
              >
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

        {/* STAGE 03: Merchandise Category Organization */}
        {stage === 2 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between font-mono text-[10px] text-[#722F37]">
              <span>ASSORTMENT CURVE BY COLOR & SIZING</span>
              <span>S : M : L : XL : XXL</span>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {[
                { label: 'FORMAL LINE', color: 'Navy / Ecru', code: '40% DENSITY' },
                { label: 'SMART CASUAL', color: 'Burgundy / Taupe', code: '30% DENSITY' },
                { label: 'CHINOS & DENIM', color: 'Khaki / Stone', code: '20% DENSITY' },
                { label: 'ACCESSORIES', color: 'Leather / Metal', code: '10% DENSITY' },
              ].map((grp, gIdx) => (
                <div key={gIdx} className="p-3 rounded-xl bg-[#141211] border border-[#262320] space-y-1">
                  <div className="text-[8px] font-mono text-[#722F37] font-bold">0{gIdx + 1} // CAT</div>
                  <div className="font-serif text-sm text-[#F4F0E8] leading-tight">{grp.label}</div>
                  <div className="text-[9px] text-[#8E8278] font-mono">{grp.color}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Top-Down Store Architecture & Zoning Blueprint */}
        {stage === 3 && (
          <div className="w-full max-w-md p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#8E8278] border-b border-[#262320] pb-1.5">
              <span className="text-[#722F37] font-semibold">STORE BLUEPRINT (EBO / SIS FORMAT)</span>
              <span>1:50 ARCHITECTURAL SCALE</span>
            </div>
            <div className="relative h-28 border border-[#262320] rounded-xl bg-[#0B0A09] p-2 grid grid-cols-12 gap-1.5">
              <div className="col-span-3 border border-[#722F37] bg-[#722F37]/10 rounded flex flex-col items-center justify-center text-[9px] font-mono text-[#F4F0E8] text-center p-1">
                <span className="text-[#722F37] font-bold">THRESHOLD</span>
                <span className="text-[8px] text-[#C8BFB2]">ENTRY VM</span>
              </div>
              <div className="col-span-6 border border-[#262320] rounded p-1.5 flex flex-col justify-between">
                <div className="flex justify-between text-[8px] font-mono text-[#8E8278]">
                  <span>FOCAL TABLE</span>
                  <span>ISLAND DISPLAY</span>
                </div>
                <div className="h-6 rounded bg-[#141211] border border-[#722F37]/40 flex items-center justify-center text-[8px] font-mono text-[#C8BFB2]">
                  HERO PRODUCT SIGHTLINE
                </div>
              </div>
              <div className="col-span-3 border border-[#262320] rounded flex flex-col items-center justify-center text-[9px] font-mono text-[#8E8278] text-center p-1">
                <span>FITTING BAY</span>
                <span className="text-[8px] text-[#722F37]">DWELL AREA</span>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 05: Continuous Customer Flow Vector */}
        {stage === 4 && (
          <div className="w-full max-w-lg p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>ACTIVE FLOW TRAJECTORY</span>
              <span>UNOBSTRUCTED SIGHTLINES</span>
            </div>
            <div className="flex items-center justify-between gap-1.5 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/50 font-mono text-xs text-[#F4F0E8]">
              {['ENTRY', '→', 'FOCAL DISPLAY', '→', 'HERO PRODUCT', '→', 'FITTING', '→', 'CHECKOUT'].map((node, nIdx) => (
                <span
                  key={nIdx}
                  className={
                    node === '→'
                      ? 'text-[#722F37] font-bold'
                      : 'px-2 py-1 rounded bg-[#141211] border border-[#262320] text-[10px]'
                  }
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 06: EOSS Reorganization Transformation */}
        {stage === 5 && (
          <div className="w-full max-w-lg space-y-2 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>EOSS HIGH-DENSITY TRANSFORMATION</span>
              <span>RAPID FLOOR REALLOCATION</span>
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

        {/* STAGE 07: Final Resolution & Seamless Morph Back Transition */}
        {stage === 6 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn transition-all duration-700">
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

      {/* Bottom Passive Editorial Segmented Progress Bar */}
      <div className="relative z-10 border-t border-[#262320] pt-3">
        <div className="grid grid-cols-7 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-1 bg-[#141211] rounded-full overflow-hidden border border-[#262320]/60">
                  <div
                    className={`h-full bg-[#722F37] transition-all ${
                      isCompleted ? 'w-full' : isCurrent ? 'w-full duration-[2200ms] ease-linear' : 'w-0'
                    }`}
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

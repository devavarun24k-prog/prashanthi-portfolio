import { useState, useEffect, useRef } from 'react';
import { Shirt, Sparkles, Store } from 'lucide-react';

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
    { num: '01', name: 'FABRIC & CRAFT', desc: 'Oxford Weave & Tailored Collar Structure' },
    { num: '02', name: 'GARMENT SILHOUETTE', desc: 'Pure Linen & Slim-Fit Shirt Architecture' },
    { num: '03', name: 'MERCHANDISE RAIL', desc: 'Curated Shirts, Chinos & 1.5" Rail Fixtures' },
    { num: '04', name: 'STORE SIGHTLINE', desc: 'Threshold → Focal Table → Hero Wall VM' },
    { num: '05', name: 'EOSS FLOOR RESET', desc: 'Stockroom Sizing Sort & High-Density Floor' },
    { num: '06', name: 'RETAIL RESOLUTION', desc: '46-Day Industry Internship VM Execution' },
  ];

  const TOTAL_STAGES = stages.length;
  const STAGE_DURATION = 2300; // ms per stage

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
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0E0D0C] rounded-3xl border border-[#262320] overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Editorial Backdrop with Fine Tailoring Pinstripe */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#722F37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Editorial Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320]/80 pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8] text-[11px] sm:text-xs">
            MENSWEAR CAMPAIGN // THE BEAR HOUSE
          </span>
          <span className="text-[#3A3632]">•</span>
          <span className="text-[#C8BFB2] text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-500">
            {currentStage.name}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E8278]">
          <span className="text-[#722F37] font-bold">{currentStage.num}</span>
          <span>/</span>
          <span>0{TOTAL_STAGES}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] ml-1" />
        </div>
      </div>

      {/* Central Visual Motion Canvas */}
      <div className="relative z-10 flex-1 my-3 flex items-center justify-center min-h-[195px]">
        {/* STAGE 01: Fabric & Craft Close Crop */}
        {stage === 0 && (
          <div className="w-full max-w-md p-5 rounded-2xl bg-[#141211] border border-[#262320] shadow-xl space-y-4 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-[#8E8278] border-b border-[#262320] pb-2">
              <span className="text-[#722F37] font-semibold">PREMIUM MENSWEAR TEXTILE CROP</span>
              <span>100% COMBED COTTON OXFORD</span>
            </div>

            <div className="grid grid-cols-12 gap-3 items-center">
              {/* Visual Fabric Weave & Collar Silhouette */}
              <div className="col-span-5 h-28 rounded-xl bg-[#0B0A09] border border-[#722F37]/40 p-3 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C8BFB2_1px,transparent_1px)] [background-size:6px_6px]" />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[8px] font-mono text-[#722F37]">SWATCH_01</span>
                  <div className="w-3 h-3 rounded-full border border-[#C8BFB2] bg-[#F4F0E8]/10 flex items-center justify-center text-[6px] text-[#F4F0E8]">
                    •
                  </div>
                </div>
                <div className="relative z-10 space-y-0.5">
                  <div className="font-serif text-sm text-[#F4F0E8]">Oxford Weave</div>
                  <div className="text-[8px] font-mono text-[#8E8278]">60s 2-Ply Yarn</div>
                </div>
              </div>

              {/* Garment Details Breakdown */}
              <div className="col-span-7 space-y-2 text-left pl-2">
                <div className="space-y-0.5">
                  <div className="text-[8px] font-mono text-[#722F37] uppercase font-bold tracking-wider">
                    TAILORING SPECIFICATION
                  </div>
                  <div className="font-serif text-base text-[#F4F0E8]">Spread Collar & French Placket</div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#0B0A09] border border-[#262320] text-[8px] font-mono text-[#C8BFB2]">
                    Mother-of-Pearl Buttons
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0B0A09] border border-[#262320] text-[8px] font-mono text-[#C8BFB2]">
                    Curved Hemline
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#722F37]/20 border border-[#722F37]/40 text-[8px] font-mono text-[#F4F0E8]">
                    S – XXL Sizing
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 02: Full Garment Silhouette & Fit Specs */}
        {stage === 1 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141211] border border-[#262320] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#262320] pb-2">
              <span className="font-semibold">MENSWEAR SILHOUETTE & FIT ARCHITECTURE</span>
              <span className="text-[#8E8278]">CORE COMMERCIAL LINE</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'LINEN SHIRT', fit: 'Classic Fit', tone: 'Navy / Ecru', density: '40% Assortment' },
                { title: 'TAILORED CHINO', fit: 'Slim Tapered', tone: 'Stone / Taupe', density: '30% Assortment' },
                { title: 'KNIT POLO', fit: 'Smart Casual', tone: 'Burgundy / Olive', density: '20% Assortment' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 space-y-2 text-left hover:border-[#722F37] transition-all">
                  <div className="flex items-center justify-between text-[8px] font-mono text-[#722F37]">
                    <span>0{idx + 1} // FIT</span>
                    <Shirt className="w-3 h-3 text-[#722F37]" />
                  </div>
                  <div>
                    <div className="font-serif text-sm text-[#F4F0E8] leading-snug">{item.title}</div>
                    <div className="text-[9px] text-[#8E8278] font-mono">{item.fit}</div>
                  </div>
                  <div className="pt-1 border-t border-[#262320] flex justify-between text-[8px] font-mono text-[#C8BFB2]">
                    <span>{item.tone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Curated Merchandise Rail & VM Standard */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141211] border border-[#262320] space-y-3 shadow-xl animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#262320] pb-2">
              <span className="font-semibold">1.5" MATTE FIXTURE RAIL ASSORTMENT</span>
              <span className="text-[#8E8278]">COLOR BLOCKING & SIZING RATIOS</span>
            </div>

            {/* Horizontal Rail Line Graphic */}
            <div className="relative py-2">
              <div className="h-1 bg-[#3A3632] rounded-full w-full relative">
                <div className="absolute top-[-3px] left-0 right-0 flex justify-between px-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#722F37] border border-[#F4F0E8]/40" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center pt-1">
              {[
                { cat: 'FORMAL OXFORD', ratio: 'S : M : L : XL', margin: '62% Margin' },
                { cat: 'LINEN RESORT', ratio: 'S : M : L : XL : XXL', margin: '58% Margin' },
                { cat: 'STRETCH CHINO', ratio: '30 : 32 : 34 : 36', margin: '65% Margin' },
                { cat: 'LEATHER ACC.', ratio: 'One Size Tier', margin: '70% Margin' },
              ].map((r, rIdx) => (
                <div key={rIdx} className="p-2.5 rounded-xl bg-[#0B0A09] border border-[#262320] space-y-1">
                  <div className="text-[8px] font-mono text-[#722F37] font-bold">RAIL_0{rIdx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8] truncate">{r.cat}</div>
                  <div className="text-[7.5px] font-mono text-[#8E8278]">{r.ratio}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Top-Down Store Architecture & Sightline Blueprint */}
        {stage === 3 && (
          <div className="w-full max-w-md p-5 rounded-2xl bg-[#141211] border border-[#262320] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#8E8278] border-b border-[#262320] pb-2">
              <span className="text-[#722F37] font-semibold">STORE VM BLUEPRINT // EBO & SIS FORMAT</span>
              <span>1:50 SPATIAL SCALE</span>
            </div>

            <div className="relative h-28 border border-[#262320] rounded-xl bg-[#0B0A09] p-2.5 grid grid-cols-12 gap-2">
              <div className="col-span-3 border border-[#722F37] bg-[#722F37]/15 rounded-lg flex flex-col items-center justify-center text-[8.5px] font-mono text-[#F4F0E8] text-center p-1 space-y-0.5">
                <span className="text-[#722F37] font-bold uppercase">THRESHOLD</span>
                <span className="text-[7.5px] text-[#C8BFB2]">Entry Table</span>
              </div>
              <div className="col-span-6 border border-[#262320] rounded-lg p-2 flex flex-col justify-between bg-[#141211]">
                <div className="flex justify-between text-[7.5px] font-mono text-[#8E8278]">
                  <span>FOCAL DISPLAY</span>
                  <span>ISLAND FIXTURE</span>
                </div>
                <div className="h-6 rounded bg-[#0B0A09] border border-[#722F37]/50 flex items-center justify-center text-[8px] font-mono text-[#F4F0E8] font-medium tracking-wide">
                  HERO PRODUCT SIGHTLINE
                </div>
              </div>
              <div className="col-span-3 border border-[#262320] rounded-lg flex flex-col items-center justify-center text-[8.5px] font-mono text-[#8E8278] text-center p-1 space-y-0.5">
                <span>FITTING BAY</span>
                <span className="text-[7.5px] text-[#722F37]">Conversion Area</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[8px] font-mono text-[#8E8278]">
              <span>TRAFFIC: ENTRY → FOCAL → HERO WALL</span>
              <span className="text-[#C8BFB2]">UNOBSTRUCTED 360° SIGHTLINE</span>
            </div>
          </div>
        )}

        {/* STAGE 05: EOSS High-Density Floor Reorganization */}
        {stage === 4 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141211] border border-[#262320] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#262320] pb-2">
              <span className="font-semibold">EOSS HIGH-DENSITY TRANSFORMATION</span>
              <span className="text-[#8E8278]">RAPID STORE RESET</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-left">
              {[
                { title: 'STOCKROOM', desc: 'Size-bundle sort (S–XXL)', tag: 'PHASE 01' },
                { title: 'DENSITY RAILS', desc: 'Maximized SKU capacity', tag: 'PHASE 02' },
                { title: 'FOCAL ARMS', desc: 'Discount tier highlights', tag: 'PHASE 03' },
                { title: 'SALES FLOOR', desc: 'High-speed replenishment', tag: 'PHASE 04' },
              ].map((step, sIdx) => (
                <div key={sIdx} className="p-3 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 space-y-1">
                  <div className="text-[7.5px] font-mono text-[#722F37] font-bold">{step.tag}</div>
                  <div className="font-serif text-sm text-[#F4F0E8] leading-tight">{step.title}</div>
                  <div className="text-[8px] font-sans text-[#C8BFB2]">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 06: Authentic Brand Campaign & Internship Resolution */}
        {stage === 5 && (
          <div className="text-center space-y-3 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-2xl border border-[#A87578]/40">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
                THE BEAR HOUSE
              </h4>
              <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold mt-1">
                46-DAY INDUSTRY INTERNSHIP
              </div>
            </div>
            <p className="text-xs text-[#8E8278] font-mono leading-relaxed max-w-sm mx-auto">
              Visual Merchandising + Retail Operations Execution · 7 Audited Stores · 2 Flagship Launches
            </p>
          </div>
        )}
      </div>

      {/* Bottom Passive Editorial Progress Line */}
      <div className="relative z-10 border-t border-[#262320]/80 pt-3">
        <div className="grid grid-cols-6 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-0.5 bg-[#1C1A18] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#722F37] transition-all ${
                      isCompleted ? 'w-full' : isCurrent ? 'w-full duration-[2300ms] ease-linear' : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className={isCurrent ? 'text-[#F4F0E8] font-bold' : 'text-[#6E665E]'}>
                    {stg.num}
                  </span>
                  <span className="hidden sm:inline text-[#6E665E] truncate text-[7.5px]">
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


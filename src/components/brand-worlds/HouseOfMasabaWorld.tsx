import { useState, useEffect, useRef } from 'react';
import { Sparkles, Crown } from 'lucide-react';

interface HouseOfMasabaWorldProps {
  className?: string;
}

export const HouseOfMasabaWorld: React.FC<HouseOfMasabaWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'TEXTILE & PRINT', desc: 'Signature Botanical & Foil Artistry' },
    { num: '02', name: 'RESORT & PRÊT', desc: 'Draped Silhouettes & Festive Lookbook' },
    { num: '03', name: 'VERIFIED CATEGORIES', desc: '5 Core Lines · 112 Styles · 1,008 SKUs' },
    { num: '04', name: 'ASSORTMENT MATRIX', desc: 'Tiered Pricing & Indian Sizing Calibration' },
    { num: '05', name: 'STRATEGY CASCADE', desc: 'Brand → Assortment → VM → Conversion' },
    { num: '06', name: 'RETAIL RESOLUTION', desc: 'Translating Brand Identity into Retail Experience' },
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
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#100D0C] rounded-3xl border border-[#2E2623] overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Expressive Luxury Texture with Warm Burgundy & Gold Highlights */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#722F37_1.2px,transparent_1.2px)] [background-size:1.8rem_1.8rem]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#722F37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Editorial Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#2E2623] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#A87578]">
          <Sparkles className="w-3.5 h-3.5 text-[#A87578]" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8] text-[11px] sm:text-xs">
            FASHION EDITORIAL // HOUSE OF MASABA
          </span>
          <span className="text-[#3A322E]">•</span>
          <span className="text-[#C8BFB2] text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-500">
            {currentStage.name}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E8278]">
          <span className="text-[#A87578] font-bold">{currentStage.num}</span>
          <span>/</span>
          <span>0{TOTAL_STAGES}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] ml-1" />
        </div>
      </div>

      {/* Central Visual Motion Canvas */}
      <div className="relative z-10 flex-1 my-3 flex items-center justify-center min-h-[195px]">
        {/* STAGE 01: Signature Textile Print & Botanical Motif Artistry */}
        {stage === 0 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#171312] border border-[#722F37]/40 shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#A87578] border-b border-[#2E2623] pb-2">
              <span className="font-semibold uppercase tracking-wider">SIGNATURE BOTANICAL & FOIL PRINT SPREAD</span>
              <span className="text-[#C8BFB2]">RESORT / OCCASION WEAR</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5 py-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-20 rounded-xl border border-[#722F37]/50 bg-[#0B0A09] p-2 flex flex-col justify-between items-center relative overflow-hidden group hover:border-[#A87578] transition-all"
                >
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#722F37]/20 rounded-full blur-sm" />
                  <span className="text-[7.5px] font-mono text-[#A87578]">PRT_0{i + 1}</span>
                  {/* Decorative stylized textile vector */}
                  <svg viewBox="0 0 32 32" className="w-8 h-8 text-[#F4F0E8] opacity-90">
                    <path
                      d="M16 2 C20 8, 28 12, 28 18 C28 24, 22 28, 16 30 C10 28, 4 24, 4 18 C4 12, 12 8, 16 2 Z"
                      fill="none"
                      stroke="#A87578"
                      strokeWidth="1.2"
                    />
                    <circle cx="16" cy="18" r="3" fill="#722F37" />
                  </svg>
                  <span className="text-[7px] font-mono text-[#C8BFB2] truncate">Foil Palm</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[8px] font-mono text-[#8E8278]">
              <span>LUXURY PRINT COMPOSITION</span>
              <span className="text-[#A87578]">HIGH-CONTRAST INDIAN PRINTS</span>
            </div>
          </div>
        )}

        {/* STAGE 02: Draped Silhouettes & Festive Lookbook */}
        {stage === 1 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#171312] border border-[#2E2623] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#A87578] border-b border-[#2E2623] pb-2">
              <span className="font-semibold uppercase tracking-wider">DRAPED SILHOUETTES & FESTIVE LOOKBOOK</span>
              <span className="text-[#8E8278]">CONTEMPORARY OCCASION</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'DRAPED SAREE', tag: 'Festive Bias', desc: 'Pre-stitched silk blend with gold foil border' },
                { title: 'RESORT KAFTAN', tag: 'High-End Prêt', desc: 'Fluid relaxed crepe silhouette with engineered print' },
                { title: 'LEHENGA REMIX', tag: 'Wedding Guest', desc: 'Tiered skirt volume with structured bustier' },
              ].map((card, cIdx) => (
                <div key={cIdx} className="p-3.5 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 space-y-2 text-left hover:border-[#A87578] transition-all">
                  <div className="flex items-center justify-between text-[8px] font-mono text-[#A87578]">
                    <span>LOOK 0{cIdx + 1}</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#722F37]/25 text-[7px] text-[#F4F0E8]">{card.tag}</span>
                  </div>
                  <div className="font-serif text-sm text-[#F4F0E8] leading-tight">{card.title}</div>
                  <div className="text-[8px] text-[#8E8278] font-sans line-clamp-2">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Verified 5 Core Categories & SKU Breakdown */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#171312] border border-[#2E2623] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#A87578] border-b border-[#2E2623] pb-2">
              <span className="font-semibold uppercase tracking-wider">VERIFIED CATEGORY ARCHITECTURE</span>
              <span className="text-[#F4F0E8] font-bold">5 CATEGORIES · 112 STYLES · 1,008 SKUs</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5">
              {[
                { name: 'Festive Bias', count: '28 Styles', skus: '252 SKUs' },
                { name: 'High-End Prêt', count: '32 Styles', skus: '288 SKUs' },
                { name: 'Wedding Guest', count: '24 Styles', skus: '216 SKUs' },
                { name: 'Heritage Remix', count: '16 Styles', skus: '144 SKUs' },
                { name: 'Print Personality', count: '12 Styles', skus: '108 SKUs' },
              ].map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 text-center space-y-1 hover:border-[#A87578] transition-all">
                  <div className="text-[7.5px] font-mono text-[#A87578] font-bold">CAT_0{idx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8] leading-tight">{cat.name}</div>
                  <div className="text-[8px] text-[#C8BFB2] font-mono">{cat.count}</div>
                  <div className="text-[7px] text-[#8E8278] font-mono">{cat.skus}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Tiered Pricing Architecture & Indian Sizing Calibration */}
        {stage === 3 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#171312] border border-[#2E2623] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#A87578] border-b border-[#2E2623] pb-2">
              <span className="font-semibold uppercase tracking-wider">PRICING BANDS & SIZING CALIBRATION</span>
              <span className="text-[#8E8278]">COMMERCIAL VIABILITY</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-left">
              {[
                { band: 'ENTRY LUXURY', price: '₹7,500 – ₹14,000', mix: 'Prêt & Resort Sets', margin: '60% Target' },
                { band: 'CORE FESTIVE', price: '₹15,000 – ₹28,000', mix: 'Draped Sarees & Capes', margin: '65% Target' },
                { band: 'STATEMENT LAB', price: '₹30,000 – ₹65,000', mix: 'Wedding & Heritage Remix', margin: '70% Target' },
              ].map((tier, tIdx) => (
                <div key={tIdx} className="p-3.5 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 space-y-1.5">
                  <div className="text-[8px] font-mono text-[#A87578] font-bold">TIER_0{tIdx + 1}</div>
                  <div className="font-serif text-sm text-[#F4F0E8]">{tier.band}</div>
                  <div className="text-[10px] font-mono text-[#C8BFB2] font-semibold">{tier.price}</div>
                  <div className="text-[8px] font-sans text-[#8E8278]">{tier.mix}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[8px] font-mono text-[#8E8278]">
              <span>INDIAN SIZING CURVE: XS (10%) · S (25%) · M (35%) · L (20%) · XL (10%)</span>
            </div>
          </div>
        )}

        {/* STAGE 05: Brand-to-Product Strategy Cascade */}
        {stage === 4 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#171312] border border-[#2E2623] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#A87578] border-b border-[#2E2623] pb-2">
              <span className="font-semibold uppercase tracking-wider">STRATEGIC RETAIL CONVERSION CASCADE</span>
              <span className="text-[#8E8278]">6-TIER HIERARCHY</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-1 p-3 bg-[#0B0A09] rounded-xl border border-[#722F37]/40 font-mono text-xs text-[#F4F0E8]">
              {['BRAND', '↓', 'CONSUMER', '↓', 'MERCHANDISE', '↓', 'ASSORTMENT', '↓', 'VM', '↓', 'PRODUCT'].map((item, idx) => (
                <span
                  key={idx}
                  className={
                    item === '↓'
                      ? 'text-[#A87578] font-bold'
                      : 'px-2 py-1 rounded bg-[#171312] border border-[#2E2623] text-[9.5px] font-semibold text-[#F4F0E8]'
                  }
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="text-[8px] font-mono text-[#8E8278] text-center">
              Harmonizing Bold Print Storytelling with Commercial High-Sellthrough Floor Planning
            </div>
          </div>
        )}

        {/* STAGE 06: Authentic Brand & Retail Resolution */}
        {stage === 5 && (
          <div className="text-center space-y-3 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-2xl border border-[#A87578]/50">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
                HOUSE OF MASABA
              </h4>
              <div className="text-xs font-mono text-[#A87578] uppercase tracking-widest font-semibold mt-1">
                TRANSLATING BRAND IDENTITY INTO RETAIL EXPERIENCE
              </div>
            </div>
            <p className="text-xs text-[#8E8278] font-mono leading-relaxed max-w-sm mx-auto">
              5 Categories · 112 Styles · 1,008 SKUs · Assortment Planning & Tiered Pricing Architecture
            </p>
          </div>
        )}
      </div>

      {/* Bottom Passive Editorial Progress Line */}
      <div className="relative z-10 border-t border-[#2E2623] pt-3">
        <div className="grid grid-cols-6 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-0.5 bg-[#1C1716] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#A87578] transition-all ${
                      isCompleted ? 'w-full' : isCurrent ? 'w-full duration-[2300ms] ease-linear' : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className={isCurrent ? 'text-[#F4F0E8] font-bold' : 'text-[#6E5C58]'}>
                    {stg.num}
                  </span>
                  <span className="hidden sm:inline text-[#6E5C58] truncate text-[7.5px]">
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

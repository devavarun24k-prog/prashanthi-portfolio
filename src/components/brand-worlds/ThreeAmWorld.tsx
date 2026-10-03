import { useState, useEffect, useRef } from 'react';
import { Droplets, Heart } from 'lucide-react';

interface ThreeAmWorldProps {
  className?: string;
}

export const ThreeAmWorld: React.FC<ThreeAmWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'PRODUCT SILHOUETTES', desc: 'Frosted Serums, Face Mists & Droppers' },
    { num: '02', name: 'CLEAN FORMULATION', desc: 'Vitamin C, Speed Dial Mist & Baesic Cream' },
    { num: '03', name: 'COMMUNICATION LOOP', desc: 'Research → Simplify → Create → Connect' },
    { num: '04', name: 'COMMUNITY METRICS', desc: '15K → 17K (+13% Engaged Audience)' },
    { num: '05', name: 'BRAND RESOLUTION', desc: 'Building Digital Consumer Engagement' },
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
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0E0F0E] rounded-3xl border border-[#222923] overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Clean Botanical / Science Droplet Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#8E8278_1px,transparent_1px)] [background-size:2rem_2rem]" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#722F37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Editorial Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#222923] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#C8BFB2]">
          <Droplets className="w-3.5 h-3.5 text-[#722F37]" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8] text-[11px] sm:text-xs">
            CLEAN SKINCARE // 3AM INDIA
          </span>
          <span className="text-[#323D33]">•</span>
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
        {/* STAGE 01: Frosted Serum & Face Mist Product Silhouettes */}
        {stage === 0 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141714] border border-[#222923] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#C8BFB2] border-b border-[#222923] pb-2">
              <span className="font-semibold text-[#722F37]">CLEAN SKINCARE PRODUCT SILHOUETTES</span>
              <span>PLANT ACTIVES + DERMA SCIENCE</span>
            </div>

            <div className="grid grid-cols-3 gap-3 py-1 items-center">
              {/* Serum Bottle Card */}
              <div className="p-3.5 rounded-xl bg-[#0C0E0C] border border-[#722F37]/50 text-center space-y-2 group">
                <div className="w-8 h-12 mx-auto rounded-lg border border-[#C8BFB2] bg-[#F4F0E8]/5 flex flex-col justify-between p-1">
                  <div className="w-2.5 h-2 bg-[#722F37] mx-auto rounded-t-sm" />
                  <div className="text-[6px] font-mono text-[#F4F0E8] truncate">3AM</div>
                </div>
                <div className="font-serif text-xs text-[#F4F0E8]">Vitamin C Serum</div>
                <div className="text-[7.5px] font-mono text-[#8E8278]">Pipette Dropper</div>
              </div>

              {/* Face Mist Spray Bottle Card */}
              <div className="p-3.5 rounded-xl bg-[#0C0E0C] border border-[#722F37]/50 text-center space-y-2 group">
                <div className="w-7 h-14 mx-auto rounded-lg border border-[#C8BFB2] bg-[#F4F0E8]/5 flex flex-col justify-between p-1">
                  <div className="w-3 h-2 bg-[#C8BFB2] mx-auto rounded-t-sm" />
                  <div className="text-[6px] font-mono text-[#F4F0E8] truncate">3AM</div>
                </div>
                <div className="font-serif text-xs text-[#F4F0E8]">Speed Dial Mist</div>
                <div className="text-[7.5px] font-mono text-[#8E8278]">Micro-Fine Spray</div>
              </div>

              {/* Baesic Moisturiser Pump Card */}
              <div className="p-3.5 rounded-xl bg-[#0C0E0C] border border-[#722F37]/50 text-center space-y-2 group">
                <div className="w-10 h-10 mx-auto rounded-xl border border-[#C8BFB2] bg-[#F4F0E8]/5 flex flex-col justify-center items-center p-1">
                  <div className="text-[6px] font-mono text-[#722F37]">50ml</div>
                </div>
                <div className="font-serif text-xs text-[#F4F0E8]">Baesic Cream</div>
                <div className="text-[7.5px] font-mono text-[#8E8278]">Barrier Nourish</div>
              </div>
            </div>

            <div className="flex justify-between text-[8px] font-mono text-[#8E8278]">
              <span>MINIMALIST FROSTED PACKAGING</span>
              <span className="text-[#C8BFB2]">MULTIFUNCTIONAL RITUALS</span>
            </div>
          </div>
        )}

        {/* STAGE 02: Clean Formulation & Transparent Actives */}
        {stage === 1 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141714] border border-[#222923] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#222923] pb-2">
              <span className="font-semibold">CLEAN FORMULATION ARCHITECTURE</span>
              <span className="text-[#8E8278]">DEMISTIFYING ACTIVE INGREDIENTS</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-left">
              {[
                { name: 'VITAMIN C', role: 'Brightening & Antioxidant', hero: 'Kakadu Plum + 10% Ascorbyl' },
                { name: 'HYALURONIC', role: 'Multi-Depth Hydration', hero: '3 Molecular Weights' },
                { name: 'CERAMIDES', role: 'Skin Barrier Repair', hero: 'Lipid Balance Complex' },
              ].map((act, aIdx) => (
                <div key={aIdx} className="p-3.5 rounded-xl bg-[#0C0E0C] border border-[#722F37]/50 space-y-1.5">
                  <div className="text-[7.5px] font-mono text-[#722F37] font-bold">ACTIVE_0{aIdx + 1}</div>
                  <div className="font-serif text-sm text-[#F4F0E8]">{act.name}</div>
                  <div className="text-[8.5px] font-sans text-[#C8BFB2]">{act.role}</div>
                  <div className="text-[7.5px] font-mono text-[#8E8278]">{act.hero}</div>
                </div>
              ))}
            </div>

            <div className="text-[8px] font-mono text-[#8E8278] text-center">
              Jargon-Free Science + Plant-Based Formulation Storytelling for Gen-Z & Millennial Consumers
            </div>
          </div>
        )}

        {/* STAGE 03: 4-Step Communication Methodology */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141714] border border-[#222923] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#222923] pb-2">
              <span className="font-semibold">4-STEP CONTENT & PRODUCT STRATEGY</span>
              <span className="text-[#8E8278]">ACCESSIBLE BEAUTY LOOPS</span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { step: 'RESEARCH', desc: 'Skin barrier facts', sub: 'Demystifying Actives' },
                { step: 'SIMPLIFY', desc: 'Jargon-free copy', sub: 'Transparent Labels' },
                { step: 'CREATE', desc: 'Daily rituals', sub: 'Multi-Use Products' },
                { step: 'CONNECT', desc: 'D2C community', sub: 'Feedback & Growth' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0C0E0C] border border-[#722F37]/50 space-y-1 hover:border-[#722F37] transition-all"
                >
                  <div className="text-[7.5px] font-mono text-[#722F37] font-bold">0{idx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8]">{item.step}</div>
                  <div className="text-[8px] font-mono text-[#C8BFB2]">{item.desc}</div>
                  <div className="text-[7px] text-[#8E8278] font-sans">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Community Growth & Engagement Metric */}
        {stage === 3 && (
          <div className="w-full max-w-md p-5 rounded-2xl bg-[#141714] border border-[#722F37]/60 shadow-xl flex items-center justify-between animate-fadeIn transition-all duration-700">
            <div className="space-y-1 text-left">
              <span className="text-[8.5px] font-mono text-[#722F37] uppercase tracking-wider block font-bold">
                DIGITAL COMMUNITY EXPANSION
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] flex items-center gap-3">
                <span className="text-[#8E8278] line-through decoration-[#722F37]">15K</span>
                <span className="text-[#722F37]">→</span>
                <span>17K</span>
              </div>
              <span className="text-[9px] font-mono text-[#C8BFB2]">Engaged Skincare Audience</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0C0E0C] border border-[#722F37] text-center space-y-0.5">
              <div className="text-[8px] font-mono text-[#8E8278]">GROWTH</div>
              <div className="font-mono text-2xl text-[#722F37] font-bold">+13%</div>
              <div className="text-[7.5px] font-mono text-[#C8BFB2]">ACTIVE ENGAGEMENT</div>
            </div>
          </div>
        )}

        {/* STAGE 05: Brand Campaign Resolution */}
        {stage === 4 && (
          <div className="text-center space-y-3 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-2xl border border-[#A87578]/50">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
                3AM INDIA
              </h4>
              <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold mt-1">
                BUILDING DIGITAL CONSUMER ENGAGEMENT
              </div>
            </div>
            <p className="text-xs text-[#8E8278] font-mono leading-relaxed max-w-sm mx-auto">
              Science + Nature Skincare · Accessible Communication · +13% Digital Community Growth
            </p>
          </div>
        )}
      </div>

      {/* Bottom Passive Editorial Progress Line */}
      <div className="relative z-10 border-t border-[#222923] pt-3">
        <div className="grid grid-cols-5 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-0.5 bg-[#171C17] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#722F37] transition-all ${
                      isCompleted ? 'w-full' : isCurrent ? 'w-full duration-[2300ms] ease-linear' : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className={isCurrent ? 'text-[#F4F0E8] font-bold' : 'text-[#586459]'}>
                    {stg.num}
                  </span>
                  <span className="hidden sm:inline text-[#586459] truncate text-[7.5px]">
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

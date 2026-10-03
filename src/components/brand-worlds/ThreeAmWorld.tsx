import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Droplets } from 'lucide-react';

interface ThreeAmWorldProps {
  className?: string;
}

export const ThreeAmWorld: React.FC<ThreeAmWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const [stageProgress, setStageProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'PRODUCT GEOMETRY', desc: 'Plant-Based Nature + Derma Science Forms' },
    { num: '02', name: 'INGREDIENT SYSTEM', desc: 'Research → Simplify → Create → Connect' },
    { num: '03', name: 'ENGAGEMENT METRIC', desc: '15K → 17K (+13% Community Expansion)' },
    { num: '04', name: 'CONSUMER RESOLUTION', desc: 'Building Digital Consumer Engagement' },
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
            BRAND WORLD // 3AM INDIA
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
        {/* STAGE 01: Minimal Circular Skincare Product Forms Connecting */}
        {stage === 0 && (
          <div className="flex items-center justify-center gap-6 animate-fadeIn transition-all duration-700">
            <div className="relative w-28 h-28 rounded-full border border-[#722F37] bg-[#141211] flex flex-col items-center justify-center p-3 text-center space-y-1 shadow-2xl">
              <span className="text-[8px] font-mono text-[#722F37]">CLEAN FORMULA</span>
              <span className="font-serif text-base text-[#F4F0E8]">NATURE</span>
              <span className="text-[8px] font-mono text-[#8E8278]">PLANT-BASED</span>
            </div>

            <div className="w-6 h-[1px] bg-[#722F37] animate-pulse" />

            <div className="relative w-28 h-28 rounded-full border border-[#C8BFB2] bg-[#141211] flex flex-col items-center justify-center p-3 text-center space-y-1 shadow-2xl">
              <span className="text-[8px] font-mono text-[#722F37]">DERMA ACTIVE</span>
              <span className="font-serif text-base text-[#F4F0E8]">SCIENCE</span>
              <span className="text-[8px] font-mono text-[#8E8278]">EFFECTIVE</span>
            </div>
          </div>
        )}

        {/* STAGE 02: 4-Stage Formulation & Content Philosophy */}
        {stage === 1 && (
          <div className="w-full max-w-md p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>CONTENT & PRODUCT METHODOLOGY</span>
              <span>JARGON-FREE COMMUNICATION</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { step: 'RESEARCH', desc: 'Skin barrier facts' },
                { step: 'SIMPLIFY', desc: 'Demystified actives' },
                { step: 'CREATE', desc: 'Daily ritual routines' },
                { step: 'CONNECT', desc: 'D2C community loops' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 text-center space-y-1"
                >
                  <div className="text-[8px] font-mono text-[#722F37] font-bold">0{idx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8]">{item.step}</div>
                  <div className="text-[8px] font-mono text-[#8E8278]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Fluid Community Growth Metric */}
        {stage === 2 && (
          <div className="w-full max-w-md p-6 rounded-2xl bg-[#141211] border border-[#722F37] flex items-center justify-between shadow-2xl animate-fadeIn transition-all duration-700">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#722F37] uppercase tracking-wider block">
                COMMUNITY EXPANSION
              </span>
              <div className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] flex items-center gap-3">
                <span className="text-[#8E8278] line-through decoration-[#722F37]">15K</span>
                <span className="text-[#722F37]">→</span>
                <span>17K</span>
              </div>
              <span className="text-[10px] font-mono text-[#8E8278]">Engaged Skincare Audience</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0A09] border border-[#722F37] text-center">
              <div className="text-[9px] font-mono text-[#8E8278]">GROWTH</div>
              <div className="font-mono text-2xl text-[#722F37] font-bold">+13%</div>
              <div className="text-[8px] font-mono text-[#C8BFB2]">ACTIVE ENGAGEMENT</div>
            </div>
          </div>
        )}

        {/* STAGE 04: Final Resolution & Seamless Loop */}
        {stage === 3 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-lg border border-[#A87578]/40">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
              3AM INDIA
            </h4>
            <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold">
              BUILDING DIGITAL CONSUMER ENGAGEMENT
            </div>
            <p className="text-xs text-[#8E8278] font-mono">
              Science + Nature Skincare · Accessible Communication · +13% Community Growth
            </p>
          </div>
        )}
      </div>

      {/* Bottom Passive Segmented Progress Bar */}
      <div className="relative z-10 border-t border-[#262320] pt-3">
        <div className="grid grid-cols-4 gap-2">
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

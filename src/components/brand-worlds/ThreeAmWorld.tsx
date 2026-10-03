import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Droplets } from 'lucide-react';

interface ThreeAmWorldProps {
  className?: string;
  autoPlay?: boolean;
}

export const ThreeAmWorld: React.FC<ThreeAmWorldProps> = ({
  className = '',
  autoPlay = true,
}) => {
  const [stage, setStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = [
    { num: '01', name: 'PRODUCT FORMS', tag: 'CLEAN BOTANICAL GEOMETRY' },
    { num: '02', name: 'INGREDIENT SYSTEM', tag: 'RESEARCH → CONNECT' },
    { num: '03', name: 'ENGAGEMENT METRIC', tag: '15K → 17K (+13%)' },
    { num: '04', name: 'FINAL RESOLUTION', tag: 'DIGITAL CONSUMER GROWTH' },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setStage((prev) => {
          if (prev >= 3) {
            setIsPlaying(false);
            return 3;
          }
          return prev + 1;
        });
      }, 1400);
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
      {/* Editorial Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Top Header Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">BRAND WORLD // 3AM INDIA</span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#8E8278] text-[11px]">“SCIENCE + NATURE SKINCARE ENGAGEMENT”</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#C8BFB2] bg-[#141211] px-2.5 py-1 rounded-full border border-[#262320]">
            STAGE 0{stage + 1} / 04
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
        {/* STAGE 01: Minimal Circular Skincare Product Forms */}
        {stage === 0 && (
          <div className="flex items-center justify-center gap-6 animate-fadeIn">
            <div className="relative w-28 h-28 rounded-full border border-[#722F37] bg-[#141211] flex flex-col items-center justify-center p-3 text-center space-y-1 shadow-2xl">
              <span className="text-[8px] font-mono text-[#722F37]">CLEAN FORMULA</span>
              <span className="font-serif text-base text-[#F4F0E8]">NATURE</span>
              <span className="text-[8px] font-mono text-[#8E8278]">PLANT-BASED</span>
            </div>

            <div className="w-4 h-[1px] bg-[#722F37]" />

            <div className="relative w-28 h-28 rounded-full border border-[#C8BFB2] bg-[#141211] flex flex-col items-center justify-center p-3 text-center space-y-1 shadow-2xl">
              <span className="text-[8px] font-mono text-[#722F37]">DERMA ACTIVE</span>
              <span className="font-serif text-base text-[#F4F0E8]">SCIENCE</span>
              <span className="text-[8px] font-mono text-[#8E8278]">EFFECTIVE</span>
            </div>
          </div>
        )}

        {/* STAGE 02: 4-Stage Formulation & Content Philosophy */}
        {stage === 1 && (
          <div className="w-full max-w-md p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-3 animate-fadeIn">
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
                <div key={idx} className="p-3 rounded-xl bg-[#0B0A09] border border-[#722F37]/50 text-center space-y-1">
                  <div className="text-[8px] font-mono text-[#722F37] font-bold">0{idx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8]">{item.step}</div>
                  <div className="text-[8px] font-mono text-[#8E8278]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Community Growth Metric (15K -> 17K, +13%) */}
        {stage === 2 && (
          <div className="w-full max-w-md p-6 rounded-2xl bg-[#141211] border border-[#722F37] flex items-center justify-between shadow-2xl animate-fadeIn">
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

        {/* STAGE 04: Final Resolution */}
        {stage === 3 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn">
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

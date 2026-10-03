import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';

interface HealingWaitWorldProps {
  className?: string;
}

export const HealingWaitWorld: React.FC<HealingWaitWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'WAITING CONGESTION', desc: 'OPD Waiting Room Opacity & Idle Delay' },
    { num: '02', name: 'RESEARCH METRICS', desc: '66% Boredom · 60% Anxiety · 40% Stress' },
    { num: '03', name: 'SERVICE ECOSYSTEM', desc: 'Live Queue · Appointments · Prescriptions' },
    { num: '04', name: 'HUMAN EXPERIENCE', desc: 'Transforming Waiting Anxiety into Care' },
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
      {/* Background Coordinate Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

      {/* Top Header Information Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">
            SERVICE WORLD // HEALING THE WAIT
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

      {/* Central Visual Animation Canvas */}
      <div className="relative z-10 flex-1 my-4 flex items-center justify-center min-h-[190px]">
        {/* STAGE 01: Waiting Congestion & Opacity */}
        {stage === 0 && (
          <div className="w-full max-w-md space-y-4 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#8E8278]">
              <span className="text-[#722F37]">OPD WAITING ROOM OPACITY</span>
              <span>UNCERTAINTY // FRICTION</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#141211] border border-[#262320] space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#C8BFB2]">
                <span>INDETERMINATE QUEUE DELAY</span>
                <span className="text-[#722F37] animate-pulse">CHAOS TO CLARITY</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-3 flex-wrap">
                {[...Array(14)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3.5 h-3.5 rounded-full border border-[#722F37] bg-[#722F37]/30 flex items-center justify-center text-[8px] font-mono text-[#F4F0E8] transition-all duration-500"
                    style={{
                      animationDelay: `${i * 80}ms`,
                      opacity: 0.4 + (i % 5) * 0.15,
                    }}
                  >
                    •
                  </div>
                ))}
              </div>
              <div className="text-center font-mono text-[9px] text-[#8E8278] uppercase">
                [ UNINFORMED WAITING ANXIETY ]
              </div>
            </div>
          </div>
        )}

        {/* STAGE 02: Calm Research Data Breakdown */}
        {stage === 1 && (
          <div className="w-full max-w-md space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>ETHNOGRAPHIC FIELD STUDY METRICS</span>
              <span>28-PAGE PUBLICATION</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: 'PATIENT BOREDOM', pct: '66%', sub: 'Long idle delays' },
                { label: 'WAIT ANXIETY', pct: '60%', sub: 'Timing opacity' },
                { label: 'SITUATIONAL STRESS', pct: '40%', sub: 'Friction points' },
              ].map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#141211] border border-[#722F37]/60 space-y-2">
                  <div className="font-serif text-3xl text-[#F4F0E8]">{m.pct}</div>
                  <div className="w-full h-1 bg-[#0B0A09] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#722F37] transition-all duration-1000"
                      style={{ width: m.pct }}
                    />
                  </div>
                  <div className="text-[9px] font-mono font-bold text-[#722F37] uppercase">{m.label}</div>
                  <div className="text-[8px] font-sans text-[#8E8278]">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Reorganized Service Nodes / Heal Queue System */}
        {stage === 2 && (
          <div className="w-full max-w-lg space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>HEAL QUEUE DIGITAL INTERVENTIONS</span>
              <span>TRANSPARENCY RESTORED</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { name: 'LIVE QUEUE', tag: 'Real-time token' },
                { name: 'APPOINTMENTS', tag: 'Doctor roster' },
                { name: 'UPDATES', tag: 'SMS / App push' },
                { name: 'REMINDERS', tag: 'Lab & tests' },
                { name: 'FEEDBACK', tag: 'Patient care' },
              ].map((node, nIdx) => (
                <div key={nIdx} className="p-3 rounded-xl bg-[#141211] border border-[#722F37] space-y-1 text-center">
                  <div className="text-[8px] font-mono text-[#722F37] font-bold">NODE_0{nIdx + 1}</div>
                  <div className="font-serif text-sm text-[#F4F0E8]">{node.name}</div>
                  <div className="text-[8px] font-mono text-[#8E8278]">{node.tag}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 04: Final Resolution & Seamless Return Loop */}
        {stage === 3 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-lg border border-[#A87578]/40">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
              HEALING THE WAIT
            </h4>
            <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold">
              DESIGN THINKING & SERVICE INNOVATION
            </div>
            <p className="text-xs text-[#8E8278] font-mono">
              28-Page Publication + Heal Queue App · Transforming Waiting Anxiety into Care
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

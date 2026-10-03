import { useState, useEffect, useRef } from 'react';
import { HeartHandshake, Activity } from 'lucide-react';

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
    { num: '01', name: 'WAITING CONGESTION', desc: 'OPD Queue Opacity & Indeterminate Delay' },
    { num: '02', name: 'FIELD STUDY METRICS', desc: '66% Boredom · 60% Anxiety · 40% Stress' },
    { num: '03', name: 'SERVICE BLUEPRINT', desc: 'Live Queue · Appointments · Prescriptions' },
    { num: '04', name: 'EXPERIENCE LOOP', desc: 'Wait → Research → Design → Healing' },
    { num: '05', name: 'SERVICE RESOLUTION', desc: 'Transforming Waiting Anxiety into Care' },
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
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0C0D0E] rounded-3xl border border-[#20272B] overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Empathetic Healthcare Pulse & Spatial Flow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#722F37_1px,transparent_1px)] [background-size:2.2rem_2.2rem]" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#722F37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Editorial Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#20272B] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#A87578]">
          <Activity className="w-3.5 h-3.5 text-[#722F37]" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8] text-[11px] sm:text-xs">
            SERVICE DESIGN // HEALING THE WAIT
          </span>
          <span className="text-[#303B42]">•</span>
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
        {/* STAGE 01: Waiting Congestion & OPD Room Opacity */}
        {stage === 0 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#121417] border border-[#20272B] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#8E8278] border-b border-[#20272B] pb-2">
              <span className="text-[#722F37] font-semibold">OPD WAITING ROOM ENVIRONMENT</span>
              <span>INDETERMINATE QUEUE FRICTION</span>
            </div>

            <div className="p-4 rounded-xl bg-[#090A0C] border border-[#722F37]/40 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#C8BFB2]">
                <span>PATIENT WAITING QUEUE (CONGESTION)</span>
                <span className="text-[#722F37] font-semibold">AVERAGE WAIT: 85 MINS</span>
              </div>

              {/* Waiting patient node visualization */}
              <div className="flex items-center justify-center gap-2 py-2 flex-wrap">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full border border-[#722F37] bg-[#722F37]/30 flex items-center justify-center text-[6px] font-mono text-[#F4F0E8] transition-all"
                    style={{
                      opacity: 0.35 + (i % 6) * 0.12,
                    }}
                  >
                    •
                  </div>
                ))}
              </div>

              <div className="text-center font-mono text-[8px] text-[#8E8278] uppercase">
                [ UNINFORMED WAITING ANXIETY · ZERO TIME TRANSPARENCY ]
              </div>
            </div>
          </div>
        )}

        {/* STAGE 02: Ethnographic Field Study Data Breakdown */}
        {stage === 1 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#121417] border border-[#20272B] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#20272B] pb-2">
              <span className="font-semibold">ETHNOGRAPHIC FIELD STUDY METRICS</span>
              <span className="text-[#8E8278]">28-PAGE RESEARCH PUBLICATION</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: 'PATIENT BOREDOM', pct: '66%', sub: 'Long idle waiting without engagement' },
                { label: 'WAIT ANXIETY', pct: '60%', sub: 'Uncertainty over doctor arrival timings' },
                { label: 'SITUATIONAL STRESS', pct: '40%', sub: 'Friction across token & billing counters' },
              ].map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#090A0C] border border-[#722F37]/50 space-y-2 text-left hover:border-[#722F37] transition-all">
                  <div className="font-serif text-2xl sm:text-3xl text-[#F4F0E8]">{m.pct}</div>
                  <div className="w-full h-1 bg-[#1A1E24] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#722F37] transition-all duration-1000"
                      style={{ width: m.pct }}
                    />
                  </div>
                  <div className="text-[8.5px] font-mono font-bold text-[#722F37] uppercase">{m.label}</div>
                  <div className="text-[7.5px] font-sans text-[#8E8278] leading-tight">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 03: Heal Queue Service Blueprint Touchpoints */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#121417] border border-[#20272B] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#20272B] pb-2">
              <span className="font-semibold">HEAL QUEUE DIGITAL SERVICE INTERVENTIONS</span>
              <span className="text-[#8E8278]">SYSTEM TRANSPARENCY RESTORED</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { name: 'LIVE QUEUE', tag: 'Real-time token status' },
                { name: 'ROSTER', tag: 'Doctor arrival tracker' },
                { name: 'UPDATES', tag: 'SMS & mobile push' },
                { name: 'TESTS', tag: 'Lab & pharma routing' },
                { name: 'FEEDBACK', tag: 'Patient care loop' },
              ].map((node, nIdx) => (
                <div key={nIdx} className="p-3 rounded-xl bg-[#090A0C] border border-[#722F37]/50 space-y-1 text-center hover:border-[#722F37] transition-all">
                  <div className="text-[7.5px] font-mono text-[#722F37] font-bold">NODE_0{nIdx + 1}</div>
                  <div className="font-serif text-xs text-[#F4F0E8] leading-tight">{node.name}</div>
                  <div className="text-[7.5px] font-mono text-[#8E8278] leading-tight">{node.tag}</div>
                </div>
              ))}
            </div>

            <div className="text-[8px] font-mono text-[#8E8278] text-center">
              Transforming Hospital OPD Chaos into Proactive Patient Transparency & Empathy
            </div>
          </div>
        )}

        {/* STAGE 04: Experience Design Flow */}
        {stage === 3 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#121417] border border-[#20272B] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#20272B] pb-2">
              <span className="font-semibold">HUMAN-CENTRED TRANSFORMATION FLOW</span>
              <span className="text-[#8E8278]">END-TO-END PATIENT JOURNEY</span>
            </div>

            <div className="flex items-center justify-between gap-1 p-3 bg-[#090A0C] rounded-xl border border-[#722F37]/50 font-mono text-xs text-[#F4F0E8]">
              {['WAIT', '→', 'RESEARCH', '→', 'INSIGHT', '→', 'PROTOTYPE', '→', 'CARE'].map(
                (step, sIdx) => (
                  <span
                    key={sIdx}
                    className={
                      step === '→'
                        ? 'text-[#722F37] font-bold'
                        : 'px-2 py-1 rounded bg-[#121417] border border-[#20272B] text-[8.5px] font-semibold text-[#F4F0E8]'
                    }
                  >
                    {step}
                  </span>
                )
              )}
            </div>

            <div className="text-[8px] font-mono text-[#8E8278] text-center">
              Design Thinking Methodology Applied to Real-World Healthcare Environments
            </div>
          </div>
        )}

        {/* STAGE 05: Service Design Resolution */}
        {stage === 4 && (
          <div className="text-center space-y-3 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-2xl border border-[#A87578]/50">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
                HEALING THE WAIT
              </h4>
              <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold mt-1">
                DESIGN THINKING & SERVICE INNOVATION
              </div>
            </div>
            <p className="text-xs text-[#8E8278] font-mono leading-relaxed max-w-sm mx-auto">
              28-Page Publication + Heal Queue App · Transforming Waiting Anxiety into Care
            </p>
          </div>
        )}
      </div>

      {/* Bottom Passive Editorial Progress Line */}
      <div className="relative z-10 border-t border-[#20272B] pt-3">
        <div className="grid grid-cols-5 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-0.5 bg-[#171E24] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#722F37] transition-all ${
                      isCompleted ? 'w-full' : isCurrent ? 'w-full duration-[2300ms] ease-linear' : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className={isCurrent ? 'text-[#F4F0E8] font-bold' : 'text-[#4F5D66]'}>
                    {stg.num}
                  </span>
                  <span className="hidden sm:inline text-[#4F5D66] truncate text-[7.5px]">
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

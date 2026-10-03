import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Sparkles, HeartHandshake } from 'lucide-react';

interface HealingWaitWorldProps {
  className?: string;
  autoPlay?: boolean;
}

export const HealingWaitWorld: React.FC<HealingWaitWorldProps> = ({
  className = '',
  autoPlay = true,
}) => {
  const [stage, setStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stages = [
    { num: '01', name: 'WAITING CONGESTION', tag: 'ANXIETY & OPACITY' },
    { num: '02', name: 'RESEARCH METRICS', tag: '66% · 60% · 40%' },
    { num: '03', name: 'SERVICE ECOSYSTEM', tag: 'HEAL QUEUE PROTOCOL' },
    { num: '04', name: 'HUMAN EXPERIENCE', tag: 'SERVICE DESIGN RESOLUTION' },
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
      {/* Editorial Background Coordinates */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      {/* Top Header Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#262320] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#722F37]">
          <Sparkles className="w-3.5 h-3.5 text-[#722F37] animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8]">SYSTEM WORLD // HEALING THE WAIT</span>
          <span className="text-[#262320]">•</span>
          <span className="text-[#8E8278] text-[11px]">“DESIGNING FOR A HUMAN EXPERIENCE”</span>
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
        {/* STAGE 01: Congested Hospital Waiting Line with Anxiety Pulse */}
        {stage === 0 && (
          <div className="w-full max-w-md space-y-4 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#8E8278]">
              <span className="text-[#722F37]">OPD WAITING ROOM OPACITY</span>
              <span>UNCERTAINTY // FRICTION</span>
            </div>
            <div className="p-5 rounded-2xl bg-[#141211] border border-[#262320] space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#C8BFB2]">
                <span>INDETERMINATE QUEUE DELAY</span>
                <span className="text-[#722F37] animate-pulse">CONFUSED WAIT</span>
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
                [ UNINFORMED PATIENT ANXIETY PEAK ]
              </div>
            </div>
          </div>
        )}

        {/* STAGE 02: Calm Research Data Breakdown Visualization */}
        {stage === 1 && (
          <div className="w-full max-w-md space-y-3 animate-fadeIn">
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
          <div className="w-full max-w-lg space-y-3 animate-fadeIn">
            <div className="flex justify-between text-[10px] font-mono text-[#722F37]">
              <span>HEAL QUEUE DIGITAL INTERVENTIONS</span>
              <span>TRANSPARENCY RESTORED</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                { name: 'LIVE QUEUE', tag: 'Real-time token' },
                { name: 'APPOINTMENT', tag: 'Doctor roster' },
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

        {/* STAGE 04: Final Resolution */}
        {stage === 3 && (
          <div className="text-center space-y-2 max-w-md animate-fadeIn">
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

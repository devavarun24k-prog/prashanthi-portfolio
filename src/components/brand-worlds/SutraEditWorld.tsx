import { useState, useEffect, useRef } from 'react';
import { BookOpen, FileText } from 'lucide-react';

interface SutraEditWorldProps {
  className?: string;
}

export const SutraEditWorld: React.FC<SutraEditWorldProps> = ({
  className = '',
}) => {
  const [stage, setStage] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const stages = [
    { num: '01', name: 'EDITORIAL SIGNALS', desc: 'Market Signals & Fashion Business Fragments' },
    { num: '02', name: '3-TIER PLATFORM', desc: 'The Weekly Edit · Dashboard · Consulting' },
    { num: '03', name: 'VALUE ECOSYSTEM', desc: 'Content → Community → Paid Intelligence' },
    { num: '04', name: 'BUSINESS MODEL', desc: 'Starter · Pro · Premium Subscription Tiers' },
    { num: '05', name: 'JOURNAL RESOLUTION', desc: 'Fashion Intelligence & Business Model' },
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
      className={`relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0E0D0C] rounded-3xl border border-[#2E2824] overflow-hidden flex flex-col justify-between p-5 sm:p-7 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Editorial Journal Paper & Typography Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#C8BFB2_1px,transparent_1px),linear-gradient(to_bottom,#C8BFB2_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#722F37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Editorial Ribbon */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#2E2824] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#C8BFB2]">
          <FileText className="w-3.5 h-3.5 text-[#722F37]" />
          <span className="font-bold uppercase tracking-widest text-[#F4F0E8] text-[11px] sm:text-xs">
            INTELLIGENCE EDIT // SUTRA
          </span>
          <span className="text-[#3E3530]">•</span>
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
        {/* STAGE 01: Editorial Masthead & Sliding Market Signal Fragments */}
        {stage === 0 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141210] border border-[#2E2824] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#C8BFB2] border-b border-[#2E2824] pb-2">
              <span className="font-semibold text-[#722F37]">THE SUTRA EDIT // ISSUE VOL. 04</span>
              <span>INDIAN FASHION INDUSTRY SIGNALS</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1">
              {[
                { tag: 'SIGNAL 01', title: 'CONSUMER SHIFT', sub: 'Prêt Over Heavily Embellished Wear' },
                { tag: 'SIGNAL 02', title: 'PRICE PRESSURE', sub: 'Mid-Market ₹4K–₹12K Margin Squeeze' },
                { tag: 'SIGNAL 03', title: 'D2C CHANNELS', sub: 'Omnichannel & Regional Tier-2 Growth' },
                { tag: 'SIGNAL 04', title: 'SIZING STANDARDS', sub: 'Calibrating Indian Female Forms' },
                { tag: 'SIGNAL 05', title: 'FABRIC TRACEABILITY', sub: 'Rise of Certified Natural Linens' },
                { tag: 'SIGNAL 06', title: 'TREND CYCLE', sub: 'Micro-Drops Replacing Seasonal Buys' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#0A0908] border border-[#722F37]/40 text-left space-y-1 hover:border-[#722F37] transition-all"
                >
                  <div className="text-[7px] font-mono text-[#722F37] font-bold">{item.tag}</div>
                  <div className="font-serif text-xs text-[#F4F0E8] leading-tight">{item.title}</div>
                  <div className="text-[7.5px] font-mono text-[#8E8278] truncate">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[8px] font-mono text-[#8E8278]">
              <span>CURATED STRATEGIC DISPATCHES</span>
              <span className="text-[#C8BFB2]">DATA-BACKED EDITORIAL JOURNAL</span>
            </div>
          </div>
        )}

        {/* STAGE 02: 3-Tier Platform Columns */}
        {stage === 1 && (
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn transition-all duration-700">
            {[
              {
                pill: '01 CONTENT',
                title: 'THE WEEKLY EDIT',
                desc: 'Weekly executive dispatches synthesizing fashion business, retail shifts & trend telemetry.',
                tag: 'Newsletter & Audio',
              },
              {
                pill: '02 DATA',
                title: 'THE DASHBOARD',
                desc: 'Proprietary Indian category benchmarks, SKU volume tracking & pricing tier indexes.',
                tag: 'Analytics Platform',
              },
              {
                pill: '03 STRATEGY',
                title: '1:1 ADVISORY',
                desc: 'Bespoke brand architecture, assortment curation & retail merchandising consulting.',
                tag: 'Executive Practice',
              },
            ].map((col, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-2xl bg-[#141210] border border-[#722F37]/60 space-y-2 text-left hover:border-[#722F37] transition-all shadow-xl"
              >
                <div className="flex justify-between items-center text-[7.5px] font-mono text-[#722F37]">
                  <span className="font-bold">{col.pill}</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#0A0908] border border-[#2E2824] text-[7px] text-[#C8BFB2]">
                    {col.tag}
                  </span>
                </div>
                <div className="font-serif text-sm text-[#F4F0E8] leading-tight">{col.title}</div>
                <div className="text-[8.5px] text-[#8E8278] font-sans leading-relaxed">{col.desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* STAGE 03: Connected Ecosystem Value Chain */}
        {stage === 2 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141210] border border-[#2E2824] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#2E2824] pb-2">
              <span className="font-semibold">INTELLIGENCE VALUE ECOSYSTEM</span>
              <span className="text-[#8E8278]">COMMUNITY TO HIGH-VALUE CONSULTING</span>
            </div>

            <div className="flex items-center justify-between gap-1 p-3 bg-[#0A0908] rounded-xl border border-[#722F37]/50 font-mono text-xs text-[#F4F0E8]">
              {['CONTENT', '↓', 'COMMUNITY', '↓', 'TRUST', '↓', 'PAID INTEL', '↓', 'ADVISORY'].map(
                (itm, iIdx) => (
                  <span
                    key={iIdx}
                    className={
                      itm === '↓'
                        ? 'text-[#722F37] font-bold'
                        : 'px-2 py-1 rounded bg-[#141210] border border-[#2E2824] text-[8.5px] font-semibold text-[#F4F0E8]'
                    }
                  >
                    {itm}
                  </span>
                )
              )}
            </div>

            <div className="text-[8px] font-mono text-[#8E8278] text-center">
              Transforming Free Editorial Authority into High-Retention Paid Advisory Retainers
            </div>
          </div>
        )}

        {/* STAGE 04: Subscription & Business Architecture */}
        {stage === 3 && (
          <div className="w-full max-w-lg p-5 rounded-2xl bg-[#141210] border border-[#2E2824] shadow-xl space-y-3 animate-fadeIn transition-all duration-700">
            <div className="flex justify-between items-center text-[9px] font-mono text-[#722F37] border-b border-[#2E2824] pb-2">
              <span className="font-semibold">TIERED BUSINESS MODEL ARCHITECTURE</span>
              <span className="text-[#8E8278]">RECURRING REVENUE ENGINE</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-left">
              {[
                {
                  tier: 'STARTER EDIT',
                  price: 'Free / Community',
                  scope: 'Bi-weekly newsletters, trend alerts & public essays',
                  access: 'Open Access',
                },
                {
                  tier: 'PRO DASHBOARD',
                  price: '₹2,499 / Month',
                  scope: 'Category indices, SKU pricing benchmarks & datasets',
                  access: 'Member Login',
                },
                {
                  tier: 'SUTRA CIRCLE',
                  price: 'Bespoke Retainer',
                  scope: '1:1 brand strategy, assortment reviews & founder roundtables',
                  access: 'Direct Advisory',
                },
              ].map((t, tIdx) => (
                <div
                  key={tIdx}
                  className="p-3.5 rounded-xl bg-[#0A0908] border border-[#722F37]/60 space-y-1.5 hover:border-[#722F37] transition-all"
                >
                  <div className="text-[7.5px] font-mono text-[#722F37] font-bold">TIER 0{tIdx + 1}</div>
                  <div className="font-serif text-sm text-[#F4F0E8]">{t.tier}</div>
                  <div className="text-[9px] font-mono text-[#C8BFB2] font-semibold">{t.price}</div>
                  <div className="text-[8px] font-sans text-[#8E8278] leading-tight">{t.scope}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STAGE 05: Editorial Publication & Business Model Resolution */}
        {stage === 4 && (
          <div className="text-center space-y-3 max-w-md animate-fadeIn transition-all duration-700">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#722F37] text-[#F4F0E8] flex items-center justify-center shadow-2xl border border-[#A87578]/50">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal tracking-tight">
                SUTRA EDIT
              </h4>
              <div className="text-xs font-mono text-[#722F37] uppercase tracking-widest font-semibold mt-1">
                FASHION INTELLIGENCE & BUSINESS MODEL
              </div>
            </div>
            <p className="text-xs text-[#8E8278] font-mono leading-relaxed max-w-sm mx-auto">
              The Weekly Edit · Intelligence Dashboard · 1:1 Brand Consulting Model
            </p>
          </div>
        )}
      </div>

      {/* Bottom Passive Editorial Progress Line */}
      <div className="relative z-10 border-t border-[#2E2824] pt-3">
        <div className="grid grid-cols-5 gap-2">
          {stages.map((stg, idx) => {
            const isCurrent = stage === idx;
            const isCompleted = stage > idx;

            return (
              <div key={idx} className="space-y-1">
                <div className="h-0.5 bg-[#1C1816] rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#722F37] transition-all ${
                      isCompleted ? 'w-full' : isCurrent ? 'w-full duration-[2300ms] ease-linear' : 'w-0'
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className={isCurrent ? 'text-[#F4F0E8] font-bold' : 'text-[#5C524C]'}>
                    {stg.num}
                  </span>
                  <span className="hidden sm:inline text-[#5C524C] truncate text-[7.5px]">
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

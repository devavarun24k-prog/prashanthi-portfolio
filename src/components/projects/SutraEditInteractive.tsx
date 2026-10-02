import React, { useState } from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';

export const SutraEditInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ladder' | 'market-gap' | 'flywheel' | 'curriculum'>('ladder');
  const [selectedTier, setSelectedTier] = useState(1);

  const valueLadderTiers = [
    {
      level: 'TIER 01',
      name: 'The Weekly Edit',
      price: 'Free / ₹0',
      audience: 'Fashion students, aspiring entrepreneurs & brand managers',
      deliverables: [
        'Weekly curated deep-dive newsletter into Indian retail landscape',
        'Visual merchandising breakdowns of new store openings',
        'Macro-trend summaries tailored specifically for Indian demographics'
      ],
      cta: 'Accessible entry point building wide brand authority'
    },
    {
      level: 'TIER 02',
      name: 'Founder Inner Circle',
      price: '₹1,999 / Qtr',
      audience: 'Early-stage D2C founders & independent boutique owners',
      deliverables: [
        'Proprietary range planning & size-ratio calculation templates',
        'Vetted vendor & fabric mill directory for Indian manufacturing',
        'Monthly live interactive AMAs on pricing, costing & inventory health'
      ],
      cta: 'High-retention recurring membership community'
    },
    {
      level: 'TIER 03',
      name: 'Advisory & Strategy',
      price: '₹3,999+ / Engagement',
      audience: 'Scaling lifestyle labels preparing for retail store rollout',
      deliverables: [
        'Bespoke merchandise allocation & SKU rationalisation roadmaps',
        'Store layout, planogram & visual merchandising audit',
        'End-to-end launch pricing & margin architecture formulation'
      ],
      cta: 'High-touch strategic consulting producing bespoke case studies'
    }
  ];

  const marketGaps = [
    {
      problem: 'Western Framework Mismatch',
      reality: 'Global textbooks teach fashion retail using Western sizing, seasonality (Fall/Winter heavy), and distribution models that fail in India’s festive-driven multi-climate calendar.',
      sutraSolution: 'Contextual frameworks tailored to Indian festivals, monsoon transitions, and regional silhouette preferences.'
    },
    {
      problem: 'Opacities in Sourcing & MOQs',
      reality: 'Emerging designers struggle with exorbitant Minimum Order Quantities (MOQs) and opaque domestic vendor networks.',
      sutraSolution: 'Curated intelligence on small-batch production, mill negotiations, and ethical Indian manufacturing clusters.'
    },
    {
      problem: 'The "Creative vs Commercial" Void',
      reality: 'Design founders excel at aesthetics but often lack disciplined size curves, margin math, and markdown risk control.',
      sutraSolution: 'Actionable financial and merchandising tools designed to protect designer gross margins.'
    }
  ];

  const flywheelSteps = [
    { num: '01', title: 'Actionable Research', desc: 'Publishing deep-dive teardowns of real Indian retail brands.' },
    { num: '02', title: 'Founder Trust & Ingestion', desc: 'Attracting serious lifestyle founders into the ecosystem.' },
    { num: '03', title: 'Advisory Engagements', desc: 'Solving real-world merchandising and store-opening bottlenecks.' },
    { num: '04', title: 'Proprietary Case Studies', desc: 'Feeding real operational learnings back into the intelligence engine.' }
  ];

  return (
    <div className="space-y-12 text-[#0D0D0D]">
      {/* Header */}
      <div className="border-b border-[#0D0D0D]/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
            PROJECT 05 // STARTUP STRATEGY & FASHION INTELLIGENCE
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase border border-[#0D0D0D]/20 bg-[#F5F4F0] text-[#0D0D0D]">
            <Compass className="w-3 h-3 text-[#0D0D0D]" />
            Business Model • Tiered Monetization • Growth Loop
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#0D0D0D]">
          Building an India-First Fashion Business Intelligence Platform
        </h3>
        <p className="mt-2 text-sm text-[#666666] max-w-3xl leading-relaxed">
          Sutra Edit is a conceptual intelligence platform built for India’s next wave of fashion entrepreneurs, addressing the critical gap between design aesthetics and commercial retail execution.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-[#0D0D0D]/10 gap-2">
        <button
          onClick={() => setActiveTab('ladder')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'ladder'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          01. Tiered Value Ladder
        </button>
        <button
          onClick={() => setActiveTab('market-gap')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'market-gap'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          02. Market Gap Analysis
        </button>
        <button
          onClick={() => setActiveTab('flywheel')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'flywheel'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          03. Flywheel Growth Loop
        </button>
      </div>

      {/* Tab 1: Value Ladder */}
      {activeTab === 'ladder' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {valueLadderTiers.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTier(idx)}
                className={`p-6 text-left border transition-all flex flex-col justify-between ${
                  selectedTier === idx
                    ? 'bg-[#0D0D0D] text-[#F5F4F0] border-[#0D0D0D]'
                    : 'bg-white text-[#0D0D0D] border-[#0D0D0D]/10 hover:border-[#0D0D0D]/40'
                }`}
              >
                <div>
                  <div className="font-mono text-[10px] tracking-widest opacity-60 uppercase">{tier.level}</div>
                  <h4 className="font-serif text-xl font-medium mt-1 mb-2">{tier.name}</h4>
                  <div className="font-mono text-lg font-light mb-3">{tier.price}</div>
                  <p className="text-xs opacity-75 leading-relaxed">{tier.audience}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-current/10 text-[11px] font-mono opacity-90">
                  {tier.cta}
                </div>
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 bg-[#F5F4F0] border border-[#0D0D0D]/10">
            <h4 className="font-serif text-xl text-[#0D0D0D] mb-4">
              {valueLadderTiers[selectedTier].name} — Core Deliverables
            </h4>
            <div className="space-y-2.5">
              {valueLadderTiers[selectedTier].deliverables.map((item, iIdx) => (
                <div key={iIdx} className="bg-white p-4 border border-[#0D0D0D]/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-[#333333]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Market Gap */}
      {activeTab === 'market-gap' && (
        <div className="space-y-4 animate-fadeIn">
          {marketGaps.map((gap, idx) => (
            <div key={idx} className="p-6 bg-white border border-[#0D0D0D]/10">
              <div className="font-serif text-lg text-[#0D0D0D] mb-2">{gap.problem}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 pt-3 border-t border-[#0D0D0D]/10 text-xs">
                <div>
                  <span className="font-mono text-[10px] text-[#888888] uppercase block mb-1">Industry Friction:</span>
                  <p className="text-[#555555] leading-relaxed">{gap.reality}</p>
                </div>
                <div className="bg-[#F5F4F0] p-3 border border-[#0D0D0D]/5">
                  <span className="font-mono text-[10px] text-[#0D0D0D] font-bold uppercase block mb-1">Sutra Edit Solution:</span>
                  <p className="text-[#222222] leading-relaxed">{gap.sutraSolution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Flywheel */}
      {activeTab === 'flywheel' && (
        <div className="p-8 bg-[#F5F4F0] border border-[#0D0D0D]/10 space-y-6 animate-fadeIn">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h4 className="font-serif text-2xl text-[#0D0D0D]">The Self-Reinforcing Intelligence Flywheel</h4>
            <p className="text-xs text-[#666666] mt-2">
              Each layer of the ecosystem accelerates client acquisition, generates real-world data, and strengthens community retention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {flywheelSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-5 border border-[#0D0D0D]/10 relative flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-full bg-[#0D0D0D] text-white font-mono text-xs flex items-center justify-center mb-3">
                    {step.num}
                  </div>
                  <h5 className="font-serif text-base text-[#0D0D0D] mb-1">{step.title}</h5>
                  <p className="text-xs text-[#555555] leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#0D0D0D]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

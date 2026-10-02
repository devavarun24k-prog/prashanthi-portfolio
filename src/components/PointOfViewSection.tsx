import React from 'react';
import { Compass, Sparkles, Palette, TrendingUp } from 'lucide-react';

export const PointOfViewSection: React.FC = () => {
  const creativePillars = [
    { label: 'Fashion Aesthetics', desc: 'Visual identity, color palettes, and contemporary styling.' },
    { label: 'Visual Merchandising', desc: 'Spatial floor choreography, window styling, and display setups.' },
    { label: 'Trend Research', desc: 'Decoding emerging cultural signals, moods, and aesthetics.' },
    { label: 'Store Presentation', desc: 'Elevating brand prestige through curated focal installations.' }
  ];

  const commercialPillars = [
    { label: 'Merchandise Planning', desc: 'Range architecture, category density, and SKU allocation.' },
    { label: 'Retail Operations', desc: 'Store audits, customer flow optimization, and replenishment.' },
    { label: 'Consumer Research', desc: 'Analyzing purchase behaviors, decision funnels, and dwell time.' },
    { label: 'Retail Analytics', desc: 'Performance benchmarking and multi-brand assortment viability.' }
  ];

  return (
    <section id="pov" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#C8C0B5]/40 bg-[#F3EFE7] text-[#24201D]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#24201D]/15">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#5A2028] uppercase font-semibold">
            <Compass className="w-4 h-4" />
            <span>02 / THE POINT OF VIEW</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#24201D] tracking-tight">
            Creative × Commercial
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#5C544E] leading-relaxed">
          Bridging design sensitivity with business discipline. In contemporary retail, creative curation and analytical planning are inseparable.
        </p>
      </div>

      {/* Main Big Editorial Manifesto */}
      <div className="py-14 border-b border-[#24201D]/15 space-y-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A2028] font-semibold block">
          CORE MANIFESTO
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#24201D] leading-[1.08] max-w-5xl">
          "I bring a <span className="font-serif-italic text-[#5A2028]">creative eye</span> with a strong understanding of the <span className="underline decoration-[#5A2028]/40 underline-offset-8">business behind fashion</span>."
        </h3>
        <p className="text-sm sm:text-base text-[#5C544E] max-w-3xl leading-relaxed pt-2 font-sans">
          From retail visual merchandising on the ground at The Bear House to academic case research on House of Masaba and Nykaa Fashion, Prashanthi’s approach unites visual storytelling with structured merchandise planning and consumer research.
        </p>
      </div>

      {/* The Two Editorial Halves (Creative vs Commercial) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-stretch">
        {/* Left Side: Creative */}
        <div className="lg:col-span-6 p-8 sm:p-10 bg-white border border-[#C8C0B5] rounded-none space-y-6 flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#24201D]/10">
              <span className="font-mono text-xs font-semibold text-[#5A2028] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Palette className="w-4 h-4" />
                SIDE A • THE CREATIVE EYE
              </span>
              <span className="text-[10px] font-mono text-[#5C544E] uppercase">AESTHETICS</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#24201D] font-normal">
              Visual Direction & Spatial Resonance
            </h4>
            <p className="text-xs sm:text-sm text-[#5C544E] leading-relaxed">
              How fashion environments communicate emotion, allure, and prestige through layout geometry, lighting, and product presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#24201D]/10">
            {creativePillars.map((item) => (
              <div key={item.label} className="p-3.5 bg-[#F3EFE7] border border-[#C8C0B5]/60 rounded-none space-y-1">
                <span className="font-mono text-xs font-medium text-[#24201D] block">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#5C544E] block leading-tight">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Commercial */}
        <div className="lg:col-span-6 p-8 sm:p-10 bg-[#17120F] text-[#F3EFE7] border border-[#2E2520] rounded-none space-y-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#F3EFE7]/10">
              <span className="font-mono text-xs font-semibold text-[#5A2028] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#5A2028]" />
                SIDE B • THE COMMERCIAL MIND
              </span>
              <span className="text-[10px] font-mono text-[#C8C0B5]/50 uppercase">COMMERCIAL</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#F3EFE7] font-normal">
              Merchandise Planning & Retail Rigor
            </h4>
            <p className="text-xs sm:text-sm text-[#C8C0B5]/80 leading-relaxed">
              How merchandise planning, range density, customer flow audits, and replenishment velocity convert visual appeal into sustainable commercial success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#F3EFE7]/10">
            {commercialPillars.map((item) => (
              <div key={item.label} className="p-3.5 bg-[#221B17] border border-[#2E2520] rounded-none space-y-1">
                <span className="font-mono text-xs font-medium text-[#F3EFE7] block">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#C8C0B5]/60 block leading-tight">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Synthesis Footnote */}
      <div className="mt-8 p-4 bg-white border border-[#C8C0B5] rounded-none flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C544E] font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#5A2028]" />
          <span>Where creative visual curation drives retail performance and brand equity.</span>
        </div>
        <span className="text-[#5A2028] font-semibold uppercase tracking-wider">
          STRATEGIC SYNTHESIS
        </span>
      </div>
    </section>
  );
};

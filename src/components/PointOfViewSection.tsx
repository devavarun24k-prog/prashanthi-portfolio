import React from 'react';
import { Compass, Palette, TrendingUp } from 'lucide-react';

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
    <section id="pov" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#D9D7D2] bg-[#F5F4F0] text-[#0D0D0D]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#D9D7D2]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
            <Compass className="w-4 h-4" />
            <span>02 / THE POINT OF VIEW</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0D0D0D] tracking-tight">
            Creative × Commercial
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#666666] leading-relaxed">
          Bridging design sensitivity with business discipline. In contemporary retail, creative curation and analytical planning are inseparable.
        </p>
      </div>

      {/* Main Big Editorial Manifesto */}
      <div className="py-14 border-b border-[#D9D7D2] space-y-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#666666] font-semibold block">
          CORE MANIFESTO
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#0D0D0D] leading-[1.08] max-w-5xl">
          "I bring a <span className="font-serif italic font-normal">creative eye</span> with a strong understanding of the <span className="underline decoration-[#0D0D0D]/40 underline-offset-8">business behind fashion</span>."
        </h3>
        <p className="text-sm sm:text-base text-[#666666] max-w-3xl leading-relaxed pt-2 font-sans">
          From retail visual merchandising on the ground at The Bear House to academic case research on House of Masaba and Nykaa Fashion, Prashanthi’s approach unites visual storytelling with structured merchandise planning and consumer research.
        </p>
      </div>

      {/* The Two Editorial Halves (Creative vs Commercial) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-stretch">
        {/* Left Side: Creative */}
        <div className="lg:col-span-6 p-8 sm:p-10 bg-white border border-[#D9D7D2] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9D7D2]">
              <span className="font-mono text-xs font-semibold text-[#0D0D0D] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <Palette className="w-4 h-4" />
                SIDE A • THE CREATIVE EYE
              </span>
              <span className="text-[10px] font-mono text-[#666666] uppercase">AESTHETICS</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D] font-normal">
              Visual Direction & Spatial Resonance
            </h4>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              How fashion environments communicate emotion, allure, and prestige through layout geometry, lighting, and product presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#D9D7D2]">
            {creativePillars.map((item) => (
              <div key={item.label} className="p-3.5 bg-[#F5F4F0] border border-[#D9D7D2] space-y-1">
                <span className="font-mono text-xs font-medium text-[#0D0D0D] block">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#666666] block leading-tight">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Commercial */}
        <div className="lg:col-span-6 p-8 sm:p-10 bg-[#0D0D0D] text-[#F5F4F0] border border-[#262626] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <span className="font-mono text-xs font-semibold text-[#F5F4F0] uppercase tracking-[0.2em] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                SIDE B • THE COMMERCIAL MIND
              </span>
              <span className="text-[10px] font-mono text-[#96938D] uppercase">COMMERCIAL</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4F0] font-normal">
              Merchandise Planning & Retail Rigor
            </h4>
            <p className="text-xs sm:text-sm text-[#96938D] leading-relaxed">
              How merchandise planning, range density, customer flow audits, and replenishment velocity convert visual appeal into sustainable commercial success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#262626]">
            {commercialPillars.map((item) => (
              <div key={item.label} className="p-3.5 bg-[#161616] border border-[#262626] space-y-1">
                <span className="font-mono text-xs font-medium text-[#F5F4F0] block">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#96938D] block leading-tight">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Synthesis Footnote */}
      <div className="mt-8 p-4 bg-white border border-[#D9D7D2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#666666] font-mono">
        <div>
          <span>Where creative visual curation drives retail performance and brand equity.</span>
        </div>
        <span className="text-[#0D0D0D] font-semibold uppercase tracking-wider">
          STRATEGIC SYNTHESIS
        </span>
      </div>
    </section>
  );
};

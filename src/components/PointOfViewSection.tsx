import React from 'react';
import { Compass, Sparkles, TrendingUp, Store } from 'lucide-react';

export const PointOfViewSection: React.FC = () => {
  const pillars = [
    {
      index: '01',
      icon: Sparkles,
      title: 'Creative Eye & Brand Storytelling',
      subtitle: 'Aesthetic Direction & Brand Identity',
      description:
        'Translating creative vision into cohesive brand worlds, seasonal campaign direction, and curated visual merchandising standards that capture attention and build lasting brand equity.',
      tags: ['Visual Merchandising', 'Editorial Curation', 'Brand Codes'],
    },
    {
      index: '02',
      icon: TrendingUp,
      title: 'Commercial Rigor & Assortment Logic',
      subtitle: 'Merchandising Strategy & Financial Balance',
      description:
        'Architecting structured assortment plans, balanced price architectures (₹7.5K–₹65K), margin protection (40–60%), and size curves optimized for consumer demand and sell-through efficiency.',
      tags: ['Assortment Planning', 'Price Architecture', 'Margin Protection'],
    },
    {
      index: '03',
      icon: Store,
      title: 'Consumer & Retail Reality',
      subtitle: 'Floor Dynamics & Customer Journey',
      description:
        'Grounding strategy in real store environments—auditing shop-floor footfall, fixture layout efficiency, dwell-time drivers, and consumer friction points to elevate the physical retail experience.',
      tags: ['Retail Footprint', 'Store Experience', 'Consumer Empathy'],
    },
  ];

  return (
    <section
      id="pov"
      className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] select-none relative overflow-hidden"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#262320_1px,transparent_1px),linear-gradient(to_bottom,#262320_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Section Eyebrow */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-12 border-b border-[#262320] font-mono text-xs">
        <div className="flex items-center gap-2.5 font-semibold uppercase tracking-widest text-[#722F37]">
          <Compass className="w-4 h-4 text-[#722F37]" />
          <span>EDITORIAL MANIFESTO // POINT OF VIEW</span>
        </div>
        <div className="flex items-center gap-2 text-[#8E8278]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
          <span>FASHION × COMMERCE × EXPERIENCE</span>
        </div>
      </div>

      {/* Manifesto Headline Spread */}
      <div className="relative z-10 py-16 sm:py-20 max-w-5xl space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#C8BFB2] block">
          [ CORE PERSPECTIVE ]
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight text-[#F4F0E8]">
          “I’m interested in where fashion, consumers and business intersect —{' '}
          <span className="italic text-[#C8BFB2]">
            from understanding what people want to creating the right product, experience and brand strategy to make it matter.
          </span>”
        </h2>
        <div className="w-24 h-[2px] bg-[#722F37] mt-6" />
      </div>

      {/* 3 Editorial Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8">
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={pillar.index}
              className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-xl flex flex-col justify-between space-y-8 group relative overflow-hidden"
            >
              {/* Top Index & Icon */}
              <div className="space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#262320] pb-4">
                  <span className="text-[#722F37] font-bold text-base">PILLAR {pillar.index}</span>
                  <div className="w-8 h-8 rounded-full bg-[#0B0A09] border border-[#262320] group-hover:border-[#722F37] flex items-center justify-center transition-colors">
                    <IconComponent className="w-4 h-4 text-[#722F37]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8E8278] block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug group-hover:text-[#F4F0E8] transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="pt-6 border-t border-[#262320] flex flex-wrap gap-2">
                {pillar.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-[#0B0A09] border border-[#262320] text-[10px] font-mono text-[#8E8278] uppercase tracking-wider group-hover:border-[#722F37]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

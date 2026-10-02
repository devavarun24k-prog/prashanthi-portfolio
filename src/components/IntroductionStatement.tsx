import React from 'react';
import { Eye, TrendingUp, ShoppingBag, Palette } from 'lucide-react';

export const IntroductionStatement: React.FC = () => {
  const pillars = [
    {
      icon: ShoppingBag,
      title: 'Buying & Merchandising',
      desc: 'Structured range planning, assortment depth, stock allocation, and seasonal replenishment.'
    },
    {
      icon: Palette,
      title: 'Visual Merchandising',
      desc: 'Translating brand aesthetics into engaging physical environments through layout, focal points, and styling.'
    },
    {
      icon: TrendingUp,
      title: 'Retail Analytics',
      desc: 'Evaluating store performance, customer navigation paths, and sales conversion metrics.'
    },
    {
      icon: Eye,
      title: 'Trend & Consumer Research',
      desc: 'Synthesizing market movements, cultural shifts, and competitor benchmarking into commercial opportunities.'
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E8E2D8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Manifesto */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>THE CORE PERSPECTIVE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181310] leading-tight tracking-tight">
            "I bring a <span className="font-serif-italic text-[#856A41]">creative eye</span> with a strong understanding of the <span className="underline decoration-[#C5A880]/50 underline-offset-8">business behind fashion</span>."
          </h2>

          <p className="text-sm sm:text-base text-[#4F433A] leading-relaxed">
            In fashion and lifestyle retail, aesthetic intuition must be matched by commercial discipline. Prashanthi combines on-floor visual merchandising execution, retail audits, and store setups with academic rigor in merchandise planning and consumer research.
          </p>
        </div>

        {/* Right 4 Pillars Matrix */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#F4EFEA] border border-[#E8E2D8] rounded-sm hover:border-[#C5A880] hover:bg-white transition-all duration-300 space-y-3 group"
              >
                <div className="w-9 h-9 rounded-sm bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#856A41] group-hover:bg-[#181310] group-hover:text-[#FAF8F5] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#181310] font-medium">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#736B63] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

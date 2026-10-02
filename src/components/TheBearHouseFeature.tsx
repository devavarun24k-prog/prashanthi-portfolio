import React from 'react';
import { Store, MapPin, ArrowUpRight } from 'lucide-react';
import { BEAR_HOUSE_LOCATIONS } from '../data/portfolioData';

interface TheBearHouseFeatureProps {
  onOpenStudy: () => void;
}

export const TheBearHouseFeature: React.FC<TheBearHouseFeatureProps> = ({ onOpenStudy }) => {

  const visualCards = [
    {
      title: 'Visual Merchandising Audits',
      tag: 'Store Compliance',
      desc: 'Systematic planogram audits across 7 stores ensuring standardized 1.5-inch hanger spacing, visual balance, and clean sightlines from entrance to back of store.'
    },
    {
      title: 'Mannequin & Fixture Styling',
      tag: 'Styling Standards',
      desc: 'Dressing focal mannequins in complete cross-category outfits (shirts + chinos + accessories) to inspire basket building and elevate store entrance impact.'
    },
    {
      title: 'End of Season Sale (EOSS)',
      tag: 'High-Density Execution',
      desc: 'Rapid transition of display storytelling into size-categorized shopping grids, shorts wall management, and fast restocking workflows.'
    },
    {
      title: '2 New Store Openings (NSO)',
      tag: 'Launch Operations',
      desc: 'Hands-on visual merchandising and initial inventory allocation for new store launches at Himayath Nagar and Tolichowki, Hyderabad.'
    }
  ];

  return (
    <section
      id="bear-house"
      className="py-24 sm:py-28 bg-[#DCE6F7] text-[#171717] border-b border-[#CCD9EE]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-black/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3158D4]">
              <Store className="w-4 h-4" />
              <span>Hero Retail Feature Case Study</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight">
              The Bear House
            </h2>
            <p className="text-base sm:text-lg text-[#333333] font-sans">
              Visual Merchandising & Retail Execution • 46-Day Industry Internship, Hyderabad
            </p>
          </div>

          <button
            onClick={onOpenStudy}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3158D4] text-white hover:bg-[#171717] transition-colors text-xs font-sans font-semibold uppercase tracking-wider shrink-0 shadow-sm"
          >
            <span>Read Full Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Short Editorial Copy */}
        <p className="text-lg sm:text-xl text-[#222222] font-serif max-w-3xl leading-relaxed italic">
          "Hands-on exposure to visual merchandising, store operations, merchandise organisation and retail execution across EBO and SIS formats."
        </p>

        {/* 4 Storytelling Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visualCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-sm hover:border-[#3158D4] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#3158D4] font-semibold uppercase tracking-wider block">
                  0{idx + 1} / {card.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#171717] font-normal leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-sans pt-1">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-black/5 text-[11px] font-sans font-medium text-[#3158D4] flex items-center gap-1">
                <span>Verified Retail Work</span>
              </div>
            </div>
          ))}
        </div>

        {/* 7 Store Footprint Matrix */}
        <div className="p-8 rounded-2xl bg-white/70 border border-white/80 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-black/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#3158D4]" />
              7 Active Store Locations Audited & Executed
            </span>
            <span className="text-xs font-sans text-[#77736D]">
              Bangalore & Hyderabad
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {BEAR_HOUSE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white rounded-xl border border-black/5 space-y-1"
              >
                <div className="font-sans text-xs font-semibold text-[#171717]">
                  {loc.name}
                </div>
                <div className="text-[11px] text-[#77736D] font-sans">
                  {loc.city} • {loc.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

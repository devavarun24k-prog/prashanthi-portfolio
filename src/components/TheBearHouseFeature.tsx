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
      className="py-24 sm:py-28 bg-[#E8DCC6] text-[#2C2421] border-b border-[#E2D5C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#B7A89A]/40">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
              <Store className="w-4 h-4" />
              <span>Hero Retail Feature Case Study</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#2C2421] tracking-tight">
              The Bear House
            </h2>
            <p className="text-base sm:text-lg text-[#554E48] font-sans">
              Visual Merchandising & Retail Execution • 46-Day Industry Internship, Hyderabad
            </p>
          </div>

          <button
            onClick={onOpenStudy}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#722F37] text-[#F5EEE3] hover:bg-[#2C2421] transition-colors text-xs font-sans font-semibold uppercase tracking-wider shrink-0 shadow-sm"
          >
            <span>Read Full Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Short Editorial Copy */}
        <p className="text-lg sm:text-xl text-[#2C2421] font-serif max-w-3xl leading-relaxed italic">
          "Hands-on exposure to visual merchandising, store operations, merchandise organisation and retail execution across EBO and SIS formats."
        </p>

        {/* 4 Storytelling Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visualCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#FAF6EE]/90 backdrop-blur-sm rounded-2xl border border-[#E2D5C3] shadow-sm hover:border-[#722F37] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#722F37] font-semibold uppercase tracking-wider block">
                  0{idx + 1} / {card.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#2C2421] font-normal leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#554E48] leading-relaxed font-sans pt-1">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2D5C3] text-[11px] font-sans font-semibold text-[#722F37] flex items-center gap-1">
                <span>Verified Retail Work</span>
              </div>
            </div>
          ))}
        </div>

        {/* 7 Store Footprint Matrix */}
        <div className="p-8 rounded-2xl bg-[#FAF6EE]/80 border border-[#E2D5C3] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2D5C3]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2C2421] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#722F37]" />
              7 Active Store Locations Audited & Executed
            </span>
            <span className="text-xs font-sans text-[#8F8177]">
              Bangalore & Hyderabad
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {BEAR_HOUSE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#F5EEE3] rounded-xl border border-[#E2D5C3] space-y-1"
              >
                <div className="font-sans text-xs font-semibold text-[#2C2421]">
                  {loc.name}
                </div>
                <div className="text-[11px] text-[#8F8177] font-sans">
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

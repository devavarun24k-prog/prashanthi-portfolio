import React, { useState } from 'react';
import { Building2, MapPin, CheckCircle2, Store, Calendar, Layers, Eye, LayoutGrid } from 'lucide-react';
import { BEAR_HOUSE_STUDY } from '../data/portfolioData';

interface TheBearHouseShowcaseProps {
  onOpenStudy?: () => void;
}

export const TheBearHouseShowcase: React.FC<TheBearHouseShowcaseProps> = ({ onOpenStudy }) => {
  const [selectedLocIndex, setSelectedLocIndex] = useState(0);
  const activeLoc = BEAR_HOUSE_STUDY.locations[selectedLocIndex];

  return (
    <section
      id="bear-house"
      className="py-28 bg-[#F5F4F0] text-[#0D0D0D] border-b border-[#D9D7D2]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#D9D7D2]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#666666] uppercase font-semibold">
              <Store className="w-4 h-4" />
              <span>04 / RETAIL IMMERSION FEATURE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#0D0D0D] tracking-tight">
              {BEAR_HOUSE_STUDY.company}
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-[#666666] italic">
              {BEAR_HOUSE_STUDY.role} • {BEAR_HOUSE_STUDY.duration}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenStudy && (
              <button
                onClick={onOpenStudy}
                className="px-4 py-2 bg-[#0D0D0D] text-[#F5F4F0] text-xs font-mono tracking-wider uppercase hover:bg-[#262626] transition-colors"
              >
                Launch 7-Step Showcase →
              </button>
            )}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#D9D7D2] text-xs font-mono text-[#0D0D0D] font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>46-DAY INTERNSHIP</span>
            </div>
          </div>
        </div>

        {/* 4 Highlight Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BEAR_HOUSE_STUDY.keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#D9D7D2] hover:border-[#0D0D0D] transition-colors space-y-2 group"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0D0D0D] group-hover:text-[#666666] transition-colors">
                {item.number}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#666666] block font-semibold">
                {item.label}
              </span>
              <p className="text-xs text-[#666666] leading-relaxed font-sans pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Store Footprint Navigator & Store Deep Dive */}
        <div className="p-6 sm:p-8 bg-white border border-[#D9D7D2] space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D9D7D2]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#666666] block font-semibold">
                STORE LOCATIONS
              </span>
              <h3 className="font-serif text-2xl text-[#0D0D0D] mt-0.5 font-normal">
                7 Retail Store Locations
              </h3>
            </div>

            {/* Location Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {BEAR_HOUSE_STUDY.locations.map((loc, idx) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocIndex(idx)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    selectedLocIndex === idx
                      ? 'bg-[#0D0D0D] text-[#F5F4F0] font-semibold'
                      : 'bg-[#F5F4F0] border border-[#D9D7D2] text-[#666666] hover:text-[#0D0D0D]'
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Store Details Bar */}
          <div className="p-5 bg-[#F5F4F0] border border-[#D9D7D2] grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#666666] font-semibold">
                STORE PROFILE
              </span>
              <h4 className="font-serif text-xl text-[#0D0D0D] mt-0.5 font-normal">
                {activeLoc.name}
              </h4>
              <p className="text-xs text-[#666666] font-mono">
                {activeLoc.type} • {activeLoc.city}
              </p>
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-2 items-center">
              {activeLoc.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-[#0D0D0D] bg-white border border-[#D9D7D2] px-3 py-1 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D0D0D]" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Multi-Slot Visual Layout Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Store Photography', tag: 'RETAIL SPACE' },
              { title: 'Mannequin Styling', tag: 'STYLING STANDARDS' },
              { title: 'Fixture Layouts', tag: 'SPATIAL ZONING' },
              { title: 'NSO Setup', tag: 'STORE OPENING' }
            ].map((slot, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#F5F4F0] border border-[#D9D7D2] space-y-3 group hover:border-[#0D0D0D] transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#666666]">
                  <span>SLOT 0{idx + 1}</span>
                  <LayoutGrid className="w-3.5 h-3.5" />
                </div>
                <div className="aspect-[4/3] bg-white border border-[#D9D7D2] flex flex-col items-center justify-center text-center p-3">
                  <Eye className="w-5 h-5 text-[#666666] mb-2" />
                  <span className="font-serif text-sm text-[#0D0D0D] font-medium">{slot.title}</span>
                  <span className="font-mono text-[9px] text-[#666666] uppercase tracking-widest mt-1">
                    VISUAL TO BE ADDED
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider block font-semibold">
                  {slot.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documented Operational Scope */}
        <div className="p-6 sm:p-8 bg-white border border-[#D9D7D2] space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9D7D2]">
            <div className="flex items-center gap-2 text-[#0D0D0D] font-mono text-xs tracking-wider uppercase font-semibold">
              <Building2 className="w-4 h-4" />
              <span>Documented Internship Scope</span>
            </div>
            <span className="text-[10px] font-mono text-[#666666] uppercase">
              RETAIL MERCHANDISING
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {BEAR_HOUSE_STUDY.scope.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F5F4F0] border border-[#D9D7D2] flex items-start gap-2.5 text-xs text-[#0D0D0D] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Photography Pipeline Note */}
          <div className="p-5 bg-[#0D0D0D] text-[#F5F4F0] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#161616] border border-[#262626] flex items-center justify-center text-[#F5F4F0] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#96938D] block font-semibold">
                  ORIGINAL STORE PHOTOGRAPHY PIPELINE
                </span>
                <p className="text-xs text-[#96938D] font-sans">
                  Prepared for upcoming retail store photographs, mannequin styling documentation, and NSO setup imagery.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#96938D] shrink-0">
              <span>ORIGINAL MATERIAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

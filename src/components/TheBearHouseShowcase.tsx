import React, { useState } from 'react';
import { Building2, MapPin, CheckCircle2, Store, Calendar, Layers, Sparkles, Eye, LayoutGrid } from 'lucide-react';
import { BEAR_HOUSE_STUDY } from '../data/portfolioData';

export const TheBearHouseShowcase: React.FC = () => {
  const [selectedLocIndex, setSelectedLocIndex] = useState(0);
  const activeLoc = BEAR_HOUSE_STUDY.locations[selectedLocIndex];

  return (
    <section
      id="bear-house"
      className="py-28 bg-[#EAE4DC] text-[#24201D] border-b border-[#C8C0B5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#24201D]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#5A2028] uppercase font-semibold">
              <Store className="w-4 h-4" />
              <span>04 / RETAIL IMMERSION FEATURE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#24201D] tracking-tight">
              {BEAR_HOUSE_STUDY.company}
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-[#5A2028] italic">
              {BEAR_HOUSE_STUDY.role} • {BEAR_HOUSE_STUDY.duration}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#C8C0B5] rounded-none text-xs font-mono text-[#5A2028] font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>46-DAY INTERNSHIP</span>
          </div>
        </div>

        {/* 4 Highlight Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BEAR_HOUSE_STUDY.keyHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#C8C0B5] rounded-none hover:border-[#5A2028] transition-all space-y-2 group shadow-sm"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#24201D] group-hover:text-[#5A2028] transition-colors">
                {item.number}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#5A2028] block font-semibold">
                {item.label}
              </span>
              <p className="text-xs text-[#5C544E] leading-relaxed font-sans pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Store Footprint Navigator & Store Deep Dive */}
        <div className="p-6 sm:p-8 bg-white border border-[#C8C0B5] rounded-none space-y-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#24201D]/10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5A2028] block font-semibold">
                STORE LOCATIONS
              </span>
              <h3 className="font-serif text-2xl text-[#24201D] mt-0.5">
                4 Active Retail Locations
              </h3>
            </div>

            {/* Location Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {BEAR_HOUSE_STUDY.locations.map((loc, idx) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-none font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    selectedLocIndex === idx
                      ? 'bg-[#17120F] text-[#F3EFE7] font-semibold'
                      : 'bg-[#F3EFE7] border border-[#C8C0B5] text-[#5C544E] hover:text-[#24201D]'
                  }`}
                >
                  <MapPin className="w-3 h-3 text-[#5A2028]" />
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Store Details Bar */}
          <div className="p-5 bg-[#F3EFE7] border border-[#C8C0B5] rounded-none grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#5A2028] font-semibold">
                STORE PROFILE
              </span>
              <h4 className="font-serif text-xl text-[#24201D] mt-0.5">
                {activeLoc.name}
              </h4>
              <p className="text-xs text-[#5C544E] font-mono">
                {activeLoc.type} • {activeLoc.city}
              </p>
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-2 items-center">
              {activeLoc.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-xs font-mono text-[#24201D] bg-white border border-[#C8C0B5] px-3 py-1 rounded-none flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2028]" />
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
                className="p-5 bg-[#F3EFE7] border border-[#C8C0B5] rounded-none space-y-3 group hover:border-[#5A2028] transition-colors"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-[#5A2028]">
                  <span>SLOT 0{idx + 1}</span>
                  <LayoutGrid className="w-3.5 h-3.5" />
                </div>
                <div className="aspect-[4/3] bg-white border border-[#C8C0B5] rounded-none flex flex-col items-center justify-center text-center p-3">
                  <Eye className="w-5 h-5 text-[#5A2028]/70 mb-2" />
                  <span className="font-serif text-sm text-[#24201D] font-medium">{slot.title}</span>
                  <span className="font-mono text-[9px] text-[#5C544E] uppercase tracking-widest mt-1">
                    VISUAL TO BE ADDED
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#5C544E] uppercase tracking-wider block font-semibold">
                  {slot.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Documented Operational Scope */}
        <div className="p-6 sm:p-8 bg-white border border-[#C8C0B5] rounded-none space-y-6 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#24201D]/10">
            <div className="flex items-center gap-2 text-[#5A2028] font-mono text-xs tracking-wider uppercase font-semibold">
              <Building2 className="w-4 h-4" />
              <span>Documented Internship Scope</span>
            </div>
            <span className="text-[10px] font-mono text-[#5C544E] uppercase">
              RETAIL MERCHANDISING
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {BEAR_HOUSE_STUDY.scope.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#F3EFE7] border border-[#C8C0B5] rounded-none flex items-start gap-2.5 text-xs text-[#24201D] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#5A2028] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Photography Pipeline Note */}
          <div className="p-5 bg-[#17120F] text-[#F3EFE7] rounded-none border border-[#2E2520] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#221B17] border border-[#2E2520] flex items-center justify-center text-[#5A2028] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#5A2028] block font-semibold">
                  ORIGINAL STORE PHOTOGRAPHY PIPELINE
                </span>
                <p className="text-xs text-[#C8C0B5]/80 font-sans">
                  Prepared for upcoming retail store photographs, mannequin styling documentation, and NSO setup imagery.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-[#C8C0B5] shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-[#5A2028]" />
              <span>ORIGINAL MATERIAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Store, MapPin, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { BEAR_HOUSE_LOCATIONS } from '../data/portfolioData';

interface TheBearHouseFeatureProps {
  onOpenStudy: () => void;
}

export const TheBearHouseFeature: React.FC<TheBearHouseFeatureProps> = ({ onOpenStudy }) => {
  const [activeStage, setActiveStage] = useState(0);

  const retailStages = [
    { title: '01 · STOCKROOM', subtitle: 'Intake & Allocation', desc: 'Systematic stock intake, SKU verification, initial density sorting, and fast replenishment staging.' },
    { title: '02 · MERCHANDISE', subtitle: 'Category & Sizing', desc: 'Grouping by category lines (formal, casual, smart casual, chinos) and Indian sizing curves.' },
    { title: '03 · FIXTURES', subtitle: 'Hanger Standards', desc: 'Strict 1.5-inch standardized hanger spacing, color-flow coordination, and front-facing focal arms.' },
    { title: '04 · DISPLAY', subtitle: 'Mannequin Styling', desc: 'Complete coordinated outfits (shirts + bottoms + accessories) at high-visibility entrance focal points.' },
    { title: '05 · SHOP FLOOR', subtitle: 'Sightlines & Zoning', desc: 'Mapping clear customer pathways from threshold to fitting rooms with uninterrupted focal vistas.' },
    { title: '06 · CUSTOMER FLOW', subtitle: 'Dwell Time Optimization', desc: 'Positioning high-margin hero styles at natural pause hotspots to maximize basket size.' },
    { title: '07 · RETAIL EXPERIENCE', subtitle: 'Conversion & Sale Floor', desc: 'Elevated shopping environment ensuring consistent brand prestige across EBO and SIS formats.' },
  ];

  return (
    <section
      id="bear-house"
      className="py-24 sm:py-32 bg-[#0B0A09] text-[#F4F0E8] border-b border-[#262320]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#262320]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#722F37]">
              <Store className="w-4 h-4" />
              <span>FLAGSHIP RETAIL CASE STUDY</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight">
              THE BEAR HOUSE
            </h2>
            <p className="font-serif text-2xl text-[#C8BFB2] italic">
              "Retail in the Real World"
            </p>
            <p className="text-xs sm:text-sm text-[#8E8278] font-mono uppercase tracking-wider">
              46-Day Industry Internship · Visual Merchandising & Retail Execution · Hyderabad
            </p>
          </div>

          <button
            onClick={onOpenStudy}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all text-xs font-sans font-semibold uppercase tracking-wider shrink-0 shadow-lg"
          >
            <span>Read Full Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Retail Journey System */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#722F37]">
              <Layers className="w-4 h-4" />
              <span>RETAIL EXECUTION JOURNEY (STAGE-BY-STAGE)</span>
            </div>
            <span className="text-[11px] font-mono text-[#8E8278]">
              STAGE {activeStage + 1} OF 7
            </span>
          </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {retailStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs font-mono ${
                    isActive
                      ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] shadow-md'
                      : 'bg-[#141211] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8] hover:border-[#722F37]/50'
                  }`}
                >
                  <div className="font-semibold truncate">{stage.title}</div>
                  <div className="text-[10px] opacity-80 truncate">{stage.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Callout Spread */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#141211] border border-[#262320] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#722F37] block">
                {retailStages[activeStage].title} — {retailStages[activeStage].subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal leading-tight">
                {retailStages[activeStage].subtitle}
              </h3>
              <p className="text-sm sm:text-base text-[#C8BFB2] leading-relaxed font-sans font-light">
                {retailStages[activeStage].desc}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#0B0A09] border border-[#262320] space-y-3">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#722F37] block">
                CORE VM STANDARD:
              </span>
              <div className="space-y-2 text-xs font-sans text-[#C8BFB2]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#722F37] shrink-0 mt-0.5" />
                  <span>Standardized 1.5-inch hanger spacing across all rails</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#722F37] shrink-0 mt-0.5" />
                  <span>Size-grid consistency: Smallest size in front to largest in rear</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#722F37] shrink-0 mt-0.5" />
                  <span>Fast floor replenishment from stockroom overflow staging</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EOSS & NSO Verified Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* EOSS Card */}
          <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#722F37] block">
              CAMPAIGN EXECUTION · EOSS SALE FLOOR TRANSITION
            </span>
            <h3 className="font-serif text-3xl text-[#F4F0E8] font-normal">
              End of Season Sale (EOSS)
            </h3>
            <p className="text-sm text-[#8E8278] leading-relaxed font-sans">
              Reconfigured retail floors into high-density, size-wise shopping grids with rapid restocking protocols:
            </p>
            <div className="space-y-2 text-xs font-sans text-[#C8BFB2] pt-2">
              <div>• <strong>Amb Mall</strong>: Dedicated, high-impact shorts wall presentation</div>
              <div>• <strong>Lakeshore Mall</strong>: Full size-wise floor grid sorting & stockroom flow</div>
              <div>• <strong>Clear Callouts</strong>: Organized promotional signage without visual clutter</div>
            </div>
          </div>

          {/* NSO Card */}
          <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#722F37] block">
              LAUNCH OPERATIONS · NEW STORE OPENINGS (NSO)
            </span>
            <h3 className="font-serif text-3xl text-[#F4F0E8] font-normal">
              2 Store Launches Setup
            </h3>
            <p className="text-sm text-[#8E8278] leading-relaxed font-sans">
              End-to-end visual setup and inventory staging for two flagship retail launches in Hyderabad:
            </p>
            <div className="space-y-2 text-xs font-sans text-[#C8BFB2] pt-2">
              <div>• <strong>Himayath Nagar</strong>: Complete opening inventory allocation & display planograms</div>
              <div>• <strong>Tolichowki</strong>: High-street launch visual merchandising & mannequin styling</div>
              <div>• <strong>Compliance</strong>: 100% brand VM guideline adherence from day one</div>
            </div>
          </div>
        </div>

        {/* 7 Store Footprint Matrix */}
        <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#262320]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F4F0E8] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#722F37]" />
              7 Active Store Footprint Audited & Executed
            </span>
            <span className="text-xs font-mono text-[#8E8278]">
              BANGALORE & HYDERABAD
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BEAR_HOUSE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0B0A09] rounded-xl border border-[#262320] space-y-1 hover:border-[#722F37] transition-colors"
              >
                <div className="font-serif text-base text-[#F4F0E8]">
                  {loc.name}
                </div>
                <div className="text-[11px] text-[#722F37] font-semibold uppercase tracking-wider">
                  {loc.city} · {loc.type}
                </div>
                <div className="text-[11px] text-[#8E8278] pt-1">
                  {loc.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Store, MapPin, ArrowUpRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { BEAR_HOUSE_LOCATIONS } from '../data/portfolioData';

interface TheBearHouseFeatureProps {
  onOpenStudy: () => void;
}

export const TheBearHouseFeature: React.FC<TheBearHouseFeatureProps> = ({ onOpenStudy }) => {
  const [activeLocation, setActiveLocation] = useState(0);

  const workItems = [
    {
      num: '01',
      title: 'STORE VM EXPOSURE',
      desc: 'Understanding real-world visual merchandising across multiple retail formats — EBOs (Exclusive Brand Outlets) and SIS (Shop-in-Shop) stores.',
      tag: 'EBO & SIS FORMATS'
    },
    {
      num: '02',
      title: 'STYLING & PRESENTATION',
      desc: 'Mannequin styling, outfit coordination, focal point displays, and maintaining brand presentation standards on the sales floor.',
      tag: 'OUTFIT COORDINATION'
    },
    {
      num: '03',
      title: 'EOSS FLOOR SETUP',
      desc: 'Floor transformation for End of Season Sale — reorganising merchandise, creating high-density discount displays, and managing stock flow during high-footfall periods.',
      tag: 'SALE TRANSFORMATION'
    },
    {
      num: '04',
      title: 'NEW STORE SETUP',
      desc: 'Hands-on experience with store launches — understanding how a retail space is set up from scratch, from layout planning to initial VM execution.',
      tag: 'NSO LAUNCHES'
    }
  ];

  return (
    <section
      id="bear-house"
      className="py-24 sm:py-36 bg-[#0B0A09] text-[#F4F0E8] border-b border-[#262320] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#262320]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#722F37]">
              <Store className="w-4 h-4 text-[#722F37]" />
              <span>FLAGSHIP RETAIL CASE STUDY // 46-DAY IMMERSION</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
              THE BEAR HOUSE
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#C8BFB2] italic">
              "Retail in the Real World"
            </p>
            <p className="text-xs font-mono text-[#8E8278] uppercase tracking-wider">
              Visual Merchandising · Store Operations · 2 New Store Openings · EOSS Transitions · Hyderabad & Bangalore
            </p>
          </div>

          <button
            onClick={onOpenStudy}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all text-xs font-mono font-semibold uppercase tracking-wider shrink-0 shadow-2xl border border-[#722F37]"
          >
            <span>EXPLORE FULL CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* WHAT I WORKED ON: 4-Item Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262320] pb-4 font-mono text-xs text-[#8E8278]">
            <div className="flex items-center gap-2.5 text-[#722F37] font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#722F37]" />
              <span>WHAT I WORKED ON // 4 CORE DOMAINS</span>
            </div>
            <span className="text-[#C8BFB2]">04 OPERATIONAL PILLARS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workItems.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-2xl font-serif text-[#722F37] group-hover:text-[#F4F0E8] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8E8278] px-2.5 py-1 rounded-full bg-[#0B0A09] border border-[#262320]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#C8BFB2] font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#262320] flex items-center justify-between font-mono text-[11px] text-[#8E8278]">
                  <span className="flex items-center gap-1.5 text-[#722F37]">
                    <Sparkles className="w-3 h-3" />
                    ON-GROUND VM
                  </span>
                  <span>THE BEAR HOUSE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Store Footprint Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141211] border border-[#262320] space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262320] font-mono text-xs">
            <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#722F37]" />
              7 ACTIVE STORE FOOTPRINT AUDITED & EXECUTED
            </span>
            <span className="text-[#8E8278]">
              BANGALORE & HYDERABAD // 5 EBOs + 2 SIS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {BEAR_HOUSE_LOCATIONS.map((loc, idx) => {
              const isSelected = activeLocation === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLocation(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 space-y-2 ${
                    isSelected
                      ? 'bg-[#0B0A09] border-[#722F37] shadow-xl text-[#F4F0E8]'
                      : 'bg-[#0B0A09] border-[#262320] text-[#8E8278] hover:border-[#722F37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#F4F0E8]">{loc.name}</span>
                    <span className="font-mono text-[10px] text-[#722F37]">0{idx + 1}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#722F37] font-semibold uppercase tracking-wider">
                    {loc.city} · {loc.type}
                  </div>
                  <div className="text-xs text-[#8E8278] font-sans pt-1">
                    {loc.focus}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Specification Callout */}
          <div className="p-4 rounded-xl bg-[#0B0A09] border border-[#262320] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#C8BFB2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#722F37]" />
              <span>SELECTED HUB: {BEAR_HOUSE_LOCATIONS[activeLocation].name.toUpperCase()} ({BEAR_HOUSE_LOCATIONS[activeLocation].city.toUpperCase()} — {BEAR_HOUSE_LOCATIONS[activeLocation].type})</span>
            </div>
            <div className="flex items-center gap-2 text-[#722F37]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>VM AUDIT PASS: 100% COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

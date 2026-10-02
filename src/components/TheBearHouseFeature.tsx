import React, { useState } from 'react';
import { Store, MapPin, ArrowUpRight, CheckCircle2, Layers, Shuffle, Compass } from 'lucide-react';
import { BEAR_HOUSE_LOCATIONS } from '../data/portfolioData';

interface TheBearHouseFeatureProps {
  onOpenStudy: () => void;
}

export const TheBearHouseFeature: React.FC<TheBearHouseFeatureProps> = ({ onOpenStudy }) => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeLocation, setActiveLocation] = useState(0);
  const [eossStep, setEossStep] = useState(0); // 0: WAREHOUSE, 1: STOCKROOM, 2: FLOOR, 3: SALE

  const retailStages = [
    {
      id: 'stockroom',
      title: '01 · STOCKROOM',
      subtitle: 'Intake & Allocation',
      desc: 'Systematic stock intake, barcode verification, density batching, and high-velocity replenishment staging.',
      standard: 'Barcode scan verification & rapid pick-and-pack floor staging',
      matrix: ['IN_BATCH_A1', 'IN_BATCH_A2', 'IN_BATCH_B1', 'IN_BATCH_B2']
    },
    {
      id: 'merchandise',
      title: '02 · MERCHANDISE',
      subtitle: 'Category & Sizing Curves',
      desc: 'Grouping by category lines (Formal, Casual, Smart Casual, Chinos) and verified Indian sizing curves (S:M:L:XL:XXL).',
      standard: 'Category sorting by color-flow and verified regional size curve density',
      matrix: ['FORMAL // NAVY', 'CASUAL // ECRU', 'SMART // BURGUNDY', 'CHINOS // KHAKI']
    },
    {
      id: 'fixture',
      title: '03 · FIXTURES',
      subtitle: '1.5-Inch Hanger Standards',
      desc: 'Strict 1.5-inch standardized hanger spacing, color-flow gradient coordination, and forward-facing focal arms.',
      standard: 'Exact 1.5" rule measurement with smallest size in front to largest in rear',
      matrix: ['ARM_FOCAL_01', 'ARM_FOCAL_02', 'RAIL_1.5_SPACED', 'RAIL_SIZE_SORTED']
    },
    {
      id: 'display',
      title: '04 · DISPLAY',
      subtitle: 'Mannequin Styling',
      desc: 'Complete coordinated outfits (shirts + trousers + layering pieces) placed at high-visibility entrance focal sightlines.',
      standard: '3-point outfit coordination with complementary tonal contrast',
      matrix: ['LOOK_01 // OCCASION', 'LOOK_02 // CASUAL', 'LOOK_03 // SMART', 'LOOK_04 // TRANSITIONAL']
    },
    {
      id: 'floor',
      title: '05 · SHOP FLOOR',
      subtitle: 'Sightlines & Zoning',
      desc: 'Mapping unobstructed pedestrian sightlines from main threshold to fitting rooms with strategic impulse tables.',
      standard: 'Uninterrupted visual vistas with clear aisle widths (>4 feet)',
      matrix: ['THRESHOLD_ZONE', 'FOCAL_TABLE_A', 'MID_FLOOR_RAILS', 'FITTING_ROOM_BAY']
    },
    {
      id: 'flow',
      title: '06 · CUSTOMER FLOW',
      subtitle: 'Dwell Time Optimization',
      desc: 'Positioning high-margin hero styles at natural pause hotspots to maximize basket size and browse duration.',
      standard: 'Burgundy flow path directing dwell time toward hero high-margin styles',
      matrix: ['HOTSPOT_ENTRANCE', 'HOTSPOT_ISLAND', 'HOTSPOT_WALL_BAY', 'CHECKOUT_ACCESSORY']
    },
    {
      id: 'experience',
      title: '07 · RETAIL EXPERIENCE',
      subtitle: 'Conversion & Brand Prestige',
      desc: 'Elevated shopping environment ensuring consistent brand prestige across EBO flagships and SIS shop-in-shops.',
      standard: '100% brand VM compliance across all 7 audited stores in Bangalore & Hyderabad',
      matrix: ['PRESTIGE_EBO', 'SIS_DEPARTMENT', 'NSO_STANDARDS', 'EOSS_RAPID_RESTOCK']
    },
  ];

  const eossFlow = [
    { label: '01 // WAREHOUSE', desc: 'Central distribution pallet sort & bulk density dispatch' },
    { label: '02 // STOCKROOM', desc: 'Pre-sorting into color-coded Indian size bundles (S–XXL)' },
    { label: '03 // FLOOR', desc: 'Rapid fixture re-allocation into high-density size grids' },
    { label: '04 // SALE', desc: 'Active promotion & dedicated high-volume shorts wall display' },
  ];

  return (
    <section
      id="bear-house"
      className="py-24 sm:py-36 bg-[#0B0A09] text-[#F4F0E8] border-b border-[#262320] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
        {/* Editorial Section Header Ribbon */}
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

        {/* 1. Interactive Visual Retail Execution System (7 Stages) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262320] pb-4 font-mono text-xs text-[#8E8278]">
            <div className="flex items-center gap-2.5 text-[#722F37] font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#722F37]" />
              <span>VISUAL RETAIL SYSTEM ARCHITECTURE (STAGE-BY-STAGE)</span>
            </div>
            <span className="text-[#C8BFB2]">
              ACTIVE STAGE: 0{activeStage + 1} / 07
            </span>
          </div>

          {/* Stepper Interactive Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {retailStages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs font-mono relative overflow-hidden ${
                    isActive
                      ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] shadow-lg'
                      : 'bg-[#141211] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8] hover:border-[#722F37]/50'
                  }`}
                >
                  <div className="font-bold truncate">{stage.title}</div>
                  <div className="text-[10px] opacity-80 truncate">{stage.subtitle}</div>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F4F0E8]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dynamic Transformation Canvas Spread */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#141211] border border-[#262320] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
            {/* Left: Stage Narrative & Rule Spec */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37]">
                  SYSTEM PROTOCOL // {retailStages[activeStage].title}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal leading-tight">
                  {retailStages[activeStage].subtitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#C8BFB2] leading-relaxed font-sans font-light">
                {retailStages[activeStage].desc}
              </p>

              {/* Core VM Standard Callout Box */}
              <div className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#722F37] block">
                  VERIFIED OPERATIONAL STANDARD:
                </span>
                <div className="flex items-start gap-2.5 text-xs text-[#C8BFB2] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                  <span>{retailStages[activeStage].standard}</span>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Visual System Composition Canvas */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] text-[#8E8278] border-b border-[#262320] pb-2">
                <span>LAYOUT SIMULATION // STAGE_0{activeStage + 1}</span>
                <span className="text-[#722F37]">60 FPS TRANSFORMATION</span>
              </div>

              {/* Reconfigurable Blocks representing Stock, Fixture, Sightline, or Flow */}
              <div className="grid grid-cols-2 gap-3 min-h-[220px] p-4 rounded-xl bg-[#141211] border border-[#262320] items-center">
                {retailStages[activeStage].matrix.map((item, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-4 rounded-lg border font-mono text-xs transition-all duration-700 flex flex-col justify-between h-24 ${
                      activeStage === 5 // Customer flow
                        ? 'border-[#722F37] bg-[#722F37]/15 text-[#F4F0E8] translate-x-1'
                        : activeStage === 2 // Fixture spacing
                        ? 'border-[#722F37]/60 bg-[#0B0A09] text-[#C8BFB2]'
                        : 'border-[#262320] bg-[#0B0A09] text-[#8E8278]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#722F37]">SYS_NODE_0{mIdx + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />
                    </div>
                    <span className="font-bold text-[#F4F0E8] text-xs">{item}</span>
                  </div>
                ))}
              </div>

              {/* Customer Flow Travelling Line Indicator for Stage 6 */}
              {activeStage === 5 && (
                <div className="flex items-center gap-2 text-xs font-mono text-[#722F37] bg-[#722F37]/10 p-2.5 rounded-lg border border-[#722F37]/30">
                  <Compass className="w-3.5 h-3.5 animate-spin text-[#722F37]" />
                  <span>PATHWAY ACTIVE: Entrance Sightline → High-Margin Island → Fitting Room Vista</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. EOSS Visual Transformation Engine */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141211] border border-[#262320] space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262320] pb-4 font-mono text-xs">
            <span className="text-[#722F37] font-bold uppercase tracking-widest flex items-center gap-2">
              <Shuffle className="w-4 h-4 text-[#722F37]" />
              EOSS INVENTORY FLOW TRANSFORMATION
            </span>
            <span className="text-[#8E8278]">4-STAGE HIGH-DENSITY CYCLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {eossFlow.map((step, idx) => {
              const isSelected = eossStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setEossStep(idx)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-500 space-y-2 ${
                    isSelected
                      ? 'bg-[#0B0A09] border-[#722F37] shadow-xl text-[#F4F0E8]'
                      : 'bg-[#0B0A09]/60 border-[#262320] text-[#8E8278] hover:border-[#722F37]/50'
                  }`}
                >
                  <div className="font-mono text-xs font-bold text-[#722F37] flex items-center justify-between">
                    <span>{step.label}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#722F37]" />}
                  </div>
                  <p className="text-xs text-[#C8BFB2] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-5 rounded-xl bg-[#0B0A09] border border-[#262320] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3 text-[#C8BFB2]">
              <span className="text-[#722F37] font-bold">NSO EXECUTION:</span>
              <span>2 Flagship Launches Completed (Himayath Nagar & Tolichowki) with 100% VM Standard Adherence</span>
            </div>
            <span className="text-[#8E8278] text-[11px]">EOSS SHORT WALL & SIZE-GRID VERIFIED</span>
          </div>
        </div>

        {/* 3. Traveling Line 7-Store Footprint Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141211] border border-[#262320] space-y-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262320] font-mono text-xs">
            <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#722F37]" />
              7 ACTIVE STORE FOOTPRINT AUDITED & EXECUTED
            </span>
            <span className="text-[#8E8278]">
              BANGALORE & HYDERABAD // EBO & SIS
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

          {/* Location Active Specification Line */}
          <div className="p-4 rounded-xl bg-[#0B0A09] border border-[#262320] flex items-center justify-between text-xs font-mono text-[#C8BFB2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#722F37]" />
              <span>SELECTED HUB: {BEAR_HOUSE_LOCATIONS[activeLocation].name.toUpperCase()} ({BEAR_HOUSE_LOCATIONS[activeLocation].city.toUpperCase()})</span>
            </div>
            <span className="text-[#8E8278] hidden sm:inline">VM AUDIT PASS: 100% COMPLIANT</span>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { Store, MapPin, CheckCircle2, ArrowRight, Layers, Package, LayoutGrid, Sparkles } from 'lucide-react';
import { BEAR_HOUSE_LOCATIONS_DATA } from '../../data/portfolioData';

export const BearHouseInteractive: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeLocationId, setActiveLocationId] = useState('lakeshore');

  const journeySteps = [
    {
      id: 'stockroom',
      title: '01 / STOCKROOM & WAREHOUSE',
      desc: 'Stock arrival, categorization by category, size segregation, and inventory check-in.',
      detail: 'Inventory received in bulk is segregated into core styles, seasonal lines, and promotional merchandise before entering the sales environment.',
      icon: Package
    },
    {
      id: 'merchandise',
      title: '02 / MERCHANDISE ALLOCATION',
      desc: 'Sorting product assortment, colour stories, and SKU depth per store demographic.',
      detail: 'Assortment density is calculated per square foot. High-performing categories (shirts, linen, polos) are prioritised for front-of-house rotation.',
      icon: Layers
    },
    {
      id: 'fixtures',
      title: '03 / FIXTURES & WALLS',
      desc: 'Planogram implementation, hanger spacing, folding tables, and wall zoning.',
      detail: 'Walls are organised by color story and category hierarchy. Standardised hanger spacing (1.5 inches) ensures clean, premium visual consistency.',
      icon: LayoutGrid
    },
    {
      id: 'shopfloor',
      title: '04 / SHOP FLOOR & MANNEQUINS',
      desc: 'Styling focal mannequins, window display curation, and eye-level hero units.',
      detail: 'Mannequins are dressed in complete cross-category looks (shirt + chinos + accessories) to inspire basket building and communicate collection themes.',
      icon: Store
    },
    {
      id: 'customerflow',
      title: '05 / CUSTOMER FLOW & NAVIGATION',
      desc: 'Optimizing walk-in pathways, dwell zones, fitting room transitions, and cash counter focal points.',
      detail: 'Sightlines from entrance to back-of-store are kept open. Focal presentation tables create natural pause points for tactile exploration.',
      icon: ArrowRight
    },
    {
      id: 'sale',
      title: '06 / EOSS & PROMOTION SETUP',
      desc: 'Rapid transition of floor into high-density sale format with clear size-wise grids.',
      detail: 'EOSS requires converting display storytelling into dense, size-categorised shopping bays with clear offer communication and rapid replenishment capability.',
      icon: Sparkles
    },
    {
      id: 'experience',
      title: '07 / RETAIL EXPERIENCE',
      desc: 'The complete synthesis of space, visual standards, product accessibility, and brand prestige.',
      detail: 'Every operational touchpoint works in synergy: from inventory precision behind the scenes to seamless customer discovery on the shop floor.',
      icon: CheckCircle2
    }
  ];

  const activeLocation = BEAR_HOUSE_LOCATIONS_DATA.find((l) => l.id === activeLocationId) || BEAR_HOUSE_LOCATIONS_DATA[0];

  return (
    <div className="space-y-16">
      {/* Overview Context Banner */}
      <div className="p-8 bg-[#161616] border border-[#262626] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#262626]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#96938D] font-semibold flex items-center gap-1.5">
            <Store className="w-4 h-4" />
            46-DAY INDUSTRY INTERNSHIP • HYDERABAD & BANGALORE
          </span>
          <span className="text-[10px] font-mono uppercase bg-[#0D0D0D] text-[#F5F4F0] px-2.5 py-1 border border-[#262626]">
            EBO + SIS FORMATS
          </span>
        </div>
        <p className="font-serif text-2xl sm:text-3xl text-[#F5F4F0] font-normal leading-snug">
          "Understanding how merchandise moves from stockroom to shop floor — and how space, presentation and organisation shape the retail experience."
        </p>
        <p className="text-xs sm:text-sm text-[#96938D] leading-relaxed font-sans">
          Working across 7 high-traffic retail stores in Hyderabad and Bangalore, Prashanthi’s internship immersed her in end-to-end visual merchandising operations, 2 New Store Openings (NSO), and complete End of Season Sale (EOSS) transitions.
        </p>
      </div>

      {/* 1. Interactive Retail Journey Animation / Stepper */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#262626]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#96938D] font-semibold block">
              01 / OPERATIONAL ARCHITECTURE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4F0] font-normal mt-0.5">
              The Journey from Stockroom to Sales Floor
            </h3>
          </div>
          <span className="text-xs font-mono text-[#96938D]">
            STAGE {activeStep + 1} OF {journeySteps.length}
          </span>
        </div>

        {/* Step Navigation Pill Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-3 text-left transition-colors flex flex-col justify-between space-y-2 border ${
                  isActive
                    ? 'bg-[#F5F4F0] text-[#0D0D0D] border-[#F5F4F0]'
                    : 'bg-[#161616] text-[#96938D] border-[#262626] hover:text-[#F5F4F0] hover:border-[#666666]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-[10px] font-semibold">0{idx + 1}</span>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider line-clamp-1">
                  {step.title.split('/')[1]?.trim() || step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Journey Stage Card */}
        <div className="p-8 bg-[#161616] border border-[#262626] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#96938D]">
              <span className="w-2 h-2 rounded-full bg-[#F5F4F0]" />
              <span>STAGE {activeStep + 1} EXECUTION FRAMEWORK</span>
            </div>
            <h4 className="font-serif text-3xl text-[#F5F4F0] font-normal">
              {journeySteps[activeStep].title}
            </h4>
            <p className="text-sm text-[#F5F4F0] font-medium leading-relaxed">
              {journeySteps[activeStep].desc}
            </p>
            <p className="text-xs text-[#96938D] leading-relaxed font-sans pt-2 border-t border-[#262626]">
              {journeySteps[activeStep].detail}
            </p>
          </div>

          <div className="lg:col-span-4 p-6 bg-[#0D0D0D] border border-[#262626] space-y-3">
            <span className="font-mono text-[10px] uppercase text-[#96938D] block tracking-wider font-semibold">
              CORE METRIC FOCUS
            </span>
            <div className="space-y-2 text-xs font-mono text-[#F5F4F0]">
              <div className="flex items-center justify-between border-b border-[#262626] pb-1.5">
                <span className="text-[#96938D]">Execution Standard:</span>
                <span>VM Audit Compliance</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#262626] pb-1.5">
                <span className="text-[#96938D]">Visual Consistency:</span>
                <span>100% Floor Adherence</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#96938D]">Replenishment:</span>
                <span>Continuous Velocity</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 7 Store Footprint & Retail Format Exploration */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#262626]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#96938D] font-semibold block">
              02 / RETAIL FOOTPRINT (7 STORES)
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4F0] font-normal mt-0.5">
              Multi-Location Store Exposure
            </h3>
          </div>
          <span className="text-xs font-mono text-[#96938D]">
            HYDERABAD & BANGALORE
          </span>
        </div>

        {/* Location Selector */}
        <div className="flex flex-wrap gap-2">
          {BEAR_HOUSE_LOCATIONS_DATA.map((loc) => {
            const isSelected = activeLocationId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-[#F5F4F0] text-[#0D0D0D] border-[#F5F4F0] font-semibold'
                    : 'bg-[#161616] text-[#96938D] border-[#262626] hover:text-[#F5F4F0]'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{loc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Store Details Card */}
        <div className="p-8 bg-[#161616] border border-[#262626] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#96938D] block font-semibold">
              STORE FORMAT & CITY
            </span>
            <h4 className="font-serif text-3xl text-[#F5F4F0] font-normal">
              {activeLocation.name}
            </h4>
            <p className="text-xs font-mono text-[#96938D]">
              {activeLocation.type} • {activeLocation.city}
            </p>
          </div>

          <div className="md:col-span-7 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#96938D] block font-semibold">
              DOCUMENTED STORE RESPONSIBILITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeLocation.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#0D0D0D] border border-[#262626] flex items-center gap-2 text-xs font-mono text-[#F5F4F0]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F5F4F0] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Dive: EOSS vs NSO Execution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* EOSS Breakdown */}
        <div className="p-8 bg-[#161616] border border-[#262626] space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F4F0]">
              END OF SEASON SALE (EOSS)
            </span>
            <span className="text-[10px] font-mono text-[#96938D] uppercase bg-[#0D0D0D] px-2 py-0.5 border border-[#262626]">
              AMB MALL & LAKESHORE
            </span>
          </div>

          <div className="space-y-3 text-xs font-sans text-[#96938D] leading-relaxed">
            <p>
              <strong className="text-[#F5F4F0] font-mono">Warehouse → Stockroom → Sales Floor → Sale Setup:</strong> Executed end-to-end inventory movement, tag verification, and pricing updates.
            </p>
            <p>
              <strong className="text-[#F5F4F0] font-mono">Amb Mall Shorts Wall:</strong> Curated high-density category display wall maximizing visibility and SKU access during peak discount footfall.
            </p>
            <p>
              <strong className="text-[#F5F4F0] font-mono">Lakeshore Mall Size Grid:</strong> Organised size-wise fixture arrays (S, M, L, XL, XXL) across folding tables and hanging rails to accelerate customer decision-making.
            </p>
          </div>

          <div className="p-4 bg-[#0D0D0D] border border-[#262626] flex items-center justify-between text-xs font-mono text-[#96938D]">
            <span>Primary Focus:</span>
            <span className="text-[#F5F4F0]">Stock Segregation & Rapid Restocking</span>
          </div>
        </div>

        {/* NSO Breakdown */}
        <div className="p-8 bg-[#161616] border border-[#262626] space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F4F0]">
              NEW STORE OPENINGS (NSO)
            </span>
            <span className="text-[10px] font-mono text-[#96938D] uppercase bg-[#0D0D0D] px-2 py-0.5 border border-[#262626]">
              2 STORES EXECUTED
            </span>
          </div>

          <div className="space-y-3 text-xs font-sans text-[#96938D] leading-relaxed">
            <p>
              <strong className="text-[#F5F4F0] font-mono">Himayath Nagar:</strong> Initial floor layout planning, fixture positioning, focal wall styling, and opening merchandise stock distribution.
            </p>
            <p>
              <strong className="text-[#F5F4F0] font-mono">Tolichowki:</strong> New store visual floor choreography, window display setup, brand asset placement, and retail team alignment.
            </p>
            <p>
              <strong className="text-[#F5F4F0] font-mono">Cross-Functional Team Collaboration:</strong> Coordinated directly with head VM designers, regional store managers, and visual associates.
            </p>
          </div>

          <div className="p-4 bg-[#0D0D0D] border border-[#262626] flex items-center justify-between text-xs font-mono text-[#96938D]">
            <span>Primary Focus:</span>
            <span className="text-[#F5F4F0]">Brand Standards & Opening Day Readiness</span>
          </div>
        </div>
      </div>

      {/* 4. Final Takeaway */}
      <div className="p-6 bg-[#0D0D0D] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#161616] border border-[#262626] flex items-center justify-center text-[#F5F4F0] shrink-0 font-serif font-bold">
            TBH
          </div>
          <span className="text-[#96938D]">
            Core Competencies: Visual Merchandising, Store Audits, Product Presentation, EOSS Execution, NSO Management.
          </span>
        </div>
        <span className="text-[#F5F4F0] uppercase tracking-widest font-semibold shrink-0">
          RETAIL EXECUTION VERIFIED
        </span>
      </div>
    </div>
  );
};

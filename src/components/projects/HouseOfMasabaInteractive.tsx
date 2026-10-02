import React, { useState } from 'react';
import { PieChart } from 'lucide-react';

export const HouseOfMasabaInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'range' | 'matrix' | 'vm' | 'pipeline'>('range');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    {
      name: 'Contemporary Fusion',
      styles: 32,
      skus: 288,
      margin: '55-60%',
      priceBand: '₹8,500 – ₹18,000',
      description: 'Modern silhouettes featuring iconic signature cow, palm, and motif prints. Tailored capes, dhoti skirts, and structured tunics.',
      sizeRatio: 'XS: 10% | S: 30% | M: 35% | L: 20% | XL: 5%'
    },
    {
      name: 'Festive & Occasion',
      styles: 26,
      skus: 234,
      margin: '50-55%',
      priceBand: '₹22,000 – ₹65,000',
      description: 'Embellished foil prints, metallic embroideries, and structured lehengas blending traditional grandeur with quirky contemporary drama.',
      sizeRatio: 'S: 25% | M: 40% | L: 25% | XL: 10%'
    },
    {
      name: 'Pret / Ready-to-Wear',
      styles: 28,
      skus: 252,
      margin: '60%',
      priceBand: '₹4,500 – ₹11,000',
      description: 'High-rotation everyday statement cottons, kaftans, printed co-ord sets, and relaxed work-to-dinner silhouettes.',
      sizeRatio: 'XS: 15% | S: 35% | M: 30% | L: 15% | XL: 5%'
    },
    {
      name: 'Resort & Destination',
      styles: 14,
      skus: 126,
      margin: '58%',
      priceBand: '₹7,500 – ₹16,500',
      description: 'Breezy organza wraps, resort maxi dresses, swim coverups, and vibrant holiday statement pieces.',
      sizeRatio: 'S: 30% | M: 40% | L: 20% | XL: 10%'
    },
    {
      name: 'Accessories & Beauty',
      styles: 12,
      skus: 108,
      margin: '65%',
      priceBand: '₹1,200 – ₹5,500',
      description: 'Impulse add-ons including printed silk scarves, belts, tech accessories, and signature beauty fragrances.',
      sizeRatio: 'Free Size / Standard 1:1 Stocking'
    }
  ];

  const vmHierarchy = [
    {
      step: '01',
      zone: 'FAÇADE & WINDOW STATEMENT',
      principle: 'Dramatic Brand Theater',
      detail: 'Hero mannequin clusters wearing head-to-toe high-contrast signature motifs, paired with bold geometric props to capture high street and mall footfall.'
    },
    {
      step: '02',
      zone: 'ENTRANCE IMPACT FOCAL (HOT SPOT)',
      principle: 'Immediate Capsule Immersion',
      detail: 'First 10-foot greeting zone displaying the latest seasonal drop. Mannequins grouped in color families with complementary table displays.'
    },
    {
      step: '03',
      zone: 'CATEGORY FEATURE WALLS',
      principle: 'Storytelling & Silhouette Hierarchy',
      detail: 'Walls balanced by 1:3 ratio of face-outs to side-hangs. Highlighting key print motifs at eye-level with color transitions from light to saturated.'
    },
    {
      step: '04',
      zone: 'CENTRAL FIXTURES & NESTING TABLES',
      principle: 'Tactile Cross-Merchandising',
      detail: 'Folded pret separates paired with matching scarves, jewellery, and fragrance testers to encourage immediate impulse add-on purchasing.'
    },
    {
      step: '05',
      zone: 'FITTING ROOM & CASH WRAP',
      principle: 'Final Conversion & Loyalty Hook',
      detail: 'Flattering amber lighting in trial rooms with spacious mirrors. Point-of-sale display of mini fragrances and lifestyle accessories.'
    }
  ];

  const pipelineStages = [
    { name: 'Trend & Archive Research', time: 'Weeks 1-2', focus: 'Analyzing heritage motifs, cultural trend shifts, and competitor benchmarking.' },
    { name: 'Range Planning & SKU Architecture', time: 'Weeks 3-4', focus: 'Defining style-depth, colorways, 1,008 SKU targets, and margin thresholds (40-60%).' },
    { name: 'Textile & Print Sampling', time: 'Weeks 5-7', focus: 'Color strike-offs, fabric drape tests, and digital screen proofing.' },
    { name: 'Fit Prototype & Costing Finalization', time: 'Weeks 8-9', focus: 'Sample fit approval, bill-of-materials calculation, and retail pricing sign-off.' },
    { name: 'Production & VM Planogram Delivery', time: 'Weeks 10-12', focus: 'Manufacturing execution, visual merchandising guideline creation, and store shipment.' }
  ];

  return (
    <div className="space-y-12 text-[#0D0D0D]">
      {/* Header */}
      <div className="border-b border-[#0D0D0D]/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
            PROJECT 03 // MERCHANDISE PLANNING & STRATEGY
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase border border-[#0D0D0D]/20 bg-[#F5F4F0] text-[#0D0D0D]">
            <PieChart className="w-3 h-3 text-[#0D0D0D]" />
            1,008 SKUs • 5 Categories • 40–60% Target Margins
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#0D0D0D]">
          Bridging Creative Identity with Quantitative Retail Discipline
        </h3>
        <p className="mt-2 text-sm text-[#666666] max-w-3xl leading-relaxed">
          House of Masaba is renowned for bold, unconventional Indian prints. This case study demonstrates how strong brand codes are translated into rigorous retail range planning, size-ratio matrices, and commercial floor presentation.
        </p>
      </div>

      {/* KPI Overview Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#F5F4F0] border border-[#0D0D0D]/10">
        <div>
          <div className="font-mono text-[10px] tracking-widest text-[#666666] uppercase">TOTAL CATEGORIES</div>
          <div className="font-serif text-2xl md:text-3xl text-[#0D0D0D] font-light mt-1">5 Lines</div>
          <div className="text-[11px] text-[#666666] mt-0.5">Pret to Festive Luxury</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-widest text-[#666666] uppercase">STYLE BREADTH</div>
          <div className="font-serif text-2xl md:text-3xl text-[#0D0D0D] font-light mt-1">112 Styles</div>
          <div className="text-[11px] text-[#666666] mt-0.5">Curated silhouettes</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-widest text-[#666666] uppercase">SKU ARCHITECTURE</div>
          <div className="font-serif text-2xl md:text-3xl text-[#0D0D0D] font-light mt-1">1,008 SKUs</div>
          <div className="text-[11px] text-[#666666] mt-0.5">Across size & color grid</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-widest text-[#666666] uppercase">GROSS MARGIN TARGET</div>
          <div className="font-serif text-2xl md:text-3xl text-[#0D0D0D] font-light mt-1">40% – 60%</div>
          <div className="text-[11px] text-[#666666] mt-0.5">Commercial health baseline</div>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap border-b border-[#0D0D0D]/10 gap-2">
        <button
          onClick={() => setActiveTab('range')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'range'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          01. Category & SKU Breakdown
        </button>
        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'matrix'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          02. Size-Ratio Strategy
        </button>
        <button
          onClick={() => setActiveTab('vm')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'vm'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          03. VM Spatial Hierarchy
        </button>
        <button
          onClick={() => setActiveTab('pipeline')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'pipeline'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          04. Product Development Pipeline
        </button>
      </div>

      {/* Tab 1: Category & SKU Breakdown */}
      {activeTab === 'range' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`p-4 text-left border transition-all duration-200 ${
                  selectedCategory === idx
                    ? 'bg-[#0D0D0D] text-[#F5F4F0] border-[#0D0D0D]'
                    : 'bg-white text-[#0D0D0D] border-[#0D0D0D]/10 hover:border-[#0D0D0D]/40'
                }`}
              >
                <div className="font-mono text-[10px] tracking-widest opacity-60">CAT 0{idx + 1}</div>
                <div className="font-serif text-sm font-medium mt-1 mb-2">{cat.name}</div>
                <div className="text-xs opacity-80 font-mono">{cat.styles} Styles // {cat.skus} SKUs</div>
              </button>
            ))}
          </div>

          <div className="bg-[#F5F4F0] p-6 md:p-8 border border-[#0D0D0D]/10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0D0D0D]/10 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
                  CATEGORY DEEP DIVE // RANGE PLAN
                </span>
                <h4 className="font-serif text-2xl font-normal text-[#0D0D0D] mt-1">
                  {categories[selectedCategory].name}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 font-mono text-xs bg-white border border-[#0D0D0D]/10">
                  Target Margin: {categories[selectedCategory].margin}
                </span>
                <span className="px-3 py-1 font-mono text-xs bg-[#0D0D0D] text-white">
                  Price: {categories[selectedCategory].priceBand}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#444444] leading-relaxed mb-6">
              {categories[selectedCategory].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 border border-[#0D0D0D]/10">
                <div className="font-mono text-[10px] text-[#666666] uppercase">Style Count</div>
                <div className="font-serif text-xl text-[#0D0D0D] mt-1">{categories[selectedCategory].styles} Unique Silhouettes</div>
              </div>
              <div className="bg-white p-4 border border-[#0D0D0D]/10">
                <div className="font-mono text-[10px] text-[#666666] uppercase">SKU Depth</div>
                <div className="font-serif text-xl text-[#0D0D0D] mt-1">{categories[selectedCategory].skus} Commercial SKUs</div>
              </div>
              <div className="bg-white p-4 border border-[#0D0D0D]/10">
                <div className="font-mono text-[10px] text-[#666666] uppercase">Size Distribution Curve</div>
                <div className="font-mono text-xs text-[#0D0D0D] mt-2">{categories[selectedCategory].sizeRatio}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Size-Ratio Strategy */}
      {activeTab === 'matrix' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 bg-[#F5F4F0] border border-[#0D0D0D]/10">
            <h4 className="font-serif text-xl text-[#0D0D0D] mb-2">Indian Market Size-Curve Allocation</h4>
            <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
              Standard Western size curves fail in Indian premium retail. Our analysis models higher volume concentration around sizes M and L to minimize post-season broken size inventory risk.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {[
              { size: 'XS / 34', share: '10%', role: 'Niche / Petite Demand', risk: 'Low stock depth to prevent residue' },
              { size: 'S / 36', share: '30%', role: 'Core Metros & Pret', risk: 'High velocity turnover' },
              { size: 'M / 38', share: '35%', role: 'Volume Driver', risk: 'Highest stock allocation across stores' },
              { size: 'L / 40', share: '20%', role: 'Occasion & Comfort Fit', risk: 'Steady replenishment cadence' },
              { size: 'XL+ / 42', share: '5%', role: 'Selective Allocation', risk: 'Targeted flagship availability' }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-4 border border-[#0D0D0D]/10 text-center flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs text-[#666666]">{s.size}</div>
                  <div className="font-serif text-3xl font-light text-[#0D0D0D] my-2">{s.share}</div>
                  <div className="font-medium text-xs text-[#0D0D0D]">{s.role}</div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#0D0D0D]/10 text-[10px] text-[#666666] font-mono">
                  {s.risk}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: VM Spatial Hierarchy */}
      {activeTab === 'vm' && (
        <div className="space-y-4 animate-fadeIn">
          {vmHierarchy.map((vm, idx) => (
            <div key={idx} className="p-5 bg-white border border-[#0D0D0D]/10 hover:border-[#0D0D0D] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#0D0D0D] bg-[#F5F4F0] px-3 py-1.5 border border-[#0D0D0D]/10">
                  {vm.step}
                </span>
                <div>
                  <h5 className="font-serif text-base font-medium text-[#0D0D0D]">{vm.zone}</h5>
                  <div className="font-mono text-xs text-[#666666] uppercase tracking-wider mt-0.5">{vm.principle}</div>
                  <p className="text-xs text-[#444444] mt-2 leading-relaxed max-w-2xl">{vm.detail}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#0D0D0D] shrink-0 border-l md:border-l-0 md:border-t-0 pl-4 md:pl-0 border-[#0D0D0D]/10">
                Visual Flow Phase {idx + 1}/5
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Pipeline */}
      {activeTab === 'pipeline' && (
        <div className="space-y-3 animate-fadeIn">
          {pipelineStages.map((pipe, idx) => (
            <div key={idx} className="p-4 bg-[#F5F4F0] border border-[#0D0D0D]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#0D0D0D] text-white font-mono text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <div className="font-serif text-base text-[#0D0D0D]">{pipe.name}</div>
                  <div className="text-xs text-[#555555] mt-0.5">{pipe.focus}</div>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 bg-white border border-[#0D0D0D]/10 shrink-0 self-start sm:self-auto">
                {pipe.time}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Compass, Eye, CheckSquare, Store } from 'lucide-react';

export const PointOfViewSection: React.FC = () => {
  const [activeWord, setActiveWord] = useState<'SEE' | 'SELECT' | 'PRESENT'>('SEE');

  const interactivePillars = {
    SEE: {
      word: 'SEE',
      sublabel: '01 / OBSERVATION & RESEARCH',
      headline: 'Decoding Cultural Shifts & Consumer Behaviour',
      description: 'Understanding what people notice before they decide to buy. Observing physical dwell patterns, fit hesitation, and evolving wardrobe rituals.',
      tags: ['Trend Research', 'Consumer Studies', 'Store Audits', 'Cultural Signals'],
      lensText: 'Observing the human context behind every purchase decision.',
      moodTheme: 'Field observation, human movement, and retail spatial dynamics.'
    },
    SELECT: {
      word: 'SELECT',
      sublabel: '02 / MERCHANDISE PLANNING & BUYING',
      headline: 'Disciplined Assortment & Range Architecture',
      description: 'Balancing aesthetic vision with quantitative retail discipline. Crafting SKU breadth, category density, and size curves that protect gross margin health.',
      tags: ['Range Planning', 'Assortment Architecture', 'Size-Ratio Curves', 'Margin Math (40–60%)'],
      lensText: 'Selecting the right depth, color balance, and commercial velocity.',
      moodTheme: 'Category density, SKU architecture, and inventory planning.'
    },
    PRESENT: {
      word: 'PRESENT',
      sublabel: '03 / VISUAL MERCHANDISING & RETAIL',
      headline: 'Elevating Brand Prestige through Spatial Design',
      description: 'Translating collections into high-impact store presentation. From eye-level fixture zoning and mannequin styling to rapid EOSS sale transitions.',
      tags: ['Visual Merchandising', 'Fixture Standards', 'Mannequin Styling', 'NSO Setup'],
      lensText: 'Transforming commercial spaces into compelling aesthetic universes.',
      moodTheme: 'Focal hotspots, planograms, and window storytelling.'
    }
  };

  const current = interactivePillars[activeWord];

  return (
    <section id="pov" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E5E1D8] bg-[#F4F1EB] text-[#151515]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E1D8]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#77736D] uppercase font-semibold">
            <span className="font-bold text-[#151515] bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E1D8]">
              02 / 10
            </span>
            <Compass className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>THE POINT OF VIEW</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#151515] tracking-tight">
            Creative Eye × Commercial Mind
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#77736D] leading-relaxed">
          Bridging visual sensitivity with retail strategy. In fashion business, creative curation and merchandise planning are inseparable.
        </p>
      </div>

      {/* Main Big Editorial Statement */}
      <div className="py-14 border-b border-[#E5E1D8] space-y-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77736D] font-semibold block">
          CORE MANIFESTO
        </span>
        <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#151515] leading-[0.95] max-w-5xl">
          FASHION
          <span className="block font-serif italic text-[#77736D] font-light">
            ISN'T JUST WHAT SELLS.
          </span>
        </h3>
        <p className="text-base sm:text-lg text-[#555555] max-w-3xl leading-relaxed font-sans font-light pt-2">
          It is how product, presentation, and perception converge. From retail execution across 7 stores at The Bear House to strategic range planning for House of Masaba, my approach connects what the consumer sees with the business systems behind it.
        </p>
      </div>

      {/* THREE INTERACTIVE WORDS: SEE / SELECT / PRESENT */}
      <div className="pt-14 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E1D8] pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#77736D] font-semibold">
            INTERACTIVE PERSPECTIVE PILLARS // HOVER OR TAP TO EXPLORE
          </span>
          <span className="text-[11px] font-mono text-[#5A2427]">
            Active Lens: {current.sublabel}
          </span>
        </div>

        {/* 3 Giant Word Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['SEE', 'SELECT', 'PRESENT'] as const).map((word, idx) => {
            const isSelected = activeWord === word;
            return (
              <button
                key={word}
                onMouseEnter={() => setActiveWord(word)}
                onClick={() => setActiveWord(word)}
                className={`p-6 sm:p-8 text-left border transition-all duration-300 relative group ${
                  isSelected
                    ? 'bg-[#151515] text-[#FAF9F6] border-[#151515] shadow-lg'
                    : 'bg-[#FAF9F6] text-[#151515] border-[#E5E1D8] hover:border-[#151515]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-4">
                  <span className={`tracking-widest ${isSelected ? 'text-[#B7B1A8]' : 'text-[#77736D]'}`}>
                    PHASE 0{idx + 1}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#5A2427]" />}
                </div>

                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight">
                  {word}
                </div>

                <p className={`text-xs mt-3 line-clamp-2 leading-relaxed font-sans ${
                  isSelected ? 'text-[#B7B1A8]' : 'text-[#77736D]'
                }`}>
                  {interactivePillars[word].headline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Contextual Reveal Card */}
        <div className="p-8 sm:p-10 bg-[#FAF9F6] border border-[#E5E1D8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500 animate-fadeIn">
          {/* Left Text Detail (Cols 7) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5A2427] uppercase tracking-widest font-semibold">
              <span>{current.sublabel}</span>
            </div>

            <h4 className="font-serif text-3xl sm:text-4xl text-[#151515] font-normal leading-snug">
              {current.headline}
            </h4>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-sans font-light">
              {current.description}
            </p>

            <div className="p-4 bg-[#F4F1EB] border-l-2 border-[#5A2427] text-xs font-serif italic text-[#151515]">
              "{current.lensText}"
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono text-[#151515] bg-white border border-[#E5E1D8] px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Visual Frame (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] bg-[#151515] text-[#FAF9F6] border border-[#282828] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#B7B1A8] border-b border-[#282828] pb-2.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427]" />
                  EDITORIAL FRAME
                </span>
                <span>PB • {activeWord}</span>
              </div>

              <div className="text-center my-auto py-4">
                <div className="w-12 h-12 mx-auto border border-[#282828] flex items-center justify-center text-xl font-serif mb-2">
                  {activeWord === 'SEE' && <Eye className="w-5 h-5 text-[#B7B1A8]" />}
                  {activeWord === 'SELECT' && <CheckSquare className="w-5 h-5 text-[#B7B1A8]" />}
                  {activeWord === 'PRESENT' && <Store className="w-5 h-5 text-[#B7B1A8]" />}
                </div>
                <div className="font-serif text-2xl font-normal text-[#FAF9F6]">
                  {activeWord}
                </div>
                <p className="text-[11px] text-[#B7B1A8] italic mt-1 font-serif">
                  {current.moodTheme}
                </p>
              </div>

              <div className="text-[9px] font-mono text-[#77736D] border-t border-[#282828] pt-2 flex justify-between">
                <span>CURATED VISUAL</span>
                <span>ORIGINAL ARCHIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

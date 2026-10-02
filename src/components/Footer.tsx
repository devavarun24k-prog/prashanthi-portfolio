import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-[#FAF9F6] border-t border-[#282828] pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#282828]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FAF9F6] text-[#151515] flex items-center justify-center font-serif font-medium text-sm">
                PB
              </div>
              <span className="font-serif text-2xl font-normal text-[#FAF9F6] tracking-wide">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <p className="font-mono text-xs text-[#B7B1A8] tracking-widest uppercase">
              Buying & Merchandising • Retail Strategy • Visual Merchandising
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2.5 bg-[#1C1C1C] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#151515] transition-colors border border-[#282828]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#77736D]">
          <div>
            <span>
              {CURRENT_YEAR} {PERSONAL_DATA.name} — MBA Candidate, Pearl Academy Bangalore.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Editorial Edition</span>
            <span>•</span>
            <span className="text-[#FAF9F6]">Creative Eye × Business Mind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

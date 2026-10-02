import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-[#FAF9F6] border-t border-[#262626] pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#262626]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#FAF9F6] text-[#121212] flex items-center justify-center font-serif font-semibold text-sm">
                PB
              </div>
              <span className="font-serif text-2xl font-normal text-[#FAF9F6] tracking-wide">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="font-mono text-xs text-[#9C7A4A] tracking-widest uppercase">
              Buying & Merchandising • Retail • Visual Merchandising
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2.5 bg-[#1F1F1F] text-[#FAF9F6] hover:bg-[#9C7A4A] transition-all rounded-sm border border-[#333333]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#FAF9F6]/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#9C7A4A]" />
            <span>
              {CURRENT_YEAR} {PERSONAL_INFO.name}. Pearl Academy, Bangalore.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Editorial Portfolio V1.0</span>
            <span>•</span>
            <span className="text-[#9C7A4A]">Strict CV Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

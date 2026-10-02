import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#110D0B] text-[#F3EFE7] border-t border-[#261F1A] pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#261F1A]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#F3EFE7] text-[#110D0B] flex items-center justify-center font-serif font-semibold text-sm">
                PB
              </div>
              <span className="font-serif text-2xl font-normal text-[#F3EFE7] tracking-wide">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <p className="font-mono text-xs text-[#A99578] tracking-widest uppercase">
              Buying & Merchandising • Retail • Visual Merchandising • Branding • Marketing
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2.5 bg-[#17120F] text-[#F3EFE7] hover:bg-[#5A2028] hover:text-[#F3EFE7] transition-all rounded-sm border border-[#2E2620]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#C8C0B5]/70">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#5A2028]" />
            <span>
              {CURRENT_YEAR} {PERSONAL_DATA.name} — MBA Fashion & Lifestyle Business Management, Pearl Academy, Bangalore.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Editorial Portfolio V2.0</span>
            <span>•</span>
            <span className="text-[#A99578]">Strategic • Curious • Contemporary</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

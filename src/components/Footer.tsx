import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-[#F5F4F0] border-t border-[#262626] pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#262626]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F5F4F0] text-[#0D0D0D] flex items-center justify-center font-serif font-semibold text-sm">
                PB
              </div>
              <span className="font-serif text-2xl font-normal text-[#F5F4F0] tracking-wide">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <p className="font-mono text-xs text-[#96938D] tracking-widest uppercase">
              Buying & Merchandising • Retail • Visual Merchandising • Branding • Marketing
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2.5 bg-[#161616] text-[#F5F4F0] hover:bg-[#F5F4F0] hover:text-[#0D0D0D] transition-colors border border-[#262626]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#96938D]">
          <div>
            <span>
              {CURRENT_YEAR} {PERSONAL_DATA.name} — MBA Fashion & Lifestyle Business Management, Pearl Academy, Bangalore.
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Editorial Portfolio V2.0</span>
            <span>•</span>
            <span className="text-[#F5F4F0]">Strategic • Curious • Contemporary</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

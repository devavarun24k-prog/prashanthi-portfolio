import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5EEE3] text-[#2C2421] border-t border-[#E2D5C3] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="font-serif text-xl font-normal">
            {PERSONAL_DATA.name}
          </span>
          <p className="text-xs text-[#8F8177] font-sans">
            MBA Candidate, Fashion & Lifestyle Business Management • Pearl Academy Bangalore
          </p>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-[#8F8177] font-sans">
            © {CURRENT_YEAR} Prashanthi B.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-full border border-[#E2D5C3] bg-[#FAF6EE] hover:border-[#722F37] hover:text-[#722F37] transition-colors shadow-sm"
          >
            <ArrowUp className="w-4 h-4 text-[#2C2421]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

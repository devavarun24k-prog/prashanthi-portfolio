import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0A09] text-[#F4F0E8] border-t border-[#262320] py-14 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-1 text-center md:text-left">
          <span className="font-serif text-2xl font-normal text-[#F4F0E8]">
            {PERSONAL_DATA.name}
          </span>
          <p className="text-xs text-[#8E8278] font-mono uppercase tracking-wider">
            MBA · FASHION & LIFESTYLE BUSINESS MANAGEMENT · PEARL ACADEMY BANGALORE
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-[#8E8278]">
          <a href="#work" className="hover:text-[#722F37] transition-colors">Work</a>
          <a href="#bear-house" className="hover:text-[#722F37] transition-colors">The Bear House</a>
          <a href="#experience" className="hover:text-[#722F37] transition-colors">Experience</a>
          <a href="#about" className="hover:text-[#722F37] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#722F37] transition-colors">Contact</a>
          <a href={PERSONAL_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#722F37] hover:text-[#F4F0E8] transition-colors">LinkedIn</a>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-[#8E8278] font-mono">
            © {CURRENT_YEAR} Prashanthi.B
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full border border-[#262320] bg-[#141211] text-[#F4F0E8] hover:border-[#722F37] hover:text-[#722F37] transition-all shadow-md"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

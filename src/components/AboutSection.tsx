import React from 'react';
import { User, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262626] bg-[#0D0D0D] text-[#F5F4F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#262626]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#96938D] uppercase font-semibold">
            <User className="w-4 h-4" />
            <span>08 / PROFILE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F5F4F0] tracking-tight">
            About Prashanthi B.
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#96938D] leading-relaxed">
          Focused on Buying & Merchandising, Retail, and Visual Merchandising.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-14 items-center">
        {/* Left Column: Portrait Frame (Cols 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-[3/4] bg-[#161616] text-[#F5F4F0] border border-[#262626] p-8 flex flex-col justify-between">
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#96938D] border-b border-[#262626] pb-3">
              <span>PORTRAIT PLACEHOLDER</span>
              <span>PB • PROFILE</span>
            </div>

            <div className="relative z-10 text-center my-auto py-6">
              <div className="w-20 h-20 mx-auto border border-[#262626] bg-[#0D0D0D] flex items-center justify-center text-3xl font-serif text-[#F5F4F0] mb-4 group-hover:border-[#F5F4F0] transition-colors">
                PB
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#F5F4F0]">
                {PERSONAL_DATA.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#96938D] mt-1 font-medium">
                Fashion & Lifestyle Business
              </p>
              <p className="text-[11px] font-mono text-[#96938D] mt-2">
                Pearl Academy, Bangalore
              </p>
            </div>

            <div className="relative z-10 text-[10px] font-mono text-[#96938D] border-t border-[#262626] pt-3 flex justify-between">
              <span>BANGALORE</span>
              <span>2025–2027</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#96938D] font-semibold block">
              BACKGROUND & PHILOSOPHY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4F0] font-normal leading-snug">
              "Connecting creative visual presentation with structured merchandise planning and retail operations."
            </h3>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#96938D] leading-relaxed font-sans">
            <p>
              Prashanthi B is currently pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027), following her BBA from ICFAI University (2020–2023).
            </p>
            <p>
              Her professional experience includes a 46-day Visual Merchandising Internship at The Bear House across 4 retail locations, and a Social Media Marketing Internship at 3AM India.
            </p>
            <p>
              Her academic work includes visual merchandising and merchandise planning for House of Masaba, a retail and business case study on Nykaa Fashion, and fashion business newsletter consulting through Sutra Edit.
            </p>
          </div>

          {/* Understated CV Download Action */}
          <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#96938D]">
              <span>Academic and professional CV</span>
            </div>

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase px-5 py-3 bg-[#F5F4F0] text-[#0D0D0D] hover:bg-[#E8E7E3] transition-colors font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

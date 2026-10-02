import React from 'react';
import { User, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E5E1D8] bg-[#F4F1EB] text-[#151515]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E1D8]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#77736D] uppercase font-semibold">
            <span className="font-bold text-[#151515] bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E1D8]">
              09 / 10
            </span>
            <User className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>BIOGRAPHICAL PROFILE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#151515] tracking-tight">
            About Prashanthi B.
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#77736D] leading-relaxed">
          Blending visual sensitivity with quantitative retail discipline and merchandise strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 items-center">
        {/* Left Column: Portrait Frame (Cols 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative aspect-[4/5] bg-[#151515] text-[#FAF9F6] border border-[#282828] p-8 flex flex-col justify-between">
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#B7B1A8] border-b border-[#282828] pb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427]" />
                PORTRAIT AREA 02
              </span>
              <span>PB • PROFILE</span>
            </div>

            <div className="relative z-10 text-center my-auto py-6">
              <div className="w-20 h-20 mx-auto border border-[#282828] bg-[#1C1C1C] flex items-center justify-center text-3xl font-serif text-[#FAF9F6] mb-4">
                PB
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAF9F6]">
                {PERSONAL_DATA.name}
              </h3>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B7B1A8] mt-1 font-medium">
                Fashion & Lifestyle Business
              </p>
              <p className="text-[11px] font-mono text-[#77736D] mt-2">
                Pearl Academy, Bangalore
              </p>
            </div>

            <div className="relative z-10 text-[10px] font-mono text-[#77736D] border-t border-[#282828] pt-3 flex justify-between">
              <span>BANGALORE</span>
              <span>2025–2027</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative (Cols 7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#77736D] font-semibold block">
              BACKGROUND & PHILOSOPHY
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#151515] font-normal leading-snug">
              "Connecting creative visual presentation with structured merchandise planning and retail operations."
            </h3>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed font-sans font-light">
            <p>
              Prashanthi B is pursuing an MBA in Fashion & Lifestyle Business Management at Pearl Academy, Bangalore (2025–2027), having earned her BBA from ICFAI University (2020–2023).
            </p>
            <p>
              Her experience includes a 46-day Visual Merchandising Internship at The Bear House across 7 retail locations, where she worked on VM store audits, 2 New Store Openings (Himayath Nagar, Tolichowki), and large-scale End of Season Sale (EOSS) transitions.
            </p>
            <p>
              At 3AM India, she led digital brand communication, skincare ingredient research simplification, and creator seeding workflows. Her academic focus spans quantitative range planning, Indian market size curves, and luxury retail spatial dynamics.
            </p>
          </div>

          {/* Understated CV Download Action */}
          <div className="pt-4 border-t border-[#E5E1D8] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#77736D]">
              <span>Verified academic & professional credentials</span>
            </div>

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase px-5 py-3 bg-[#151515] text-[#FAF9F6] hover:bg-[#282828] transition-colors font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>REQUEST / DOWNLOAD CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

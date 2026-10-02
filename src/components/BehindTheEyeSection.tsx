import React, { useState } from 'react';
import { Eye, CheckCircle2 } from 'lucide-react';
import { BEHIND_THE_EYE_CRITERIA } from '../data/portfolioData';

export const BehindTheEyeSection: React.FC = () => {
  const [selectedCriteriaIndex, setSelectedCriteriaIndex] = useState(0);
  const active = BEHIND_THE_EYE_CRITERIA[selectedCriteriaIndex];

  return (
    <section id="eye" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#E5E1D8] bg-[#F4F1EB] text-[#151515]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E1D8]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#77736D] uppercase font-semibold">
            <span className="font-bold text-[#151515] bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E1D8]">
              05 / 10
            </span>
            <Eye className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>PRODUCT EVALUATION MATRIX</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#151515] tracking-tight">
            Behind the Eye
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#77736D] leading-relaxed">
          How a fashion buying and merchandising eye evaluates a garment before it enters a retail assortment.
        </p>
      </div>

      {/* 6 Dimensions Criteria Switcher */}
      <div className="pt-14 space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-[#E5E1D8] pb-6">
          {BEHIND_THE_EYE_CRITERIA.map((crit, idx) => {
            const isSelected = selectedCriteriaIndex === idx;
            return (
              <button
                key={crit.id}
                onClick={() => setSelectedCriteriaIndex(idx)}
                className={`p-4 text-left border transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#151515] text-[#FAF9F6] border-[#151515] shadow-md'
                    : 'bg-[#FAF9F6] text-[#77736D] border-[#E5E1D8] hover:border-[#151515] hover:text-[#151515]'
                }`}
              >
                <div className="text-[10px] font-mono tracking-widest opacity-60">
                  LENS 0{idx + 1}
                </div>
                <div className="font-serif text-lg font-normal mt-1 truncate">
                  {crit.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Evaluation Canvas */}
        <div className="p-8 sm:p-12 bg-[#FAF9F6] border border-[#E5E1D8] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fadeIn">
          {/* Left Text & Analytical Questions (Cols 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#5A2427] uppercase tracking-widest font-semibold">
                DIMENSION 0{selectedCriteriaIndex + 1} // {active.subtitle}
              </span>
            </div>

            <h3 className="font-serif text-4xl sm:text-5xl text-[#151515] font-normal leading-tight">
              {active.name}
            </h3>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-sans font-light">
              {active.description}
            </p>

            <div className="p-5 bg-[#F4F1EB] border-l-2 border-[#5A2427]">
              <div className="font-mono text-[10px] uppercase text-[#77736D] tracking-widest mb-1">
                CORE MERCHANDISING QUESTION:
              </div>
              <p className="font-serif text-lg italic text-[#151515]">
                "{active.lens}"
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs uppercase tracking-widest text-[#151515] font-semibold">
                Key Analytical Checkpoints:
              </div>
              <div className="space-y-2">
                {active.keyQuestions.map((q, qIdx) => (
                  <div key={qIdx} className="p-3 bg-white border border-[#E5E1D8] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5A2427] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#333333] leading-relaxed">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Editorial Spec Frame (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] bg-[#151515] text-[#FAF9F6] border border-[#282828] p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#B7B1A8] border-b border-[#282828] pb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427]" />
                  SPEC SHEET
                </span>
                <span>PB • MATRIX</span>
              </div>

              <div className="text-center my-auto py-6">
                <div className="w-16 h-16 mx-auto border border-[#282828] bg-[#1C1C1C] flex items-center justify-center text-2xl font-serif text-[#FAF9F6] mb-4">
                  0{selectedCriteriaIndex + 1}
                </div>
                <h4 className="font-serif text-3xl font-normal text-[#FAF9F6]">
                  {active.name}
                </h4>
                <p className="text-xs text-[#B7B1A8] font-mono uppercase tracking-widest mt-1">
                  {active.subtitle}
                </p>
              </div>

              <div className="text-[10px] font-mono text-[#77736D] border-t border-[#282828] pt-3 flex justify-between">
                <span>BUYING ASSESSMENT</span>
                <span className="text-[#FAF9F6]">ACTIVE CRITERIA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { X, ArrowUpRight, BookOpen, Compass, Lightbulb, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { EditorialPlaceholder } from './EditorialPlaceholder';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#110D0B]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F3EFE7] text-[#24201D] rounded-sm border border-[#C8C0B5] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F3EFE7]/95 backdrop-blur-md border-b border-[#C8C0B5]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest bg-[#17120F] text-[#F3EFE7] px-2.5 py-1 rounded-sm border border-[#5A2028]">
              CASE {project.number}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#5C544E]">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 text-[#24201D]/70 hover:text-[#24201D] hover:bg-[#E5DFD5] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Main Case Heading */}
          <div className="space-y-3 pb-6 border-b border-[#C8C0B5]">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A2028] font-semibold">
              {project.type}
            </span>
            <h3
              id="case-study-title"
              className="font-serif text-3xl sm:text-5xl font-normal text-[#24201D] tracking-tight leading-tight"
            >
              {project.title}
            </h3>
            <p className="font-serif text-lg sm:text-xl italic text-[#5C544E] max-w-2xl leading-relaxed">
              "{project.tagline}"
            </p>
          </div>

          {/* Hero Visual Area */}
          <div>
            <EditorialPlaceholder
              title={project.title}
              category={project.category}
              tag={project.placeholderMood.tag}
              theme={project.placeholderMood.theme}
              aspectRatio="aspect-[16/9]"
              themeMode="light"
            />
          </div>

          {/* Specialization Focus Areas */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#5A2028] font-semibold">
              CORE DOMAINS & METHODOLOGIES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3.5 bg-white border border-[#C8C0B5] rounded-sm text-xs font-mono text-[#24201D]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A2028] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Structured Case Study Framework Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#C8C0B5]">
            {/* 1. Context */}
            <div className="space-y-3 p-6 bg-[#EAE4DC] border border-[#C8C0B5] rounded-sm">
              <div className="flex items-center gap-2 text-[#5A2028] font-mono text-xs tracking-wider uppercase font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>01 / Context & Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C544E] italic font-serif">
                Case study details coming soon.
              </p>
            </div>

            {/* 2. Approach */}
            <div className="space-y-3 p-6 bg-[#EAE4DC] border border-[#C8C0B5] rounded-sm">
              <div className="flex items-center gap-2 text-[#5A2028] font-mono text-xs tracking-wider uppercase font-semibold">
                <Compass className="w-4 h-4" />
                <span>02 / Strategic Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C544E] italic font-serif">
                Methodology & analysis documentation in preparation.
              </p>
            </div>

            {/* 3. Insights */}
            <div className="space-y-3 p-6 bg-[#EAE4DC] border border-[#C8C0B5] rounded-sm">
              <div className="flex items-center gap-2 text-[#5A2028] font-mono text-xs tracking-wider uppercase font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>03 / Key Focus</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C544E] italic font-serif">
                Project analysis coming soon.
              </p>
            </div>

            {/* 4. Outcomes / Visuals */}
            <div className="space-y-3 p-6 bg-[#EAE4DC] border border-[#C8C0B5] rounded-sm">
              <div className="flex items-center gap-2 text-[#5A2028] font-mono text-xs tracking-wider uppercase font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>04 / Visuals & Deliverables</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C544E] italic font-serif">
                Original project visuals to be uploaded.
              </p>
            </div>
          </div>

          {/* Visual Showcase Note */}
          <div className="p-4 bg-[#17120F] text-[#F3EFE7] rounded-sm border border-[#2E2620] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5A2028]/40 flex items-center justify-center text-[#A99578] shrink-0">
                <ImageIcon className="w-4 h-4" />
              </div>
              <span className="text-xs font-sans text-[#F3EFE7]/85">
                Original project visuals, moodboards, and planning decks will be attached upon release.
              </span>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#A99578] hover:text-[#F3EFE7] transition-colors shrink-0"
            >
              <span>Back to Overview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

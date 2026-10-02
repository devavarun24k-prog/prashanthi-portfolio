import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

interface CaseStudyViewProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;

      const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
        onSelectProject(PROJECTS_DATA[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
        onSelectProject(PROJECTS_DATA[prevIndex]);
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F7F5F0] text-[#171717] rounded-2xl shadow-2xl border border-[#E8E6DF] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E8E6DF]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3158D4]">
              {project.number} / {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center border border-[#E8E6DF] rounded-full bg-white mr-2">
              <button
                onClick={() => onSelectProject(prevProject)}
                title={`Previous: ${prevProject.title}`}
                className="p-2 text-[#171717] hover:text-[#3158D4] transition-colors border-r border-[#E8E6DF]"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                title={`Next: ${nextProject.title}`}
                className="p-2 text-[#171717] hover:text-[#3158D4] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study"
              className="p-2 rounded-full border border-[#E8E6DF] bg-white text-[#171717] hover:bg-[#171717] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* Article Header */}
          <div className="space-y-4">
            <span className="text-xs font-sans font-semibold text-[#77736D] uppercase tracking-wider">
              {project.type}
            </span>
            <h2
              id="case-study-title"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#171717] font-normal leading-tight"
            >
              {project.title}
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-[#333333] italic leading-relaxed">
              "{project.subtitle}"
            </p>
          </div>

          {/* Large Hero Visual */}
          <ProjectImage
            src={project.imagePath}
            alt={project.title}
            title={project.title}
            category={project.category}
            accentBg={project.accentBg}
            accentColor={project.accentColor}
            aspectRatio="aspect-[16/9]"
            className="rounded-2xl"
          />

          {/* Overview & Key Facts Strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl text-[#171717] font-normal">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-sans">
                {project.fullOverview}
              </p>
            </div>

            <div className="md:col-span-5 p-6 rounded-2xl bg-white border border-[#E8E6DF] space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3158D4] block">
                Verified Highlights
              </span>
              <div className="space-y-3">
                {project.keyFacts.map((fact, idx) => (
                  <div key={idx} className="border-b border-[#E8E6DF] pb-2 last:border-b-0 last:pb-0">
                    <div className="text-xs text-[#77736D] font-sans">{fact.label}</div>
                    <div className="text-base font-semibold text-[#171717] font-sans">{fact.value}</div>
                    {fact.note && <div className="text-[11px] text-[#888888] font-sans">{fact.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The Challenge */}
          <div className="p-8 rounded-2xl bg-white border border-[#E8E6DF] space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3158D4] block">
              The Objective & Challenge
            </span>
            <p className="text-base text-[#333333] font-sans leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-[#171717] font-normal">
              Methodology & Execution
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E8E6DF] space-y-2"
                >
                  <span className="text-xs font-bold font-mono text-[#3158D4]">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xl text-[#171717] font-normal">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Outputs & Deliverables */}
          <div className="p-8 rounded-2xl bg-white border border-[#E8E6DF] space-y-4">
            <h3 className="font-serif text-2xl text-[#171717] font-normal">
              Outputs & Strategic Deliverables
            </h3>
            <div className="space-y-2.5">
              {project.outputs.map((out, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#333333] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#3158D4] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="p-8 rounded-2xl bg-[#DCE6F7] border border-[#CCD9EE] space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3158D4] block">
              Strategic Takeaway
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#171717] italic leading-relaxed">
              "{project.takeaway}"
            </p>
          </div>

          {/* Bottom Navigator */}
          <div className="pt-8 border-t border-[#E8E6DF] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto p-4 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#171717] transition-all text-left flex items-center gap-3 group"
            >
              <ChevronLeft className="w-4 h-4 text-[#3158D4]" />
              <div>
                <span className="text-[10px] uppercase text-[#77736D] block">Previous</span>
                <span className="font-serif text-base text-[#171717] group-hover:text-[#3158D4] transition-colors">{prevProject.title}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto p-4 rounded-xl bg-white border border-[#E8E6DF] hover:border-[#171717] transition-all text-right flex items-center justify-end gap-3 group"
            >
              <div>
                <span className="text-[10px] uppercase text-[#77736D] block">Next</span>
                <span className="font-serif text-base text-[#171717] group-hover:text-[#3158D4] transition-colors">{nextProject.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#3158D4]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

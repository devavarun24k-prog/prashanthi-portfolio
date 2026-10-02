import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, LayoutGrid } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA, MASABA_CATEGORIES } from '../data/portfolioData';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0B0A09] text-[#F4F0E8] rounded-2xl shadow-2xl border border-[#262320] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#722F37] font-mono">
              {project.number} / {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center border border-[#262320] rounded-full bg-[#141211] mr-2">
              <button
                onClick={() => onSelectProject(prevProject)}
                title={`Previous: ${prevProject.title}`}
                className="p-2 text-[#C8BFB2] hover:text-[#722F37] transition-colors border-r border-[#262320]"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                title={`Next: ${nextProject.title}`}
                className="p-2 text-[#C8BFB2] hover:text-[#722F37] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close case study"
              className="p-2 rounded-full border border-[#262320] bg-[#141211] text-[#F4F0E8] hover:bg-[#722F37] hover:text-[#F4F0E8] transition-all shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* Article Header */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-semibold text-[#8E8278] uppercase tracking-widest">
              {project.type}
            </span>
            <h2
              id="case-study-title"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E8] font-normal leading-tight"
            >
              {project.title}
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#C8BFB2] italic leading-relaxed">
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
            className="rounded-2xl shadow-xl"
          />

          {/* Overview & Key Facts Strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl text-[#F4F0E8] font-normal">
                Project Overview
              </h3>
              <p className="text-sm sm:text-base text-[#C8BFB2] leading-relaxed font-sans font-light">
                {project.fullOverview}
              </p>
            </div>

            <div className="md:col-span-5 p-6 rounded-2xl bg-[#141211] border border-[#262320] space-y-4 shadow-md">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] block">
                VERIFIED HIGHLIGHTS
              </span>
              <div className="space-y-3">
                {project.keyFacts.map((fact, idx) => (
                  <div key={idx} className="border-b border-[#262320] pb-2 last:border-b-0 last:pb-0">
                    <div className="text-xs text-[#8E8278] font-mono">{fact.label}</div>
                    <div className="text-base font-semibold text-[#F4F0E8] font-sans">{fact.value}</div>
                    {fact.note && <div className="text-[11px] text-[#8E8278] font-sans">{fact.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Feature: House of Masaba Range Architecture & Sizing Table */}
          {project.id === 'house-of-masaba' && (
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37]">
                  <LayoutGrid className="w-4 h-4" />
                  <span>5 VERIFIED CATEGORIES & SIZING RATIO CURVES</span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {MASABA_CATEGORIES.map((cat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#0B0A09] border border-[#262320] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="font-serif text-lg text-[#F4F0E8]">{cat.name}</div>
                        <div className="text-xs text-[#8E8278] font-sans">{cat.description}</div>
                      </div>
                      <div className="px-3.5 py-1.5 rounded-md bg-[#141211] border border-[#722F37]/40 font-mono text-xs text-[#722F37] font-semibold self-start sm:self-auto">
                        RATIO: {cat.ratio}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* VM Progression */}
              <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] block">
                  VISUAL MERCHANDISING LOGIC PROGRESSION
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                  {['01 · FOCAL POINT', '02 · CONTRAST', '03 · HIERARCHY', '04 · BALANCE', '05 · STORYTELLING'].map((step, sIdx) => (
                    <div key={sIdx} className="p-3 bg-[#0B0A09] rounded-xl border border-[#262320] text-center">
                      <div className="font-mono text-xs font-semibold text-[#722F37]">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Special Feature: 3AM India Verified Growth */}
          {project.id === '3am-india' && (
            <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37]">
                <TrendingUp className="w-4 h-4" />
                <span>VERIFIED COMMUNITY EXPANSION</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-[#F4F0E8]">15K → 17K</span>
                <span className="text-lg font-mono font-semibold text-[#722F37]">+13% Verified Growth</span>
              </div>
              <p className="text-xs text-[#8E8278] font-sans">
                Achieved through educational ingredient breakdowns, routine-layering cheat sheets, and aligned creator outreach.
              </p>
            </div>
          )}

          {/* The Objective & Challenge */}
          <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] block">
              THE OBJECTIVE & CHALLENGE
            </span>
            <p className="text-base text-[#C8BFB2] font-sans leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-[#F4F0E8] font-normal">
              Methodology & Execution
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141211] border border-[#262320] space-y-2"
                >
                  <span className="text-xs font-bold font-mono text-[#722F37]">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xl text-[#F4F0E8] font-normal">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8E8278] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Outputs & Deliverables */}
          <div className="p-8 rounded-2xl bg-[#141211] border border-[#262320] space-y-4">
            <h3 className="font-serif text-2xl text-[#F4F0E8] font-normal">
              Outputs & Strategic Deliverables
            </h3>
            <div className="space-y-2.5">
              {project.outputs.map((out, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#C8BFB2] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="p-8 rounded-2xl bg-[#141211] border border-[#722F37]/50 space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] block">
              STRATEGIC TAKEAWAY
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#F4F0E8] italic leading-relaxed">
              "{project.takeaway}"
            </p>
          </div>

          {/* Bottom Navigator */}
          <div className="pt-8 border-t border-[#262320] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto p-4 rounded-xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all text-left flex items-center gap-3 group"
            >
              <ChevronLeft className="w-4 h-4 text-[#722F37]" />
              <div>
                <span className="text-[10px] uppercase font-mono text-[#8E8278] block">Previous</span>
                <span className="font-serif text-base text-[#F4F0E8] group-hover:text-[#722F37] transition-colors">{prevProject.title}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto p-4 rounded-xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all text-right flex items-center justify-end gap-3 group"
            >
              <div>
                <span className="text-[10px] uppercase font-mono text-[#8E8278] block">Next</span>
                <span className="font-serif text-base text-[#F4F0E8] group-hover:text-[#722F37] transition-colors">{nextProject.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#722F37]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

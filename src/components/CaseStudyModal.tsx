import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { BearHouseInteractive } from './projects/BearHouseInteractive';
import { HealingTheWaitInteractive } from './projects/HealingTheWaitInteractive';
import { HouseOfMasabaInteractive } from './projects/HouseOfMasabaInteractive';
import { ThreeAmIndiaInteractive } from './projects/ThreeAmIndiaInteractive';
import { SutraEditInteractive } from './projects/SutraEditInteractive';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onSelectProject }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;

      const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight' && onSelectProject) {
        const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
        onSelectProject(PROJECTS_DATA[nextIndex]);
      }
      if (e.key === 'ArrowLeft' && onSelectProject) {
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

  const renderProjectInteractive = () => {
    switch (project.id) {
      case 'the-bear-house':
        return <BearHouseInteractive />;
      case 'healing-the-wait':
        return <HealingTheWaitInteractive />;
      case 'house-of-masaba':
        return <HouseOfMasabaInteractive />;
      case '3am-india':
        return <ThreeAmIndiaInteractive />;
      case 'sutra-edit':
        return <SutraEditInteractive />;
      default:
        return (
          <div className="p-8 bg-white border border-[#E5E1D8] text-center text-[#77736D] font-mono text-xs">
            Interactive showcase in preparation for {project.title}.
          </div>
        );
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#151515]/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto bg-[#F4F1EB] text-[#151515] border border-[#E5E1D8] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-[#F4F1EB]/95 backdrop-blur-md border-b border-[#E5E1D8]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-widest bg-[#151515] text-[#FAF9F6] px-2.5 py-1">
              PROJECT {project.number} / 05
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#77736D] hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Prev / Next Buttons */}
            {onSelectProject && (
              <div className="flex items-center border border-[#E5E1D8] mr-2 bg-white">
                <button
                  onClick={() => onSelectProject(prevProject)}
                  title={`Previous: ${prevProject.title}`}
                  className="p-2 text-[#151515] hover:bg-[#EFECE5] transition-colors border-r border-[#E5E1D8]"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProject(nextProject)}
                  title={`Next: ${nextProject.title}`}
                  className="p-2 text-[#151515] hover:bg-[#EFECE5] transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Close case study modal"
              className="p-2 text-[#151515] hover:bg-[#EFECE5] border border-transparent hover:border-[#E5E1D8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-4 sm:p-8 md:p-10 space-y-8">
          {/* Top Title Section */}
          <div className="space-y-3 pb-6 border-b border-[#E5E1D8]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#77736D] font-semibold">
                {project.type}
              </span>
              <span className="text-[11px] font-mono text-[#77736D]">
                Case File Ref: PB-{project.number}
              </span>
            </div>
            <h2
              id="case-study-title"
              className="font-serif text-3xl sm:text-5xl font-normal text-[#151515] tracking-tight leading-tight"
            >
              {project.title}
            </h2>
            <p className="font-serif text-base sm:text-xl italic text-[#555555] max-w-3xl leading-relaxed">
              "{project.tagline}"
            </p>
          </div>

          {/* Core Focus Area Tags */}
          <div className="flex flex-wrap gap-2">
            {project.focusAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-[#151515] bg-white border border-[#E5E1D8] px-3 py-1"
              >
                {area}
              </span>
            ))}
          </div>

          {/* DEDICATED INTERACTIVE CASE STUDY COMPONENT */}
          <div className="pt-2">
            {renderProjectInteractive()}
          </div>

          {/* Bottom Project Navigator Bar */}
          {onSelectProject && (
            <div className="pt-8 border-t border-[#E5E1D8] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-4 bg-white border border-[#E5E1D8] hover:border-[#151515] transition-all text-left flex items-center justify-between group"
              >
                <div>
                  <div className="font-mono text-[10px] text-[#77736D] uppercase tracking-wider flex items-center gap-1">
                    <ChevronLeft className="w-3.5 h-3.5 text-[#5A2427]" /> PREVIOUS CASE STUDY
                  </div>
                  <div className="font-serif text-base font-normal text-[#151515] mt-1 group-hover:underline">
                    {prevProject.number} — {prevProject.title}
                  </div>
                </div>
              </button>

              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-4 bg-white border border-[#E5E1D8] hover:border-[#151515] transition-all text-right flex items-center justify-between group"
              >
                <div className="w-full">
                  <div className="font-mono text-[10px] text-[#77736D] uppercase tracking-wider flex items-center justify-end gap-1">
                    NEXT CASE STUDY <ChevronRight className="w-3.5 h-3.5 text-[#5A2427]" />
                  </div>
                  <div className="font-serif text-base font-normal text-[#151515] mt-1 group-hover:underline">
                    {nextProject.number} — {nextProject.title}
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Modal Footer Close Action */}
          <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#77736D]">
            <span>Tip: Use Left / Right arrow keys or Esc to navigate</span>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 uppercase tracking-wider text-[#151515] hover:underline font-semibold"
            >
              <span>Close Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

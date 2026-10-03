import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const featuredProjects = PROJECTS_DATA.filter((p) => p.id !== '3am-india');

  // Specific project methodology phases mapping
  const getMethodologyStages = (projectId: string) => {
    switch (projectId) {
      case 'the-bear-house':
        return ['VISUAL MERCHANDISING', 'STORE AUDITS', 'STYLING', 'EOSS', 'NEW STORE SETUP'];
      case 'house-of-masaba':
        return ['BRAND', 'CONSUMER', 'ASSORTMENT', 'MERCHANDISE', 'VM', 'PRODUCT DEVELOPMENT'];
      case 'healing-the-wait':
        return ['EMPATHIZE', 'DEFINE', 'IDEATE', 'PROTOTYPE', 'TEST'];
      case 'sutra-edit':
        return ['MARKET GAP', 'PLATFORM', 'VALUE PROPOSITION', 'BUSINESS MODEL', 'GO-TO-MARKET'];
      case 'beyond-the-boutique':
        return ['DISCOVER', 'EXPLORE', 'EXPERIENCE', 'PURCHASE', 'OWN', 'RE-ENGAGE'];
      default:
        return ['DISCOVERY', 'ANALYSIS', 'STRATEGY', 'EXECUTION', 'DELIVERY'];
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;

      const projectList = project.id === '3am-india' ? PROJECTS_DATA : featuredProjects;
      const currentIndex = projectList.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % projectList.length;
        onSelectProject(projectList[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + projectList.length) % projectList.length;
        onSelectProject(projectList[prevIndex]);
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
  }, [project, onClose, onSelectProject, featuredProjects]);

  if (!project) return null;

  const projectList = project.id === '3am-india' ? PROJECTS_DATA : featuredProjects;
  const currentIndex = projectList.findIndex((p) => p.id === project.id);
  const prevProject = projectList[(currentIndex - 1 + projectList.length) % projectList.length];
  const nextProject = projectList[(currentIndex + 1) % projectList.length];
  const stages = getMethodologyStages(project.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0A09]/95 backdrop-blur-2xl transition-all duration-700 animate-fadeIn select-none p-0 sm:p-4 lg:p-6"
    >
      {/* Full Viewport Container */}
      <div
        ref={scrollContainerRef}
        className="relative w-full h-full max-w-7xl max-h-[100vh] sm:max-h-[96vh] overflow-y-auto bg-[#0B0A09] text-[#F4F0E8] sm:rounded-3xl shadow-2xl border-0 sm:border border-[#262320] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Navigation Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 py-4 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320]">
          <div className="flex items-center gap-3 font-mono text-xs text-[#722F37]">
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-bold text-[#F4F0E8] uppercase tracking-wider">0{currentIndex + 1} // {project.title}</span>
            <span className="text-[#262320]">|</span>
            <span className="hidden sm:inline text-[#C8BFB2] uppercase tracking-wider">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Project Quick Switcher */}
            <div className="flex items-center border border-[#262320] rounded-full bg-[#141211]">
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
              className="p-2 rounded-full border border-[#262320] bg-[#141211] text-[#F4F0E8] hover:bg-[#722F37] hover:border-[#722F37] transition-all duration-300 shadow-sm group"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Immersive Editorial Article Spread */}
        <div className="p-6 sm:p-12 lg:p-16 space-y-16 max-w-6xl mx-auto">
          {/* Magazine Header */}
          <div className="space-y-5 border-b border-[#262320] pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8E8278] uppercase tracking-widest">
              <span className="text-[#722F37] font-bold">PROJECT SPECIFICATION // 0{currentIndex + 1}</span>
              <span>{project.type}</span>
            </div>

            <h1
              id="case-study-title"
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F4F0E8] font-normal leading-[0.92] tracking-tight"
            >
              {project.title}
            </h1>
            <p className="font-serif text-2xl sm:text-4xl text-[#C8BFB2] italic leading-relaxed pt-1">
              "{project.subtitle}"
            </p>
          </div>

          {/* Methodology Stage Sequence Pill Bar */}
          <div className="p-4 rounded-2xl bg-[#141211] border border-[#262320] space-y-2">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#8E8278] border-b border-[#262320] pb-2">
              <span className="flex items-center gap-1.5 text-[#722F37] font-bold">
                <Layers className="w-3.5 h-3.5" />
                STRATEGIC METHODOLOGY PATHWAY
              </span>
              <span>{stages.length} STRATEGIC PHASES</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {stages.map((stage, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setActiveStage(sIdx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeStage === sIdx
                      ? 'bg-[#722F37] text-[#F4F0E8] font-bold shadow-md'
                      : 'bg-[#0B0A09] text-[#8E8278] hover:text-[#F4F0E8] border border-[#262320]'
                  }`}
                >
                  <span className="text-[10px] opacity-70 mr-1.5">0{sIdx + 1}</span>
                  <span>{stage}</span>
                </button>
              ))}
            </div>
          </div>

          {/* VISUAL STORYTELLING SPLIT PANE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
            {/* Left Column: Narrative Sections */}
            <div className="lg:col-span-7 space-y-12">
              {/* Section 01: Context & Overview */}
              <div id="story-context" className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] flex items-center gap-2">
                  <span>01</span>
                  <span>// OVERVIEW & SCOPE</span>
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal">
                  Overview & Scope
                </h3>
                <p className="text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans font-light">
                  {project.fullOverview}
                </p>
              </div>

              {/* Section 02: Challenge */}
              <div
                id="story-challenge"
                className="space-y-4 p-8 rounded-3xl bg-[#141211] border border-[#262320]"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] flex items-center gap-2">
                  <span>02</span>
                  <span>// THE CHALLENGE</span>
                </span>
                <p className="text-base text-[#F4F0E8] font-sans leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              {/* Section 03: Process & Methodology */}
              <div id="story-process" className="space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] flex items-center gap-2">
                  <span>03</span>
                  <span>// THE APPROACH</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 hover:border-[#722F37]/60 hover:bg-[#161413] transition-all duration-300"
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

              {/* Section 04: Outputs & Deliverables */}
              <div
                id="story-outputs"
                className="p-8 rounded-3xl bg-[#141211] border border-[#262320] space-y-4"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] flex items-center gap-2">
                  <span>04</span>
                  <span>// OUTPUTS & DELIVERABLES</span>
                </span>
                <div className="space-y-3">
                  {project.outputs.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#C8BFB2] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#722F37] shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 05: Takeaway */}
              <div
                id="story-takeaway"
                className="p-8 rounded-3xl bg-[#141211] border border-[#722F37]/60 space-y-3 shadow-2xl"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#722F37] block">
                  05 // STRATEGIC TAKEAWAY
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] italic leading-relaxed">
                  "{project.takeaway}"
                </p>
              </div>
            </div>

            {/* Right Column: Key Facts Snapshot & Sticky Visual */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              {/* Project Image Frame */}
              <div className="rounded-3xl overflow-hidden border border-[#262320] bg-[#141211] shadow-2xl">
                <ProjectImage
                  src={project.imagePath}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  subtitle={project.subtitle}
                  accentBg={project.accentBg}
                  accentColor={project.accentColor}
                  aspectRatio="aspect-[4/3]"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Snapshot Box */}
              <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                <div className="flex items-center justify-between font-mono text-xs text-[#722F37] border-b border-[#262320] pb-2">
                  <span className="font-bold uppercase tracking-wider">PROJECT SNAPSHOT</span>
                  <span>0{currentIndex + 1} // 0{projectList.length}</span>
                </div>
                <div className="space-y-3">
                  {project.keyFacts.map((fact, idx) => (
                    <div key={idx} className="border-b border-[#262320] pb-2 last:border-b-0 last:pb-0">
                      <div className="text-[10px] text-[#8E8278] font-mono">{fact.label}</div>
                      <div className="text-base font-semibold text-[#F4F0E8] font-mono mt-0.5">{fact.value}</div>
                      {fact.note && <div className="text-[11px] text-[#8E8278] font-sans">{fact.note}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Category & Focus Card */}
              <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-3 shadow-xl">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#722F37]">
                  CORE DISCIPLINE
                </div>
                <div className="text-sm font-sans font-medium text-[#F4F0E8]">
                  {project.category}
                </div>
                <div className="text-xs text-[#8E8278] font-sans font-light leading-relaxed">
                  {project.shortDescription}
                </div>
              </div>
            </div>
          </div>

          {/* NEXT-PROJECT TRANSITION */}
          <div className="pt-16 border-t border-[#262320]">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] pb-4">
              CONTINUE READING
            </div>

            <div
              onClick={() => {
                onSelectProject(nextProject);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="group cursor-pointer p-8 sm:p-12 rounded-3xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all duration-500 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
            >
              <div className="space-y-3 z-10 max-w-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E8278] block">
                  NEXT PROJECT // 0{((currentIndex + 1) % projectList.length) + 1} OF 0{projectList.length}
                </span>
                <h3 className="font-serif text-4xl sm:text-6xl text-[#F4F0E8] group-hover:text-[#F4F0E8] group-hover:translate-x-2 transition-all font-normal">
                  {nextProject.title}
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic">
                  "{nextProject.subtitle}"
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#722F37] group-hover:text-[#F4F0E8] uppercase tracking-wider pt-2 transition-colors">
                  <span>VIEW NEXT PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              <div className="w-full md:w-72 aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden border border-[#262320] group-hover:scale-[1.04] transition-all duration-500 shrink-0 bg-[#0B0A09] flex items-center justify-center p-4">
                <div className="text-center space-y-2">
                  <div className="font-serif text-2xl text-[#F4F0E8]">{nextProject.title}</div>
                  <div className="text-[10px] font-mono text-[#722F37] uppercase">{nextProject.category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

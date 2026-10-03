import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, ArrowUpRight, Droplets } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA } from '../data/portfolioData';
import { BearHouseWorld } from './brand-worlds/BearHouseWorld';
import { HealingWaitWorld } from './brand-worlds/HealingWaitWorld';
import { HouseOfMasabaWorld } from './brand-worlds/HouseOfMasabaWorld';
import { ThreeAmWorld } from './brand-worlds/ThreeAmWorld';
import { SutraEditWorld } from './brand-worlds/SutraEditWorld';

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
  // Masaba interactive pillar state
  const [activeMasabaPillar, setActiveMasabaPillar] = useState(0);
  const masabaPillars = [
    { title: 'ASSORTMENT PLANNING', desc: 'Structuring a focused commercial assortment balancing core, fashion and novelty styles across everyday and occasion wear.' },
    { title: 'PRICING ARCHITECTURE', desc: 'Defined clear pricing bands and margin benchmarks to maintain commercial viability while preserving brand prestige.' },
    { title: 'PRODUCT POSITIONING', desc: 'Calibrating size ratios and category mix to ensure high sell-through and minimize broken-size inventory.' },
    { title: 'VISUAL INTEGRATION', desc: 'Integrated brand storytelling and visual merchandising principles to create a cohesive in-store product narrative.' },
  ];

  // Healing wait empathy step
  const [waitStep, setWaitStep] = useState(0);
  const waitSteps = [
    { label: '01 EMPATHIZE', tone: 'Conducted primary research across OPD waiting environments, uncovering key stress points.' },
    { label: '02 DEFINE', tone: 'Synthesized findings into key themes around boredom, uncertainty and waiting-time anxiety.' },
    { label: '03 IDEATE', tone: 'Explored digital and experiential interventions to make waiting transparent, engaging, and reassuring.' },
    { label: '04 PROTOTYPE', tone: 'Developed the Heal Queue app concept with appointments, live queue tracking, and prescriptions.' },
    { label: '05 TEST', tone: 'Gathered user feedback to refine information clarity, usability, and the waiting experience.' },
  ];

  // 3AM India Strategy Node
  const [activeThreeAmStep, setActiveThreeAmStep] = useState(0);
  const threeAmSteps = [
    { name: 'RESEARCH', desc: 'Investigated consumer friction and demystified active ingredients.' },
    { name: 'SIMPLIFY', desc: 'Created transparent, jargon-free formulation storytelling.' },
    { name: 'CREATE', desc: 'Designed daily skincare rituals and education-first content.' },
    { name: 'CONNECT', desc: 'Built high-retention digital community loops (+13% growth).' },
  ];

  // Sutra Edit Strategy Node
  const [activeSutraNode, setActiveSutraNode] = useState(0);
  const sutraNodes = [
    { title: '01 MARKET GAP', desc: 'Fragmented fashion intelligence and local Indian sizing dynamics' },
    { title: '02 PLATFORM', desc: 'Curated editorial intelligence and retail market breakdowns' },
    { title: '03 VALUE PROP', desc: 'Actionable strategic decisions backed by Indian consumer data' },
    { title: '04 BUSINESS MODEL', desc: 'Tiered subscriptions, founder network and bespoke advisory' },
    { title: '05 GTM', desc: 'Audience building, trend reports and regional ecosystem expansion' },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const renderBrandWorldCanvas = () => {
    switch (project.id) {
      case 'bear-house':
        return <BearHouseWorld autoPlay={true} />;
      case 'healing-the-wait':
        return <HealingWaitWorld autoPlay={true} />;
      case 'house-of-masaba':
        return <HouseOfMasabaWorld autoPlay={true} />;
      case '3am-india':
        return <ThreeAmWorld autoPlay={true} />;
      case 'sutra-edit':
        return <SutraEditWorld autoPlay={true} />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0A09]/95 backdrop-blur-2xl transition-all duration-700 animate-fadeIn select-none p-0 sm:p-4 lg:p-6"
    >
      {/* Full Viewport Morphing Container */}
      <div
        ref={scrollContainerRef}
        className="relative w-full h-full max-w-7xl max-h-[100vh] sm:max-h-[96vh] overflow-y-auto bg-[#0B0A09] text-[#F4F0E8] sm:rounded-3xl shadow-2xl border-0 sm:border border-[#262320] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Precision Header Navigation Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 py-4 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320]">
          <div className="flex items-center gap-3 font-mono text-xs text-[#722F37]">
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-bold text-[#F4F0E8] uppercase tracking-wider">BRAND WORLD: {project.number} // {project.title}</span>
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
              className="p-2 rounded-full border border-[#262320] bg-[#141211] text-[#F4F0E8] hover:bg-[#722F37] hover:border-[#722F37] transition-all shadow-sm group"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Immersive Editorial Article Spread */}
        <div className="p-6 sm:p-12 lg:p-16 space-y-16 max-w-6xl mx-auto">
          {/* Monumental Magazine Header */}
          <div className="space-y-5 border-b border-[#262320] pb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8E8278] uppercase tracking-widest">
              <span className="text-[#722F37] font-bold">CASE ARTIFACT // SPEC_0{currentIndex + 1}</span>
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

          {/* DEDICATED BRAND WORLD INTERACTIVE HERO SPREAD */}
          <div className="relative shadow-2xl">
            {renderBrandWorldCanvas()}
          </div>

          {/* VISUAL STORYTELLING SPLIT PANE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
            {/* Left Column: Narrative Sections */}
            <div className="lg:col-span-7 space-y-12">
              {/* Section 01: Context & Overview */}
              <div
                id="story-context"
                className="space-y-4"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] flex items-center gap-2">
                  <span>01</span>
                  <span>// CONTEXT & BACKGROUND</span>
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal">
                  Overview & Commercial Scope
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
                  <span>// THE STRATEGIC CHALLENGE</span>
                </span>
                <p className="text-base text-[#F4F0E8] font-sans leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              {/* Section 03: Process & Methodology */}
              <div
                id="story-process"
                className="space-y-6"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] flex items-center gap-2">
                  <span>03</span>
                  <span>// EXECUTION METHODOLOGY</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#141211] border border-[#262320] space-y-2 hover:border-[#722F37]/60 transition-colors"
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
                  <span>// STRATEGIC DELIVERABLES</span>
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

            {/* Right Column: Sticky Thematic Strategic Simulation Engine */}
            <div className="lg:col-span-5 sticky top-24 space-y-6">
              {/* Verified Highlight Box */}
              <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                <div className="flex items-center justify-between font-mono text-xs text-[#722F37] border-b border-[#262320] pb-2">
                  <span className="font-bold uppercase tracking-wider">VERIFIED HIGHLIGHTS</span>
                  <span>STATUS: ACTIVE</span>
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

              {/* Dynamic Project Specific Engine */}
              {project.id === 'house-of-masaba' && (
                <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                  <div className="flex items-center justify-between font-mono text-xs text-[#722F37] border-b border-[#262320] pb-2">
                    <span className="font-bold uppercase tracking-wider">MERCHANDISE STRATEGY PILLARS</span>
                    <span>4 PILLARS</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {masabaPillars.map((pillar, mIdx) => (
                      <button
                        key={mIdx}
                        onClick={() => setActiveMasabaPillar(mIdx)}
                        className={`px-2.5 py-1 rounded transition-all ${
                          activeMasabaPillar === mIdx
                            ? 'bg-[#722F37] text-[#F4F0E8] font-bold'
                            : 'bg-[#0B0A09] text-[#8E8278] hover:text-[#F4F0E8]'
                        }`}
                      >
                        0{mIdx + 1} {pillar.title.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 rounded bg-[#0B0A09] border border-[#262320] space-y-1 font-mono">
                    <div className="text-xs text-[#F4F0E8] font-bold">{masabaPillars[activeMasabaPillar].title}</div>
                    <div className="text-[11px] text-[#C8BFB2] font-sans font-light leading-relaxed">{masabaPillars[activeMasabaPillar].desc}</div>
                  </div>
                </div>
              )}

              {project.id === 'healing-the-wait' && (
                <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                  <div className="flex items-center justify-between font-mono text-xs text-[#722F37] border-b border-[#262320] pb-2">
                    <span className="font-bold uppercase tracking-wider">EMPATHY PHASE ({waitSteps[waitStep].label})</span>
                    <span>DESIGN THINKING</span>
                  </div>

                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {waitSteps.map((ws, wIdx) => (
                      <button
                        key={wIdx}
                        onClick={() => setWaitStep(wIdx)}
                        className={`px-2 py-0.5 rounded transition-all ${
                          waitStep === wIdx ? 'bg-[#722F37] text-[#F4F0E8] font-bold' : 'bg-[#0B0A09] text-[#8E8278]'
                        }`}
                      >
                        {ws.label}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-[#C8BFB2] font-sans pt-1">
                    {waitSteps[waitStep].tone}
                  </p>

                  <div className="space-y-3 font-mono text-xs pt-2">
                    <div>
                      <div className="flex justify-between text-[11px] pb-1">
                        <span>BOREDOM</span>
                        <span className="text-[#722F37] font-bold">66%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#0B0A09] rounded-full overflow-hidden">
                        <div className="h-full bg-[#722F37] w-[66%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] pb-1">
                        <span>WAIT ANXIETY</span>
                        <span className="text-[#722F37] font-bold">60%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#0B0A09] rounded-full overflow-hidden">
                        <div className="h-full bg-[#722F37] w-[60%]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === '3am-india' && (
                <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                  <div className="flex items-center justify-between font-mono text-xs text-[#722F37] border-b border-[#262320] pb-2">
                    <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5" />
                      3AM ENGAGEMENT FRAMEWORK
                    </span>
                    <span>4 PILLARS</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1 font-mono text-[10px]">
                    {threeAmSteps.map((stg, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => setActiveThreeAmStep(sIdx)}
                        className={`p-1.5 rounded text-center transition-all ${
                          activeThreeAmStep === sIdx ? 'bg-[#722F37] text-[#F4F0E8] font-bold' : 'bg-[#0B0A09] text-[#8E8278]'
                        }`}
                      >
                        {stg.name}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-[#C8BFB2] font-sans pt-1">
                    {threeAmSteps[activeThreeAmStep].desc}
                  </p>
                </div>
              )}

              {project.id === 'sutra-edit' && (
                <div className="p-6 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                  <div className="flex items-center justify-between font-mono text-xs text-[#722F37] border-b border-[#262320] pb-2">
                    <span className="font-bold uppercase tracking-wider">STRATEGY NODE: {sutraNodes[activeSutraNode].title}</span>
                    <span>INTELLIGENCE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                    {sutraNodes.map((nd, nIdx) => (
                      <button
                        key={nIdx}
                        onClick={() => setActiveSutraNode(nIdx)}
                        className={`p-1.5 rounded border text-center transition-all ${
                          activeSutraNode === nIdx ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold' : 'bg-[#0B0A09] border-[#262320] text-[#8E8278]'
                        }`}
                      >
                        {nd.title}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-[#C8BFB2] font-sans pt-1">
                    {sutraNodes[activeSutraNode].desc}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* MONUMENTAL NEXT-PROJECT TRANSITION SPREAD */}
          <div className="pt-16 border-t border-[#262320]">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] pb-4">
              CONTINUE EDITORIAL READING
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
                  NEXT BRAND WORLD // 0{((currentIndex + 1) % PROJECTS_DATA.length) + 1} OF 05
                </span>
                <h3 className="font-serif text-4xl sm:text-6xl text-[#F4F0E8] group-hover:text-[#F4F0E8] group-hover:translate-x-2 transition-all font-normal">
                  {nextProject.title}
                </h3>
                <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic">
                  "{nextProject.subtitle}"
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#722F37] group-hover:text-[#F4F0E8] uppercase tracking-wider pt-2 transition-colors">
                  <span>TRANSITION TO BRAND WORLD</span>
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

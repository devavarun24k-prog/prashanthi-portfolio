import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, Sparkles, RefreshCw, GitFork, BookOpen, Layers } from 'lucide-react';
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
  // Masaba interactive category state
  const [activeMasabaCat, setActiveMasabaCat] = useState(0);

  // Healing wait empathy step
  const [waitStep, setWaitStep] = useState(0);
  const waitSteps = [
    { label: 'WAITING', tone: 'Empty indeterminate hospital waiting lounge with zero timeline' },
    { label: 'UNCERTAINTY', tone: 'Emotional stress & anxiety from unpredictable delay times' },
    { label: 'RESEARCH', tone: 'Field study & interviews across 35+ patients & caregivers' },
    { label: 'INSIGHT', tone: 'Information deficiency is the primary driver of perceived wait' },
    { label: 'DESIGN', tone: '28-page editorial publication & Heal Queue service blueprint' },
    { label: 'SOLUTION', tone: 'Transparent live queue tracking paired with curated reading' },
  ];

  // 3AM India stage
  const [active3amStage, setActive3amStage] = useState(0);
  const threeAmStages = [
    { title: 'RESEARCH', desc: 'Dermatological literature review of Niacinamide, Ceramides, Salicylic Acid & Actives' },
    { title: 'SIMPLIFY', desc: 'Deconstructing clinical jargon into approachable routine cheat sheets' },
    { title: 'CREATE', desc: 'Designing high-save visual social carousels and SEO blog guides' },
    { title: 'CONNECT', desc: 'Influencer seeding and community routine troubleshooting (+13% growth: 15K → 17K)' },
  ];

  // Sutra Edit Strategy Node
  const [activeSutraNode, setActiveSutraNode] = useState(0);
  const sutraNodes = [
    { title: 'MARKET GAP', desc: 'Indian lifestyle founders lack local sizing & supply chain intelligence' },
    { title: 'PLATFORM', desc: 'Weekly curated editorial dispatches analyzing retail formats' },
    { title: 'AUDIENCE', desc: 'D2C apparel founders, retail merchandisers & fashion brand builders' },
    { title: 'BUSINESS MODEL', desc: 'Tiered architecture: Free dispatches → Paid intelligence → Advisory' },
    { title: 'VALUE', desc: 'Contextual, India-first retail frameworks tailored for regional seasonality' },
    { title: 'GROWTH', desc: 'Founder case study flywheel scaling into advisory partnerships' },
  ];

  // Sutra Growth Loop
  const sutraLoop = ['CONTENT', 'COMMUNITY', 'TRUST', 'PAID INTELLIGENCE', 'CONSULTING', 'INSIGHTS'];

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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn select-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[94vh] overflow-y-auto bg-[#0B0A09] text-[#F4F0E8] rounded-3xl shadow-2xl border border-[#262320] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Precision Header Navigation Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-8 py-4 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320]">
          <div className="flex items-center gap-3 font-mono text-xs text-[#722F37]">
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-bold text-[#F4F0E8]">SYS_EXP: {project.number}</span>
            <span className="text-[#262320]">|</span>
            <span className="text-[#C8BFB2] uppercase tracking-wider">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Project Quick Switcher */}
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
              className="p-2 rounded-full border border-[#262320] bg-[#141211] text-[#F4F0E8] hover:bg-[#722F37] transition-all shadow-sm group"
            >
              <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>

        {/* Article Body Spread */}
        <div className="p-6 sm:p-12 space-y-16">
          {/* Article Header */}
          <div className="space-y-4 border-b border-[#262320] pb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-[#8E8278] uppercase tracking-widest">
              <span className="text-[#722F37] font-bold">CASE STUDY // SPEC_0{currentIndex + 1}</span>
              <span className="text-[#262320]">|</span>
              <span>{project.type}</span>
            </div>

            <h2
              id="case-study-title"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F4F0E8] font-normal leading-[0.94] tracking-tight"
            >
              {project.title}
            </h2>
            <p className="font-serif text-2xl sm:text-3xl text-[#C8BFB2] italic leading-relaxed">
              "{project.subtitle}"
            </p>
          </div>

          {/* Large Hero Visual Spread */}
          <div className="relative overflow-hidden rounded-3xl border border-[#262320] shadow-2xl">
            <ProjectImage
              src={project.imagePath}
              alt={project.title}
              title={project.title}
              category={project.category}
              accentBg={project.accentBg}
              accentColor={project.accentColor}
              aspectRatio="aspect-[16/9]"
              className="rounded-3xl"
            />
          </div>

          {/* Overview & Key Facts Strip */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
                STRATEGIC OVERVIEW & SCOPE
              </span>
              <p className="text-base sm:text-lg text-[#C8BFB2] leading-relaxed font-sans font-light">
                {project.fullOverview}
              </p>
            </div>

            <div className="md:col-span-5 p-6 rounded-2xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#722F37] block">
                VERIFIED HIGHLIGHT SPECIFICATIONS
              </span>
              <div className="space-y-3">
                {project.keyFacts.map((fact, idx) => (
                  <div key={idx} className="border-b border-[#262320] pb-2 last:border-b-0 last:pb-0">
                    <div className="text-[11px] text-[#8E8278] font-mono">{fact.label}</div>
                    <div className="text-base font-semibold text-[#F4F0E8] font-mono mt-0.5">{fact.value}</div>
                    {fact.note && <div className="text-[11px] text-[#8E8278] font-sans">{fact.note}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SPECIAL THEMATIC SYSTEM 01: HOUSE OF MASABA MERCHANDISE & SIZE RATIOS */}
          {project.id === 'house-of-masaba' && (
            <div className="space-y-8">
              {/* Category Range & Dynamic Size-Ratio Proportional Block Visualizer */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262320] pb-4 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#722F37] font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-[#722F37]" />
                    <span>5 CATEGORY RANGE ARCHITECTURE & SIZE CURVE BLOCKS</span>
                  </div>
                  <span className="text-[#8E8278]">TOTAL: 112 STYLES // 1,008 SKUs</span>
                </div>

                {/* Category Switcher */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {MASABA_CATEGORIES.map((cat, idx) => {
                    const isActive = activeMasabaCat === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveMasabaCat(idx)}
                        className={`p-3 rounded-xl border text-left font-mono text-xs transition-all ${
                          isActive
                            ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold shadow-md'
                            : 'bg-[#0B0A09] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8] hover:border-[#722F37]/50'
                        }`}
                      >
                        <div className="truncate">{cat.name}</div>
                        <div className="text-[10px] opacity-80 pt-0.5">RATIO {cat.ratio}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Proportional Size Block Simulation */}
                <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8E8278] border-b border-[#262320] pb-3">
                    <span className="text-[#F4F0E8] font-bold">
                      ACTIVE LINE: {MASABA_CATEGORIES[activeMasabaCat].name}
                    </span>
                    <span className="text-[#722F37]">
                      PROPORTION CURVE: {MASABA_CATEGORIES[activeMasabaCat].ratio}
                    </span>
                  </div>

                  <p className="text-xs text-[#C8BFB2] font-sans">
                    {MASABA_CATEGORIES[activeMasabaCat].description}
                  </p>

                  {/* Visual Size Distribution Proportion Blocks (XS, S, M, L, XL) */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
                      SIZE-WISE SKEW (XS : S : M : L : XL)
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {['XS', 'S', 'M', 'L', 'XL'].map((sz, sIdx) => {
                        const ratioStr = MASABA_CATEGORIES[activeMasabaCat].ratio;
                        const ratioValues = ratioStr.split(':').map((v) => Number(v.trim()));
                        const weight = ratioValues[sIdx] || 1;

                        return (
                          <div
                            key={sz}
                            className="p-4 rounded-xl bg-[#141211] border border-[#262320] flex flex-col items-center justify-between text-center transition-all duration-500"
                            style={{
                              borderColor: weight >= 2 ? '#722F37' : '#262320',
                              backgroundColor: weight >= 2 ? '#722F3720' : '#141211',
                            }}
                          >
                            <span className="font-mono text-xs font-bold text-[#722F37]">{sz}</span>
                            <div className="my-2 text-2xl font-serif text-[#F4F0E8] font-normal">
                              {weight}x
                            </div>
                            <span className="text-[9px] font-mono text-[#8E8278]">
                              {weight === 1 ? 'Core' : weight === 2 ? 'High Vol' : 'Peak SKU'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* VM Logic Progression */}
              <div className="p-8 rounded-3xl bg-[#141211] border border-[#262320] space-y-4 shadow-xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#722F37] block">
                  VISUAL MERCHANDISING 5-TIER LOGIC
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                  {['01 · FOCAL POINT', '02 · CONTRAST', '03 · HIERARCHY', '04 · BALANCE', '05 · STORYTELLING'].map((step, sIdx) => (
                    <div key={sIdx} className="p-4 bg-[#0B0A09] rounded-xl border border-[#262320] text-center font-mono text-xs">
                      <div className="font-bold text-[#722F37]">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SPECIAL THEMATIC SYSTEM 02: HEALING THE WAIT EMPATHY & PROGRESSIVE DATA */}
          {project.id === 'healing-the-wait' && (
            <div className="space-y-8">
              {/* Human to Digital Transition Stepper */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#262320] pb-4 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#722F37] font-bold uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-[#722F37]" />
                    <span>EMPATHY & DIGITAL TRANSFORMATION SEQUENCE</span>
                  </div>
                  <span className="text-[#8E8278]">STAGE 0{waitStep + 1} / 06</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                  {waitSteps.map((ws, idx) => {
                    const isActive = waitStep === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setWaitStep(idx)}
                        className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                          isActive
                            ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold'
                            : 'bg-[#0B0A09] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
                        }`}
                      >
                        {ws.label}
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-2">
                  <div className="text-xs font-mono font-bold text-[#722F37] uppercase">
                    PHASE: {waitSteps[waitStep].label}
                  </div>
                  <p className="text-sm font-sans text-[#C8BFB2] leading-relaxed">
                    {waitSteps[waitStep].tone}
                  </p>
                </div>
              </div>

              {/* Progressive Counting Data Metrics Visualizer */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-6 shadow-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
                  VERIFIED PATIENT RESEARCH FINDINGS (N = 35+)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Boredom Metric */}
                  <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3">
                    <div className="font-serif text-5xl lg:text-6xl text-[#F4F0E8] font-normal">
                      66%
                    </div>
                    <div className="font-mono text-xs font-bold text-[#722F37] uppercase">
                      PATIENT BOREDOM
                    </div>
                    <div className="w-full h-1.5 bg-[#141211] rounded-full overflow-hidden">
                      <div className="h-full bg-[#722F37] w-[66%]" />
                    </div>
                    <p className="text-xs text-[#8E8278] font-sans">
                      Lack of engaging, comforting reading or mental stimulus during waiting.
                    </p>
                  </div>

                  {/* Anxiety Metric */}
                  <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3">
                    <div className="font-serif text-5xl lg:text-6xl text-[#F4F0E8] font-normal">
                      60%
                    </div>
                    <div className="font-mono text-xs font-bold text-[#722F37] uppercase">
                      SITUATIONAL ANXIETY
                    </div>
                    <div className="w-full h-1.5 bg-[#141211] rounded-full overflow-hidden">
                      <div className="h-full bg-[#722F37] w-[60%]" />
                    </div>
                    <p className="text-xs text-[#8E8278] font-sans">
                      Triggered by total opacity regarding doctor delays and appointment queues.
                    </p>
                  </div>

                  {/* Frustration Metric */}
                  <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3">
                    <div className="font-serif text-5xl lg:text-6xl text-[#F4F0E8] font-normal">
                      40%
                    </div>
                    <div className="font-mono text-xs font-bold text-[#722F37] uppercase">
                      ACUTE FRUSTRATION
                    </div>
                    <div className="w-full h-1.5 bg-[#141211] rounded-full overflow-hidden">
                      <div className="h-full bg-[#722F37] w-[40%]" />
                    </div>
                    <p className="text-xs text-[#8E8278] font-sans">
                      Caused by crowded, disorganized waiting room navigation and noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SPECIAL THEMATIC SYSTEM 03: 3AM INDIA DIGITAL CAMPAIGN & FOLLOWER DATA */}
          {project.id === '3am-india' && (
            <div className="space-y-8">
              {/* 4-Step Skincare Content Framework */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#262320] pb-4 font-mono text-xs">
                  <span className="text-[#722F37] font-bold uppercase tracking-wider">
                    DIGITAL CONTENT ENGINE (RESEARCH → SIMPLIFY → CREATE → CONNECT)
                  </span>
                  <span className="text-[#8E8278]">CAMPAIGN PIPELINE</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {threeAmStages.map((stg, idx) => {
                    const isActive = active3amStage === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActive3amStage(idx)}
                        className={`p-4 rounded-xl border text-left font-mono text-xs transition-all ${
                          isActive
                            ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] shadow-md'
                            : 'bg-[#0B0A09] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
                        }`}
                      >
                        <div className="font-bold">0{idx + 1} // {stg.title}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-2 font-mono">
                  <span className="text-xs font-bold text-[#722F37] uppercase">
                    STAGE FOCUS: {threeAmStages[active3amStage].title}
                  </span>
                  <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans">
                    {threeAmStages[active3amStage].desc}
                  </p>
                </div>
              </div>

              {/* Follower Growth Animated Data Transition Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-6 shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#722F37]">
                  <TrendingUp className="w-4 h-4 text-[#722F37]" />
                  <span>VERIFIED COMMUNITY GROWTH TRANSITION</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
                  <div className="sm:col-span-6 space-y-2">
                    <div className="font-serif text-5xl sm:text-6xl text-[#F4F0E8]">
                      15K → 17K
                    </div>
                    <div className="font-mono text-sm font-bold text-[#722F37]">
                      +13% ORGANIC FOLLOWER EXPANSION
                    </div>
                    <p className="text-xs text-[#8E8278] font-sans pt-1">
                      Driven by educational ingredient pairing carousels, barrier health cheat sheets, and creator seeding outreach.
                    </p>
                  </div>

                  <div className="sm:col-span-6 p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-[#262320] pb-2">
                      <span className="text-[#8E8278]">AUDIENCE CONVERSION</span>
                      <span className="text-[#722F37] font-bold">ORGANIC REACH</span>
                    </div>
                    <div className="flex justify-between border-b border-[#262320] pb-2">
                      <span className="text-[#8E8278]">CONTENT FORMATS</span>
                      <span className="text-[#F4F0E8]">CAROUSELS & SEO GUIDES</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8E8278]">INGREDIENT CLARITY</span>
                      <span className="text-[#F4F0E8]">ACTIVES & BARRIER REPAIR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SPECIAL THEMATIC SYSTEM 04: SUTRA EDIT STRATEGY GRAPH & GROWTH LOOP */}
          {project.id === 'sutra-edit' && (
            <div className="space-y-8">
              {/* Strategy Node System */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-[#262320] pb-4 font-mono text-xs">
                  <span className="text-[#722F37] font-bold uppercase tracking-wider flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-[#722F37]" />
                    CONNECTED STRATEGY SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-[#8E8278]">NODE 0{activeSutraNode + 1} / 06</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {sutraNodes.map((node, idx) => {
                    const isActive = activeSutraNode === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveSutraNode(idx)}
                        className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                          isActive
                            ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold'
                            : 'bg-[#0B0A09] border-[#262320] text-[#8E8278] hover:text-[#F4F0E8]'
                        }`}
                      >
                        {node.title}
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-2 font-mono">
                  <span className="text-xs font-bold text-[#722F37] uppercase">
                    NODE SPEC: {sutraNodes[activeSutraNode].title}
                  </span>
                  <p className="text-xs sm:text-sm text-[#C8BFB2] font-sans">
                    {sutraNodes[activeSutraNode].desc}
                  </p>
                </div>
              </div>

              {/* Self-Constructing Strategy Growth Loop */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border border-[#262320] space-y-6 shadow-2xl">
                <div className="flex items-center justify-between font-mono text-xs border-b border-[#262320] pb-4">
                  <span className="text-[#722F37] font-bold uppercase tracking-wider flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[#722F37]" />
                    SELF-SUSTAINING FOUNDER STRATEGY LOOP
                  </span>
                  <span className="text-[#8E8278]">6 STAGE CYCLE</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {sutraLoop.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#0B0A09] rounded-xl border border-[#262320] text-center font-mono text-xs flex flex-col justify-between h-20 hover:border-[#722F37] transition-colors"
                    >
                      <span className="text-[10px] text-[#722F37]">0{idx + 1}</span>
                      <span className="font-bold text-[#F4F0E8]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Problem & Challenge */}
          <div className="p-8 rounded-3xl bg-[#141211] border border-[#262320] space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#722F37] block">
              THE STRATEGIC CHALLENGE
            </span>
            <p className="text-base text-[#C8BFB2] font-sans leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* Methodology & Process Grid */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
              METHODOLOGY & EXECUTION PHASES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141211] border border-[#262320] space-y-2"
                >
                  <span className="text-xs font-bold font-mono text-[#722F37]">
                    PHASE 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-2xl text-[#F4F0E8] font-normal">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8E8278] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Outputs */}
          <div className="p-8 rounded-3xl bg-[#141211] border border-[#262320] space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
              KEY DELIVERABLES & ARTIFACTS
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

          {/* Takeaway Statement */}
          <div className="p-8 rounded-3xl bg-[#141211] border border-[#722F37]/60 space-y-2 shadow-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#722F37] block">
              STRATEGIC TAKEAWAY
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] italic leading-relaxed">
              "{project.takeaway}"
            </p>
          </div>

          {/* Bottom Dual Switcher */}
          <div className="pt-8 border-t border-[#262320] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="w-full sm:w-auto p-4 rounded-2xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all text-left flex items-center gap-3 group"
            >
              <ChevronLeft className="w-4 h-4 text-[#722F37]" />
              <div>
                <span className="text-[10px] uppercase text-[#8E8278] block">PREVIOUS CASE</span>
                <span className="font-serif text-base text-[#F4F0E8] group-hover:text-[#722F37] transition-colors">{prevProject.title}</span>
              </div>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full sm:w-auto p-4 rounded-2xl bg-[#141211] border border-[#262320] hover:border-[#722F37] transition-all text-right flex items-center justify-end gap-3 group"
            >
              <div>
                <span className="text-[10px] uppercase text-[#8E8278] block">NEXT CASE</span>
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


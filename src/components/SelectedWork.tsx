import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Layers, ChevronRight, Activity, GitBranch, ShoppingBag, HeartHandshake, Eye } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA, MASABA_CATEGORIES } from '../data/portfolioData';
import { ProjectImage } from './ProjectImage';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSpread, setActiveSpread] = useState<number>(0);
  const spreadRefs = useRef<(HTMLElement | null)[]>([]);

  // Embedded Interactive States for each Project
  const [masabaSpreadCat, setMasabaSpreadCat] = useState(0);
  const [bearStageSpread, setBearStageSpread] = useState(0);
  const [waitSpreadStep, setWaitSpreadStep] = useState(0);
  const [threeAmSpreadStep, setThreeAmSpreadStep] = useState(0);
  const [sutraSpreadNode, setSutraSpreadNode] = useState(0);

  const bearStages = ['01 STOCKROOM', '02 MERCHANDISE', '03 FIXTURE', '04 DISPLAY', '05 SHOP FLOOR', '06 FLOW', '07 EXPERIENCE'];
  const waitSteps = ['WAITING', 'UNCERTAINTY', 'RESEARCH', 'INSIGHT', 'DESIGN', 'SOLUTION'];
  const threeAmStages = ['RESEARCH', 'SIMPLIFY', 'CREATE', 'CONNECT'];
  const sutraNodes = ['GAP', 'PLATFORM', 'AUDIENCE', 'MODEL', 'VALUE', 'GROWTH'];

  // Desktop Pointer Parallax inside project spread (5-8px subtle range)
  const handleSpreadMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMousePos({ x, y });
  };

  // Scroll observer to activate active spread coordinate
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-spread-index'));
            if (!isNaN(index)) {
              setActiveSpread(index);
            }
          }
        });
      },
      { threshold: 0.35, rootMargin: '-10% 0px -10% 0px' }
    );

    spreadRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#262320] bg-[#0B0A09] text-[#F4F0E8] relative select-none">
      {/* Editorial Section Header Spread */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#262320]">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-[#722F37]">
            <Sparkles className="w-4 h-4 text-[#722F37]" />
            <span>INTERACTIVE EDITORIAL PROJECT INDEX // 05 SPREADS</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F4F0E8] tracking-tight leading-[0.92]">
            SELECTED
            <span className="block font-serif italic text-[#C8BFB2] font-normal">WORK</span>
          </h2>
        </div>

        {/* Technical Coordinate Tracker */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 font-mono text-xs text-[#8E8278]">
          <div className="flex items-center gap-3">
            <span className="text-[#722F37] font-bold">SPREAD 0{activeSpread + 1} / 05</span>
            <span className="text-[#262320]">|</span>
            <span className="text-[#C8BFB2] uppercase tracking-wider">{PROJECTS_DATA[activeSpread]?.title}</span>
          </div>
          <p className="max-w-xs text-xs text-[#8E8278] leading-relaxed font-sans text-left lg:text-right">
            Interactive digital fashion publication spreads exploring commercial retail strategy, VM, and brand architecture.
          </p>
        </div>
      </div>

      {/* Sticky Editorial Spread Index Navigator */}
      <div className="sticky top-20 z-20 hidden md:flex items-center justify-between py-4 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320] mb-12 font-mono text-[11px]">
        <div className="flex items-center gap-1 sm:gap-2">
          {PROJECTS_DATA.map((p, idx) => {
            const isActive = activeSpread === idx;
            return (
              <a
                key={p.id}
                href={`#project-${p.id}`}
                className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#722F37] text-[#F4F0E8] font-bold shadow-md border-[#722F37]'
                    : 'bg-[#141211] text-[#8E8278] hover:text-[#F4F0E8] border-[#262320]'
                } border`}
              >
                <span>{p.number}</span>
                <span className="hidden lg:inline">{p.title}</span>
              </a>
            );
          })}
        </div>

        <div className="text-[#8E8278] uppercase tracking-widest flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#722F37]" />
          <span>FASHION-BUSINESS ARTIFACTS</span>
        </div>
      </div>

      {/* 5 Sequential Editorial Page Spreads */}
      <div className="space-y-32 sm:space-y-44 pt-8">
        {PROJECTS_DATA.map((project, idx) => {
          const isHovered = activeHoverIndex === idx;
          const isEven = idx % 2 === 1;

          return (
            <article
              key={project.id}
              id={`project-${project.id}`}
              data-spread-index={idx}
              ref={(el) => {
                spreadRefs.current[idx] = el;
              }}
              onMouseEnter={() => setActiveHoverIndex(idx)}
              onMouseLeave={() => setActiveHoverIndex(null)}
              onMouseMove={handleSpreadMouseMove}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer relative transition-all duration-700"
            >
              {/* Top Technical Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-4 mb-8 font-mono text-xs text-[#8E8278]">
                <div className="flex items-center gap-3">
                  <span className="text-[#722F37] font-bold text-sm">INDEX: 0{idx + 1} // 05</span>
                  <span className="text-[#262320]">|</span>
                  <span className="text-[#F4F0E8] font-semibold uppercase tracking-wider">{project.category}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-[#8E8278]">{project.type}</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#722F37] group-hover:text-[#F4F0E8] font-semibold uppercase tracking-wider transition-colors">
                    <span>EXPLORE FULL CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Dynamic Editorial Spread Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#141211] p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#262320] group-hover:border-[#722F37] transition-all duration-500 shadow-2xl relative overflow-hidden">
                {/* Background Subtle Watermark Coordinate */}
                <div className="absolute right-4 bottom-2 text-8xl lg:text-9xl font-serif text-[#0B0A09] select-none pointer-events-none opacity-40 font-normal">
                  {project.number}
                </div>

                {/* Left/Top Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 z-10 transition-transform duration-300 ease-out ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  style={{
                    transform: isHovered
                      ? `translate3d(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px, 0)`
                      : 'translate3d(0, 0, 0)',
                  }}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#722F37] block">
                      SYSTEM SPECIFICATION // {project.category}
                    </span>
                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E8] font-normal leading-[0.95] tracking-tight group-hover:text-[#F4F0E8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-serif text-2xl sm:text-3xl text-[#C8BFB2] italic pt-1">
                      "{project.subtitle}"
                    </p>
                  </div>

                  {/* Narrative Overview */}
                  <p className="text-sm sm:text-base text-[#8E8278] font-sans font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* ---------------- PROJECT 01: THE BEAR HOUSE RETAIL FLOW ---------------- */}
                  {project.id === 'bear-house' && (
                    <div
                      className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#722F37] border-b border-[#262320] pb-2">
                        <span className="font-bold uppercase flex items-center gap-1.5">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          RETAIL FLOW SIMULATOR (STAGE 0{bearStageSpread + 1}/07)
                        </span>
                        <span>46-DAY VM INTERNSHIP</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {bearStages.map((stg, bIdx) => (
                          <button
                            key={bIdx}
                            onClick={() => setBearStageSpread(bIdx)}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
                              bearStageSpread === bIdx
                                ? 'bg-[#722F37] text-[#F4F0E8] font-bold'
                                : 'bg-[#141211] text-[#8E8278] hover:text-[#F4F0E8]'
                            }`}
                          >
                            {stg}
                          </button>
                        ))}
                      </div>

                      <div className="text-xs font-mono text-[#C8BFB2] pt-1 flex items-center justify-between">
                        <span>7 Store Footprint Audited</span>
                        <span className="text-[#722F37]">2 Flagship NSO Launches</span>
                      </div>
                    </div>
                  )}

                  {/* ---------------- PROJECT 02: HEALING THE WAIT HUMAN-CENTERED DESIGN ---------------- */}
                  {project.id === 'healing-the-wait' && (
                    <div
                      className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#722F37] border-b border-[#262320] pb-2">
                        <span className="font-bold uppercase flex items-center gap-1.5">
                          <HeartHandshake className="w-3.5 h-3.5" />
                          EMPATHY SEQUENCE ({waitSteps[waitSpreadStep]})
                        </span>
                        <span>N = 35+ PATIENT INTERVIEWS</span>
                      </div>

                      <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                        {waitSteps.map((ws, wIdx) => (
                          <button
                            key={wIdx}
                            onClick={() => setWaitSpreadStep(wIdx)}
                            className={`px-2 py-0.5 rounded transition-all ${
                              waitSpreadStep === wIdx
                                ? 'bg-[#722F37] text-[#F4F0E8] font-bold'
                                : 'bg-[#141211] text-[#8E8278] hover:text-[#F4F0E8]'
                            }`}
                          >
                            {ws}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center font-mono pt-1">
                        <div className="p-2 rounded bg-[#141211] border border-[#262320]">
                          <div className="text-base font-serif text-[#F4F0E8]">66%</div>
                          <div className="text-[9px] text-[#722F37]">BOREDOM</div>
                        </div>
                        <div className="p-2 rounded bg-[#141211] border border-[#262320]">
                          <div className="text-base font-serif text-[#F4F0E8]">60%</div>
                          <div className="text-[9px] text-[#722F37]">ANXIETY</div>
                        </div>
                        <div className="p-2 rounded bg-[#141211] border border-[#262320]">
                          <div className="text-base font-serif text-[#F4F0E8]">40%</div>
                          <div className="text-[9px] text-[#722F37]">FRUSTRATION</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[10px] font-mono text-[#8E8278]">
                        <span>28-PAGE COFFEE TABLE PUBLICATION</span>
                        <span className="text-[#C8BFB2]">HEAL QUEUE BLUEPRINT</span>
                      </div>
                    </div>
                  )}

                  {/* ---------------- PROJECT 03: HOUSE OF MASABA ASSORTMENT SYSTEM ---------------- */}
                  {project.id === 'house-of-masaba' && (
                    <div
                      className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#722F37] border-b border-[#262320] pb-2">
                        <span className="font-bold uppercase flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          MERCHANDISE SYSTEM // 5 CATEGORIES
                        </span>
                        <span>1,008 SKUs · 40–60% MARGIN</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {MASABA_CATEGORIES.map((cat, mIdx) => (
                          <button
                            key={mIdx}
                            onClick={() => setMasabaSpreadCat(mIdx)}
                            className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
                              masabaSpreadCat === mIdx
                                ? 'bg-[#722F37] text-[#F4F0E8] font-bold'
                                : 'bg-[#141211] text-[#8E8278] hover:text-[#F4F0E8]'
                            }`}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>

                      <div className="p-2.5 rounded bg-[#141211] border border-[#262320] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#C8BFB2]">{MASABA_CATEGORIES[masabaSpreadCat].name}</span>
                        <span className="text-[#722F37] font-bold">RATIO: {MASABA_CATEGORIES[masabaSpreadCat].ratio}</span>
                      </div>
                    </div>
                  )}

                  {/* ---------------- PROJECT 04: 3AM INDIA DIGITAL CAMPAIGN ---------------- */}
                  {project.id === '3am-india' && (
                    <div
                      className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#722F37] border-b border-[#262320] pb-2">
                        <span className="font-bold uppercase flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5" />
                          CONTENT ENGINE (0{threeAmSpreadStep + 1} {threeAmStages[threeAmSpreadStep]})
                        </span>
                        <span>FOLLOWER GROWTH: +13%</span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#141211] border border-[#262320]">
                        <span className="font-serif text-3xl text-[#F4F0E8]">15K → 17K</span>
                        <span className="text-xs font-mono text-[#722F37] font-bold">+13% VERIFIED EXPANSION</span>
                      </div>

                      <div className="flex gap-2">
                        {threeAmStages.map((stg, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => setThreeAmSpreadStep(sIdx)}
                            className={`flex-1 py-1 rounded text-[10px] font-mono text-center ${
                              threeAmSpreadStep === sIdx ? 'bg-[#722F37] text-[#F4F0E8] font-bold' : 'bg-[#141211] text-[#8E8278]'
                            }`}
                          >
                            {stg}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ---------------- PROJECT 05: SUTRA EDIT STRATEGY SYSTEM ---------------- */}
                  {project.id === 'sutra-edit' && (
                    <div
                      className="p-5 rounded-2xl bg-[#0B0A09] border border-[#262320] space-y-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#722F37] border-b border-[#262320] pb-2">
                        <span className="font-bold uppercase flex items-center gap-1.5">
                          <GitBranch className="w-3.5 h-3.5" />
                          INDIA-FIRST FASHION INTELLIGENCE
                        </span>
                        <span>3-TIER ECOSYSTEM</span>
                      </div>

                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 font-mono text-[10px] text-center">
                        {sutraNodes.map((node, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => setSutraSpreadNode(sIdx)}
                            className={`p-1.5 rounded border ${
                              sutraSpreadNode === sIdx
                                ? 'bg-[#722F37] border-[#722F37] text-[#F4F0E8] font-bold'
                                : 'bg-[#141211] border-[#262320] text-[#8E8278]'
                            }`}
                          >
                            {node}
                          </button>
                        ))}
                      </div>

                      <div className="text-[11px] font-mono text-[#8E8278] flex justify-between">
                        <span>FLYING GROWTH LOOP</span>
                        <span className="text-[#C8BFB2]">CONTENT → ADVISORY</span>
                      </div>
                    </div>
                  )}

                  {/* Project Call to Action Link */}
                  <div className="pt-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#722F37] group-hover:text-[#F4F0E8] transition-colors">
                      <Eye className="w-4 h-4 text-[#722F37]" />
                      <span>ENTER CASE STUDY READER</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Animated Burgundy Hover Measurement Line */}
                    <div className="w-28 h-[1px] bg-[#262320] relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-[#722F37] transition-all duration-500 ease-out"
                        style={{
                          width: isHovered ? '100%' : '0%',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right/Bottom Image Column with Micro-Parallax & Crop Reveal */}
                <div
                  className={`lg:col-span-6 z-10 transition-transform duration-300 ease-out ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  style={{
                    transform: isHovered
                      ? `translate3d(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px, 0)`
                      : 'translate3d(0, 0, 0)',
                  }}
                >
                  <div className="relative overflow-hidden rounded-3xl border border-[#262320] group-hover:border-[#722F37]/80 shadow-2xl transition-all duration-500">
                    <ProjectImage
                      src={project.imagePath}
                      alt={project.title}
                      title={project.title}
                      category={project.category}
                      accentBg={project.accentBg}
                      accentColor={project.accentColor}
                      aspectRatio={project.composition === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                      className="rounded-3xl"
                    />

                    {/* Editorial Crop Coordinates Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0B0A09]/85 backdrop-blur-md border border-[#262320] font-mono text-[10px] text-[#C8BFB2] uppercase tracking-widest pointer-events-none">
                      [ + ] REF. {project.number} // {project.category.split('/')[0]}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};



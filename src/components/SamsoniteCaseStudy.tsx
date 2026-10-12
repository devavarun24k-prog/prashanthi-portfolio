import React from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PROJECTS_DATA, PERSONAL_DATA } from '../data/portfolioData';

interface SamsoniteCaseStudyProps {
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const SamsoniteCaseStudy: React.FC<SamsoniteCaseStudyProps> = ({
  onClose,
  onSelectProject,
}) => {
  const projectList = PROJECTS_DATA;
  const currentIndex = projectList.findIndex((p) => p.id === 'samsonite-smarttravel');
  const prevProject = projectList[(currentIndex - 1 + projectList.length) % projectList.length];
  const nextProject = projectList[(currentIndex + 1) % projectList.length];

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'RESUME', href: '#resume' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="samsonite-case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0A09] text-[#F4F0E8] select-none transition-all duration-500 animate-fadeIn"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="fixed inset-0 editorial-grid-bg opacity-15 pointer-events-none z-0" />

      {/* 4. Slim Header matching existing portfolio navigation */}
      <header className="sticky top-0 z-40 bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320] py-4 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Monogram */}
          <button
            onClick={() => handleNavClick('#hero')}
            className="group flex items-baseline text-left focus:outline-none"
            aria-label="Return to top"
          >
            <span className="font-serif text-2xl tracking-tight text-[#F4F0E8] group-hover:text-[#A87578] transition-colors font-normal">
              PRASHANTHI.B
            </span>
          </button>

          {/* Desktop Navigation + Project Controls */}
          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-7 text-xs font-mono font-medium uppercase tracking-wider">
              {navLinks.map((link) => {
                const isResume = link.label === 'RESUME';
                return (
                  <a
                    key={link.label}
                    href={isResume ? PERSONAL_DATA.cvUrl : link.href}
                    onClick={(e) => {
                      if (!isResume) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    target={isResume ? '_blank' : undefined}
                    rel={isResume ? 'noopener noreferrer' : undefined}
                    className="text-[#C8BFB2] hover:text-[#F4F0E8] transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    {isResume && <ArrowUpRight className="w-3 h-3 text-[#A87578]" />}
                  </a>
                );
              })}
            </nav>

            {/* Quick Switcher & Close Button */}
            <div className="flex items-center gap-2 border-l border-[#262320] pl-4 sm:pl-6">
              <div className="hidden sm:flex items-center border border-[#262320] rounded-full bg-[#141211]">
                <button
                  onClick={() => onSelectProject(prevProject)}
                  title={`Previous: ${prevProject.title}`}
                  className="p-1.5 text-[#C8BFB2] hover:text-[#A87578] transition-colors border-r border-[#262320]"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onSelectProject(nextProject)}
                  title={`Next: ${nextProject.title}`}
                  className="p-1.5 text-[#C8BFB2] hover:text-[#A87578] transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={onClose}
                aria-label="Close case study"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#262320] bg-[#141211] text-xs font-mono text-[#C8BFB2] hover:text-[#F4F0E8] hover:border-[#A87578] hover:bg-[#1a1715] transition-all group"
              >
                <span>CLOSE</span>
                <X className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-24 sm:pb-32 space-y-16 sm:space-y-24">
        
        {/* 5A. Project Metadata Row */}
        <section aria-label="Project Metadata" className="border-b border-[#262320] pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8E8278]">
            <span className="text-[#A87578] font-semibold">
              01 / PRODUCT MARKETING · ACADEMIC PROJECT
            </span>
            <span className="text-[#C8BFB2]">
              Academic Project
            </span>
          </div>
        </section>

        {/* 5B. Main Hero Grid (Asymmetric Desktop 40% / 60% Composition) */}
        <section aria-label="Project Hero" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column — ~40% (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-7">
            {/* 1. Genuine Samsonite Brand Header */}
            <div className="flex items-center gap-3">
              <span className="font-sans font-bold tracking-tight text-2xl sm:text-3xl text-[#F4F0E8] flex items-center leading-none">
                Samsonite
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#A87578] uppercase border border-[#722F37]/60 px-2 py-0.5 rounded">
                STRATEGY CASE
              </span>
            </div>

            {/* 2. Main Title */}
            <h1
              id="samsonite-case-study-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#F4F0E8] font-normal tracking-tight leading-[0.98]"
            >
              SmartTravel<span className="text-[#C88A90] font-sans font-light">+</span>
            </h1>

            {/* 3. Editorial Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#C88A90] italic font-normal leading-snug">
              Turning Travel Friction into a Product Opportunity
            </h2>

            {/* 4. Exact Overview Copy */}
            <p className="text-base sm:text-[17px] text-[#C8BFB2] font-sans font-light leading-relaxed">
              A product marketing and go-to-market strategy project exploring SmartTravel+, a proposed smart-luggage concept for the Indian market, built around traveller needs, product differentiation and Samsonite’s brand positioning.
            </p>

            {/* 5. Compact Project Metadata Row with Fine Dividers */}
            <div className="pt-6 border-t border-[#262320] grid grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
                  PROJECT TYPE
                </span>
                <span className="text-xs sm:text-[13px] font-sans font-medium text-[#F4F0E8] block">
                  Academic Project
                </span>
              </div>
              <div className="space-y-1.5 border-l border-[#262320] pl-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
                  FOCUS AREA
                </span>
                <span className="text-xs sm:text-[13px] font-sans font-medium text-[#F4F0E8] block">
                  Product Marketing
                </span>
              </div>
              <div className="space-y-1.5 border-l border-[#262320] pl-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E8278] block">
                  MARKET
                </span>
                <span className="text-xs sm:text-[13px] font-sans font-medium text-[#F4F0E8] block">
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column — ~60% (7 cols on lg): Integrated Luxury Image Composition */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Campaign Visual (s1.jpg) — Strongest visual weight */}
            <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-2xl group">
              <img
                src="/images/samsonite/s1.jpg"
                alt="Samsonite SmartTravel+ Campaign Visual"
                className="w-full aspect-[16/9] sm:aspect-[16/10] object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] font-mono text-[10px] text-[#C8BFB2] uppercase tracking-widest pointer-events-none">
                CAMPAIGN VISION // 01
              </div>
            </div>

            {/* Supporting 3-Panel Feature Row (s2.jpg, s3.jpg, s4.jpg) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {/* Product Detail Image (s2.jpg) */}
              <div className="relative rounded-xl overflow-hidden border border-[#262320] bg-[#141211] shadow-lg group">
                <img
                  src="/images/samsonite/s2.jpg"
                  alt="SmartTravel+ Integrated Weight Scale Handle"
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/80 to-transparent">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8BFB2] block truncate">
                    01 // WEIGHING
                  </span>
                </div>
              </div>

              {/* Tracking Image (s3.jpg) */}
              <div className="relative rounded-xl overflow-hidden border border-[#262320] bg-[#141211] shadow-lg group">
                <img
                  src="/images/samsonite/s3.jpg"
                  alt="SmartTravel+ Location Tracking Phone Interface"
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/80 to-transparent">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8BFB2] block truncate">
                    02 // TRACKING
                  </span>
                </div>
              </div>

              {/* Supporting Feature Image (s4.jpg) */}
              <div className="relative rounded-xl overflow-hidden border border-[#262320] bg-[#141211] shadow-lg group">
                <img
                  src="/images/samsonite/s4.jpg"
                  alt="SmartTravel+ Built-in Power and Mobile Charging"
                  className="w-full aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/80 to-transparent">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8BFB2] block truncate">
                    03 // IN-TRANSIT POWER
                  </span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* 6. Supporting Project Narrative (Restrained 4-Column Horizontal Layout) */}
        <section
          aria-label="Strategic Narrative"
          className="border-y border-[#262320] py-12 sm:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            
            {/* Block 01 — THE CHALLENGE */}
            <div className="space-y-4 lg:pr-8 lg:border-r lg:border-[#262320]">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] font-semibold block">
                01 — THE CHALLENGE
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#F4F0E8] leading-relaxed italic">
                “How can Samsonite make everyday travel more secure, convenient and connected through a differentiated luggage offering?”
              </p>
            </div>

            {/* Block 02 — KEY CONTRIBUTIONS */}
            <div className="space-y-4 lg:px-8 lg:border-r lg:border-[#262320]">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] font-semibold block">
                02 — KEY CONTRIBUTIONS
              </span>
              <ul className="space-y-2.5 text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#A87578] font-mono text-[10px] mt-1">●</span>
                  <span>Analysed traveller pain points, market trends and the competitive landscape.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A87578] font-mono text-[10px] mt-1">●</span>
                  <span>Developed the proposed product concept, target audience, positioning and pricing strategy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A87578] font-mono text-[10px] mt-1">●</span>
                  <span>Outlined the marketing mix, promotional campaign and go-to-market roadmap.</span>
                </li>
              </ul>
            </div>

            {/* Block 03 — OPPORTUNITY */}
            <div className="space-y-4 lg:px-8 lg:border-r lg:border-[#262320]">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] font-semibold block">
                03 — OPPORTUNITY
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#F4F0E8] leading-relaxed italic">
                “Explore how product differentiation can address traveller concerns around luggage security, convenience and connectivity.”
              </p>
            </div>

            {/* Block 04 — THE TAKEAWAY */}
            <div className="space-y-4 lg:pl-8">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] font-semibold block">
                04 — THE TAKEAWAY
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#F4F0E8] leading-relaxed italic">
                “Translating consumer pain points into a differentiated product proposition supported by brand strategy and market-entry planning.”
              </p>
            </div>

          </div>
        </section>

        {/* 7. Product Innovation & Feature Imagery Spotlight (s2, s3, s4) */}
        <section aria-label="Product Features" className="space-y-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#262320] pb-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] font-semibold block">
                FEATURE SPOTLIGHT
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] font-normal mt-1">
                Connected Product Architecture
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8E8278] uppercase tracking-wider">
              03 CORE VALUE PROPOSITIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 — Integrated Luggage Weighing (s2.jpg) */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl group">
                <img
                  src="/images/samsonite/s2.jpg"
                  alt="Integrated Luggage Weighing Scale"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A87578] block">
                  01 / WEIGHT ASSURANCE
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal leading-snug">
                  Integrated Handle Scale
                </h4>
                <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
                  Real-time digital weight feedback integrated into the ergonomic handle, allowing travellers to verify luggage limits before departure.
                </p>
              </div>
            </div>

            {/* Feature 2 — Luggage Location Tracking (s3.jpg) */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl group">
                <img
                  src="/images/samsonite/s3.jpg"
                  alt="Real-Time Location Tracking Interface"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A87578] block">
                  02 / CONNECTIVITY
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal leading-snug">
                  Real-Time Location Tracking
                </h4>
                <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
                  Mobile interface connectivity providing continuous location visibility and arrival tracking across terminals and transit routes.
                </p>
              </div>
            </div>

            {/* Feature 3 — Built-in Power (s4.jpg) */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#262320] bg-[#141211] shadow-xl group">
                <img
                  src="/images/samsonite/s4.jpg"
                  alt="Built-in Mobile Device Power Unit"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A87578] block">
                  03 / UTILITY & POWER
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal leading-snug">
                  Airline-Compliant Power
                </h4>
                <p className="text-xs sm:text-[13px] font-sans text-[#C8BFB2] leading-relaxed">
                  Removable high-capacity power bank supporting fast charging for devices on the move while adhering to international flight safety guidelines.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Transition to Next Project */}
        <section aria-label="Next Project Transition" className="pt-12 border-t border-[#262320]">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A87578] mb-4">
            NEXT SELECTED WORK // 02
          </div>
          <div
            onClick={() => {
              onSelectProject(nextProject);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group cursor-pointer p-8 sm:p-12 rounded-3xl bg-[#141211] border border-[#262320] hover:border-[#A87578] transition-all duration-500 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E8278] block">
                CONTINUE READING // {nextProject.type}
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl text-[#F4F0E8] font-normal group-hover:text-[#F4F0E8] group-hover:translate-x-2 transition-transform">
                {nextProject.title}
              </h3>
              <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic">
                "{nextProject.subtitle}"
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A87578] group-hover:text-[#F4F0E8] uppercase tracking-wider pt-2 transition-colors">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            <div className="w-full md:w-72 aspect-[16/10] rounded-2xl overflow-hidden border border-[#262320] bg-[#0B0A09] flex items-center justify-center p-6 text-center group-hover:scale-[1.03] transition-transform">
              <div>
                <div className="font-serif text-2xl text-[#F4F0E8]">{nextProject.title}</div>
                <div className="text-[10px] font-mono text-[#A87578] uppercase mt-1">{nextProject.category}</div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

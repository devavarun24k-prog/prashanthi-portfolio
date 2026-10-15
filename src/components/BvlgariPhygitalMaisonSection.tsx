import React, { useState } from 'react';
import { ZoomIn, X, Sparkles, Compass, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

interface JourneyPhase {
  id: string;
  name: string;
  tagline: string;
  touchpoints: string[];
  phygitalLever: string;
}

const JOURNEY_PHASES: JourneyPhase[] = [
  {
    id: 'discovery',
    name: 'DISCOVERY',
    tagline: 'Inspiration & Curated Allure',
    touchpoints: [
      'AI-curated personal jewelry suggestions',
      'Digital editorial storytelling & Serpenti heritage',
      'Remote styling previews prior to boutique visit'
    ],
    phygitalLever: 'Algorithmic curation preserving brand aura'
  },
  {
    id: 'boutique',
    name: 'BOUTIQUE',
    tagline: 'High-Touch Tactile Immersion',
    touchpoints: [
      'Seamless VIP appointment hand-off with clienteling profile',
      'In-salon Augmented Reality exploration & scale modeling',
      'Tactile craftsmanship discovery in private viewing suites'
    ],
    phygitalLever: 'Spatial AR elevating in-person client advisors'
  },
  {
    id: 'purchase',
    name: 'PURCHASE',
    tagline: 'Private Salon Finalization',
    touchpoints: [
      'Tailored consultation with dedicated Client Advisor',
      'Instant minting of Digital Product Passport on private ledger',
      'Bespoke packaging with cryptographically authenticated NFC seal'
    ],
    phygitalLever: 'Digital authentication preserving fine jewelry provenance'
  },
  {
    id: 'ownership',
    name: 'OWNERSHIP',
    tagline: 'Enduring Relationship & Provenance',
    touchpoints: [
      'Digital Product Passport accessible via private client vault',
      'Verifiable ownership history, gemstone origin & service logs',
      'Direct concierge messaging for cleaning & maintenance'
    ],
    phygitalLever: 'Persistent digital link between client, Maison, and jewel'
  },
  {
    id: 'retention',
    name: 'RETENTION',
    tagline: 'Privileged Access & Loyalty',
    touchpoints: [
      'Exclusive invitations to private High Jewellery unveilings',
      'Predictive milestone gifting & anniversary clienteling alerts',
      'Priority access to limited Serpenti bespoke commissions'
    ],
    phygitalLever: 'Predictive clienteling fostering generational relationships'
  }
];

export const BvlgariPhygitalMaisonSection: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; caption: string } | null>(null);

  const activePhase = JOURNEY_PHASES[activePhaseIndex];

  return (
    <article
      id="project-bvlgari"
      className="group relative pt-4 pb-20 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
    >
      {/* 0. Top Project Identification Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262320] pb-3 mb-8 sm:mb-12 font-mono text-xs text-[#8E8278]">
        <div className="flex items-center gap-3">
          <span className="text-[#722F37] font-bold text-sm">06 /</span>
          <span className="text-[#F4F0E8] font-medium tracking-[0.16em] uppercase">
            INNOVATIONS IN LUXURY RETAIL · BRAND STRATEGY
          </span>
        </div>
      </div>

      {/* 1. Main Title & Identity Presentation */}
      <div className="space-y-6 mb-12 sm:mb-16">
        <div className="space-y-3">
          {/* Roman Heritage Wordmark */}
          <div className="flex items-center gap-2 pt-1 font-mono text-[11px] uppercase tracking-[0.32em] text-[#722F37] font-semibold">
            <span>B V L G A R I</span>
            <span className="text-[#38332F]">•</span>
            <span className="text-[#8E8278]">ROMA</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-[#F4F0E8] font-normal leading-[1.05] tracking-tight">
            THE PHYGITAL MAISON
          </h2>

          <p className="font-serif text-xl sm:text-2xl text-[#C8BFB2] italic font-light pt-0.5">
            Bridging Craftsmanship and Digital Innovation
          </p>

          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light max-w-4xl leading-relaxed pt-2">
            A proposed strategy connecting Bvlgari’s heritage-led boutique experience with digital innovation to create a
            seamless, personalised luxury journey.
          </p>

          {/* Focus Areas Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-[#8E8278]">
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              Innovations in Luxury Retail
            </span>
            <span className="text-[#38332F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              Phygital Experiences
            </span>
            <span className="text-[#38332F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#F4F0E8]">
              Digital Clienteling
            </span>
            <span className="text-[#38332F]">•</span>
            <span className="px-3 py-1 rounded-md bg-[#141211] border border-[#262320] text-[#C8BFB2]">
              Omnichannel Strategy
            </span>
          </div>
        </div>
      </div>

      {/* 2. BESPOKE ASYMMETRICAL EDITORIAL IMAGE COMPOSITION */}
      <div className="space-y-6 sm:space-y-8 mb-16 sm:mb-24 pt-6 border-t border-[#262320]">
        
        {/* Upper Tier: Dual Strategic Plates (2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* Plate 01: Luxury Bulgari Serpenti AR Try-On.png */}
          <div className="group/card relative rounded-2xl border border-[#262320] bg-[#141211] p-3 shadow-xl transition-all duration-500 hover:border-[#722F37]/60">
            <div
              className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() =>
                setZoomedImage({
                  src: '/images/projects/bvlgari/Luxury Bulgari Serpenti AR Try-On.png',
                  caption: 'Spatial Exploration · Serpenti Augmented Reality Try-On Experience'
                })
              }
            >
              <img
                src="/images/projects/bvlgari/Luxury Bulgari Serpenti AR Try-On.png"
                alt="Luxury Bulgari Serpenti AR Try-On Experience"
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover/card:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8]">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Click to Inspect
                </span>
              </div>
            </div>

            <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8E8278]">
              <span className="text-[#C8BFB2]">01 / Spatial Exploration · Serpenti AR Try-On</span>
              <span className="text-[#722F37]">AR PROTOTYPE</span>
            </div>
          </div>

          {/* Plate 02: Bulgari Virtual Serpenti Consultation.png */}
          <div className="group/card relative rounded-2xl border border-[#262320] bg-[#141211] p-3 shadow-xl transition-all duration-500 hover:border-[#722F37]/60">
            <div
              className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
              onClick={() =>
                setZoomedImage({
                  src: '/images/projects/bvlgari/Bulgari Virtual Serpenti Consultation.png',
                  caption: 'VIP Clienteling · Remote Virtual Serpenti Consultation Suite'
                })
              }
            >
              <img
                src="/images/projects/bvlgari/Bulgari Virtual Serpenti Consultation.png"
                alt="Bulgari Virtual Serpenti Consultation Suite"
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover/card:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8]">
                  <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Click to Inspect
                </span>
              </div>
            </div>

            <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8E8278]">
              <span className="text-[#C8BFB2]">02 / VIP Clienteling · Remote Virtual Consultation</span>
              <span className="text-[#722F37]">DIGITAL SALON</span>
            </div>
          </div>

        </div>

        {/* Lower Tier: Spanning Horizon Spread — In Boutique, Beyond the Boutique.png */}
        <div className="group/spread relative rounded-2xl border border-[#262320] bg-[#141211] p-3.5 shadow-2xl transition-all duration-500 hover:border-[#722F37]/60">
          <div
            className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full rounded-xl overflow-hidden bg-[#0A0908] cursor-pointer"
            onClick={() =>
              setZoomedImage({
                src: '/images/projects/bvlgari/In Boutique, Beyond the Boutique.png',
                caption: 'Omnichannel Continuum · In Boutique, Beyond the Boutique'
              })
            }
          >
            <img
              src="/images/projects/bvlgari/In Boutique, Beyond the Boutique.png"
              alt="In Boutique, Beyond the Boutique — Omnichannel Luxury Continuum"
              className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 group-hover/spread:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/spread:opacity-100 transition-opacity flex items-center justify-center">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141211]/90 border border-[#722F37] text-xs font-mono text-[#F4F0E8]">
                <ZoomIn className="w-3.5 h-3.5 text-[#722F37]" /> Expand Full Horizon Spread
              </span>
            </div>
          </div>

          <div className="pt-3 px-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8E8278]">
            <span className="text-[#C8BFB2]">04 / Omnichannel Continuity · In Boutique, Beyond the Boutique</span>
            <span className="text-[#722F37]">PHYSICAL-DIGITAL BRIDGE</span>
          </div>
        </div>

      </div>

      {/* 3. THE CHALLENGE & STRATEGIC RESPONSE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-24 pt-6 border-t border-[#262320]">
        
        {/* Left Column: The Challenge */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              THE CORE DILEMMA
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            The Challenge
          </h3>
          <p className="font-serif text-lg text-[#F4F0E8] italic font-light leading-relaxed">
            "How can Bvlgari integrate digital convenience without compromising exclusivity, craftsmanship and human connection?"
          </p>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed pt-1">
            High jewelry thrives on tactile reverence, artisanal provenance, and intimate boutique relationships.
            When luxury brands adopt standard digital convenience, they risk diluting scarcity and commoditizing the client
            experience. The challenge was defining how emerging digital levers could amplify high-touch exclusivity rather
            than replace it.
          </p>
        </div>

        {/* Right Column: Strategic Response */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold">
              THE STRATEGIC RESPONSE
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal leading-snug">
            The Phygital Paradigm
          </h3>
          <p className="text-[15px] sm:text-base text-[#C8BFB2] font-sans font-light leading-relaxed">
            The Phygital Maison redefines the boutique not as a static transactional point of sale, but as the ceremonial
            heart of an ongoing, persistent relationship. By unifying physical boutique visits with private virtual salons,
            AR spatial exploration, and cryptographic digital passports, Bvlgari creates an uninterrupted luxury continuum.
          </p>
          <div className="p-4 rounded-xl border border-[#262320] bg-[#141211]/80 space-y-2 mt-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#722F37] font-semibold block">
              Core Principle
            </span>
            <p className="text-xs sm:text-sm text-[#F4F0E8] font-sans font-light leading-relaxed m-0">
              Technology should remain invisible in its mechanics and unmistakable in its service—elevating Client Advisors
              into informed custodians of lifelong patron relationships.
            </p>
          </div>
        </div>

      </div>

      {/* 4. KEY CONTRIBUTIONS (4 Distinctive Pillars) */}
      <div className="space-y-6 mb-16 sm:mb-24 pt-6 border-t border-[#262320]">
        
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block">
            STRATEGIC DELIVERABLES
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F0E8] font-normal leading-tight">
            Key Contributions
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-2">
          
          {/* Contribution 01 */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#262320] bg-[#141211]/70 space-y-3 flex flex-col justify-between transition-all duration-300 hover:border-[#722F37]/50 hover:bg-[#161413]">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#722F37] font-bold">01 /</span>
                <Compass className="w-4 h-4 text-[#8E8278]" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug">
                Experience Gap Analysis
              </h4>
              <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
                Identified gaps across digital discovery, boutique experiences and customer engagement.
              </p>
            </div>
            <div className="pt-3 border-t border-[#262320] text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
              Audit &amp; Discovery
            </div>
          </div>

          {/* Contribution 02 */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#262320] bg-[#141211]/70 space-y-3 flex flex-col justify-between transition-all duration-300 hover:border-[#722F37]/50 hover:bg-[#161413]">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#722F37] font-bold">02 /</span>
                <Sparkles className="w-4 h-4 text-[#722F37]" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug">
                AI, AR &amp; Digital Passports
              </h4>
              <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
                Proposed AI-powered personalisation, AR product exploration and Digital Product Passports.
              </p>
            </div>
            <div className="pt-3 border-t border-[#262320] text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
              Technological Levers
            </div>
          </div>

          {/* Contribution 03 */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#262320] bg-[#141211]/70 space-y-3 flex flex-col justify-between transition-all duration-300 hover:border-[#722F37]/50 hover:bg-[#161413]">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#722F37] font-bold">03 /</span>
                <Layers className="w-4 h-4 text-[#8E8278]" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug">
                Customer Journey Architecture
              </h4>
              <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
                Mapped the customer journey across discovery, purchase, ownership and retention.
              </p>
            </div>
            <div className="pt-3 border-t border-[#262320] text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
              End-to-End Mapping
            </div>
          </div>

          {/* Contribution 04 */}
          <div className="p-5 sm:p-6 rounded-2xl border border-[#262320] bg-[#141211]/70 space-y-3 flex flex-col justify-between transition-all duration-300 hover:border-[#722F37]/50 hover:bg-[#161413]">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#722F37] font-bold">04 /</span>
                <ShieldCheck className="w-4 h-4 text-[#722F37]" />
              </div>
              <h4 className="font-serif text-lg sm:text-xl text-[#F4F0E8] font-normal leading-snug">
                Strategic Retail Roadmap
              </h4>
              <p className="text-xs sm:text-[13px] text-[#C8BFB2] font-sans font-light leading-relaxed">
                Developed a strategic roadmap for phygital retail and digital clienteling.
              </p>
            </div>
            <div className="pt-3 border-t border-[#262320] text-[10px] font-mono text-[#8E8278] uppercase tracking-wider">
              Strategic Roadmap
            </div>
          </div>

        </div>

      </div>

      {/* 5. FOCUS AREAS & THE CUSTOMER JOURNEY CONTINUUM */}
      <div className="space-y-8 pt-6 border-t border-[#262320]">
        
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#722F37] font-semibold block">
            OMNICHANNEL BLUEPRINT
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4F0E8] font-normal leading-tight">
            The Customer Journey Continuum
          </h3>
          <p className="text-xs sm:text-sm text-[#8E8278] font-sans font-light max-w-3xl leading-relaxed">
            Representing the five interconnected phases of patron engagement. Click through each phase to inspect the
            phygital touchpoints that bridge the physical boutique with digital innovation.
          </p>
        </div>

        {/* Phase Step Selector Continuum */}
        <div className="p-4 sm:p-6 rounded-2xl border border-[#262320] bg-[#12100F] shadow-xl space-y-6">
          
          {/* Horizontal Step Indicator Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {JOURNEY_PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#181514] border-[#722F37] shadow-[0_0_15px_rgba(114,47,55,0.35)]'
                      : 'bg-[#141211]/60 border-[#262320] hover:border-[#38332F] hover:bg-[#161413]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8E8278] mb-1">
                    <span>PHASE 0{idx + 1}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#722F37]" />}
                  </div>
                  <div
                    className={`font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors ${
                      isActive ? 'text-[#F4F0E8]' : 'text-[#8E8278]'
                    }`}
                  >
                    {phase.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Details Display */}
          <div className="p-5 sm:p-6 rounded-xl border border-[#262320] bg-[#161413]/70 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#722F37]" />
                <span className="font-mono text-xs text-[#722F37] uppercase tracking-wider font-semibold">
                  ACTIVE PHASE: {activePhase.name}
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#F4F0E8] font-normal">
                {activePhase.tagline}
              </h4>
              <div className="pt-2 text-xs font-mono text-[#8E8278]">
                <span className="text-[#A87578] block uppercase">Phygital Lever:</span>
                <span className="text-[#C8BFB2]">{activePhase.phygitalLever}</span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-2.5 border-t md:border-t-0 md:border-l border-[#262320] pt-4 md:pt-0 md:pl-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8278] block mb-1">
                Strategic Phygital Touchpoints
              </span>
              <ul className="space-y-2">
                {activePhase.touchpoints.map((tp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C8BFB2] font-sans font-light">
                    <ArrowRight className="w-3.5 h-3.5 text-[#722F37] shrink-0 mt-0.5" />
                    <span>{tp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Subtle Continuum Progression Bar */}
          <div className="pt-2 border-t border-[#262320] flex flex-wrap items-center justify-between text-xs font-mono text-[#8E8278]">
            <span className="flex items-center gap-2">
              <span>DISCOVERY</span>
              <span>→</span>
              <span>BOUTIQUE</span>
              <span>→</span>
              <span>PURCHASE</span>
              <span>→</span>
              <span>OWNERSHIP</span>
              <span>→</span>
              <span>RETENTION</span>
            </span>
            <span className="text-[#A87578]">5-PHASE CONTINUOUS LIFECYCLE</span>
          </div>

        </div>

      </div>

      {/* Lightbox Zoom Modal for High-Resolution Image Inspection */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 bg-[#0E0C0B]">
            <img
              src={zoomedImage.src}
              alt={zoomedImage.caption}
              className="w-full h-full object-contain max-h-[80vh]"
            />
            <div className="p-3 bg-[#141211] border-t border-[#262320] flex items-center justify-between text-xs font-mono text-[#C8BFB2]">
              <span>{zoomedImage.caption}</span>
              <span className="text-[#722F37]">B V L G A R I</span>
            </div>
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </article>
  );
};

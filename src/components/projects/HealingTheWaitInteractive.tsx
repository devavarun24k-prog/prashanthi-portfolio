import React, { useState } from 'react';
import { Activity, CheckCircle2 } from 'lucide-react';

export const HealingTheWaitInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'design-thinking' | 'stats' | 'publication' | 'heal-queue'>('design-thinking');
  const [activeStage, setActiveStage] = useState(0);
  const [activeBookSpread, setActiveBookSpread] = useState(0);
  const [queueStep, setQueueStep] = useState(2); // In Queue simulator

  const designStages = [
    {
      number: '01',
      title: 'EMPATHIZE',
      subtitle: 'Field Observations & In-Depth Interviews',
      desc: 'Observed patient and caregiver journeys across OPD waiting halls. Conducted structured interviews to capture physiological and emotional strain during indeterminate waiting periods.',
      outcomes: [
        'Identified lack of status visibility as primary anxiety driver',
        'Mapped sensory stressors: harsh lighting, sterile seating, and chaotic announcements',
        'Captured real caregiver voices navigating emergency and scheduled consults'
      ],
      metrics: '35+ Patient & Caregiver Touchpoints Observed'
    },
    {
      number: '02',
      title: 'DEFINE',
      subtitle: 'Problem Statement & Friction Synthesis',
      desc: 'Synthesized field qualitative data into actionable problem statements. Waiting in healthcare is not merely a temporal delay; it is an emotional vacuum filled with fear and uncertainty.',
      outcomes: [
        'Core Pain Point: "Perceived wait time" is 2.5x longer than actual elapsed time',
        'Information asymmetry creates mistrust between reception desk and patient',
        'Defined opportunity: Humanize the wait through transparency and thoughtful physical space'
      ],
      metrics: '3 Core Emotional Stressors Mapped'
    },
    {
      number: '03',
      title: 'IDEATE',
      subtitle: 'Multi-Sensory & Service Solutions',
      desc: 'Explored interventions across physical environments, editorial comfort materials, and real-time digital queue transparency to replace anxiety with reassurance.',
      outcomes: [
        'Concept 1: Curated 28-page reflective coffee table publication for quiet reading zones',
        'Concept 2: Heal Queue digital companion providing real-time live appointment updates',
        'Concept 3: Ergonomic spatial layout separating acute anxiety zones from general waiting'
      ],
      metrics: '15+ Solution Concepts Generated'
    },
    {
      number: '04',
      title: 'PROTOTYPE',
      subtitle: 'Editorial Publication & Service Interface',
      desc: 'Developed high-fidelity prototypes: a physical 28-page editorial publication exploring healthcare empathy, alongside UI wireframes for the mobile-accessible Heal Queue system.',
      outcomes: [
        'Designed 28-page publication with tactile paper stocks and serene editorial cadence',
        'Architected Heal Queue mobile web interface with live token progress & physician status',
        'Drafted clear signposting system for hospital waiting lounges'
      ],
      metrics: '28-Page Publication & Full UI Blueprint'
    },
    {
      number: '05',
      title: 'TEST',
      subtitle: 'Validation & Feedback Iteration',
      desc: 'Presented publication spreads and digital queue workflows to healthcare visitors and stakeholders for usability, emotional comfort, and visual clarity testing.',
      outcomes: [
        '92% positive reception on editorial publication tone and typography',
        'Patients felt significantly more in control when tracking consultation progress',
        'Refined micro-copy to ensure language was compassionate rather than clinical'
      ],
      metrics: 'Validated by Healthcare Observers & Visitors'
    }
  ];

  const bookSpreads = [
    {
      title: '01 / THE PSYCHOLOGY OF WAITING',
      category: 'Research & Human Context',
      pages: 'Pages 04–09',
      summary: 'An exploration of how passive time distorts perceived waiting duration, and why silence without information heightens emotional vulnerability in medical spaces.',
      highlights: ['Perceived vs Actual Time Analysis', 'Caregiver Stress Triggers', 'The Emotional Landscape of Hospitals']
    },
    {
      title: '02 / VOICES FROM THE CORRIDOR',
      category: 'Qualitative Field Studies',
      pages: 'Pages 10–15',
      summary: 'Direct verbatim reflections, emotional heatmaps, and observational studies collected from waiting lounges across varied clinical environments.',
      highlights: ['66% Reported Persistent Boredom', '60% Stated Anxiety on Unknown Wait Times', '40% Reported Situational Frustration']
    },
    {
      title: '03 / SPATIAL & SENSORY REIMAGINATION',
      category: 'Environmental Design',
      pages: 'Pages 16–21',
      summary: 'Proposing biophilic spatial dividers, warm diffused lighting, acoustic buffering, and restorative reading micro-nooks within clinical footprints.',
      highlights: ['Zoning for Solitude vs Family Groups', 'Acoustic Calming Interventions', 'Natural Material Palettes']
    },
    {
      title: '04 / THE HEAL QUEUE BLUEPRINT',
      category: 'Digital Service Design',
      pages: 'Pages 22–28',
      summary: 'A comprehensive service ecosystem linking hospital reception management, live patient SMS/mobile tracking, and compassionate waiting experience touchpoints.',
      highlights: ['Live Queue Position Transparency', 'Physician Status Updates', 'Holistic Service Touchpoint Map']
    }
  ];

  return (
    <div className="space-y-12 text-[#0D0D0D]">
      {/* Section Header */}
      <div className="border-b border-[#0D0D0D]/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
            PROJECT 02 // INTERACTIVE DESIGN SYSTEM
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase border border-[#0D0D0D]/20 bg-[#F5F4F0] text-[#0D0D0D]">
            <Activity className="w-3 h-3 text-[#0D0D0D]" />
            Human-Centered Healthcare Innovation
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#0D0D0D]">
          Designing Compassion into Healthcare Waiting Spaces
        </h3>
        <p className="mt-2 text-sm text-[#666666] max-w-3xl leading-relaxed">
          Through in-depth human research, design thinking methodology, editorial book design, and digital service innovation, this project reimagines hospital waiting rooms from stressful transit corridors into transparent, calming spaces.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap border-b border-[#0D0D0D]/10 gap-2">
        <button
          onClick={() => setActiveTab('design-thinking')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'design-thinking'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          01. Design Thinking (5 Stages)
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'stats'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          02. Consumer Research Metrics
        </button>
        <button
          onClick={() => setActiveTab('publication')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'publication'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          03. 28-Page Publication Blueprint
        </button>
        <button
          onClick={() => setActiveTab('heal-queue')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'heal-queue'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          04. Heal Queue Interactive Concept
        </button>
      </div>

      {/* Tab 1: Design Thinking 5 Stages */}
      {activeTab === 'design-thinking' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#0D0D0D]/10 pb-6">
            {designStages.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`p-3 text-left border transition-all duration-200 ${
                  activeStage === idx
                    ? 'bg-[#0D0D0D] text-[#F5F4F0] border-[#0D0D0D]'
                    : 'bg-[#F5F4F0] text-[#666666] border-[#0D0D0D]/10 hover:border-[#0D0D0D]/40'
                }`}
              >
                <div className="text-[10px] font-mono tracking-widest opacity-60">STAGE {stage.number}</div>
                <div className="text-xs font-serif font-medium mt-1 truncate">{stage.title}</div>
              </button>
            ))}
          </div>

          <div className="bg-[#F5F4F0] p-6 md:p-8 border border-[#0D0D0D]/10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0D0D0D]/10 pb-4 mb-6">
              <div>
                <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
                  PHASE {designStages[activeStage].number} // METHODOLOGY
                </span>
                <h4 className="font-serif text-xl md:text-2xl font-normal text-[#0D0D0D] mt-1">
                  {designStages[activeStage].title} — {designStages[activeStage].subtitle}
                </h4>
              </div>
              <span className="px-3 py-1 font-mono text-xs border border-[#0D0D0D]/20 bg-white">
                {designStages[activeStage].metrics}
              </span>
            </div>

            <p className="text-sm md:text-base text-[#444444] leading-relaxed mb-6">
              {designStages[activeStage].desc}
            </p>

            <div>
              <div className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] mb-3">
                Key Strategic Deliverables & Observations:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {designStages[activeStage].outcomes.map((outcome, oIdx) => (
                  <div key={oIdx} className="bg-white p-4 border border-[#0D0D0D]/10 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#444444] leading-normal">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Consumer Research Metrics */}
      {activeTab === 'stats' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[#0D0D0D]/10 hover:border-[#0D0D0D] transition-all">
              <div className="font-mono text-4xl md:text-5xl font-light text-[#0D0D0D]">66%</div>
              <div className="font-mono text-xs tracking-widest text-[#666666] uppercase mt-2">
                BOREDOM & APATHY
              </div>
              <p className="text-xs text-[#555555] mt-3 leading-relaxed">
                Respondents expressed high mental exhaustion from static, unengaging environments with zero intellectual or sensory stimulation during prolonged waits.
              </p>
              <div className="mt-4 pt-4 border-t border-[#0D0D0D]/10 text-[11px] font-mono text-[#0D0D0D]">
                Target: Curated editorial reading & calming environmental cues
              </div>
            </div>

            <div className="p-6 bg-white border border-[#0D0D0D]/10 hover:border-[#0D0D0D] transition-all">
              <div className="font-mono text-4xl md:text-5xl font-light text-[#0D0D0D]">60%</div>
              <div className="font-mono text-xs tracking-widest text-[#666666] uppercase mt-2">
                ACUTE ANXIETY
              </div>
              <p className="text-xs text-[#555555] mt-3 leading-relaxed">
                Triggered primarily by unpredictable consult schedules and complete opacity regarding where the doctor currently is in the patient queue.
              </p>
              <div className="mt-4 pt-4 border-t border-[#0D0D0D]/10 text-[11px] font-mono text-[#0D0D0D]">
                Target: Heal Queue live tracking with transparent stage updates
              </div>
            </div>

            <div className="p-6 bg-white border border-[#0D0D0D]/10 hover:border-[#0D0D0D] transition-all">
              <div className="font-mono text-4xl md:text-5xl font-light text-[#0D0D0D]">40%</div>
              <div className="font-mono text-xs tracking-widest text-[#666666] uppercase mt-2">
                SITUATIONAL FRUSTRATION
              </div>
              <p className="text-xs text-[#555555] mt-3 leading-relaxed">
                Stemming from conflicting instructions, sterile crowded benches, loud announcements, and lack of privacy for sensitive consultations.
              </p>
              <div className="mt-4 pt-4 border-t border-[#0D0D0D]/10 text-[11px] font-mono text-[#0D0D0D]">
                Target: Spatial micro-zoning and quiet seating clusters
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#F5F4F0] border border-[#0D0D0D]/10">
            <div className="font-mono text-xs tracking-widest uppercase text-[#0D0D0D] mb-2">
              RESEARCH SYNTHESIS PRINCIPLE
            </div>
            <p className="text-sm text-[#444444] leading-relaxed">
              "When people lack information, their imagination defaults to the worst possible scenario. Transparent design does not shorten clinical procedures, but it radically removes the perceived burden of time."
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Publication Architecture */}
      {activeTab === 'publication' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[#0D0D0D]/10 pb-3">
            <div className="font-mono text-xs tracking-widest text-[#666666] uppercase">
              28-PAGE COFFEE TABLE PUBLICATION ARCHITECTURE
            </div>
            <span className="font-mono text-xs text-[#0D0D0D]">Editorial Format: 210 × 280mm</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {bookSpreads.map((spread, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBookSpread(idx)}
                className={`p-5 text-left border transition-all duration-200 ${
                  activeBookSpread === idx
                    ? 'bg-[#0D0D0D] text-[#F5F4F0] border-[#0D0D0D]'
                    : 'bg-white text-[#0D0D0D] border-[#0D0D0D]/10 hover:border-[#0D0D0D]/40'
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest opacity-60 block">
                  {spread.pages}
                </span>
                <div className="font-serif text-sm font-medium mt-1 mb-2">
                  {spread.title}
                </div>
                <div className="text-[11px] opacity-70 line-clamp-2">
                  {spread.category}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-[#F5F4F0] p-6 border border-[#0D0D0D]/10 mt-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0D0D0D]/10 pb-3 mb-4">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#666666] uppercase">
                  {bookSpreads[activeBookSpread].category} • {bookSpreads[activeBookSpread].pages}
                </span>
                <h4 className="font-serif text-lg text-[#0D0D0D] mt-0.5">
                  {bookSpreads[activeBookSpread].title}
                </h4>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 bg-white border border-[#0D0D0D]/10">
                Editorial Spread
              </span>
            </div>
            <p className="text-sm text-[#444444] leading-relaxed mb-4">
              {bookSpreads[activeBookSpread].summary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {bookSpreads[activeBookSpread].highlights.map((h, i) => (
                <div key={i} className="bg-white p-3 border border-[#0D0D0D]/10 text-xs text-[#333333] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Heal Queue Interactive Concept */}
      {activeTab === 'heal-queue' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-[#F5F4F0] p-6 border border-[#0D0D0D]/10">
            <div className="max-w-xl mx-auto bg-white border border-[#0D0D0D]/20 shadow-sm p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-[#0D0D0D]/10 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#0D0D0D]" />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase">HEAL QUEUE // LIVE</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-[#0D0D0D] text-[#F5F4F0] uppercase">
                  TOKEN #B-42
                </span>
              </div>

              <div className="text-center py-4 border-b border-[#0D0D0D]/10">
                <div className="font-mono text-xs text-[#666666] uppercase tracking-widest">
                  Estimated Consult In
                </div>
                <div className="font-serif text-3xl font-light text-[#0D0D0D] my-1">
                  12 — 15 Mins
                </div>
                <div className="text-xs text-[#666666]">
                  2 Patients ahead in Dr. Sharma’s OPD (Cabin 04)
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-3">
                <div className="font-mono text-[11px] tracking-wider text-[#666666] uppercase">
                  Real-time Appointment Tracker:
                </div>
                {[
                  { label: 'Check-in & Vitals Logged', time: '10:45 AM', completed: queueStep >= 0 },
                  { label: 'Nurse Pre-Consultation Completed', time: '11:02 AM', completed: queueStep >= 1 },
                  { label: 'Next in Queue (Proceed to Cabin 04 Lounge)', time: '11:15 AM', completed: queueStep >= 2 },
                  { label: 'Physician Consultation in Progress', time: 'Upcoming', completed: queueStep >= 3 }
                ].map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => setQueueStep(idx)}
                    className={`p-3 border text-xs flex items-center justify-between cursor-pointer transition-all ${
                      queueStep >= idx
                        ? 'bg-[#0D0D0D]/5 border-[#0D0D0D]/30 text-[#0D0D0D]'
                        : 'bg-white border-[#0D0D0D]/10 text-[#888888]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
                        queueStep >= idx ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]' : 'border-[#999999]'
                      }`}>
                        {queueStep >= idx ? '✓' : idx + 1}
                      </div>
                      <span className="font-medium">{step.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#666666]">{step.time}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-[#666666] font-mono">
                  [Click any step above to simulate real-time patient status transition]
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

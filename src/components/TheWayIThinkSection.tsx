import React, { useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export const TheWayIThinkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const manifestoSteps = [
    {
      word: 'TREND',
      number: '01',
      subtitle: 'The Cultural Pulse',
      description: 'Decoding what is emerging in the cultural atmosphere before it solidifies into mainstream demand. Spotting the subtle shifts in art, music, travel, and social rituals that redefine what people aspire to wear.',
      quote: 'Trends are not random spikes; they are cultural conversations made visible.'
    },
    {
      word: 'CUSTOMER',
      number: '02',
      subtitle: 'The Human Context',
      description: 'Understanding the consumer not as a demographic statistic, but as a living human with insecurities, aspirations, comfort needs, and distinct daily dressing rituals.',
      quote: 'Great merchandising begins by listening to how people actually live.'
    },
    {
      word: 'PRODUCT',
      number: '03',
      subtitle: 'The Physical Object',
      description: 'Interrogating the garment’s tactile integrity, silhouette architecture, seam finishes, and size grading. Ensuring the physical reality surpasses the promise of the campaign.',
      quote: 'If the product does not feel exceptional in the hand, marketing is merely temporary noise.'
    },
    {
      word: 'STORY',
      number: '04',
      subtitle: 'The Emotional Resonance',
      description: 'Constructing the narrative bridge that connects product craft to human imagination. Crafting visual codes, color stories, and campaign language that resonate without pretense.',
      quote: 'People buy clothes to wear, but they choose brands to belong.'
    },
    {
      word: 'EXPERIENCE',
      number: '05',
      subtitle: 'The Spatial Reality',
      description: 'Orchestrating the final moment of encounter. From the atmospheric scent and lighting of a retail store to the intuitive ease of unboxing and trial room confidence.',
      quote: 'The retail floor is where creative brand identity faces commercial reality.'
    }
  ];

  return (
    <section id="think" className="py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-[#282828] bg-[#151515] text-[#FAF9F6]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#282828]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#B7B1A8] uppercase font-semibold">
            <span className="font-bold text-[#FAF9F6] bg-[#1C1C1C] px-2 py-0.5 border border-[#282828]">
              03 / 10
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#5A2427]" />
            <span>TRANSITIONAL MANIFESTO</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#FAF9F6] tracking-tight">
            The Way I Think
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#B7B1A8] leading-relaxed">
          A sequential evaluation framework that guides every buying decision, merchandise assortment, and spatial retail layout.
        </p>
      </div>

      {/* Manifesto Cascade Layout */}
      <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Oversized Typographic Chain (Cols 6) */}
        <div className="lg:col-span-6 space-y-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#77736D] font-semibold block mb-4">
            WHAT I LOOK FOR // SEQUENCE
          </span>

          {manifestoSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div key={step.word} className="space-y-2">
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#1C1C1C] border-[#FAF9F6] text-[#FAF9F6]'
                      : 'bg-transparent border-[#282828] text-[#77736D] hover:border-[#77736D] hover:text-[#FAF9F6]'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-widest opacity-60">
                      {step.number}
                    </span>
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                      {step.word}
                    </span>
                  </div>

                  <span className={`text-xs font-mono tracking-widest uppercase transition-opacity ${
                    isActive ? 'opacity-100 text-[#B7B1A8]' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {step.subtitle}
                  </span>
                </button>

                {/* Arrow connector between words */}
                {idx < manifestoSteps.length - 1 && (
                  <div className="flex justify-center py-1 text-[#282828]">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Editorial Deep Dive on Active Step (Cols 6) */}
        <div className="lg:col-span-6 sticky top-28 space-y-6">
          <div className="p-8 sm:p-10 bg-[#1C1C1C] border border-[#282828] space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#282828] pb-4">
              <span className="font-mono text-xs text-[#B7B1A8] uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A2427]" />
                STAGE {manifestoSteps[activeStep].number} // PHILOSOPHY
              </span>
              <span className="font-mono text-xs text-[#77736D]">
                {manifestoSteps[activeStep].subtitle}
              </span>
            </div>

            <div>
              <div className="font-serif text-4xl sm:text-5xl text-[#FAF9F6] font-normal leading-tight">
                {manifestoSteps[activeStep].word}
              </div>
              <p className="text-sm sm:text-base text-[#B7B1A8] leading-relaxed font-sans font-light mt-4">
                {manifestoSteps[activeStep].description}
              </p>
            </div>

            <div className="p-5 bg-[#151515] border-l-2 border-[#5A2427] text-sm font-serif italic text-[#FAF9F6]">
              "{manifestoSteps[activeStep].quote}"
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#77736D] border-t border-[#282828]">
              <span>STRATEGIC ALIGNMENT</span>
              <span className="text-[#FAF9F6]">STEP {activeStep + 1} OF 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

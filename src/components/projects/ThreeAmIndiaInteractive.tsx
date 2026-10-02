import React, { useState } from 'react';
import { Share2, FileText, Sparkles, Users } from 'lucide-react';

export const ThreeAmIndiaInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'process' | 'ingredient-lab' | 'pillars' | 'campaign'>('process');
  const [selectedIngredient, setSelectedIngredient] = useState(0);

  const processSteps = [
    {
      step: '01',
      title: 'RESEARCH',
      subtitle: 'Formulation & Clinical Literature Audit',
      desc: 'Investigated chemical mechanisms of active ingredients, clinical concentration thresholds, and skin barrier biology to establish absolute factual accuracy before content creation.',
      deliverables: ['Active ingredient safety profiles', 'Dermatological efficacy benchmarks', 'Myth vs Fact documentation']
    },
    {
      step: '02',
      title: 'SIMPLIFY',
      subtitle: 'Jargon Deconstruction & Analogy Mapping',
      desc: 'Translated dense cosmetic chemistry into clear, human-centered language. Replaced clinical obscurity with direct functional benefits that resonate with young skincare consumers.',
      deliverables: ['"Before & After" consumer vocabulary guide', 'Ingredient pairing cheat sheets', 'Visual metaphorical explainers']
    },
    {
      step: '03',
      title: 'CREATE',
      subtitle: 'Multi-Format Content & Long-Form Articles',
      desc: 'Authored comprehensive blog articles and conceptualized educational carousel infographics engineered for high save-and-share rates across social channels.',
      deliverables: ['Editorial skincare blog posts', 'Instagram multi-slide educational carousels', 'Interactive Q&A story templates']
    },
    {
      step: '04',
      title: 'CONNECT',
      subtitle: 'Influencer Seeding & Community Dialogue',
      desc: 'Curated targeted outreach lists of skincare advocates, managed PR seeding, and actively engaged with consumer comments to build genuine brand affinity.',
      deliverables: ['Vetted creator matchmaking roster', 'Personalized PR outreach messaging', 'Community response guideline matrix']
    }
  ];

  const ingredients = [
    {
      name: 'Niacinamide (Vitamin B3)',
      clinical: 'Inhibits melanosome transfer from melanocytes to keratinocytes; upregulates ceramide biosynthesis and lipid synthesis.',
      simplified: 'The multi-tasking skin balancer: fades dark marks, tightens visible pores, and strengthens your moisture barrier without irritation.',
      application: 'Hero blog guides, routine-stacking carousels, and oily-skin educational reels.'
    },
    {
      name: 'Ceramides Complex',
      clinical: 'Lipid molecules composed of sphingosine and a fatty acid maintaining the integrity of the stratum corneum extracellular matrix.',
      simplified: 'The "mortar" holding your skin cells ("bricks") together. Essential for locking hydration in and keeping irritants out.',
      application: 'Barrier-repair educational series, post-exfoliation rescue guides.'
    },
    {
      name: 'Salicylic Acid (BHA)',
      clinical: 'Lipophilic beta-hydroxy acid that penetrates sebaceous filaments to perform intrapore desquamation.',
      simplified: 'The oil-soluble pore cleanser: dives deep into congested pores to dissolve stubborn trapped oil, dead skin, and blackheads.',
      application: 'Acne myth-busting guides and AM/PM routine cheat sheets.'
    },
    {
      name: 'Hyaluronic Acid',
      clinical: 'High-molecular glycosaminoglycan capable of binding up to 1,000 times its molecular weight in water molecules.',
      simplified: 'A moisture magnet that plumps dehydrated skin by drawing deep hydration into the upper skin layers.',
      application: 'Dehydrated vs dry skin explainer carousels and humidity layering tips.'
    }
  ];

  return (
    <div className="space-y-12 text-[#0D0D0D]">
      {/* Header */}
      <div className="border-b border-[#0D0D0D]/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="font-mono text-xs tracking-widest text-[#666666] uppercase">
            PROJECT 04 // DIGITAL CONSUMER ENGAGEMENT & MARKETING
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase border border-[#0D0D0D]/20 bg-[#F5F4F0] text-[#0D0D0D]">
            <Share2 className="w-3 h-3 text-[#0D0D0D]" />
            Content Strategy • Research • Creator Outreach
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-normal text-[#0D0D0D]">
          Demystifying Skincare Chemistry into Transparent Community Narratives
        </h3>
        <p className="mt-2 text-sm text-[#666666] max-w-3xl leading-relaxed">
          At 3AM India, the focus was creating clarity in a crowded, jargon-heavy skincare industry through research-driven content strategy, ingredient simplification, educational blog writing, and targeted creator outreach.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-[#0D0D0D]/10 gap-2">
        <button
          onClick={() => setActiveTab('process')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'process'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          01. 4-Step Strategic Engine
        </button>
        <button
          onClick={() => setActiveTab('ingredient-lab')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'ingredient-lab'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          02. Ingredient Translation Lab
        </button>
        <button
          onClick={() => setActiveTab('pillars')}
          className={`px-4 py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 border-b-2 ${
            activeTab === 'pillars'
              ? 'border-[#0D0D0D] text-[#0D0D0D] font-bold bg-[#0D0D0D]/5'
              : 'border-transparent text-[#666666] hover:text-[#0D0D0D]'
          }`}
        >
          03. Content & Outreach Pillars
        </button>
      </div>

      {/* Tab 1: 4-Step Process */}
      {activeTab === 'process' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
          {processSteps.map((step) => (
            <div key={step.step} className="p-6 bg-[#F5F4F0] border border-[#0D0D0D]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#0D0D0D]/10 pb-3 mb-4">
                  <span className="font-mono text-sm font-bold text-[#0D0D0D]">PHASE {step.step}</span>
                  <span className="font-serif text-lg text-[#0D0D0D]">{step.title}</span>
                </div>
                <div className="font-mono text-xs text-[#666666] uppercase mb-2">{step.subtitle}</div>
                <p className="text-xs text-[#444444] leading-relaxed mb-4">{step.desc}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#0D0D0D]/10">
                <div className="font-mono text-[10px] text-[#666666] uppercase mb-2">Key Outputs:</div>
                <div className="space-y-1">
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="text-xs text-[#222222] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#0D0D0D] rounded-full" />
                      {del}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Ingredient Translation Lab */}
      {activeTab === 'ingredient-lab' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {ingredients.map((ing, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIngredient(idx)}
                className={`p-3 text-left border transition-all ${
                  selectedIngredient === idx
                    ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                    : 'bg-white text-[#0D0D0D] border-[#0D0D0D]/10 hover:border-[#0D0D0D]/40'
                }`}
              >
                <div className="font-serif text-xs font-medium">{ing.name}</div>
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 bg-[#F5F4F0] border border-[#0D0D0D]/10">
            <h4 className="font-serif text-xl text-[#0D0D0D] mb-6">
              {ingredients[selectedIngredient].name} — Translation Breakdown
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 border border-[#0D0D0D]/10">
                <div className="font-mono text-xs text-[#888888] uppercase tracking-wider mb-2">
                  BEFORE: Clinical Literature Jargon
                </div>
                <p className="text-xs text-[#666666] leading-relaxed italic">
                  "{ingredients[selectedIngredient].clinical}"
                </p>
              </div>

              <div className="bg-[#0D0D0D] text-[#F5F4F0] p-5">
                <div className="font-mono text-xs text-[#999999] uppercase tracking-wider mb-2">
                  AFTER: 3AM Simplified Consumer Narrative
                </div>
                <p className="text-xs text-[#E5E5E5] leading-relaxed font-light">
                  "{ingredients[selectedIngredient].simplified}"
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#0D0D0D]/10 flex items-center justify-between text-xs">
              <span className="font-mono text-[#666666]">Content Application:</span>
              <span className="font-medium text-[#0D0D0D]">{ingredients[selectedIngredient].application}</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Pillars */}
      {activeTab === 'pillars' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          <div className="p-6 bg-white border border-[#0D0D0D]/10">
            <div className="w-8 h-8 rounded bg-[#0D0D0D] text-white flex items-center justify-center mb-4">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-[#0D0D0D]">Educational Blog Writing</h4>
            <p className="text-xs text-[#555555] mt-2 leading-relaxed">
              Researched and drafted in-depth SEO-optimized guides answering real consumer skincare dilemmas, from barrier repair routines to active ingredient layering protocols.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#0D0D0D]/10">
            <div className="w-8 h-8 rounded bg-[#0D0D0D] text-white flex items-center justify-center mb-4">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-[#0D0D0D]">Organic Social Content</h4>
            <p className="text-xs text-[#555555] mt-2 leading-relaxed">
              Conceptualized snackable carousel graphics, myth-busters, and interactive story formats designed to maximize saves, shares, and brand recall.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#0D0D0D]/10">
            <div className="w-8 h-8 rounded bg-[#0D0D0D] text-white flex items-center justify-center mb-4">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg text-[#0D0D0D]">Influencer Seeding & Outreach</h4>
            <p className="text-xs text-[#555555] mt-2 leading-relaxed">
              Coordinated end-to-end outreach with aligned beauty creators, managing product seeding, brief alignment, and tracking organic engagement metrics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

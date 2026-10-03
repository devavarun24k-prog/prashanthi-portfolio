import { useState, useEffect, useRef } from 'react';
import { Droplets, Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';

interface ThreeAmWorldProps {
  className?: string;
}

export const ThreeAmWorld: React.FC<ThreeAmWorldProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const tabs = [
    {
      label: 'CLEAN SKINCARE',
      tagline: 'Science + Nature Formulations',
      headline: 'Minimalist Frosted Bottles, Serums & Face Mists',
      detail: 'Jargon-free clean skincare architecture combining potent plant actives, barrier-repair ceramides, and multi-functional daily rituals.',
      badge: 'Product Formulations',
      items: [
        { name: 'Vitamin C Serum', format: '10% Ascorbyl + Kakadu Plum', feature: 'Pipette Dropper', tag: 'Brightening' },
        { name: 'Speed Dial Face Mist', format: 'Multi-Depth Hyaluronic Acid', feature: 'Micro-Fine Spray', tag: 'Hydration' },
        { name: 'Baesic Moisturiser', format: 'Ceramide Barrier Complex', feature: '50ml Airless Jar', tag: 'Nourishment' },
      ],
    },
    {
      label: '4-STEP STRATEGY',
      tagline: 'Consumer Communication Loop',
      headline: 'Demystifying Skincare Science for Indian Consumers',
      detail: 'A transparent communication framework turning complex dermatology and active ingredient chemistry into accessible, confidence-building rituals.',
      badge: 'Strategy Loop',
      items: [
        { name: '01 Research', format: 'Skin Barrier Chemistry', feature: 'Ingredient Transparency', tag: 'Evidence' },
        { name: '02 Simplify', format: 'Jargon-Free Copywriting', feature: 'Clear Usage Guidelines', tag: 'Education' },
        { name: '03 Create', format: 'Multi-Functional Rituals', feature: 'Fast Absorption Textures', tag: 'Rituals' },
        { name: '04 Connect', format: 'D2C Community Feedback', feature: 'Continuous Iteration', tag: 'Community' },
      ],
    },
    {
      label: 'D2C COMMUNITY',
      tagline: '15K → 17K (+13% Growth)',
      headline: 'Building an Engaged Skincare Community',
      detail: 'Audience scale and repeat engagement driven by authentic routine-building content, UGC skin journeys, and transparent skincare education.',
      badge: '+13% Growth',
      items: [
        { name: 'Audience Scale', format: '15,000 → 17,000 Followers', feature: '+13% Net Growth', tag: 'Reach' },
        { name: 'Engagement Rate', format: 'High Save & Share Metrics', feature: 'Routine-Led Content', tag: 'Retention' },
        { name: 'Brand Trust', format: 'Demystified Actives Education', feature: 'Organic Community UGC', tag: 'Advocacy' },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calm automatic rotation
  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, tabs.length]);

  const current = tabs[activeTab];

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl bg-[#101211] border border-[#252D28] overflow-hidden p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Background Clean Botanical Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#8E8278_1.2px,transparent_1.2px)] [background-size:2rem_2rem]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#722F37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#252D28] pb-4">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <Droplets className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#722F37]">
              CLEAN SKINCARE & D2C BRAND STRATEGY
            </span>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal tracking-tight">
            3AM INDIA
          </h4>
        </div>

        {/* Interactive Story Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0A0C0B] p-1 rounded-full border border-[#252D28]">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all ${
                activeTab === idx
                  ? 'bg-[#722F37] text-[#F4F0E8] font-bold shadow'
                  : 'text-[#8E8278] hover:text-[#F4F0E8]'
              }`}
            >
              {tab.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Central Visual Showcase Spread */}
      <div className="relative z-10 py-6 space-y-6">
        {/* Headline & Detail */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#722F37]/25 border border-[#722F37]/50 text-[9px] font-mono text-[#F4F0E8] uppercase tracking-wider font-semibold">
              {current.badge}
            </span>
            <span className="text-xs font-mono text-[#C8BFB2] uppercase tracking-wider">
              {current.tagline}
            </span>
          </div>
          <h5 className="font-serif text-xl sm:text-2xl text-[#F4F0E8] font-normal leading-snug">
            {current.headline}
          </h5>
          <p className="text-xs sm:text-sm text-[#8E8278] font-sans font-light leading-relaxed max-w-2xl">
            {current.detail}
          </p>
        </div>

        {/* Product / Strategy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#161A18] border border-[#252D28] hover:border-[#722F37] transition-all space-y-2 text-left shadow-lg"
            >
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#722F37]">
                <span>0{idx + 1} // {item.tag}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
              </div>
              <div>
                <div className="font-serif text-base text-[#F4F0E8] leading-tight">{item.name}</div>
                <div className="text-[10px] text-[#C8BFB2] font-mono mt-0.5">{item.format}</div>
              </div>
              <div className="pt-2 border-t border-[#202723] flex items-center justify-between text-[8.5px] font-mono text-[#8E8278]">
                <span>Format</span>
                <span className="text-[#722F37] font-semibold">{item.feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Context Footer */}
      <div className="relative z-10 border-t border-[#252D28] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E8278]">
        <div className="flex items-center gap-2 text-[11px] text-[#C8BFB2]">
          <HeartHandshake className="w-3.5 h-3.5 text-[#722F37]" />
          <span>Clean Skincare Formulations · 4-Step Strategy Loop · 15K → 17K (+13%) Community Scale</span>
        </div>
        <div className="flex items-center gap-1 text-[#722F37] text-[11px] font-semibold">
          <span>Explore 3AM India Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

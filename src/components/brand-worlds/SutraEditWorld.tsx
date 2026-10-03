import { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles, ArrowRight, FileText } from 'lucide-react';

interface SutraEditWorldProps {
  className?: string;
}

export const SutraEditWorld: React.FC<SutraEditWorldProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const tabs = [
    {
      label: 'FASHION INTELLIGENCE',
      tagline: 'Vol. 04 · What’s Changing in Indian Fashion',
      headline: 'Strategic Signals & Market Intelligence Dispatches',
      detail: 'Executive synthesis tracking consumer migration toward high-end prêt, mid-market margin pressures, and D2C omnichannel penetration in India.',
      badge: 'Executive Journal',
      items: [
        { title: 'Prêt Over Embellishment', stat: 'High-Growth', sub: 'Shift toward versatile everyday luxury', tag: 'Consumer' },
        { title: 'Mid-Market Margin Squeeze', stat: '₹4K–₹12K Band', sub: 'Rising CAC & raw material price pressure', tag: 'Economics' },
        { title: 'Omnichannel Regional Scale', stat: 'Tier 2/3 Expansion', sub: 'D2C brands establishing physical EBOs', tag: 'Channels' },
        { title: 'Standardized Sizing Models', stat: 'XS–XL Calibration', sub: 'Eliminating broken-size inventory returns', tag: 'Sizing' },
      ],
    },
    {
      label: '3-TIER PLATFORM',
      tagline: 'Editorial to Paid Retainers',
      headline: 'The Weekly Edit · The Dashboard · 1:1 Advisory',
      detail: 'A multi-layered intelligence platform that converts free thought leadership and community authority into high-margin executive advisory retainers.',
      badge: 'Platform Architecture',
      items: [
        { title: '01 The Weekly Edit', stat: 'Weekly Dispatches', sub: 'Executive newsletter & trend synthesis', tag: 'Editorial' },
        { title: '02 The Dashboard', stat: 'Category Index', sub: 'Proprietary Indian SKU pricing data', tag: 'Intelligence' },
        { title: '03 1:1 Advisory Practice', stat: 'Bespoke Retainer', sub: 'Assortment reviews & retail VM strategy', tag: 'Consulting' },
      ],
    },
    {
      label: 'BUSINESS MODEL',
      tagline: 'Tiered Monetization Engine',
      headline: 'Starter, Pro & Sutra Circle Retainers',
      detail: 'Structured recurring revenue streams spanning open-access thought leadership to high-retaining executive consulting and founder roundtables.',
      badge: 'Recurring Engine',
      items: [
        { title: 'Starter Edit', stat: 'Free / Open', sub: 'Public essays & bi-weekly industry alerts', tag: 'Community' },
        { title: 'Pro Dashboard', stat: '₹2,499 / Month', sub: 'SKU pricing benchmarks & category datasets', tag: 'Subscription' },
        { title: 'Sutra Circle', stat: 'Bespoke Retainer', sub: 'Direct 1:1 advisory & brand consulting', tag: 'Advisory' },
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
      className={`relative w-full rounded-3xl bg-[#12100F] border border-[#2E2824] overflow-hidden p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Background Editorial Paper & Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#C8BFB2_1px,transparent_1px),linear-gradient(to_bottom,#C8BFB2_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#722F37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#2E2824] pb-4">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#722F37]">
              FASHION BUSINESS JOURNAL & INTELLIGENCE
            </span>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal tracking-tight">
            SUTRA EDIT
          </h4>
        </div>

        {/* Interactive Story Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0A0908] p-1 rounded-full border border-[#2E2824]">
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
              className="p-4 rounded-2xl bg-[#171412] border border-[#2E2824] hover:border-[#722F37] transition-all space-y-2 text-left shadow-lg"
            >
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#722F37]">
                <span>0{idx + 1} // {item.tag}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
              </div>
              <div>
                <div className="font-serif text-base text-[#F4F0E8] leading-tight">{item.title}</div>
                <div className="text-[10px] text-[#C8BFB2] font-mono mt-0.5">{item.stat}</div>
              </div>
              <div className="pt-2 border-t border-[#26211E] text-[8.5px] font-mono text-[#8E8278] line-clamp-1">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Context Footer */}
      <div className="relative z-10 border-t border-[#2E2824] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E8278]">
        <div className="flex items-center gap-2 text-[11px] text-[#C8BFB2]">
          <FileText className="w-3.5 h-3.5 text-[#722F37]" />
          <span>Executive Intelligence Dispatches · 3-Tier Platform Architecture · Strategic Advisory</span>
        </div>
        <div className="flex items-center gap-1 text-[#722F37] text-[11px] font-semibold">
          <span>Explore Sutra Edit Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

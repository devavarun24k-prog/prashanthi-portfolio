import { useState, useEffect, useRef } from 'react';
import { Crown, ArrowRight, Layers } from 'lucide-react';

interface HouseOfMasabaWorldProps {
  className?: string;
}

export const HouseOfMasabaWorld: React.FC<HouseOfMasabaWorldProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const tabs = [
    {
      label: '5 CORE CATEGORIES',
      tagline: '112 Styles · 1,008 SKUs',
      headline: 'Merchandise Planning & Assortment Architecture',
      detail: 'Structuring a balanced commercial range balancing core styles, high-end prêt, festive occasions, and print personality.',
      badge: '1,008 SKUs',
      items: [
        { name: 'Festive Bias', count: '28 Styles', skus: '252 SKUs', tag: 'Core Festive' },
        { name: 'High-End Prêt', count: '32 Styles', skus: '288 SKUs', tag: 'Resort Wear' },
        { name: 'Wedding Guest', count: '24 Styles', skus: '216 SKUs', tag: 'Occasion' },
        { name: 'Heritage Remix', count: '16 Styles', skus: '144 SKUs', tag: 'Statement' },
        { name: 'Print Personality', count: '12 Styles', skus: '108 SKUs', tag: 'Signature' },
      ],
    },
    {
      label: 'DRAPED LOOKBOOK',
      tagline: 'Signature Prints & Contemporary Silhouettes',
      headline: 'Translating Brand Identity into Luxury Fashion',
      detail: 'Pre-stitched draped sarees, relaxed fluid kaftans, and modern bridal fusion sets with iconic gold foil motifs.',
      badge: 'Editorial Lookbook',
      items: [
        { name: 'Draped Saree Cape', count: 'Gold Foil Silk', skus: '₹18,500', tag: 'Festive Bias' },
        { name: 'Crepe Resort Kaftan', count: 'Engineered Palm', skus: '₹12,000', tag: 'High-End Prêt' },
        { name: 'Tiered Remix Lehenga', count: 'Structured Bustier', skus: '₹38,000', tag: 'Wedding Guest' },
        { name: 'Fusion Kurta Set', count: 'Contrast Border', skus: '₹14,500', tag: 'Heritage Remix' },
        { name: 'Statement Overlay', count: 'Bold Monogram', skus: '₹16,000', tag: 'Print Personality' },
      ],
    },
    {
      label: 'PRICING & SIZING STRATEGY',
      tagline: 'Tiered Pricing & Indian Sizing Calibration',
      headline: 'Commercial Margin Viability & High Sell-Through',
      detail: 'Defined price bands (₹7.5K – ₹65K) and calibrated female sizing curves (XS–XL) to eliminate broken-size inventory.',
      badge: 'Commercial Strategy',
      items: [
        { name: 'Entry Prêt Tier', count: '₹7,500 – ₹14,000', skus: '60% Margin', tag: 'Volume Driver' },
        { name: 'Core Festive Tier', count: '₹15,000 – ₹28,000', skus: '65% Margin', tag: 'Margin Engine' },
        { name: 'Statement Lab', count: '₹30,000 – ₹65,000', skus: '70% Margin', tag: 'Prestige Hero' },
        { name: 'Sizing Curve', count: 'XS · S · M · L · XL', skus: 'Calibrated', tag: 'Indian Fit' },
        { name: 'Conversion Flow', count: 'Brand → Assortment → VM', skus: '6-Tier', tag: 'Retail VM' },
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
      className={`relative w-full rounded-3xl bg-[#14100F] border border-[#382B27] overflow-hidden p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Background Luxury Burgundy Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#A87578_1.2px,transparent_1.2px)] [background-size:2rem_2rem]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#722F37]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#382B27] pb-4">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <Crown className="w-3.5 h-3.5 text-[#A87578]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#A87578]">
              LUXURY FASHION & ASSORTMENT STRATEGY
            </span>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal tracking-tight">
            HOUSE OF MASABA
          </h4>
        </div>

        {/* Interactive Story Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0A0707] p-1 rounded-full border border-[#382B27]">
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
            <span className="px-2.5 py-0.5 rounded-full bg-[#722F37]/25 border border-[#A87578]/50 text-[9px] font-mono text-[#F4F0E8] uppercase tracking-wider font-semibold">
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

        {/* 5 Verified Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#1C1615] border border-[#382B27] hover:border-[#A87578] transition-all space-y-1.5 text-center shadow-lg"
            >
              <div className="text-[8px] font-mono text-[#A87578] font-bold uppercase">{item.tag}</div>
              <div className="font-serif text-sm text-[#F4F0E8] leading-tight line-clamp-1">{item.name}</div>
              <div className="text-[10px] text-[#C8BFB2] font-mono">{item.count}</div>
              <div className="text-[8px] text-[#8E8278] font-mono pt-1 border-t border-[#2A201D]">{item.skus}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Context Footer */}
      <div className="relative z-10 border-t border-[#382B27] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E8278]">
        <div className="flex items-center gap-2 text-[11px] text-[#C8BFB2]">
          <Layers className="w-3.5 h-3.5 text-[#A87578]" />
          <span>5 Categories · 112 Styles · 1,008 SKUs · Indian Sizing & Tiered Margins</span>
        </div>
        <div className="flex items-center gap-1 text-[#A87578] text-[11px] font-semibold">
          <span>Explore Masaba Strategy</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};


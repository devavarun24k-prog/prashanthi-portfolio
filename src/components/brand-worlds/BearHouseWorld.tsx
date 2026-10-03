import { useState, useEffect, useRef } from 'react';
import { Shirt, Store, Sparkles, ArrowRight } from 'lucide-react';

interface BearHouseWorldProps {
  className?: string;
}

export const BearHouseWorld: React.FC<BearHouseWorldProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const tabs = [
    {
      label: 'MENSWEAR CAMPAIGN',
      tagline: 'Pure Linen & Oxford Shirts',
      headline: 'Classics, Smart Casuals & Tailored Dressing',
      detail: 'French plackets, mother-of-pearl buttons, spread collars & 60s 2-ply cotton weaves across S–XXL sizing curves.',
      badge: 'Core Assortment',
      color: '#722F37',
      items: [
        { name: 'Pure Linen Oxford', fit: 'Classic Fit', tone: 'Navy / Ecru', spec: 'French Placket' },
        { name: 'Tailored Stretch Chino', fit: 'Slim Tapered', tone: 'Stone / Taupe', spec: 'Twill Weave' },
        { name: 'Knit Polo & Accessories', fit: 'Smart Casual', tone: 'Burgundy / Olive', spec: '100% Pima' },
      ],
    },
    {
      label: 'RETAIL VM & STORE AUDITS',
      tagline: '46-Day Industry Internship',
      headline: 'Visual Merchandising & Store Execution',
      detail: 'Hands-on store operations across 7 retail locations in Hyderabad & Bangalore covering EBO and SIS formats.',
      badge: '7 Audited Stores',
      color: '#A87578',
      items: [
        { name: 'Store Audits & VM Standards', fit: 'EBO / SIS Formats', tone: '7 Stores Audited', spec: 'VM Compliance' },
        { name: '2 Flagship Launches (NSO)', fit: 'Himayath Nagar & Tolichowki', tone: 'Full Floor Setup', spec: 'Opening Prep' },
        { name: 'EOSS Floor Reorganization', fit: 'Size-Wise Sorting', tone: 'High-Density Rails', spec: 'Floor Reset' },
      ],
    },
    {
      label: 'STORE ARCHITECTURE',
      tagline: '1.5" Fixture Rails & Focal Zoning',
      headline: 'Entry Threshold → Focal Display → Hero Product',
      detail: 'Strategic customer sightlines and merchandise density balancing commercial volume with premium brand prestige.',
      badge: 'Spatial Planning',
      color: '#722F37',
      items: [
        { name: 'Entry Threshold VM', fit: 'First Sightline', tone: 'Focal Display Table', spec: 'Hero Season' },
        { name: '1.5" Matte Fixture Rails', fit: 'Color-Blocked Rails', tone: 'Size Curve S–XXL', spec: '60% Margin' },
        { name: 'Fitting Bay & Cash Desk', fit: 'Dwell & Conversion', tone: 'Replenishment Loops', spec: 'Basket Size' },
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

  // Calm automatic rotation between the 3 campaign stories
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
      className={`relative w-full rounded-3xl bg-[#110F0E] border border-[#2E2824] overflow-hidden p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Background Menswear Pinstripe Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#2E2824_1px,transparent_1px),linear-gradient(to_bottom,#2E2824_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#722F37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#2E2824] pb-4">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#722F37]">
              MENSWEAR CAMPAIGN & RETAIL MERCHANDISING
            </span>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal tracking-tight">
            THE BEAR HOUSE
          </h4>
        </div>

        {/* Interactive Campaign Story Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0B0A09] p-1 rounded-full border border-[#2E2824]">
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
        {/* Campaign Headline & Detail */}
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full bg-[#722F37]/20 border border-[#722F37]/40 text-[9px] font-mono text-[#F4F0E8] uppercase tracking-wider font-semibold">
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

        {/* 3 Menswear Product / Store Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#171412] border border-[#2E2824] hover:border-[#722F37] transition-all space-y-2 text-left shadow-lg"
            >
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#722F37]">
                <span>0{idx + 1} // ITEM</span>
                <Shirt className="w-3.5 h-3.5 text-[#722F37]" />
              </div>
              <div>
                <div className="font-serif text-base text-[#F4F0E8] leading-tight">{item.name}</div>
                <div className="text-[10px] text-[#8E8278] font-mono mt-0.5">{item.fit}</div>
              </div>
              <div className="pt-2 border-t border-[#26211E] flex items-center justify-between text-[8.5px] font-mono text-[#C8BFB2]">
                <span>{item.tone}</span>
                <span className="text-[#722F37]">{item.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Context Footer */}
      <div className="relative z-10 border-t border-[#2E2824] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E8278]">
        <div className="flex items-center gap-2 text-[11px] text-[#C8BFB2]">
          <Store className="w-3.5 h-3.5 text-[#722F37]" />
          <span>46-Day Internship Immersion · 7 Retail Outlets · 2 New Store Launches</span>
        </div>
        <div className="flex items-center gap-1 text-[#722F37] text-[11px] font-semibold">
          <span>Explore VM Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};



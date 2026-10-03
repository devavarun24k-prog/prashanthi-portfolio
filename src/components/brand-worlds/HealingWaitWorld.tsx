import { useState, useEffect, useRef } from 'react';
import { Activity, Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';

interface HealingWaitWorldProps {
  className?: string;
}

export const HealingWaitWorld: React.FC<HealingWaitWorldProps> = ({
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const tabs = [
    {
      label: 'FIELD RESEARCH',
      tagline: '28-Page Research Publication',
      headline: 'Quantifying Anxiety & Opacity in Hospital Waiting Rooms',
      detail: 'Observational field research in hospital OPD environments uncovering the psychological friction of indeterminate delays.',
      badge: 'Field Research',
      items: [
        { metric: '66%', label: 'Patient Boredom', sub: 'Long idle waiting without engagement or information', tag: 'Dwell Time' },
        { metric: '60%', label: 'Wait Anxiety', sub: 'Uncertainty regarding doctor arrival timings', tag: 'Opacity' },
        { metric: '40%', label: 'Situational Stress', sub: 'Friction across token & billing counters', tag: 'Friction' },
      ],
    },
    {
      label: 'HEAL QUEUE SYSTEM',
      tagline: 'Digital Service Touchpoints',
      headline: 'Transforming OPD Delay into Proactive Care',
      detail: 'A coordinated digital service blueprint connecting live queue trackers, doctor arrival notifications, and patient care workflows.',
      badge: 'Service Blueprint',
      items: [
        { metric: 'LIVE', label: 'Live Queue Tracker', sub: 'Real-time token status & dynamic estimated wait time', tag: 'Queue' },
        { metric: 'ROSTER', label: 'Doctor Roster', sub: 'Transparent doctor schedule & emergency buffer', tag: 'Doctors' },
        { metric: 'NOTIFY', label: 'Mobile Push & SMS', sub: 'Proactive reminders when patient is 3 tokens away', tag: 'Alerts' },
        { metric: 'CARE', label: 'Pharmacy Routing', sub: 'Instant e-prescription transmission to hospital pharma', tag: 'Discharge' },
      ],
    },
    {
      label: 'DESIGN FLOW',
      tagline: 'Human-Centred Design Loop',
      headline: 'Empathize → Research → Prototype → Care',
      detail: 'Iterative service design turning clinical waiting room anxiety into transparent, empathetic healthcare patient journeys.',
      badge: 'Design Thinking',
      items: [
        { metric: '01', label: 'Ethnographic Inquiry', sub: 'Patient shadowing & doctor interviews', tag: 'Empathy' },
        { metric: '02', label: 'Service Blueprints', sub: 'Frontstage & backstage touchpoint maps', tag: 'Mapping' },
        { metric: '03', label: 'Heal Queue App Wireframes', sub: 'Digital UX prototype & physical VM signage', tag: 'Delivery' },
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
      className={`relative w-full rounded-3xl bg-[#0F1112] border border-[#232A2F] overflow-hidden p-6 sm:p-8 select-none shadow-2xl transition-all duration-700 ${className}`}
    >
      {/* Background Subtle Healthcare Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#722F37_1.2px,transparent_1.2px)] [background-size:2rem_2rem]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#722F37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Editorial Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#232A2F] pb-4">
        <div className="space-y-0.5 text-left">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#722F37]" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#722F37]">
              SERVICE DESIGN & HEALTHCARE INNOVATION
            </span>
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-[#F4F0E8] font-normal tracking-tight">
            HEALING THE WAIT
          </h4>
        </div>

        {/* Interactive Story Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0A0C0D] p-1 rounded-full border border-[#232A2F]">
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

        {/* Metric / Touchpoint Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-${current.items.length > 3 ? '4' : '3'} gap-3 pt-2`}>
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#14181A] border border-[#232A2F] hover:border-[#722F37] transition-all space-y-2 text-left shadow-lg"
            >
              <div className="flex items-center justify-between text-[8.5px] font-mono text-[#722F37]">
                <span>0{idx + 1} // {item.tag}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#722F37]" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl text-[#F4F0E8]">{item.metric}</span>
                <span className="text-xs font-serif text-[#C8BFB2] leading-tight">{item.label}</span>
              </div>
              <div className="pt-2 border-t border-[#1C2226] text-[8.5px] font-mono text-[#8E8278] leading-relaxed">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Context Footer */}
      <div className="relative z-10 border-t border-[#232A2F] pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#8E8278]">
        <div className="flex items-center gap-2 text-[11px] text-[#C8BFB2]">
          <HeartHandshake className="w-3.5 h-3.5 text-[#722F37]" />
          <span>28-Page Research Publication · Heal Queue Digital System · Patient Empathy Loop</span>
        </div>
        <div className="flex items-center gap-1 text-[#722F37] text-[11px] font-semibold">
          <span>Explore Healing The Wait Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};

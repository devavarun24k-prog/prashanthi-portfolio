import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0B0A09] text-[#F4F0E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Full-bleed Burgundy Statement Panel */}
        <div className="relative rounded-3xl bg-[#722F37] text-[#F4F0E8] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-[#A87578]/20 space-y-12 transition-all duration-700">
          {/* Subtle Background Watermark Typography */}
          <div className="absolute right-0 bottom-0 text-[8rem] sm:text-[14rem] font-serif italic text-black/10 select-none pointer-events-none leading-none -mb-8 -mr-8 font-normal">
            PB
          </div>

          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#F4F0E8]/80 z-10 relative">
            <Send className="w-4 h-4 text-[#C8BFB2]" />
            <span>LET'S CONNECT</span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-4 max-w-3xl z-10 relative">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.92] text-[#F4F0E8]">
              LET'S
              <span className="block font-serif text-[#F4F0E8]">WORK</span>
              <span className="block font-serif italic text-[#C8BFB2] font-normal">TOGETHER.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#F4F0E8]/90 font-sans max-w-xl font-light leading-relaxed pt-2">
              Open for full-time and project opportunities in Buying & Merchandising, Retail Management, Visual Merchandising, and Brand Strategy.
            </p>
          </div>

          {/* Contact Interactive Channels */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 z-10 relative">
            {/* Email Direct Box */}
            <div className="md:col-span-8 p-8 rounded-2xl bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[#F4F0E8] shadow-2xl space-y-6">
              <div className="flex items-center justify-between text-xs text-[#8E8278] font-mono">
                <span className="font-semibold uppercase text-[11px] text-[#722F37]">DIRECT INBOX</span>
                <span>BANGALORE / INDIA</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#141211] border border-[#262320]">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#722F37] flex items-center justify-center text-[#F4F0E8] shadow-md shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8E8278] font-mono font-semibold block">EMAIL ADDRESS</span>
                    <a
                      href={`mailto:${PERSONAL_DATA.email}`}
                      className="font-sans text-base sm:text-lg font-medium text-[#F4F0E8] hover:text-[#C8BFB2] transition-colors break-all"
                    >
                      {PERSONAL_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0B0A09] border border-[#262320] hover:border-[#722F37] text-xs font-sans font-semibold transition-colors shadow-sm text-[#F4F0E8]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_DATA.email}?subject=Opportunity / Collaboration Inquiry`}
                    className="inline-flex items-center gap-1 px-5 py-2.5 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] text-xs font-sans font-semibold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="md:col-span-4 p-8 rounded-2xl bg-[#0B0A09]/80 backdrop-blur-md border border-[#262320] text-[#F4F0E8] flex flex-col justify-between space-y-6 shadow-2xl">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest font-semibold text-[#722F37] block">
                  PROFESSIONAL NETWORK
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#F4F0E8]">
                  LinkedIn Profile
                </h3>
                <p className="text-xs text-[#8E8278] leading-relaxed font-sans font-light">
                  Connect for professional updates, retail strategy discussions, and career opportunities.
                </p>
              </div>

              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-4 rounded-xl bg-[#141211] border border-[#262320] text-[#F4F0E8] hover:border-[#722F37] transition-all font-sans text-xs font-semibold uppercase tracking-wider shadow-sm group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#722F37]" />
                  <span>Prashanthi Reddy</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

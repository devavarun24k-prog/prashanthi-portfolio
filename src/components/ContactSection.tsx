import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';
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
    <section id="contact" className="py-24 sm:py-36 bg-[#0B0A09] text-[#F4F0E8] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Full-bleed Deep Burgundy Editorial Closing Spread */}
        <div className="relative rounded-3xl bg-[#722F37] text-[#F4F0E8] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl border border-[#A87578]/25 space-y-12 transition-all duration-700">
          {/* Subtle Background Watermark Monogram */}
          <div className="absolute right-0 bottom-0 text-[10rem] sm:text-[18rem] font-serif italic text-black/10 select-none pointer-events-none leading-none -mb-12 -mr-12 font-normal">
            PB
          </div>

          {/* Section Label Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F4F0E8]/20 pb-6 z-10 relative">
            <div className="font-sans font-semibold text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] tracking-[0.12em] uppercase leading-none">
              <span className="text-[#F4F0E8]/70 mr-1.5">04 /</span>
              <span className="text-[#F4F0E8]">CONTACT</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 font-sans text-xs sm:text-[13px] text-[#F4F0E8]/80 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F4F0E8] animate-ping" />
              <span>BANGALORE / INDIA</span>
            </div>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-4 max-w-4xl z-10 relative">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.90] text-[#F4F0E8]">
              LET'S BUILD
              <span className="block font-serif italic text-[#C8BFB2] font-normal">WHAT'S NEXT.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#F4F0E8]/90 font-sans max-w-2xl font-light leading-relaxed pt-2">
              Available for strategic roles and project collaborations across Buying & Merchandising, Retail Operations, Visual Merchandising, and Brand Strategy.
            </p>
          </div>

          {/* Contact Interactive Channels */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 z-10 relative font-mono text-xs">
            {/* Email Direct Box (Cols 8) */}
            <div className="md:col-span-8 p-8 rounded-2xl bg-[#0B0A09]/90 backdrop-blur-xl border border-[#262320] text-[#F4F0E8] shadow-xl space-y-6">
              <div className="flex items-center justify-between text-xs text-[#8E8278]">
                <span className="font-bold uppercase text-[11px] text-[#722F37]">
                  DIRECT EMAIL INBOX
                </span>
                <span>BANGALORE / INDIA</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#141211] border border-[#262320]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#722F37] flex items-center justify-center text-[#F4F0E8] shadow-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#8E8278] font-bold block">EMAIL ADDRESS</span>
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
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0B0A09] border border-[#262320] hover:border-[#722F37] text-xs font-mono font-semibold transition-colors shadow-sm text-[#F4F0E8]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_DATA.email}?subject=Collaboration / Strategic Role Inquiry - Prashanthi B.`}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-md border border-[#722F37]"
                  >
                    <span>COMPOSE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn & CV Card (Cols 4) */}
            <div className="md:col-span-4 p-8 rounded-2xl bg-[#0B0A09]/90 backdrop-blur-xl border border-[#262320] text-[#F4F0E8] flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest font-bold text-[#722F37] block">
                  NETWORK & RESUME
                </span>
                <h3 className="font-serif text-3xl font-normal text-[#F4F0E8]">
                  LinkedIn & Resume
                </h3>
                <p className="text-xs text-[#8E8278] leading-relaxed font-sans font-light">
                  Connect for executive discussions, brand consultations, or resume verification.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between p-3.5 rounded-xl bg-[#141211] border border-[#262320] text-[#F4F0E8] hover:border-[#722F37] transition-all font-mono text-xs uppercase tracking-wider group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[#722F37]" />
                    <span>Prashanthi B.</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8E8278] group-hover:text-[#F4F0E8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={PERSONAL_DATA.cvUrl}
                  className="w-full inline-flex items-center justify-between p-3.5 rounded-xl bg-[#141211] border border-[#262320] text-[#C8BFB2] hover:text-[#F4F0E8] hover:border-[#722F37] transition-all font-mono text-xs uppercase tracking-wider group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#722F37]" />
                    <span>Download CV</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8E8278] group-hover:text-[#F4F0E8] transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


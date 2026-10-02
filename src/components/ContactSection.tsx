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
    <section id="contact" className="py-28 sm:py-36 bg-[#151515] text-[#FAF9F6] relative border-b border-[#282828]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-[#B7B1A8] uppercase">
          <span className="font-bold text-[#FAF9F6] bg-[#1C1C1C] px-2 py-0.5 border border-[#282828]">
            10 / 10
          </span>
          <Send className="w-3.5 h-3.5 text-[#5A2427]" />
          <span>CONNECT & COLLABORATE</span>
        </div>

        {/* Dramatic Headline */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FAF9F6] tracking-tight leading-[0.95]">
            Let's Create
            <span className="block font-serif italic text-[#B7B1A8] font-light">
              What's Next.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#B7B1A8] max-w-xl font-sans pt-2 leading-relaxed font-light">
            Open for full-time and project opportunities in Buying & Merchandising, Retail Management, Visual Merchandising, and Fashion Strategy.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Direct Email Card */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-[#1C1C1C] border border-[#282828] space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#77736D] block">
                PRIMARY INBOX
              </span>
              <span className="text-[11px] font-mono text-[#B7B1A8]">
                BANGALORE, INDIA
              </span>
            </div>

            <div className="p-5 sm:p-6 bg-[#151515] border border-[#282828] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#1C1C1C] border border-[#282828] flex items-center justify-center text-[#FAF9F6]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#77736D] uppercase block">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_DATA.email}`}
                    className="font-mono text-sm sm:text-base text-[#FAF9F6] hover:text-[#B7B1A8] transition-colors break-all font-medium"
                  >
                    {PERSONAL_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1C1C1C] text-[#FAF9F6] hover:bg-[#282828] border border-[#282828] text-xs font-mono tracking-wider transition-colors font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_DATA.email}?subject=Collaboration Inquiry - Prashanthi B`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FAF9F6] text-[#151515] hover:bg-[#F4F1EB] text-xs font-mono tracking-wider transition-colors font-semibold"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Connect Card */}
          <div className="lg:col-span-4 p-8 sm:p-10 bg-[#1C1C1C] border border-[#282828] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#77736D] uppercase tracking-widest">
                <span>PROFESSIONAL NETWORK</span>
                <span className="text-[#5A2427]">●</span>
              </div>
              <h3 className="font-serif text-2xl text-[#FAF9F6] font-normal">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-[#B7B1A8] leading-relaxed font-sans font-light">
                Connect for professional updates, retail perspectives, and career discussions.
              </p>
            </div>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-4 bg-[#151515] border border-[#282828] hover:border-[#FAF9F6] text-xs font-mono tracking-wider uppercase text-[#FAF9F6] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#B7B1A8] group-hover:text-white transition-colors" />
                <span>Prashanthi Reddy</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#77736D] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

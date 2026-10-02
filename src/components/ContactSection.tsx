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
    <section id="contact" className="py-28 sm:py-36 bg-[#0D0D0D] text-[#F5F4F0] relative border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#96938D] uppercase">
          <Send className="w-3.5 h-3.5" />
          <span>08 / CONNECT & COLLABORATE</span>
        </div>

        {/* Dramatic Headline */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F5F4F0] tracking-tight leading-[0.95]">
            Let's Talk About
            <span className="block font-serif italic text-[#96938D] font-light">
              What's Next.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#96938D] max-w-xl font-sans pt-2 leading-relaxed">
            Open for opportunities in Buying & Merchandising, Retail Management, Visual Merchandising, Brand Strategy, and Marketing.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Direct Email Card */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-[#161616] border border-[#262626] space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#96938D] block">
                PRIMARY INBOX
              </span>
              <span className="text-[11px] font-mono text-[#96938D]">
                BANGALORE, INDIA
              </span>
            </div>

            <div className="p-5 sm:p-6 bg-[#0D0D0D] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#161616] border border-[#262626] flex items-center justify-center text-[#F5F4F0]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#96938D] uppercase block">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_DATA.email}`}
                    className="font-mono text-sm sm:text-base text-[#F5F4F0] hover:text-[#96938D] transition-colors break-all font-medium"
                  >
                    {PERSONAL_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#161616] text-[#F5F4F0] hover:bg-[#262626] border border-[#262626] text-xs font-mono tracking-wider transition-colors font-medium"
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
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#F5F4F0] text-[#0D0D0D] hover:bg-[#E8E7E3] font-medium text-xs font-mono tracking-wider transition-colors"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#96938D] pt-2 border-t border-[#262626]">
              <div>
                <span>Professional inquiries, industry conversations, and graduate roles welcome.</span>
              </div>
              <span>BANGALORE</span>
            </div>
          </div>

          {/* Social / LinkedIn Network Card */}
          <div className="lg:col-span-4 p-8 bg-[#161616] border border-[#262626] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#96938D] block">
                PROFESSIONAL NETWORK
              </span>
              <h3 className="font-serif text-2xl text-[#F5F4F0]">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-[#96938D] leading-relaxed font-sans">
                Connect on LinkedIn for career milestones, professional network recommendations, and industry dialogue.
              </p>
            </div>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#0D0D0D] border border-[#262626] space-y-2 group hover:border-[#96938D] transition-colors block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#F5F4F0]">
                  <LinkedinIcon className="w-4 h-4 text-[#F5F4F0]" />
                  <span className="font-mono text-xs font-semibold uppercase group-hover:text-[#96938D] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#F5F4F0] text-xs">
                  <span className="text-[10px] font-mono uppercase">Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
              <p className="text-xs text-[#96938D] font-mono truncate">
                prashanthi-reddy-14771a244
              </p>
            </a>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full text-xs font-mono tracking-widest uppercase px-4 py-3 bg-[#F5F4F0] text-[#0D0D0D] hover:bg-[#E8E7E3] transition-colors font-semibold"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

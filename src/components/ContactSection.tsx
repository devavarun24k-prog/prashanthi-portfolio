import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Sparkles } from 'lucide-react';
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
    <section id="contact" className="py-28 sm:py-36 bg-[#17120F] text-[#F3EFE7] relative overflow-hidden">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A99578_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5A2028] to-transparent" />
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-[#5A2028]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#A99578] uppercase">
          <Send className="w-3.5 h-3.5 text-[#5A2028]" />
          <span>08 / CONNECT & COLLABORATE</span>
        </div>

        {/* Dramatic Headline */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#F3EFE7] tracking-tight leading-[0.95]">
            Let's Talk About
            <span className="block font-serif italic text-[#A99578] font-light">
              What's Next.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#C8C0B5] max-w-xl font-sans pt-2 leading-relaxed">
            Open for opportunities in Buying & Merchandising, Retail Management, Visual Merchandising, Brand Strategy, and Marketing.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Direct Email Card */}
          <div className="lg:col-span-8 p-8 sm:p-10 bg-[#1D1714] border border-[#2E2620] rounded-sm space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#A99578] block">
                PRIMARY INBOX
              </span>
              <span className="text-[11px] font-mono text-[#A99578]/70">
                BANGALORE, INDIA
              </span>
            </div>

            <div className="p-5 sm:p-6 bg-[#241D19] border border-[#352B24] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-[#17120F] border border-[#352B24] flex items-center justify-center text-[#A99578]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#A99578]/70 uppercase block">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_DATA.email}`}
                    className="font-mono text-sm sm:text-base text-[#F3EFE7] hover:text-[#A99578] transition-colors break-all font-medium"
                  >
                    {PERSONAL_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#F3EFE7] text-[#17120F] hover:bg-[#A99578] hover:text-[#17120F] rounded-sm text-xs font-mono tracking-wider transition-all font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#5A2028] text-[#F3EFE7] hover:bg-[#722A34] font-medium rounded-sm text-xs font-mono tracking-wider transition-all border border-[#5A2028]"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#C8C0B5]/80 pt-2 border-t border-[#2E2620]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#5A2028]" />
                <span>Professional inquiries, industry conversations, and graduate roles welcome.</span>
              </div>
              <span className="text-[#A99578]">BANGALORE</span>
            </div>
          </div>

          {/* Social / LinkedIn Network Card */}
          <div className="lg:col-span-4 p-8 bg-[#1D1714] border border-[#2E2620] rounded-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#A99578] block">
                PROFESSIONAL NETWORK
              </span>
              <h3 className="font-serif text-2xl text-[#F3EFE7]">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-[#C8C0B5] leading-relaxed font-sans">
                Connect on LinkedIn for career milestones, professional network recommendations, and industry dialogue.
              </p>
            </div>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#241D19] border border-[#352B24] rounded-sm space-y-2 group hover:border-[#5A2028] transition-colors block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#F3EFE7]">
                  <LinkedinIcon className="w-4 h-4 text-[#A99578]" />
                  <span className="font-mono text-xs font-semibold uppercase group-hover:text-[#A99578] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#A99578] text-xs">
                  <span className="text-[10px] font-mono uppercase">Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
              <p className="text-xs text-[#C8C0B5] font-mono truncate">
                prashanthi-reddy-14771a244
              </p>
            </a>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full text-xs font-mono tracking-widest uppercase px-4 py-3 bg-[#17120F] text-[#F3EFE7] hover:bg-[#5A2028] hover:text-[#F3EFE7] transition-colors border border-[#352B24] rounded-sm"
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

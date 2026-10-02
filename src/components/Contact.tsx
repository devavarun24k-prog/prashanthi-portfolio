import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Custom clean SVG icons for professional platforms
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

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E5DC]">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-[#9C7A4A] uppercase">
            <Send className="w-4 h-4" />
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1B19] tracking-tight">
            Connect & Collaborate
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#6E6B65] leading-relaxed">
          Open for opportunities in Buying & Merchandising, Retail Management, and Visual Merchandising.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-12">
        {/* Main Email Action Card */}
        <div className="lg:col-span-8 bg-[#1C1B19] text-[#FAF9F6] p-8 sm:p-12 rounded-sm space-y-8 relative overflow-hidden shadow-2xl">
          {/* Subtle gold line & background motif */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9C7A4A] via-[#C8B89E] to-[#9C7A4A]" />
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#9C7A4A]/5 blur-3xl pointer-events-none" />

          <div className="space-y-3">
            <span className="font-mono text-xs text-[#9C7A4A] tracking-[0.2em] uppercase block">
              DIRECT INQUIRIES & RECRUITMENT
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF9F6] tracking-tight leading-tight">
              Let's discuss retail, merchandising, and visual storytelling.
            </h3>
          </div>

          {/* Email Address & Actions */}
          <div className="pt-4 space-y-4">
            <div className="p-4 sm:p-5 bg-[#262626] border border-[#3D3A35] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#1C1B19] border border-[#3D3A35] flex items-center justify-center text-[#9C7A4A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#FAF9F6]/50 uppercase block">
                    PRIMARY EMAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                    className="font-mono text-sm sm:text-base text-[#FAF9F6] hover:text-[#9C7A4A] transition-colors font-medium break-all"
                  >
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FAF9F6] text-[#1C1B19] hover:bg-[#9C7A4A] hover:text-white rounded-sm text-xs font-mono tracking-wider transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
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
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#9C7A4A] text-white hover:bg-[#B39260] rounded-sm text-xs font-mono tracking-wider transition-all"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#FAF9F6]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#FAF9F6]/60">
            <span>Location: {PERSONAL_INFO.contact.location}</span>
            <span className="font-mono text-[#9C7A4A]">Response window: 24–48 hours</span>
          </div>
        </div>

        {/* Social / Professional Links (Configurable Placeholders) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 bg-white border border-[#E8E5DC] rounded-sm space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#9C7A4A] tracking-wider uppercase block">
                PROFESSIONAL NETWORKS
              </span>
              <h4 className="font-serif text-xl text-[#1C1B19]">
                Social & Network Presence
              </h4>
            </div>

            {/* LinkedIn Placeholder */}
            <div className="p-4 bg-[#F4F2EC] border border-[#E8E5DC] rounded-sm space-y-2 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1B19]">
                  <LinkedinIcon className="w-4 h-4 text-[#9C7A4A]" />
                  <span className="font-mono text-xs font-semibold uppercase">
                    LinkedIn
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6E6B65] uppercase bg-white px-2 py-0.5 rounded-sm border border-[#E8E5DC]">
                  Placeholder
                </span>
              </div>
              <p className="text-xs text-[#6E6B65]">
                {PERSONAL_INFO.contact.linkedinPlaceholder}
              </p>
            </div>

            {/* Instagram Placeholder */}
            <div className="p-4 bg-[#F4F2EC] border border-[#E8E5DC] rounded-sm space-y-2 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1C1B19]">
                  <InstagramIcon className="w-4 h-4 text-[#9C7A4A]" />
                  <span className="font-mono text-xs font-semibold uppercase">
                    Instagram
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#6E6B65] uppercase bg-white px-2 py-0.5 rounded-sm border border-[#E8E5DC]">
                  Placeholder
                </span>
              </div>
              <p className="text-xs text-[#6E6B65]">
                {PERSONAL_INFO.contact.instagramPlaceholder}
              </p>
            </div>

            <div className="p-3 bg-[#FAF9F6] border border-[#E8E5DC] rounded-sm flex items-center gap-2 text-[11px] text-[#6E6B65]">
              <Sparkles className="w-3.5 h-3.5 text-[#9C7A4A] shrink-0" />
              <span>Social profile URLs can be configured directly in portfolio configuration.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

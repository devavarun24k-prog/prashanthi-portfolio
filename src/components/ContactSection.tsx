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
    <section id="contact" className="py-24 sm:py-32 bg-[#722F37] text-[#F5EEE3] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5EEE3]/80">
          <Send className="w-4 h-4 text-[#D8B6AE]" />
          <span>Get in Touch</span>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[0.95] text-[#F5EEE3]">
            LET'S WORK TOGETHER.
          </h2>
          <p className="text-base sm:text-lg text-[#F5EEE3]/85 font-sans max-w-xl font-light leading-relaxed">
            Open for full-time and project opportunities in Buying & Merchandising, Retail Management, Visual Merchandising, and Brand Strategy.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          {/* Email Card */}
          <div className="md:col-span-8 p-8 rounded-2xl bg-[#FAF6EE] text-[#2C2421] shadow-xl space-y-6">
            <div className="flex items-center justify-between text-xs text-[#8F8177] font-sans">
              <span className="font-semibold uppercase text-[11px] text-[#722F37]">Direct Inbox</span>
              <span>Bangalore, India</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#F5EEE3] border border-[#E2D5C3]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#722F37] shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#8F8177] font-semibold block">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_DATA.email}`}
                    className="font-sans text-base sm:text-lg font-medium text-[#2C2421] hover:text-[#722F37] transition-colors break-all"
                  >
                    {PERSONAL_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF6EE] border border-[#E2D5C3] hover:border-[#722F37] text-xs font-sans font-semibold transition-colors shadow-sm text-[#2C2421]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
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
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#722F37] text-[#F5EEE3] hover:bg-[#2C2421] text-xs font-sans font-semibold transition-colors shadow-sm"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="md:col-span-4 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#F5EEE3] flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D8B6AE] block">
                Professional Network
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#F5EEE3]">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-[#F5EEE3]/80 leading-relaxed font-sans">
                Connect for professional updates, retail strategy discussions, and career opportunities.
              </p>
            </div>

            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between p-4 rounded-xl bg-[#FAF6EE] text-[#2C2421] hover:bg-[#F5EEE3] transition-colors font-sans text-xs font-semibold uppercase tracking-wider shadow-sm group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="w-4 h-4 text-[#722F37]" />
                <span>Prashanthi Reddy</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#8F8177] group-hover:text-[#722F37] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollPercent(percent);
      setIsScrolled(scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', number: '01' },
    { label: 'ABOUT', href: '#about', number: '02' },
    { label: 'EXPERIENCE', href: '#experience', number: '03' },
    { label: 'CONTACT', href: '#contact', number: '04' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Editorial Scroll Progress Indicator (Top Edge) */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-[#722F37] transition-all duration-150 ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 select-none ${
          isScrolled
            ? 'bg-[#0B0A09]/95 backdrop-blur-md border-b border-[#262320] py-3.5 shadow-2xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Identity / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col sm:flex-row sm:items-baseline sm:gap-3 text-left focus:outline-none"
          >
            <span className="font-serif text-2xl tracking-tight text-[#F4F0E8] group-hover:text-[#722F37] transition-colors font-normal">
              PRASHANTHI.B
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#8E8278] font-mono font-medium tracking-wider uppercase">
              FASHION · RETAIL · CONSUMER THINKING
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group relative text-[#C8BFB2] hover:text-[#F4F0E8] transition-colors flex items-center gap-1.5 py-1"
              >
                <span className="text-[9px] text-[#722F37] font-bold group-hover:scale-110 transition-transform">
                  {link.number}
                </span>
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#722F37] group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#F4F0E8] hover:text-[#A87578] transition-colors py-1 px-2 border-b border-[#722F37] hover:border-[#F4F0E8] group"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="text-xs font-mono tracking-wider uppercase text-[#F4F0E8] hover:text-[#722F37] focus:outline-none md:hidden flex items-center gap-1.5"
          >
            <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0A09] text-[#F4F0E8] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn md:hidden select-none">
          <div className="flex items-center justify-between border-b border-[#262320] pb-6">
            <span className="font-serif text-2xl text-[#F4F0E8]">
              PRASHANTHI.B
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F4F0E8] hover:text-[#722F37]"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto py-8 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] hover:text-[#722F37] transition-colors flex items-center justify-between border-b border-[#262320] pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-sm text-[#722F37]">{link.number}</span>
              </a>
            ))}

            <a
              href={PERSONAL_DATA.cvUrl}
              className="font-serif text-3xl sm:text-4xl text-[#722F37] hover:text-[#F4F0E8] transition-colors flex items-center justify-between border-b border-[#262320] pb-3"
            >
              <span>CV</span>
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </nav>

          <div className="pt-6 border-t border-[#262320] flex items-center justify-between text-xs font-mono text-[#8E8278]">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 py-2.5 px-6 rounded-full bg-[#722F37] text-[#F4F0E8] font-bold uppercase tracking-wider shadow-md"
            >
              <span>REQUEST CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[10px] uppercase">BANGALORE, INDIA</span>
          </div>
        </div>
      )}
    </>
  );
};


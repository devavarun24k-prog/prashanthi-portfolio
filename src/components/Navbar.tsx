import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', number: '01' },
    { label: 'THE BEAR HOUSE', href: '#bear-house', number: '02' },
    { label: 'EXPERIENCE', href: '#experience', number: '03' },
    { label: 'ABOUT', href: '#about', number: '04' },
    { label: 'CONTACT', href: '#contact', number: '05' },
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
            className="group flex items-baseline gap-2.5 text-left focus:outline-none"
          >
            <span className="font-serif text-2xl tracking-tight text-[#F4F0E8] group-hover:text-[#722F37] transition-colors font-normal">
              PRASHANTHI B.
            </span>
            <span className="hidden sm:inline-block text-[10px] text-[#722F37] uppercase tracking-widest font-mono font-semibold">
              FASHION SYSTEM
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
                className="text-[#C8BFB2] hover:text-[#722F37] transition-colors flex items-center gap-1.5"
              >
                <span className="text-[9px] text-[#722F37] font-bold">{link.number}</span>
                <span>{link.label}</span>
              </a>
            ))}

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider px-5 py-2 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-md border border-[#722F37]"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#F4F0E8] hover:text-[#722F37] focus:outline-none md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0A09] text-[#F4F0E8] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn md:hidden select-none">
          <div className="flex items-center justify-between border-b border-[#262320] pb-6">
            <span className="font-serif text-2xl text-[#F4F0E8]">
              PRASHANTHI B.
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
          </nav>

          <div className="pt-6 border-t border-[#262320] flex items-center justify-between text-xs font-mono text-[#8E8278]">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 py-2.5 px-6 rounded-full bg-[#722F37] text-[#F4F0E8] font-bold uppercase tracking-wider shadow-md"
            >
              <span>REQUEST CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-[10px]">BLR // 12.9716° N</span>
          </div>
        </div>
      )}
    </>
  );
};


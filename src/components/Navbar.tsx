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
    { label: 'Work', href: '#work' },
    { label: 'The Bear House', href: '#bear-house' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B0A09]/90 backdrop-blur-md border-b border-[#262320] py-4 shadow-xl'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-baseline gap-2 text-left focus:outline-none"
          >
            <span className="font-serif text-2xl tracking-tight text-[#F4F0E8] group-hover:text-[#722F37] transition-colors">
              PRASHANTHI B.
            </span>
            <span className="hidden sm:inline-block text-[10px] text-[#8E8278] uppercase tracking-widest font-mono">
              FASHION BUSINESS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[#C8BFB2] hover:text-[#722F37] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-[#722F37] text-[#F4F0E8] hover:bg-[#F4F0E8] hover:text-[#0B0A09] transition-all shadow-sm"
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

      {/* Mobile Fullscreen Black Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0A09] text-[#F4F0E8] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn md:hidden">
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

          <nav className="flex flex-col space-y-6 my-auto py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-3xl sm:text-4xl text-[#F4F0E8] hover:text-[#722F37] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#262320] flex items-center justify-between text-xs font-sans text-[#8E8278]">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 py-2.5 px-6 rounded-full bg-[#722F37] text-[#F4F0E8] font-semibold uppercase tracking-wider shadow-sm"
            >
              <span>Request CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="font-mono text-[10px]">BANGALORE, INDIA</span>
          </div>
        </div>
      )}
    </>
  );
};

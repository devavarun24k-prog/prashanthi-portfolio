import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = [
      { id: 'hero', index: '01' },
      { id: 'pov', index: '02' },
      { id: 'think', index: '03' },
      { id: 'work', index: '04' },
      { id: 'eye', index: '05' },
      { id: 'observations', index: '06' },
      { id: 'experience', index: '07' },
      { id: 'beyond', index: '08' },
      { id: 'about', index: '09' },
      { id: 'contact', index: '10' }
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(sec.id);
          }
        },
        { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const sectionIndexMap: Record<string, string> = {
    hero: '01',
    pov: '02',
    think: '03',
    work: '04',
    eye: '05',
    observations: '06',
    experience: '07',
    beyond: '08',
    about: '09',
    contact: '10'
  };

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'POV', href: '#pov', id: 'pov' },
    { label: 'MANIFESTO', href: '#think', id: 'think' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#151515]/95 backdrop-blur-md border-b border-[#282828] py-3.5 shadow-lg'
            : 'bg-[#151515] py-5 border-b border-[#222222]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#1C1C1C] text-[#FAF9F6] border border-[#282828] flex items-center justify-center font-serif font-medium text-sm group-hover:border-[#FAF9F6] transition-colors">
              PB
            </div>
            <div>
              <span className="block font-serif text-lg tracking-wide font-normal text-[#FAF9F6]">
                {PERSONAL_DATA.name}
              </span>
              <span className="block font-mono text-[9px] tracking-[0.25em] text-[#77736D] uppercase">
                BUYING · MERCHANDISING · RETAIL
              </span>
            </div>
          </a>

          {/* Minimal Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-[0.2em]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors relative py-1 font-medium ${
                    isActive
                      ? 'text-[#FAF9F6] after:w-full after:bg-[#FAF9F6]'
                      : 'text-[#B7B1A8] hover:text-[#FAF9F6] after:w-0 hover:after:w-full after:bg-[#FAF9F6]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:transition-all after:duration-200`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Section Indicator & CV */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-mono text-xs text-[#77736D] tracking-widest border border-[#282828] bg-[#1C1C1C] px-2.5 py-1">
              <span className="text-[#FAF9F6] font-semibold">{sectionIndexMap[activeSection] || '01'}</span> / 10
            </span>

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.2em] uppercase px-3.5 py-1.5 border border-[#282828] text-[#FAF9F6] hover:bg-[#FAF9F6] hover:text-[#151515] transition-colors bg-[#1C1C1C] font-medium"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <span className="font-mono text-[10px] text-[#77736D] border border-[#282828] bg-[#1C1C1C] px-2 py-0.5">
              <span className="text-[#FAF9F6]">{sectionIndexMap[activeSection] || '01'}</span>/10
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#FAF9F6] hover:text-[#B7B1A8] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Micro Reading Progress Line along bottom edge */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-[#FAF9F6] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#151515] text-[#FAF9F6] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn md:hidden">
          <div className="flex items-center justify-between border-b border-[#282828] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FAF9F6] text-[#151515] flex items-center justify-center font-serif font-bold text-sm">
                PB
              </div>
              <span className="font-serif text-xl tracking-wide text-[#FAF9F6]">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#FAF9F6] hover:text-[#B7B1A8]"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 my-auto py-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-3xl text-[#FAF9F6]/80 hover:text-[#FAF9F6] transition-colors flex items-baseline justify-between border-b border-[#282828] pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#77736D]">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#282828] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B7B1A8]">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#FAF9F6] text-[#151515] font-semibold uppercase tracking-widest"
            >
              <span>REQUEST CV ↗</span>
            </a>
            <span className="text-[#77736D]">
              BANGALORE • 2025–2027
            </span>
          </div>
        </div>
      )}
    </>
  );
};

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
    const sections = ['hero', 'pov', 'work', 'bear-house', 'editorial', 'experience', 'skills', 'about', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'VIEWPOINT', href: '#pov', id: 'pov' },
    { label: 'RETAIL', href: '#bear-house', id: 'bear-house' },
    { label: 'PERSPECTIVES', href: '#editorial', id: 'editorial' },
    { label: 'TRACK RECORD', href: '#experience', id: 'experience' },
    { label: 'CAPABILITIES', href: '#skills', id: 'skills' },
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
            ? 'bg-[#0D0D0D] border-b border-[#262626] py-3.5 shadow-md'
            : 'bg-[#0D0D0D] py-5 border-b border-[#1A1A1A]'
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
            className="group flex items-center gap-3.5 text-left focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#161616] text-[#F5F4F0] border border-[#262626] flex items-center justify-center font-serif font-semibold text-sm group-hover:border-[#F5F4F0] transition-colors">
              PB
            </div>
            <div>
              <span className="block font-serif text-lg tracking-wide font-normal text-[#F5F4F0]">
                {PERSONAL_DATA.name}
              </span>
              <span className="block font-mono text-[9px] tracking-[0.25em] text-[#96938D] uppercase">
                Fashion & Lifestyle Business
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-mono tracking-[0.2em]">
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
                      ? 'text-[#F5F4F0] after:w-full after:bg-[#F5F4F0]'
                      : 'text-[#96938D] hover:text-[#F5F4F0] after:w-0 hover:after:w-full after:bg-[#F5F4F0]'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:transition-all after:duration-200`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Clean Editorial CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.2em] uppercase px-3.5 py-1.5 border border-[#262626] text-[#F5F4F0] hover:bg-[#F5F4F0] hover:text-[#0D0D0D] transition-colors bg-[#161616]"
            >
              <span>DOWNLOAD CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#F5F4F0] hover:text-[#96938D] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Reading Progress Line */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-[#F5F4F0] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0D0D0D] text-[#F5F4F0] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn lg:hidden">
          <div className="flex items-center justify-between border-b border-[#262626] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F5F4F0] text-[#0D0D0D] flex items-center justify-center font-serif font-bold text-sm">
                PB
              </div>
              <span className="font-serif text-xl tracking-wide text-[#F5F4F0]">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F5F4F0] hover:text-[#96938D]"
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
                className="font-serif text-3xl sm:text-4xl text-[#F5F4F0]/80 hover:text-[#F5F4F0] transition-colors flex items-baseline justify-between border-b border-[#262626] pb-3"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#96938D]">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#96938D]">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#F5F4F0] text-[#0D0D0D] font-semibold uppercase tracking-widest"
            >
              <span>DOWNLOAD CV ↗</span>
            </a>
            <span className="text-[#96938D]">
              BANGALORE • 2025–2027
            </span>
          </div>
        </div>
      )}
    </>
  );
};

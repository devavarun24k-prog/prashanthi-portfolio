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
    { label: 'Bear House', href: '#bear-house' },
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5EEE3]/95 backdrop-blur-md border-b border-[#E2D5C3] py-3.5 shadow-sm'
            : 'bg-[#F5EEE3] py-5 border-b border-transparent'
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
            <span className="font-serif text-2xl tracking-tight text-[#2C2421] group-hover:text-[#722F37] transition-colors">
              Prashanthi B.
            </span>
            <span className="hidden sm:inline-block text-[11px] text-[#8F8177] uppercase tracking-wider font-sans font-medium">
              Fashion Business
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-sans font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[#554E48] hover:text-[#722F37] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#722F37] text-[#F5EEE3] hover:bg-[#2C2421] transition-colors shadow-sm"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#2C2421] hover:text-[#722F37] focus:outline-none md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5EEE3] text-[#2C2421] flex flex-col justify-between p-8 sm:p-12 animate-fadeIn md:hidden">
          <div className="flex items-center justify-between border-b border-[#E2D5C3] pb-6">
            <span className="font-serif text-2xl text-[#2C2421]">
              Prashanthi B.
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#2C2421] hover:text-[#722F37]"
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
                className="font-serif text-3xl text-[#2C2421] hover:text-[#722F37] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E2D5C3] flex items-center justify-between text-xs font-sans text-[#8F8177]">
            <a
              href={PERSONAL_DATA.cvUrl}
              className="inline-flex items-center gap-1.5 py-2.5 px-5 rounded-full bg-[#722F37] text-[#F5EEE3] font-medium uppercase tracking-wider shadow-sm"
            >
              <span>Request CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span>Bangalore, India</span>
          </div>
        </div>
      )}
    </>
  );
};

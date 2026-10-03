import { useState, useEffect } from 'react';
import type { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyView } from './components/CaseStudyView';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('HERO');

  // Minimal Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'contact', name: '04 CONTACT' },
        { id: 'experience', name: '03 EXPERIENCE' },
        { id: 'about', name: '02 ABOUT' },
        { id: 'work', name: '01 WORK' },
        { id: 'hero', name: 'HERO' },
      ];

      const scrollY = window.scrollY + window.innerHeight * 0.35;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollY >= el.offsetTop) {
          setActiveSection(sec.name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0A09] text-[#F4F0E8] antialiased selection:bg-[#722F37] selection:text-[#F4F0E8]">
      {/* Sticky Minimal Navigation */}
      <Navbar />

      {/* Floating Scroll Section Indicator (Desktop Only) */}
      <aside className="fixed right-6 bottom-10 z-30 hidden xl:flex flex-col items-end gap-2 font-mono text-[10px] text-[#8E8278] select-none pointer-events-none">
        <div className="flex items-center gap-2 bg-[#141211]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#262320] text-[#C8BFB2] shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] animate-pulse" />
          <span className="font-semibold uppercase tracking-widest">{activeSection}</span>
        </div>
      </aside>

      {/* Main Continuous Narrative Flow (Zero Slide-Show Filler) */}
      <main className="flex-grow">
        {/* 1. Fullscreen Hero */}
        <Hero />

        {/* 2. Selected Work (5 Curated Editorial Spreads) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. About: Perspective & Personality */}
        <AboutSection />

        {/* 4. Experience & Education: Professional History */}
        <ExperienceSection />

        {/* 5. Contact: Collaboration & Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Immersive Case Study View */}
      <CaseStudyView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}

export default App;


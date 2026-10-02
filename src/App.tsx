import { useState, useEffect } from 'react';
import type { Project } from './data/portfolioData';
import { PROJECTS_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { TheBearHouseFeature } from './components/TheBearHouseFeature';
import { ExperienceSection } from './components/ExperienceSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyView } from './components/CaseStudyView';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Minimal Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'contact', name: '04 CONTACT' },
        { id: 'about', name: '03 ABOUT' },
        { id: 'experience', name: '02 EXPERIENCE' },
        { id: 'work', name: '01 WORK' },
        { id: 'hero', name: 'SYS.01' },
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
      {/* Sticky Navigation */}
      <Navbar />

      {/* Extremely Minimal Floating Scroll Progress Tracker (Desktop Only) */}
      <aside className="fixed right-6 bottom-10 z-30 hidden xl:flex flex-col items-end gap-2 font-mono text-[10px] text-[#8E8278] select-none pointer-events-none">
        <div className="flex items-center gap-2 bg-[#141211]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#262320] text-[#C8BFB2]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] animate-pulse" />
          <span className="font-semibold uppercase tracking-widest">{activeSection}</span>
        </div>
      </aside>

      {/* Main Narrative Flow */}
      <main className="flex-grow">
        {/* 1. Hero: Personal Introduction & Identity */}
        <Hero />

        {/* 2. Selected Work: 5 Image-Led Case Studies */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. The Bear House: Hero Retail Case Study Feature */}
        <TheBearHouseFeature onOpenStudy={() => setSelectedProject(PROJECTS_DATA[0])} />

        {/* 4. Experience & Education: Clean Professional History */}
        <ExperienceSection />

        {/* 5. About: Real Human Perspective & Background */}
        <AboutSection />

        {/* 6. Contact: Get in Touch */}
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


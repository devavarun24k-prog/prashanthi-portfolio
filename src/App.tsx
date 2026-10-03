import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyView } from './components/CaseStudyView';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0A09] text-[#F4F0E8] antialiased selection:bg-[#722F37] selection:text-[#F4F0E8]">
      {/* Sticky Minimal Navigation */}
      <Navbar />

      {/* Main Continuous Narrative Flow (Zero Slide-Show Filler) */}
      <main className="flex-grow">
        {/* 1. Fullscreen Hero */}
        <Hero />

        {/* 2. Selected Work (5 Curated Editorial Spreads) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. About: Perspective & Personality */}
        <AboutSection />

        {/* 4. What I Work With: Core Capabilities */}
        <CapabilitiesSection />

        {/* 5. Experience & Education: Professional History */}
        <ExperienceSection />

        {/* 6. Contact: Collaboration & Inquiry */}
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


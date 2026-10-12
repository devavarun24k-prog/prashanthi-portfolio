import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { EditorialGrid } from './components/EditorialGrid';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyView } from './components/CaseStudyView';
import { EntryStage } from './components/EntryStage';
import { AmbientCursor } from './components/AmbientCursor';

export function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0A09] text-[#F4F0E8] antialiased selection:bg-[#722F37] selection:text-[#F4F0E8] relative">
      {/* Subtle Interactive Ambient Cursor Glow matching reference portfolio */}
      <AmbientCursor />

      {/* 0. Standalone Editorial Opening Stage inspired by reference opening & ENTER interaction */}
      {!hasEntered && (
        <EntryStage onEnter={() => setHasEntered(true)} />
      )}
      {/* Subtle Architectural Editorial Grid System (Background Layer) */}
      <EditorialGrid />

      {/* Sticky Minimal Navigation */}
      <Navbar />

      {/* Main Continuous Narrative Flow (Zero Slide-Show Filler) */}
      <main className="flex-grow">
        {/* 1. Fullscreen Hero */}
        <Hero />

        {/* 2. Selected Work (6 Curated Editorial Spreads) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. About: Perspective & Personality */}
        <AboutSection />

        {/* 4. What I Work With: Core Capabilities */}
        <CapabilitiesSection />

        {/* 5. Experience & Education: Professional History */}
        <ExperienceSection />

        {/* 6. Resume: Credentials & Profile */}
        <ResumeSection />

        {/* 7. Contact: Collaboration & Inquiry */}
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


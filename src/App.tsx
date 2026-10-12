import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { EditorialGrid } from './components/EditorialGrid';
import { Hero } from './components/Hero';
import { EditorialTicker } from './components/EditorialTicker';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EntryStage } from './components/EntryStage';
import { AmbientCursor } from './components/AmbientCursor';

export function App() {
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hasEntered) {
        const targetId = hash.startsWith('#') ? hash.substring(1) : hash;
        const element =
          document.getElementById(targetId) ||
          (targetId === 'samsonite' || targetId === 'samsonite-smarttravel'
            ? document.getElementById('project-samsonite-smarttravel')
            : null) ||
          (targetId === 'masaba' || targetId === 'house-of-masaba'
            ? document.getElementById('project-house-of-masaba')
            : null) ||
          (targetId === 'healing-the-wait' || targetId === 'heal-queue' || targetId === 'the-space-between'
            ? document.getElementById('project-healing-the-wait')
            : null) ||
          (targetId === 'bvlgari' || targetId === 'phygital-maison' || targetId === 'the-phygital-maison'
            ? document.getElementById('project-bvlgari')
            : null);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [hasEntered]);

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

        {/* Horizontal Editorial Competencies Ticker */}
        <EditorialTicker />

        {/* 2. Selected Work (6 Curated Editorial Spreads) */}
        <SelectedWork />

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
    </div>
  );
}

export default App;

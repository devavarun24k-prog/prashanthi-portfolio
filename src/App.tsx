import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PointOfViewSection } from './components/PointOfViewSection';
import { SelectedWork } from './components/SelectedWork';
import { TheBearHouseShowcase } from './components/TheBearHouseShowcase';
import { EditorialPerspectives } from './components/EditorialPerspectives';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceAndEducation } from './components/ExperienceAndEducation';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#17120F] text-[#F3EFE7] antialiased selection:bg-[#5A2028] selection:text-[#F3EFE7]">
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Editorial Navbar with Reading Progress */}
      <Navbar />

      {/* Main Narrative Content Flow */}
      <main className="flex-grow">
        {/* 01 — OPENING HERO */}
        <Hero />

        {/* 02 — POINT OF VIEW (Creative × Commercial Synthesis) */}
        <PointOfViewSection />

        {/* 03 — SELECTED WORK (Curated Project Index) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 04 — RETAIL IMMERSION (The Bear House Retail Feature) */}
        <TheBearHouseShowcase />

        {/* 05 — PERSPECTIVES (Publication Index) */}
        <EditorialPerspectives />

        {/* 06 — CAPABILITIES MATRIX (12 Verified Skills) */}
        <SkillsSection />

        {/* 07 — TRACK RECORD (Experience & Education) */}
        <ExperienceAndEducation />

        {/* 08 — ABOUT PRASHANTHI B. */}
        <AboutSection />

        {/* 09 — DRAMATIC FINALE CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Reader */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;

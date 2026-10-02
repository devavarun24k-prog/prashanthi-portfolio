import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { PROJECTS_DATA } from './data/portfolioData';
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
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#F5F4F0] antialiased selection:bg-[#F5F4F0] selection:text-[#0D0D0D]">
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
        <TheBearHouseShowcase onOpenStudy={() => setSelectedProject(PROJECTS_DATA[0])} />

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
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}

export default App;

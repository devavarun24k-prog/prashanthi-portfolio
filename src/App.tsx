import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PointOfViewSection } from './components/PointOfViewSection';
import { TheWayIThinkSection } from './components/TheWayIThinkSection';
import { SelectedWork } from './components/SelectedWork';
import { BehindTheEyeSection } from './components/BehindTheEyeSection';
import { SelectedObservationsSection } from './components/SelectedObservationsSection';
import { ExperienceAndEducation } from './components/ExperienceAndEducation';
import { BeyondTheRoleSection } from './components/BeyondTheRoleSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#151515] text-[#FAF9F6] antialiased selection:bg-[#FAF9F6] selection:text-[#151515]">
      {/* Sticky Editorial Navbar with Section Counter & Progress */}
      <Navbar />

      {/* 10 Continuous Narrative Editorial Chapters */}
      <main className="flex-grow">
        {/* 01 — OPENING / HERO */}
        <Hero />

        {/* 02 — POINT OF VIEW (Creative × Commercial Synthesis) */}
        <PointOfViewSection />

        {/* 03 — THE WAY I THINK (Transitional Manifesto) */}
        <TheWayIThinkSection />

        {/* 04 — SELECTED WORK (5 Distinct Editorial Compositions) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 05 — BEHIND THE EYE (Product Evaluation Matrix) */}
        <BehindTheEyeSection />

        {/* 06 — SELECTED OBSERVATIONS (Horizontal Storytelling) */}
        <SelectedObservationsSection />

        {/* 07 — EXPERIENCE & EDUCATION (Year Blocks & Degrees) */}
        <ExperienceAndEducation />

        {/* 08 — BEYOND THE ROLE (Human Perspective) */}
        <BeyondTheRoleSection />

        {/* 09 — ABOUT (Biographical Profile & CV CTA) */}
        <AboutSection />

        {/* 10 — CONTACT (Let's Create What's Next) */}
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

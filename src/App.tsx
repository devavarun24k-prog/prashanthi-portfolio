import { useState } from 'react';
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

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EEE3] text-[#2C2421] antialiased selection:bg-[#722F37] selection:text-[#F5EEE3]">
      {/* Sticky Navigation */}
      <Navbar />

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

      {/* Magazine Case Study View */}
      <CaseStudyView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}

export default App;

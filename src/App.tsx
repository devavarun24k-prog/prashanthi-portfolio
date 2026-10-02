import { useState } from 'react';
import type { Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Experience } from './components/Experience';
import { IndustryExposure } from './components/IndustryExposure';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1B19] antialiased selection:bg-[#9C7A4A] selection:text-white">
      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Selected Work */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 3: Experience & Education */}
        <Experience />

        {/* Section 4: Industry Exposure */}
        <IndustryExposure />

        {/* Section 5: About & Strategic Focus */}
        <About />

        {/* Section 6: Skills */}
        <Skills />

        {/* Section 7: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;

import React from 'react';
import SiteChrome from './components/layout/SiteChrome.jsx';
import FloatingNavigation from './components/layout/FloatingNavigation.jsx';
import HomeSection from './sections/HomeSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import ApplicationsSection from './sections/ApplicationsSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import { usePanelNavigation } from './hooks/usePanelNavigation.js';
import { useApplicationCarousel } from './hooks/useApplicationCarousel.js';

export default function App() {
  const { trackRef, handleTrackScroll, handleWheel, activePanelId } = usePanelNavigation();
  const { application, activeApplication, changeApplication, selectApplication } =
    useApplicationCarousel();

  return (
    <>
      <SiteChrome />
      <main
        id="main-content"
        tabIndex={-1}
        className="portfolio-track"
        ref={trackRef}
        onScroll={handleTrackScroll}
        onWheel={handleWheel}
      >
        <HomeSection />
        <AboutSection />
        <ApplicationsSection
          application={application}
          activeApplication={activeApplication}
          changeApplication={changeApplication}
        />
        <ProjectsSection />
        <SkillsSection onSelectApplication={selectApplication} />
        <ContactSection />
      </main>
      <FloatingNavigation activePanelId={activePanelId} />
    </>
  );
}

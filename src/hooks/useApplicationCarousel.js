import { useLayoutEffect, useRef, useState } from 'react';
import { applications } from '../data/applications.js';

export function useApplicationCarousel() {
  const [activeApplication, setActiveApplication] = useState(0);
  const previousApplication = useRef(activeApplication);
  useLayoutEffect(() => {
    if (previousApplication.current === activeApplication) return;
    previousApplication.current = activeApplication;
    const panel = document.getElementById('applications');
    if (!panel) return;
    if (window.matchMedia('(max-width: 680px)').matches) {
      panel.closest('.portfolio-track').scrollTo({ top: panel.offsetTop, behavior: 'instant' });
    } else {
      panel.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activeApplication]);
  const changeApplication = (direction) => {
    setActiveApplication(
      (active) => (active + direction + applications.length) % applications.length,
    );
  };
  const selectApplication = (id) => {
    const index = applications.findIndex((application) => application.id === id);
    if (index !== -1) setActiveApplication(index);
  };
  return {
    application: applications[activeApplication],
    activeApplication,
    changeApplication,
    selectApplication,
  };
}

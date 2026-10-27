import { useState } from 'react';
import { applications } from '../data/applications.js';

export function useApplicationCarousel() {
  const [activeApplication, setActiveApplication] = useState(0);
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

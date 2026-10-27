import React from 'react';
import ApplicationSlide from '../components/projects/ApplicationSlide.jsx';
import { applications } from '../data/applications.js';

export default function ApplicationsSection({ application, activeApplication, changeApplication }) {
  return (
    <section className="page-panel applications-panel" id="applications" aria-label="Applications">
      <div className="panel-content applications-content">
        <div className="panel-kicker">
          <span>03 / APPLICATIONS</span>
          <span>SELECT AN APP TO EXPLORE</span>
        </div>
        <div className={`app-showcase tone-${application.tone}`}>
          <ApplicationSlide key={application.title} application={application} />
        </div>
        <p className="sr-only" role="status">
          Application {activeApplication + 1} of {applications.length}: {application.title}
        </p>
        <div className="app-controls">
          <div className="app-switcher">
            <span className="app-count">
              <strong>{String(activeApplication + 1).padStart(2, '0')}</strong>
              <i>/</i>
              {String(applications.length).padStart(2, '0')}
            </span>
            <div className="app-progress" aria-hidden="true">
              <span
                style={{ transform: `scaleX(${(activeApplication + 1) / applications.length})` }}
              />
            </div>
            <div className="arrow-group">
              <button
                type="button"
                onClick={() => changeApplication(-1)}
                aria-label="Previous application"
              >
                <span aria-hidden="true">←</span> Previous
              </button>
              <button
                type="button"
                onClick={() => changeApplication(1)}
                aria-label="Next application"
              >
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
            <span className="arrow-hint">USE ARROWS TO SWITCH APPS</span>
          </div>
          <a className="view-all-button" href="#all-projects">
            View all projects <span>↗</span>
          </a>
        </div>
        <span className="panel-index">03 — 06</span>
      </div>
    </section>
  );
}

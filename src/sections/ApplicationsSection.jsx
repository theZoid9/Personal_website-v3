import React from 'react';
import ApplicationSlide from '../components/projects/ApplicationSlide.jsx';
import { applications } from '../data/applications.js';

export default function ApplicationsSection({ application, activeApplication, changeApplication }) {
  return (
    <section className="page-panel applications-panel" id="applications" aria-label="Applications">
      <div className="panel-content applications-content">
        <div className="apps-topbar">
          <div className="app-heading">
            <p>
              <span className="apps-wide-label">03 / APPLICATIONS</span>
              <span className="apps-compact-label">APPS</span>
            </p>
            <span className="app-count">
              <strong>{String(activeApplication + 1).padStart(2, '0')}</strong>
              <i>/</i>
              {String(applications.length).padStart(2, '0')}
            </span>
          </div>
          <div className="app-controls">
            <div className="arrow-group">
              <button
                type="button"
                onClick={() => changeApplication(-1)}
                aria-label="Previous application"
              >
                <span aria-hidden="true">←</span>
                <span className="app-button-label">Previous</span>
              </button>
              <button
                type="button"
                onClick={() => changeApplication(1)}
                aria-label="Next application"
              >
                <span className="app-button-label">Next</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <a className="view-all-button" href="#all-projects" aria-label="View all projects">
              All projects <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className={'app-showcase tone-' + application.tone}>
          <ApplicationSlide key={application.id} application={application} />
        </div>
        <p className="sr-only" role="status">
          Application {activeApplication + 1} of {applications.length}: {application.title}
        </p>
      </div>
    </section>
  );
}

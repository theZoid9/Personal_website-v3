import React, { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import { applications, applicationCategories } from '../data/applications.js';

export default function ProjectsSection() {
  const [projectFilter, setProjectFilter] = useState('All');
  const filteredProjects = applications.filter(
    (project) => projectFilter === 'All' || project.category === projectFilter,
  );
  return (
    <section className="page-panel all-projects-panel" id="all-projects" aria-label="All projects">
      <div className="panel-content all-projects-content">
        <div className="panel-kicker">
          <span>04 / PROJECT ARCHIVE</span>
          <span>WEB · MOBILE · DATA · GAMES</span>
        </div>
        <div className="all-projects-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE BEEN MAKING</p>
            <h2>
              All the <span>work.</span>
            </h2>
          </div>
        </div>
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {applicationCategories.map((category) => (
            <button
              type="button"
              key={category}
              aria-pressed={projectFilter === category}
              onClick={() => setProjectFilter(category)}
            >
              {category}
              <span>
                {category === 'All'
                  ? applications.length
                  : applications.filter((project) => project.category === category).length}
              </span>
            </button>
          ))}
        </div>
        <p className="project-results" role="status">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} ·{' '}
          {projectFilter === 'All' ? 'All categories' : projectFilter}
        </p>
        <div className="project-collection">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <a className="back-to-apps" href="#applications">
          ← Back to app showcase
        </a>
        <span className="panel-index">04 — 06</span>
      </div>
    </section>
  );
}

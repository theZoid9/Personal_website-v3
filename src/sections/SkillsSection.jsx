import React from 'react';
import { applications } from '../data/applications.js';
import { skillGroups } from '../data/skills.js';

export default function SkillsSection({ onSelectApplication }) {
  return (
    <section className="page-panel skills-panel" id="skills" aria-label="Skills">
      <div className="panel-content skills-content">
        <div className="panel-kicker">
          <span>05 / MY TOOLKIT</span>
          <span>SKILLS THAT KEEP GROWING</span>
        </div>
        <div className="skills-heading">
          <p className="eyebrow">A PRACTICAL, GROWING TOOLKIT</p>
          <h2>
            Good tools.
            <br />
            <span>Better questions.</span>
          </h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span aria-hidden="true">✳</span>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="skill-evidence">
                <p>{group.evidence}</p>
                {group.projectId !== undefined ? (
                  <a href="#applications" onClick={() => onSelectApplication(group.projectId)}>
                    Explore {applications.find((project) => project.id === group.projectId).title}{' '}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <a href="#contact">
                    Discuss a backend project <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <span className="panel-index">05 — 06</span>
      </div>
    </section>
  );
}

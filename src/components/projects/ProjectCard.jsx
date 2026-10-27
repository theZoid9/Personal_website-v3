import React from 'react';
import PlaceMarkerPreview from './PlaceMarkerPreview.jsx';
import PreviewGallery from './PreviewGallery.jsx';

export default function ProjectCard({ project }) {
  return (
    <article className={`collection-card collection-${project.tone}`}>
      <div className={`collection-preview ${project.image ? '' : 'collection-place-marker'}`}>
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
        ) : (
          <PlaceMarkerPreview />
        )}
      </div>
      <div className="collection-info">
        <p className="collection-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="collection-description">{project.description}</p>
        <ul className="collection-tags">
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.action}
            <span>↗</span>
          </a>
        ) : (
          <span className="collection-concept">Concept preview</span>
        )}
      </div>
      <details className="case-study">
        <summary>
          Read case study <span aria-hidden="true">＋</span>
        </summary>
        <div className="case-study-body">
          <PreviewGallery project={project} />
          <dl>
            <div>
              <dt>Overview</dt>
              <dd>{project.description}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.caseStudy.role}</dd>
            </div>
            <div>
              <dt>Technologies</dt>
              <dd>{project.stack.join(' · ')}</dd>
            </div>
            <div>
              <dt>Challenge</dt>
              <dd>{project.caseStudy.challenge}</dd>
            </div>
            <div>
              <dt>Result & status</dt>
              <dd>{project.caseStudy.result}</dd>
            </div>
          </dl>
        </div>
      </details>
    </article>
  );
}

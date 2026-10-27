import React from 'react';
import PreviewGallery from './PreviewGallery.jsx';

export default function ApplicationSlide({ application }) {
  return (
    <>
      <div className="app-copy">
        <p className="app-type">
          <span />
          {application.type}
        </p>
        <h2>{application.title}</h2>
        <p className="app-description">{application.description}</p>
        <ul className="tag-list">
          {application.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {application.href ? (
          <a className="project-link" href={application.href} target="_blank" rel="noreferrer">
            {application.action}
            <span>↗</span>
          </a>
        ) : (
          <span className="concept-note">
            A concept in progress <span>✳</span>
          </span>
        )}
      </div>
      <div className="app-preview gallery-preview">
        {application.animation ? (
          <div className="browser-device">
            <div className="browser-toolbar" aria-hidden="true">
              <span>● ● ●</span>
              <small>{application.title} / preview</small>
            </div>
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet={application.image} />
              <img src={application.animation} alt={application.imageAlt} />
            </picture>
          </div>
        ) : (
          <PreviewGallery project={application} />
        )}
      </div>
    </>
  );
}

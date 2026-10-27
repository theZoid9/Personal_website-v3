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
        {application.href && (
          <a
            className="project-link"
            href={application.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {application.action}
            <span>↗</span>
          </a>
        )}
      </div>
      <div className="app-preview gallery-preview">
        <PreviewGallery project={application} />
      </div>
    </>
  );
}

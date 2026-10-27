import React, { useState } from 'react';
import PlaceMarkerPreview from './PlaceMarkerPreview.jsx';

export default function PreviewGallery({ project }) {
  const [selected, setSelected] = useState(0);
  const views = project.screenshots || ['Map', 'Saved'];
  const changeView = (direction) =>
    setSelected((current) => (current + direction + views.length) % views.length);
  return (
    <div
      className="preview-gallery"
      role="group"
      aria-label={`${project.title} screenshots`}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          changeView(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      {project.image ? (
        <div className="browser-device">
          <div className="browser-toolbar" aria-hidden="true">
            <span>● ● ●</span>
            <small>{project.title} / preview</small>
          </div>
          <img
            src={views[selected]}
            alt={`${project.imageAlt}, screenshot ${selected + 1}`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="concept-device">
          <PlaceMarkerPreview view={views[selected]} />
          <span className="concept-badge">CONCEPT · NOT A RELEASED APP</span>
        </div>
      )}
      <div className="screenshot-controls">
        <button
          type="button"
          onClick={() => changeView(-1)}
          aria-label={`Previous screenshot of ${project.title}`}
        >
          ←
        </button>
        <span role="status">
          {project.image
            ? `Screenshot ${selected + 1} / ${views.length}`
            : `${views[selected]} · concept`}
        </span>
        <button
          type="button"
          onClick={() => changeView(1)}
          aria-label={`Next screenshot of ${project.title}`}
        >
          →
        </button>
      </div>
      <div className="screenshot-thumbnails">
        {views.map((view, index) => (
          <button
            type="button"
            key={view}
            aria-pressed={selected === index}
            aria-label={
              project.image
                ? `Show screenshot ${index + 1} of ${project.title}`
                : `Show ${view} concept`
            }
            onClick={() => setSelected(index)}
          >
            {project.image ? <img src={view} alt="" loading="lazy" /> : view}
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function PreviewGallery({ project }) {
  const [selected, setSelected] = useState(0);
  const views = project.screenshots || [project.image];
  const mobile = project.previewFormat === 'mobile';
  const changeView = (direction) =>
    setSelected((current) => (current + direction + views.length) % views.length);

  return (
    <div
      className="preview-gallery"
      role="group"
      aria-label={project.title + ' screenshots'}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          changeView(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <div className={mobile ? 'mobile-screenshot-device' : 'browser-device'}>
        {mobile ? (
          <span className="mobile-camera" aria-hidden="true" />
        ) : (
          <div className="browser-toolbar" aria-hidden="true">
            <span>● ● ●</span>
            <small>{project.title} / preview</small>
          </div>
        )}
        <img
          src={views[selected]}
          alt={
            project.screenshotAlts?.[selected] ||
            project.imageAlt + ', screenshot ' + (selected + 1)
          }
          loading="lazy"
        />
      </div>
      <div className="screenshot-controls">
        <button
          type="button"
          onClick={() => changeView(-1)}
          aria-label={'Previous screenshot of ' + project.title}
        >
          ←
        </button>
        <span role="status">
          Screenshot {selected + 1} / {views.length}
        </span>
        <button
          type="button"
          onClick={() => changeView(1)}
          aria-label={'Next screenshot of ' + project.title}
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
            aria-label={'Show screenshot ' + (index + 1) + ' of ' + project.title}
            onClick={() => setSelected(index)}
          >
            <img src={view} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useRef, useState } from 'react';

export default function PreviewGallery({ project }) {
  const [selected, setSelected] = useState(0);
  const dialogRef = useRef(null);
  const galleryRef = useRef(null);
  const views = project.screenshots || [project.image];
  const mobile = project.previewFormat === 'mobile';
  const description = (index) =>
    project.screenshotAlts?.[index] || project.imageAlt + ', screenshot ' + (index + 1);
  const changeView = (direction) =>
    setSelected((current) => (current + direction + views.length) % views.length);
  const openPreview = (index) => {
    setSelected(index);
    dialogRef.current?.showModal();
  };
  const controls = (
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
  );

  return (
    <div
      ref={galleryRef}
      className="preview-gallery"
      role="group"
      aria-label={project.title + ' screenshots'}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          event.stopPropagation();
          changeView(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      {mobile ? (
        <div className="mobile-preview-strip">
          {views.map((view, index) => (
            <div
              key={view}
              className={'mobile-screenshot-device' + (selected === index ? ' is-selected' : '')}
            >
              <span className="mobile-camera" aria-hidden="true" />
              <button
                className="preview-expand"
                type="button"
                onClick={() => openPreview(index)}
                aria-label={'Enlarge screenshot ' + (index + 1) + ' of ' + project.title}
              >
                <img
                  src={view}
                  alt={description(index)}
                  width={project.screenshotSizes[index].width}
                  height={project.screenshotSizes[index].height}
                  loading="lazy"
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="browser-device">
          <div className="browser-toolbar" aria-hidden="true">
            <span>● ● ●</span>
            <small>{project.title} / preview</small>
          </div>
          <button
            className="preview-expand"
            type="button"
            onClick={() => openPreview(selected)}
            aria-label={'Enlarge screenshot ' + (selected + 1) + ' of ' + project.title}
          >
            <img
              src={views[selected]}
              alt={description(selected)}
              width={project.screenshotSizes[selected].width}
              height={project.screenshotSizes[selected].height}
              loading="lazy"
            />
          </button>
        </div>
      )}
      {controls}
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
      <dialog
        className="screenshot-lightbox"
        ref={dialogRef}
        onClose={() =>
          requestAnimationFrame(() => {
            const preview = galleryRef.current?.querySelector(
              '.mobile-screenshot-device.is-selected .preview-expand, .browser-device .preview-expand',
            );
            preview?.focus({ preventScroll: true });
          })
        }
        aria-label={project.title + ' enlarged screenshots'}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
      >
        <div className="lightbox-heading">
          <strong>{project.title}</strong>
          <button
            type="button"
            onClick={() => dialogRef.current.close()}
            aria-label="Close enlarged screenshot"
          >
            ×
          </button>
        </div>
        <img className="lightbox-image" src={views[selected]} alt={description(selected)} />
        {controls}
      </dialog>
    </div>
  );
}

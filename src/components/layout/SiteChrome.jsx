import React from 'react';

export default function SiteChrome() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <a className="corner-brand" href="#home" aria-label="ZA, home">
        ZA<span>.</span>
      </a>
      <div className="corner-note">
        <span /> AVAILABLE FOR THE RIGHT PROJECT
      </div>
    </>
  );
}

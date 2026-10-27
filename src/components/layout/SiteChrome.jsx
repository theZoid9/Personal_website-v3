import React from 'react';

export default function SiteChrome() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-chrome" aria-label="Portfolio header">
        <a className="corner-brand" href="#home" aria-label="ZA, home">
          ZA<span>.</span>
        </a>
        <div className="corner-note">
          <span aria-hidden="true" /> AVAILABLE
        </div>
      </header>
    </>
  );
}

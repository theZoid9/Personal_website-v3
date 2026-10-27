import React from 'react';
import TypingHeading from '../components/headings/TypingHeading.jsx';
import { profile } from '../data/profile.js';

export default function HomeSection() {
  return (
    <section className="page-panel hero-panel" id="home" aria-label="Home">
      <div className="panel-content hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>{profile.location.toUpperCase()}</span>
            <span className="eyebrow-line" />
          </p>
          <TypingHeading />
          <p className="hero-intro">
            I build useful things for the web, work with data, and explore what happens when code
            meets 3D.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#applications">
              Explore my work <span>→</span>
            </a>
            <a
              className="button button-secondary"
              href={profile.resumeUrl}
              download={profile.resumeDownloadName}
            >
              Download CV <span>↓</span>
            </a>
            <a className="text-link hero-email" href={'mailto:' + profile.email}>
              Email me <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>FULL-STACK DEVELOPMENT</span>
            <b>·</b>
            <span>DATA ENGINEERING</span>
          </div>
        </div>
        <div className="side-hint">
          <span className="desktop-scroll-hint">SCROLL SIDEWAYS TO EXPLORE</span>
          <span className="mobile-scroll-hint">SCROLL DOWN TO EXPLORE</span>
          <b className="desktop-scroll-hint">→</b>
          <b className="mobile-scroll-hint">↓</b>
        </div>
        <span className="panel-index">01 — 06</span>
      </div>
    </section>
  );
}

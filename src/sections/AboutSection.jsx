import React from 'react';
import AboutHeading from '../components/headings/AboutHeading.jsx';
import CuriosityBadge from '../components/coffee/CuriosityBadge.jsx';
import { profile } from '../data/profile.js';

export default function AboutSection() {
  return (
    <section className="page-panel about-panel" id="about" aria-label="About">
      <div className="panel-content about-content">
        <div className="panel-kicker">
          <span>02 / A BIT ABOUT ME</span>
          <span>THE PERSON BEHIND THE PIXELS</span>
        </div>
        <div className="about-layout">
          <div>
            <p className="eyebrow">CURIOUS BY NATURE</p>
            <AboutHeading />
          </div>
          <div className="about-detail">
            <p className="about-lede">
              I’m drawn to the space where design, technology and data meet.
            </p>
            <p>
              Programming has taught me to think systematically, solve problems with patience and
              keep room for experimentation. I enjoy shaping an idea into an interface, then working
              through the logic and data that make it useful.
            </p>
            <div className="about-facts">
              <div>
                <small>BASED IN</small>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <small>OFF-SCREEN</small>
                <strong>Fishing · Gaming</strong>
              </div>
            </div>
          </div>
          <CuriosityBadge />
        </div>
        <span className="panel-index">02 — 06</span>
      </div>
    </section>
  );
}

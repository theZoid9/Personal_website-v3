import React from 'react';
import { profile } from '../data/profile.js';

export default function ContactSection() {
  return (
    <section className="page-panel contact-panel" id="contact" aria-label="Contact">
      <div className="panel-content contact-content">
        <div className="panel-kicker">
          <span>06 / YOUR TURN</span>
          <span>LET’S MAKE SOMETHING GOOD</span>
        </div>
        <div className="contact-layout">
          <div>
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>
              Let’s make
              <br />
              it <span>happen.</span>
            </h2>
          </div>
          <div className="contact-side">
            <figure className="contact-portrait">
              <img src={profile.portraitUrl} alt={profile.name} loading="lazy" />
              <figcaption>
                {profile.name.toUpperCase()}
                <span>Developer & data engineer</span>
              </figcaption>
            </figure>
            <p>
              I’m always up for a good conversation about building for the web, solving data
              problems or making something a little unexpected.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href={'mailto:' + profile.email}>
                Email me <span>↗</span>
              </a>
              <a
                className="button button-secondary"
                href={profile.resumeUrl}
                download={profile.resumeDownloadName}
              >
                Download CV <span>↓</span>
              </a>
            </div>
            <a className="contact-email" href={'mailto:' + profile.email}>
              {profile.email}
            </a>
            <div className="social-links">
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label + ' ↗'}
                </a>
              ))}
            </div>
          </div>
        </div>
        <footer className="contact-footer">
          <a className="brand" href="#home">
            ZA<span>.</span>
          </a>
          <span>DESIGNED & BUILT WITH CURIOSITY</span>
          <span>
            © {new Date().getFullYear()} {profile.name.toUpperCase()}
          </span>
        </footer>
        <span className="panel-index">06 — 06</span>
      </div>
    </section>
  );
}

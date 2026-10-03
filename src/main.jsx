import React, { useEffect, useId, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const applications = [
  {
    type: 'WEB APPLICATION',
    title: 'Techsquare',
    description: 'A clear, customer-facing web experience for a technology retailer.',
    image: '/img/previews/techsquare-1.webp',
    animation: '/img/techS.gif',
    screenshots: [1, 2, 3].map((number) => '/img/previews/techsquare-' + number + '.webp'),
    imageAlt: 'Techsquare website preview',
    stack: ['React', 'TypeScript', 'CSS'],
    href: 'https://techsquare.co.za',
    action: 'Visit website',
    tone: 'mint',
    category: 'Web',
    caseStudy: { role: 'Contribution details to be added.', challenge: 'Design goal: present a technology retailer clearly and help visitors explore its offering.', result: 'A website preview and a link to the customer-facing experience. Impact measurements have not been added.' },
  },
  {
    type: 'MOBILE APP CONCEPT',
    title: 'Place Marker',
    description: 'A pocket-sized map concept for saving favourite spots and quickly switching between places.',
    stack: ['Mobile UI', 'Maps', 'React'],
    tone: 'peach',
    category: 'Mobile',
    caseStudy: { role: 'Concept exploration within this portfolio.', challenge: 'Design goal: make saved places easy to find through a compact map interface.', result: 'An interface mockup showing map pins, a saved-place card and navigation. This is a concept, not a released mobile application.' },
  },
  {
    type: 'DATA APPLICATION',
    title: 'Data wrangling',
    description: 'A notebook-led exploration of cleaning, transforming and understanding data.',
    image: '/img/previews/data-wrangling-1.webp',
    animation: '/img/data_wrangle.gif',
    screenshots: [1, 2, 3].map((number) => '/img/previews/data-wrangling-' + number + '.webp'),
    imageAlt: 'Data wrangling notebook preview',
    stack: ['Python', 'Jupyter', 'Data cleaning'],
    href: 'https://github.com/theZoid9/Data-wrangling',
    action: 'Explore repository',
    tone: 'blue',
    category: 'Data',
    caseStudy: { role: 'Contribution details to be added.', challenge: 'Project focus: clean and transform data in a notebook so the exploration can be followed step by step.', result: 'A notebook project with a preview and source repository. Dataset findings and measured improvements have not been added.' },
  },
  {
    type: '3D WEB EXPERIMENT',
    title: 'Snaaake — 3D',
    description: 'A familiar arcade game reimagined as a playful, browser-based 3D experience.',
    image: '/img/previews/snaaake-1.webp',
    animation: '/img/snake.gif',
    screenshots: [1, 2, 3].map((number) => '/img/previews/snaaake-' + number + '.webp'),
    imageAlt: 'Three dimensional Snaaake game preview',
    stack: ['Three.js', 'JavaScript', 'CSS'],
    href: 'https://snakethreejs.onrender.com',
    action: 'Play the game',
    tone: 'lavender',
    category: 'Games',
    caseStudy: { role: 'Contribution details to be added.', challenge: 'Project focus: translate familiar Snake gameplay into a browser-based 3D presentation.', result: 'A playable browser experiment with a game preview. Player feedback and performance measurements have not been added.' },
  },
];

const skillGroups = [
  { project: 0, evidence: 'React · TypeScript · CSS', title: 'Web applications', skills: ['React', 'JavaScript', 'TypeScript', 'HTML & CSS'] },
  { project: 3, evidence: 'Three.js · browser interaction', title: '3D & interaction', skills: ['Three.js', 'WebGL', 'Creative coding', 'Web animation'] },
  { project: 2, evidence: 'Python · Jupyter · data cleaning', title: 'Data engineering', skills: ['Python', 'SQL', 'PostgreSQL', 'Jupyter'] },
  { evidence: 'Backend case study coming soon.', title: 'Backend', skills: ['Node.js', 'Express', 'Django', 'REST APIs', 'PostgreSQL'] },
  { project: 3, evidence: 'JavaScript · 3D gameplay', title: 'Game development', skills: ['Pygame', 'Unity modding', 'JavaScript', 'Three.js', 'Game mechanics'] },
  { project: 2, evidence: 'Source code on GitHub', title: 'Tools & practice', skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'npm', 'Chrome DevTools', 'Figma'] },
];

const panels = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'applications', label: 'Apps', number: '03' },
  { id: 'all-projects', label: 'All work', number: '04', hiddenFromNav: true },
  { id: 'skills', label: 'Skills', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];

function PlaceMarkerPreview({ view = 'Map' }) {
  return (
    <div className="phone-shell" aria-label="Place Marker mobile app concept preview">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-top"><span>9:41</span><span>◔ ▮</span></div>
        <div className="map-heading"><span>{view === 'Map' ? 'YOUR PLACES' : 'SAVED PLACES'}</span><b>⌕</b></div>
        {view === 'Map' ? <div className="map-canvas">
          <span className="map-road road-one" /><span className="map-road road-two" />
          <span className="map-block block-one" /><span className="map-block block-two" /><span className="map-block block-three" />
          <span className="map-water" />
          <span className="map-pin pin-one">✳</span><span className="map-pin pin-two">✳</span><span className="map-pin pin-three">✳</span>
          <span className="map-current">●</span>
        </div> : <div className="concept-saved-list">{['Somewhere good', 'Weekend escape', 'Coffee stop'].map((place) => <div key={place}><span>✳</span><strong>{place}</strong><small>Saved place · concept</small></div>)}</div>}
        <div className="saved-place"><span className="place-icon">✳</span><span><small>RECENTLY SAVED</small><strong>Somewhere good</strong></span><b>↗</b></div>
        <div className="phone-tabs"><span>⌖<small>Map</small></span><span>✳<small>Saved</small></span><span>＋<small>Add place</small></span></div>
      </div>
    </div>
  );
}

function PreviewGallery({ project }) {
  const [selected, setSelected] = useState(0);
  const views = project.screenshots || ['Map', 'Saved'];
  const changeView = (direction) => setSelected((current) => (current + direction + views.length) % views.length);
  return (
    <div className="preview-gallery" role="group" aria-label={`${project.title} screenshots`} onKeyDown={(event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); changeView(event.key === 'ArrowLeft' ? -1 : 1);
      }
    }}>
      {project.image ? <div className="browser-device"><div className="browser-toolbar" aria-hidden="true"><span>● ● ●</span><small>{project.title} / preview</small></div><img src={views[selected]} alt={`${project.imageAlt}, screenshot ${selected + 1}`} loading="lazy" /></div> : <div className="concept-device"><PlaceMarkerPreview view={views[selected]} /><span className="concept-badge">CONCEPT · NOT A RELEASED APP</span></div>}
      <div className="screenshot-controls">
        <button type="button" onClick={() => changeView(-1)} aria-label={`Previous screenshot of ${project.title}`}>←</button>
        <span role="status">{project.image ? `Screenshot ${selected + 1} / ${views.length}` : `${views[selected]} · concept`}</span>
        <button type="button" onClick={() => changeView(1)} aria-label={`Next screenshot of ${project.title}`}>→</button>
      </div>
      <div className="screenshot-thumbnails">
        {views.map((view, index) => <button type="button" key={view} aria-pressed={selected === index} aria-label={project.image ? `Show screenshot ${index + 1} of ${project.title}` : `Show ${view} concept`} onClick={() => setSelected(index)}>{project.image ? <img src={view} alt="" loading="lazy" /> : view}</button>)}
      </div>
    </div>
  );
}

function ApplicationSlide({ application }) {
  return (
    <>
      <div className="app-copy">
        <p className="app-type"><span />{application.type}</p>
        <h2>{application.title}</h2>
        <p className="app-description">{application.description}</p>
        <ul className="tag-list">{application.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {application.href ? <a className="project-link" href={application.href} target="_blank" rel="noreferrer">{application.action}<span>↗</span></a> : <span className="concept-note">A concept in progress <span>✳</span></span>}
      </div>
      <div className="app-preview gallery-preview">
        {application.animation ? <div className="browser-device"><div className="browser-toolbar" aria-hidden="true"><span>● ● ●</span><small>{application.title} / preview</small></div><picture><source media="(prefers-reduced-motion: reduce)" srcSet={application.image} /><img src={application.animation} alt={application.imageAlt} /></picture></div> : <PreviewGallery project={application} />}
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`collection-card collection-${project.tone}`}>
      <div className={`collection-preview ${project.image ? '' : 'collection-place-marker'}`}>
        {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : <PlaceMarkerPreview />}
      </div>
      <div className="collection-info">
        <p className="collection-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="collection-description">{project.description}</p>
        <ul className="collection-tags">{project.stack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        {project.href ? <a href={project.href} target="_blank" rel="noreferrer">{project.action}<span>↗</span></a> : <span className="collection-concept">Concept preview</span>}
      </div>
      <details className="case-study">
        <summary>Read case study <span aria-hidden="true">＋</span></summary>
        <div className="case-study-body">
          <PreviewGallery project={project} />
          <dl>
            <div><dt>Overview</dt><dd>{project.description}</dd></div>
            <div><dt>My role</dt><dd>{project.caseStudy.role}</dd></div>
            <div><dt>Technologies</dt><dd>{project.stack.join(' · ')}</dd></div>
            <div><dt>Challenge</dt><dd>{project.caseStudy.challenge}</dd></div>
            <div><dt>Result & status</dt><dd>{project.caseStudy.result}</dd></div>
          </dl>
        </div>
      </details>
    </article>
  );
}

function TypingHeading() {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    const start = () => {
      clearInterval(timer);
      if (preference.matches) { setLength(21); return; }
      setLength(0);
      let count = 0;
      timer = setInterval(() => {
        count += 1;
        setLength(count);
        if (count >= 21) clearInterval(timer);
      }, 95);
    };
    start();
    preference.addEventListener('change', start);
    return () => { clearInterval(timer); preference.removeEventListener('change', start); };
  }, []);
  return (
    <h1 aria-label="Ideas into interfaces.">
      <span className="typing-line typing-first" aria-hidden="true"><span className="typing-reserve">Ideas into</span><span className="typing-text">{'Ideas into'.slice(0, length)}{length < 10 && <b className="typing-caret" />}</span></span><br />
      <span className="typing-line typing-second" aria-hidden="true"><span className="typing-reserve">interfaces<i>.</i></span><span className="typing-text">{'interfaces'.slice(0, Math.max(0, length - 10))}{length >= 21 && <i>.</i>}{length >= 10 && length < 21 && <b className="typing-caret" />}</span></span>
    </h1>
  );
}

function AboutHeading() {
  const headingRef = useRef(null);
  const [started, setStarted] = useState(false);
  const lines = ['Thoughtful', 'design. Useful', 'technology.'];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.4 });
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);
  let count = 0;
  return <h2 ref={headingRef} className={`about-typing ${started ? 'typing-started' : ''}`} aria-label="Thoughtful design. Useful technology.">{lines.map((line, lineIndex) => <React.Fragment key={line}>{lineIndex > 0 && <br />}<span className="about-type-line" aria-hidden="true"><span className="about-type-reserve">{line}</span><span className="about-type-content">{Array.from(line).map((letter, index) => <span key={index} className={`about-type-letter ${lineIndex === 1 && index >= 8 ? 'type-accent' : ''}`} style={{ '--letter-delay': `${count++ * 70}ms` }}>{letter}</span>)}</span></span></React.Fragment>)}</h2>;
}

function CuriosityBadge() {
  const id = useId().replace(/:/g, '');
  const [finish, setFinish] = useState('sage');
  const [level, setLevel] = useState(35);
  const [rotation, setRotation] = useState({ x: -8, y: -12 });
  const [dragging, setDragging] = useState(false);
  const gesture = useRef(null);
  const finishes = { sage: ['#eff4e8', '#aac0a2', '#607b5a'], cream: ['#fffaf0', '#dfd1b7', '#9c8867'], charcoal: ['#89908b', '#424b45', '#222b26'], clay: ['#f0d5c4', '#c28b71', '#82533c'] };
  const palette = finishes[finish];
  const refill = () => setLevel((value) => Math.min(100, value + 25));
  const release = (event) => {
    if (!gesture.current) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
  };
  return <div className={`coffee-widget ${dragging ? 'coffee-dragging' : ''}`}>
    <div className="coffee-heading"><span>THE CURIOSITY CUP</span><small>A little fuel for good ideas.</small></div>
    <div className="coffee-stage">
      <span className="coffee-tooltip" id={`${id}-hint`}>Powered by curiosity</span>
      <button type="button" className="coffee-object" aria-label="Coffee mug. Tap to refill, drag to rotate, or use arrow keys to rotate." aria-describedby={`${id}-hint`} style={{ '--cup-x': `${rotation.x}deg`, '--cup-y': `${rotation.y}deg` }} onPointerDown={(event) => {
        if (event.button !== 0) return;
        gesture.current = { x: event.clientX, y: event.clientY, rotation, moved: false };
        event.currentTarget.setPointerCapture(event.pointerId);
      }} onPointerMove={(event) => {
        const start = gesture.current;
        if (!start || !event.currentTarget.hasPointerCapture(event.pointerId)) return;
        const dx = event.clientX - start.x; const dy = event.clientY - start.y;
        if (Math.hypot(dx, dy) > 5) { start.moved = true; setDragging(true); }
        if (start.moved) setRotation({ x: Math.max(-22, Math.min(22, start.rotation.x - dy * .25)), y: Math.max(-65, Math.min(65, start.rotation.y + dx * .4)) });
      }} onPointerUp={release} onPointerCancel={(event) => { release(event); gesture.current = null; }} onClick={(event) => { if (event.detail === 0 || !gesture.current?.moved) refill(); gesture.current = null; }} onKeyDown={(event) => {
        if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home'].includes(event.key)) return;
        event.preventDefault();
        setRotation((value) => event.key === 'Home' ? { x: -8, y: -12 } : { x: Math.max(-22, Math.min(22, value.x + (event.key === 'ArrowUp' ? 5 : event.key === 'ArrowDown' ? -5 : 0))), y: Math.max(-65, Math.min(65, value.y + (event.key === 'ArrowRight' ? 8 : event.key === 'ArrowLeft' ? -8 : 0))) });
      }}>
        <svg viewBox="0 0 320 320" aria-hidden="true" className="ceramic-cup">
          <defs>
            <linearGradient id={`${id}-glaze`} x1="0" x2="1"><stop stopColor={palette[2]} /><stop offset=".18" stopColor={palette[1]} /><stop offset=".43" stopColor={palette[0]} /><stop offset=".7" stopColor={palette[1]} /><stop offset="1" stopColor={palette[2]} /></linearGradient>
            <linearGradient id={`${id}-handle`} x1="0" x2="1"><stop stopColor={palette[2]} /><stop offset=".55" stopColor={palette[0]} /><stop offset="1" stopColor={palette[1]} /></linearGradient>
            <radialGradient id={`${id}-coffee`}><stop stopColor="#946244" /><stop offset="1" stopColor="#38251c" /></radialGradient>
            <clipPath id={`${id}-opening`}><ellipse cx="140" cy="97" rx="78" ry="23" /></clipPath>
          </defs>
          <ellipse cx="151" cy="281" rx="111" ry="15" fill="#314e35" opacity=".1" />
          <path d="M223 125 C304 93 311 227 222 225" fill="none" stroke={palette[2]} strokeWidth="25" />
          <path d="M223 125 C294 107 299 215 225 215" fill="none" stroke={`url(#${id}-handle)`} strokeWidth="18" />
          <path d="M52 97 Q140 70 228 97 L218 228 Q216 271 141 276 Q67 273 63 231 Z" fill={`url(#${id}-glaze)`} />
          <path d="M72 122 L81 226 Q84 251 108 257" fill="none" stroke="white" strokeWidth="7" opacity=".18" strokeLinecap="round" />
          <ellipse cx="140" cy="97" rx="88" ry="29" fill={palette[0]} />
          <ellipse cx="140" cy="97" rx="79" ry="23" fill={palette[2]} />
          <g clipPath={`url(#${id}-opening)`}><ellipse cx="140" cy={125 - level * .28} rx="78" ry="21" fill={`url(#${id}-coffee)`} /><ellipse cx="124" cy={120 - level * .28} rx="41" ry="8" fill="#be9065" opacity=".25" /></g>
          <ellipse cx="140" cy="97" rx="87" ry="28" fill="none" stroke={palette[0]} strokeWidth="4" />
          <text x="142" y="174" textAnchor="middle" fill={finish === 'charcoal' ? '#f5f1df' : '#36533b'} fontFamily="Georgia,serif" fontSize="22" fontStyle="italic">curiosity.</text>
          <text x="142" y="195" textAnchor="middle" fill={finish === 'charcoal' ? '#dedecd' : '#56705a'} fontFamily="Arial,sans-serif" fontSize="8" letterSpacing="2">BREW SOMETHING GOOD</text>
          <path d="M113 54 Q105 41 114 27 M141 49 Q151 35 143 20 M170 54 Q160 43 170 29" fill="none" stroke="#9bad97" strokeWidth="2.5" opacity={level > 60 ? '.55' : '.25'} strokeLinecap="round" />
        </svg>
      </button>
    </div>
    <div className="coffee-controls">
      <div className="coffee-level"><span role="status">{level === 100 ? 'Freshly filled' : 'Coffee level'} · {level}%</span><div className="coffee-meter" aria-hidden="true"><span style={{ width: `${level}%` }} /></div></div>
      <div className="coffee-actions"><button type="button" onClick={refill} disabled={level === 100}>Refill <span aria-hidden="true">↥</span></button><button type="button" onClick={() => { setLevel(20); setRotation({ x: -8, y: -12 }); }}>Reset</button></div>
      <div className="ceramic-finishes" role="group" aria-label="Ceramic finish">{Object.entries(finishes).map(([name, colours]) => <button type="button" key={name} aria-label={`${name} ceramic finish`} aria-pressed={finish === name} style={{ '--finish': colours[1] }} onClick={() => setFinish(name)}><span />{finish === name && <b aria-hidden="true">✓</b>}</button>)}</div>
      <small className="coffee-help">Tap to refill · Drag to rotate</small>
    </div>
  </div>;
}

function App() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const [activeApplication, setActiveApplication] = useState(0);
  const [projectFilter, setProjectFilter] = useState('All');
  const filteredProjects = applications.filter((project) => projectFilter === 'All' || project.category === projectFilter);
  const trackRef = useRef(null);
  const application = applications[activeApplication];

  const changeApplication = (direction) => {
    setActiveApplication((active) => (active + direction + applications.length) % applications.length);
  };

  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(max-width: 680px)').matches) {
      const sections = Array.from(track.querySelectorAll('.page-panel'));
      const marker = track.scrollTop + track.clientHeight * 0.3;
      setCurrentPanel(sections.reduce((active, section, index) => section.getClientRects().length > 0 && section.offsetTop <= marker ? index : active, 0));
    } else {
      setCurrentPanel(Math.round(track.scrollLeft / track.clientWidth));
    }
  };

  useEffect(() => {
    const syncNavigation = () => {
      if (window.matchMedia('(max-width: 680px)').matches && window.location.hash === '#all-projects') {
        window.history.replaceState(null, '', '#applications');
        document.getElementById('applications')?.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      handleTrackScroll();
    };
    window.addEventListener('resize', syncNavigation);
    window.addEventListener('hashchange', syncNavigation);
    syncNavigation();
    return () => {
      window.removeEventListener('resize', syncNavigation);
      window.removeEventListener('hashchange', syncNavigation);
    };
  }, []);

  const activeNavPanel = currentPanel === 3 ? 2 : currentPanel;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <a className="corner-brand" href="#home" aria-label="ZA, home">ZA<span>.</span></a>
      <div className="corner-note"><span /> AVAILABLE FOR THE RIGHT PROJECT</div>

      <main
        id="main-content"
        tabIndex={-1}
        className="portfolio-track"
        ref={trackRef}
        onScroll={handleTrackScroll}
        onWheel={(event) => {
          if (window.matchMedia('(max-width: 680px)').matches) return;
          const panel = event.target.closest('.page-panel');
          if (panel && panel.scrollHeight > panel.clientHeight) return;
          if (Math.abs(event.deltaY) > Math.abs(event.deltaX) && trackRef.current) {
            trackRef.current.scrollLeft += event.deltaY;
          }
        }}
      >
        <section className="page-panel hero-panel" id="home" aria-label="Home">
          <div className="panel-content hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span>GAUTENG, SOUTH AFRICA</span><span className="eyebrow-line" /></p>
              <TypingHeading />
              <p className="hero-intro">I’m Zaid — a full-stack developer and data engineer building useful things for the web, and exploring what happens when code meets 3D.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#applications">Explore my work <span>→</span></a>
                <a className="button button-secondary" href="/files/Zaid%20cv%20dec25-2.pdf" download="Zaid-Akhalwaya-CV.pdf">Download CV <span>↓</span></a>
                <a className="text-link hero-email" href="mailto:zaidakhalwaya6@gmail.com">Email me <span>↗</span></a>
              </div>
              <div className="hero-meta"><span>FULL-STACK DEVELOPMENT</span><b>·</b><span>DATA ENGINEERING</span></div>
            </div>
            <div className="side-hint"><span className="desktop-scroll-hint">SCROLL SIDEWAYS TO EXPLORE</span><span className="mobile-scroll-hint">SCROLL DOWN TO EXPLORE</span><b className="desktop-scroll-hint">→</b><b className="mobile-scroll-hint">↓</b></div>
            <span className="panel-index">01 — 06</span>
          </div>
        </section>

        <section className="page-panel about-panel" id="about" aria-label="About">
          <div className="panel-content about-content">
            <div className="panel-kicker"><span>02 / A BIT ABOUT ME</span><span>THE PERSON BEHIND THE PIXELS</span></div>
            <div className="about-layout">
              <div><p className="eyebrow">CURIOUS BY NATURE</p><AboutHeading /></div>
              <div className="about-detail">
                <p className="about-lede">I’m drawn to the space where design, technology and data meet.</p>
                <p>Programming has taught me to think systematically, solve problems with patience and keep room for experimentation. I enjoy shaping an idea into an interface, then working through the logic and data that make it useful.</p>
                <div className="about-facts"><div><small>BASED IN</small><strong>Gauteng, South Africa</strong></div><div><small>OFF-SCREEN</small><strong>Fishing · Gaming</strong></div></div>
              </div>
              <CuriosityBadge />
            </div>
            <span className="panel-index">02 — 06</span>
          </div>
        </section>

        <section className="page-panel applications-panel" id="applications" aria-label="Applications">
          <div className="panel-content applications-content">
            <div className="panel-kicker"><span>03 / APPLICATIONS</span><span>SELECT AN APP TO EXPLORE</span></div>
            <div className={`app-showcase tone-${application.tone}`}>
              <ApplicationSlide key={application.title} application={application} />
            </div>
            <p className="sr-only" role="status">Application {activeApplication + 1} of {applications.length}: {application.title}</p>
            <div className="app-controls">
              <div className="app-switcher">
                <span className="app-count"><strong>{String(activeApplication + 1).padStart(2, '0')}</strong><i>/</i>{String(applications.length).padStart(2, '0')}</span>
                <div className="app-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(activeApplication + 1) / applications.length})` }} /></div>
                <div className="arrow-group"><button type="button" onClick={() => changeApplication(-1)} aria-label="Previous application"><span aria-hidden="true">←</span> Previous</button><button type="button" onClick={() => changeApplication(1)} aria-label="Next application">Next <span aria-hidden="true">→</span></button></div>
                <span className="arrow-hint">USE ARROWS TO SWITCH APPS</span>
              </div>
              <a className="view-all-button" href="#all-projects">View all projects <span>↗</span></a>
            </div>
            <span className="panel-index">03 — 06</span>
          </div>
        </section>

        <section className="page-panel all-projects-panel" id="all-projects" aria-label="All projects">
          <div className="panel-content all-projects-content">
            <div className="panel-kicker"><span>04 / PROJECT ARCHIVE</span><span>WEB · MOBILE · DATA · GAMES</span></div>
            <div className="all-projects-heading">
              <div><p className="eyebrow">A FEW THINGS I’VE BEEN MAKING</p><h2>All the <span>work.</span></h2></div>
            </div>
            <div className="project-filters" role="group" aria-label="Filter projects by category">
              {['All', 'Web', 'Mobile', 'Data', 'Games'].map((category) => (
                <button type="button" key={category} aria-pressed={projectFilter === category} onClick={() => setProjectFilter(category)}>
                  {category}<span>{category === 'All' ? applications.length : applications.filter((project) => project.category === category).length}</span>
                </button>
              ))}
            </div>
            <p className="project-results" role="status">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} · {projectFilter === 'All' ? 'All categories' : projectFilter}</p>
            <div className="project-collection">
              {filteredProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
            </div>
            <a className="back-to-apps" href="#applications">← Back to app showcase</a>
            <span className="panel-index">04 — 06</span>
          </div>
        </section>

        <section className="page-panel skills-panel" id="skills" aria-label="Skills">
          <div className="panel-content skills-content">
            <div className="panel-kicker"><span>05 / MY TOOLKIT</span><span>SKILLS THAT KEEP GROWING</span></div>
            <div className="skills-heading"><p className="eyebrow">A PRACTICAL, GROWING TOOLKIT</p><h2>Good tools.<br /><span>Better questions.</span></h2></div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-number">0{index + 1}</span><h3>{group.title}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}><span aria-hidden="true">✳</span>{skill}</li>)}</ul>
                  <div className="skill-evidence"><p>{group.evidence}</p>{group.project !== undefined ? <a href="#applications" onClick={() => setActiveApplication(group.project)}>Explore {applications[group.project].title} <span aria-hidden="true">↗</span></a> : <a href="#contact">Discuss a backend project <span aria-hidden="true">↗</span></a>}</div>
                </article>
              ))}
            </div>
            <span className="panel-index">05 — 06</span>
          </div>
        </section>

        <section className="page-panel contact-panel" id="contact" aria-label="Contact">
          <div className="panel-content contact-content">
            <div className="panel-kicker"><span>06 / YOUR TURN</span><span>LET’S MAKE SOMETHING GOOD</span></div>
            <div className="contact-layout">
              <div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br />it <span>happen.</span></h2></div>
              <div className="contact-side"><figure className="contact-portrait"><img src="/img/zzzzz.png" alt="Zaid Akhalwaya" loading="lazy" /><figcaption>ZAID AKHALWAYA<span>Developer & data engineer</span></figcaption></figure><p>I’m always up for a good conversation about building for the web, solving data problems or making something a little unexpected.</p><div className="contact-actions"><a className="button button-primary" href="mailto:zaidakhalwaya6@gmail.com">Email me <span>↗</span></a><a className="button button-secondary" href="/files/Zaid%20cv%20dec25-2.pdf" download="Zaid-Akhalwaya-CV.pdf">Download CV <span>↓</span></a></div><a className="contact-email" href="mailto:zaidakhalwaya6@gmail.com">zaidakhalwaya6@gmail.com</a><div className="social-links"><a href="https://github.com/theZoid9" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/zaid-akhalwaya-31495815b/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
            </div>
            <footer className="contact-footer"><a className="brand" href="#home">ZA<span>.</span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><span>© {new Date().getFullYear()} ZAID AKHALWAYA</span></footer>
            <span className="panel-index">06 — 06</span>
          </div>
        </section>
      </main>

      <nav className="floating-nav" aria-label="Portfolio sections">
        {panels.map((panel, index) => panel.hiddenFromNav ? null : (
          <a className={activeNavPanel === index ? 'nav-item nav-item-active' : 'nav-item'} href={`#${panel.id}`} key={panel.id} aria-current={activeNavPanel === index ? 'page' : undefined}>
            <span className="nav-number">{panel.number}</span><span>{panel.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

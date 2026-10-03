import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const applications = [
  {
    type: 'WEB APPLICATION',
    title: 'Techsquare',
    description: 'A clear, customer-facing web experience for a technology retailer.',
    image: '/img/techS.gif',
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
    image: '/img/data_wrangle.gif',
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
    image: '/img/snake.gif',
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
  { title: 'Web applications', skills: ['React', 'JavaScript', 'TypeScript', 'HTML & CSS'] },
  { title: '3D & interaction', skills: ['Three.js', 'WebGL', 'Creative coding', 'Web animation'] },
  { title: 'Data engineering', skills: ['Python', 'SQL', 'PostgreSQL', 'Jupyter'] },
  { title: 'Backend', skills: ['Node.js', 'Express', 'Django', 'REST APIs', 'PostgreSQL'] },
  { title: 'Game development', skills: ['Pygame', 'Unity modding', 'JavaScript', 'Three.js', 'Game mechanics'] },
  { title: 'Tools & practice', skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'npm', 'Chrome DevTools', 'Figma'] },
];

const panels = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'applications', label: 'Apps', number: '03' },
  { id: 'all-projects', label: 'All work', number: '04', hiddenFromNav: true },
  { id: 'skills', label: 'Skills', number: '05' },
  { id: 'contact', label: 'Contact', number: '06' },
];

function PlaceMarkerPreview() {
  return (
    <div className="phone-shell" aria-label="Place Marker mobile app concept preview">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="phone-top"><span>9:41</span><span>◔ ▮</span></div>
        <div className="map-heading"><span>YOUR PLACES</span><b>⌕</b></div>
        <div className="map-canvas">
          <span className="map-road road-one" /><span className="map-road road-two" />
          <span className="map-block block-one" /><span className="map-block block-two" /><span className="map-block block-three" />
          <span className="map-water" />
          <span className="map-pin pin-one">✳</span><span className="map-pin pin-two">✳</span><span className="map-pin pin-three">✳</span>
          <span className="map-current">●</span>
        </div>
        <div className="saved-place"><span className="place-icon">✳</span><span><small>RECENTLY SAVED</small><strong>Somewhere good</strong></span><b>↗</b></div>
        <div className="phone-tabs"><span>⌖<small>Map</small></span><span>✳<small>Saved</small></span><span>＋<small>Add place</small></span></div>
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
      <div className={`app-preview ${application.image ? 'app-preview-image' : 'app-preview-phone'}`}>
        {application.image ? <img src={application.image} alt={application.imageAlt} /> : <PlaceMarkerPreview />}
        <span className="preview-label">{application.image ? 'PROJECT PREVIEW' : 'MOBILE APP / CONCEPT'}</span>
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
          <figure className={`case-study-preview ${project.image ? '' : 'case-study-concept'}`}>
            {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : <PlaceMarkerPreview />}
            <figcaption>{project.image ? 'Animated project walkthrough' : 'Place Marker interface concept'}</figcaption>
          </figure>
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
    setCurrentPanel(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <>
      <a className="corner-brand" href="#home" aria-label="ZA, home">ZA<span>.</span></a>
      <div className="corner-note"><span /> AVAILABLE FOR THE RIGHT PROJECT</div>

      <main
        className="portfolio-track"
        ref={trackRef}
        onScroll={handleTrackScroll}
        onWheel={(event) => {
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
              <h1>Ideas into<br /><span>interfaces</span><i>.</i></h1>
              <p className="hero-intro">I’m Zaid — a full-stack developer and data engineer building useful things for the web, and exploring what happens when code meets 3D.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#applications">Explore my work <span>→</span></a>
                <a className="text-link" href="/files/Zaid%20cv%20dec25-2.pdf" target="_blank" rel="noreferrer">View my CV <span>↗</span></a>
              </div>
              <div className="hero-meta"><span>FULL-STACK DEVELOPMENT</span><b>·</b><span>DATA ENGINEERING</span></div>
            </div>
            <div className="hero-visual">
              <div className="portrait-frame"><img src="/img/zzzzz.png" alt="Portrait of Zaid Akhalwaya" /></div>
              <span className="portrait-caption">ZAID AKHALWAYA <i>—</i> DEVELOPER & DATA ENGINEER</span>
              <span className="visual-sparkle">✳</span>
            </div>
            <div className="side-hint"><span>SCROLL SIDEWAYS TO EXPLORE</span><b>→</b><b>→</b></div>
            <span className="panel-index">01 — 06</span>
          </div>
        </section>

        <section className="page-panel about-panel" id="about" aria-label="About">
          <div className="panel-content about-content">
            <div className="panel-kicker"><span>02 / A BIT ABOUT ME</span><span>THE PERSON BEHIND THE PIXELS</span></div>
            <div className="about-layout">
              <div><p className="eyebrow">CURIOUS BY NATURE</p><h2>Thoughtful<br />design. <span>Useful</span><br />technology.</h2></div>
              <div className="about-detail">
                <p className="about-lede">I’m drawn to the space where design, technology and data meet.</p>
                <p>Programming has taught me to think systematically, solve problems with patience and keep room for experimentation. I enjoy shaping an idea into an interface, then working through the logic and data that make it useful.</p>
                <div className="about-facts"><div><small>BASED IN</small><strong>Gauteng, South Africa</strong></div><div><small>OFF-SCREEN</small><strong>Fishing · Gaming</strong></div></div>
              </div>
              <div className="about-stamp"><span>MADE WITH</span><strong>Curiosity<br />& a little<br />caffeine</strong><i>✳</i></div>
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
            <div className="app-controls">
              <div className="app-switcher">
                <span className="app-count"><strong>{String(activeApplication + 1).padStart(2, '0')}</strong><i>/</i>{String(applications.length).padStart(2, '0')}</span>
                <div className="app-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(activeApplication + 1) / applications.length})` }} /></div>
                <div className="arrow-group"><button type="button" onClick={() => changeApplication(-1)} aria-label="Previous application">←</button><button type="button" onClick={() => changeApplication(1)} aria-label="Next application">→</button></div>
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
                  <ul>{group.skills.map((skill) => <li key={skill}><span>✳</span>{skill}</li>)}</ul>
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
              <div className="contact-side"><p>I’m always up for a good conversation about building for the web, solving data problems or making something a little unexpected.</p><a className="button button-primary" href="mailto:zaidakhalwaya6@gmail.com">Say hello <span>↗</span></a><div className="social-links"><a href="https://github.com/theZoid9" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/zaid-akhalwaya-31495815b/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
            </div>
            <footer className="contact-footer"><a className="brand" href="#home">ZA<span>.</span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><span>© {new Date().getFullYear()} ZAID AKHALWAYA</span></footer>
            <span className="panel-index">06 — 06</span>
          </div>
        </section>
      </main>

      <nav className="floating-nav" aria-label="Portfolio sections">
        {panels.map((panel, index) => panel.hiddenFromNav ? null : (
          <a className={currentPanel === index ? 'nav-item nav-item-active' : 'nav-item'} href={`#${panel.id}`} key={panel.id} aria-current={currentPanel === index ? 'page' : undefined}>
            <span className="nav-number">{panel.number}</span><span>{panel.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);

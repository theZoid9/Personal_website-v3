import React, { useEffect, useRef, useState } from 'react';

export default function AboutHeading() {
  const headingRef = useRef(null);
  const [started, setStarted] = useState(false);
  const lines = ['Thoughtful', 'design. Useful', 'technology.'];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);
  let count = 0;
  return (
    <h2
      ref={headingRef}
      className={`about-typing ${started ? 'typing-started' : ''}`}
      aria-label="Thoughtful design. Useful technology."
    >
      {lines.map((line, lineIndex) => (
        <React.Fragment key={line}>
          {lineIndex > 0 && <br />}
          <span className="about-type-line" aria-hidden="true">
            <span className="about-type-reserve">{line}</span>
            <span className="about-type-content">
              {Array.from(line).map((letter, index) => (
                <span
                  key={index}
                  className={`about-type-letter ${lineIndex === 1 && index >= 8 ? 'type-accent' : ''}`}
                  style={{ '--letter-delay': `${count++ * 70}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </React.Fragment>
      ))}
    </h2>
  );
}

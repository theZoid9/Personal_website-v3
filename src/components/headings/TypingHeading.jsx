import React, { useEffect, useState } from 'react';

export default function TypingHeading() {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    const start = () => {
      clearInterval(timer);
      if (preference.matches) {
        setLength(21);
        return;
      }
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
    return () => {
      clearInterval(timer);
      preference.removeEventListener('change', start);
    };
  }, []);
  return (
    <h1 aria-label="Ideas into interfaces.">
      <span className="typing-line typing-first" aria-hidden="true">
        <span className="typing-reserve">Ideas into</span>
        <span className="typing-text">
          {'Ideas into'.slice(0, length)}
          {length < 10 && <b className="typing-caret" />}
        </span>
      </span>
      <br />
      <span className="typing-line typing-second" aria-hidden="true">
        <span className="typing-reserve">
          interfaces<i>.</i>
        </span>
        <span className="typing-text">
          {'interfaces'.slice(0, Math.max(0, length - 10))}
          {length >= 21 && <i>.</i>}
          {length >= 10 && length < 21 && <b className="typing-caret" />}
        </span>
      </span>
    </h1>
  );
}

import React, { useEffect, useState } from 'react';

const greeting = 'Hey, I’m Zaid.';
const roles = ['Developer.', 'Data engineer.', 'Coffee lover.'];
const totalLength = greeting.length + roles.join(' ').length;

function RoleText({ length }) {
  let offset = 0;
  return roles.map((role, index) => {
    const visible = role.slice(0, Math.max(0, length - offset));
    offset += role.length + 1;
    return (
      <React.Fragment key={role}>
        {index > 0 && ' '}
        <span className="hero-role-part">{visible}</span>
      </React.Fragment>
    );
  });
}

export default function TypingHeading() {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    const start = () => {
      clearInterval(timer);
      if (preference.matches) {
        setLength(totalLength);
        return;
      }
      setLength(0);
      let count = 0;
      timer = setInterval(() => {
        count += 1;
        setLength(count);
        if (count >= totalLength) clearInterval(timer);
      }, 45);
    };
    start();
    preference.addEventListener('change', start);
    return () => {
      clearInterval(timer);
      preference.removeEventListener('change', start);
    };
  }, []);

  return (
    <h1 aria-label={greeting + ' ' + roles.join(' ')}>
      <span className="typing-line typing-first" aria-hidden="true">
        <span className="typing-reserve">{greeting}</span>
        <span className="typing-text">
          {greeting.slice(0, length)}
          {length < greeting.length && <b className="typing-caret" />}
        </span>
      </span>
      <span className="typing-line typing-second" aria-hidden="true">
        <span className="typing-reserve">
          <RoleText length={totalLength} />
        </span>
        <span className="typing-text">
          <RoleText length={Math.max(0, length - greeting.length)} />
        </span>
      </span>
    </h1>
  );
}

import React, { useId, useRef, useState } from 'react';
import CeramicCup from './CeramicCup.jsx';

export default function CuriosityBadge() {
  const id = useId().replace(/:/g, '');
  const [finish, setFinish] = useState('sage');
  const [level, setLevel] = useState(35);
  const [rotation, setRotation] = useState({ x: -8, y: -12 });
  const [dragging, setDragging] = useState(false);
  const gesture = useRef(null);
  const finishes = {
    sage: ['#eff4e8', '#aac0a2', '#607b5a'],
    cream: ['#fffaf0', '#dfd1b7', '#9c8867'],
    charcoal: ['#89908b', '#424b45', '#222b26'],
    clay: ['#f0d5c4', '#c28b71', '#82533c'],
  };
  const palette = finishes[finish];
  const refill = () => setLevel((value) => Math.min(100, value + 25));
  const release = (event) => {
    if (!gesture.current) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
  };
  return (
    <div className={`coffee-widget ${dragging ? 'coffee-dragging' : ''}`}>
      <div className="coffee-heading">
        <span>THE CURIOSITY CUP</span>
        <small>A little fuel for good ideas.</small>
      </div>
      <div className="coffee-stage">
        <span className="coffee-tooltip" id={`${id}-hint`}>
          Powered by curiosity
        </span>
        <button
          type="button"
          className="coffee-object"
          aria-label="Coffee mug. Tap to refill, drag to rotate, or use arrow keys to rotate."
          aria-describedby={`${id}-hint`}
          style={{ '--cup-x': `${rotation.x}deg`, '--cup-y': `${rotation.y}deg` }}
          onPointerDown={(event) => {
            if (event.button !== 0) return;
            gesture.current = { x: event.clientX, y: event.clientY, rotation, moved: false };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const start = gesture.current;
            if (!start || !event.currentTarget.hasPointerCapture(event.pointerId)) return;
            const dx = event.clientX - start.x;
            const dy = event.clientY - start.y;
            if (Math.hypot(dx, dy) > 5) {
              start.moved = true;
              setDragging(true);
            }
            if (start.moved)
              setRotation({
                x: Math.max(-22, Math.min(22, start.rotation.x - dy * 0.25)),
                y: Math.max(-65, Math.min(65, start.rotation.y + dx * 0.4)),
              });
          }}
          onPointerUp={release}
          onPointerCancel={(event) => {
            release(event);
            gesture.current = null;
          }}
          onClick={(event) => {
            if (event.detail === 0 || !gesture.current?.moved) refill();
            gesture.current = null;
          }}
          onKeyDown={(event) => {
            if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home'].includes(event.key))
              return;
            event.preventDefault();
            setRotation((value) =>
              event.key === 'Home'
                ? { x: -8, y: -12 }
                : {
                    x: Math.max(
                      -22,
                      Math.min(
                        22,
                        value.x +
                          (event.key === 'ArrowUp' ? 5 : event.key === 'ArrowDown' ? -5 : 0),
                      ),
                    ),
                    y: Math.max(
                      -65,
                      Math.min(
                        65,
                        value.y +
                          (event.key === 'ArrowRight' ? 8 : event.key === 'ArrowLeft' ? -8 : 0),
                      ),
                    ),
                  },
            );
          }}
        >
          <CeramicCup id={id} palette={palette} level={level} finish={finish} />
        </button>
      </div>
      <div className="coffee-controls">
        <div className="coffee-level">
          <span role="status">
            {level === 100 ? 'Freshly filled' : 'Coffee level'} · {level}%
          </span>
          <div className="coffee-meter" aria-hidden="true">
            <span style={{ width: `${level}%` }} />
          </div>
        </div>
        <div className="coffee-actions">
          <button type="button" onClick={refill} disabled={level === 100}>
            Refill <span aria-hidden="true">↥</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setLevel(20);
              setRotation({ x: -8, y: -12 });
            }}
          >
            Reset
          </button>
        </div>
        <div className="ceramic-finishes" role="group" aria-label="Ceramic finish">
          {Object.entries(finishes).map(([name, colours]) => (
            <button
              type="button"
              key={name}
              aria-label={`${name} ceramic finish`}
              aria-pressed={finish === name}
              style={{ '--finish': colours[1] }}
              onClick={() => setFinish(name)}
            >
              <span />
              {finish === name && <b aria-hidden="true">✓</b>}
            </button>
          ))}
        </div>
        <small className="coffee-help">Tap to refill · Drag to rotate</small>
      </div>
    </div>
  );
}

import React from 'react';
import { panels } from '../../data/panels.js';

export default function FloatingNavigation({ activePanelId }) {
  return (
    <nav className="floating-nav" aria-label="Portfolio sections">
      {panels
        .filter((panel) => !panel.hiddenFromNav)
        .map((panel) => (
          <a
            className={activePanelId === panel.id ? 'nav-item nav-item-active' : 'nav-item'}
            href={'#' + panel.id}
            key={panel.id}
            aria-current={activePanelId === panel.id ? 'page' : undefined}
          >
            <span className="nav-number">{panel.number}</span>
            <span>{panel.label}</span>
          </a>
        ))}
    </nav>
  );
}

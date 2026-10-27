import { useCallback, useEffect, useRef, useState } from 'react';
import { panels } from '../data/panels.js';

// Keep this breakpoint aligned with styles/layout.css.
const MOBILE_QUERY = '(max-width: 680px)';

export function usePanelNavigation() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const trackRef = useRef(null);
  const handleTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia(MOBILE_QUERY).matches) {
      const sections = Array.from(track.querySelectorAll('.page-panel'));
      const marker = track.scrollTop + track.clientHeight * 0.3;
      setCurrentPanel(
        sections.reduce(
          (active, section, index) =>
            section.getClientRects().length > 0 && section.offsetTop <= marker ? index : active,
          0,
        ),
      );
    } else {
      setCurrentPanel(Math.round(track.scrollLeft / track.clientWidth));
    }
  }, []);

  useEffect(() => {
    const syncNavigation = () => {
      if (window.matchMedia(MOBILE_QUERY).matches && window.location.hash === '#all-projects') {
        window.history.replaceState(null, '', '#applications');
        document
          .getElementById('applications')
          ?.scrollIntoView({ behavior: 'instant', block: 'start' });
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
  }, [handleTrackScroll]);
  const handleWheel = (event) => {
    if (window.matchMedia(MOBILE_QUERY).matches) return;
    const panel = event.target.closest('.page-panel');
    if (panel && panel.scrollHeight > panel.clientHeight) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX) && trackRef.current) {
      trackRef.current.scrollLeft += event.deltaY;
    }
  };
  const panel = panels[currentPanel];
  return {
    trackRef,
    handleTrackScroll,
    handleWheel,
    activePanelId: panel?.navigationId ?? panel?.id,
  };
}

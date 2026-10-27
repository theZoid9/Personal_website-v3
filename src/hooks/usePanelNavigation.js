import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { panels } from '../data/panels.js';

const MOBILE_QUERY = '(max-width: 680px)';

export function usePanelNavigation() {
  const [currentPanel, setCurrentPanel] = useState(0);
  const activeIndexRef = useRef(0);
  const trackRef = useRef(null);
  const updatePanel = useCallback((index) => {
    const bounded = Math.max(0, Math.min(panels.length - 1, index));
    activeIndexRef.current = bounded;
    setCurrentPanel(bounded);
  }, []);
  const scrollToPanel = useCallback(
    (index, behavior = 'instant') => {
      const track = trackRef.current;
      const section = track?.querySelectorAll('.page-panel')[index];
      if (!track || !section) return;
      const mobile = window.matchMedia(MOBILE_QUERY).matches;
      track.scrollTo({
        left: mobile ? 0 : section.offsetLeft,
        top: mobile ? section.offsetTop : 0,
        behavior,
      });
      updatePanel(index);
    },
    [updatePanel],
  );

  const handleTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia(MOBILE_QUERY).matches) {
      const sections = Array.from(track.querySelectorAll('.page-panel'));
      const marker = track.scrollTop + track.clientHeight * 0.3;
      updatePanel(
        sections.reduce(
          (active, section, index) =>
            section.getClientRects().length > 0 && section.offsetTop <= marker ? index : active,
          0,
        ),
      );
    } else if (track.clientWidth) {
      updatePanel(Math.round(track.scrollLeft / track.clientWidth));
    }
  }, [updatePanel]);

  // Keep the initial fragment aligned while fonts and preceding sections settle.
  useLayoutEffect(() => {
    const index = panels.findIndex(({ id }) => '#' + id === window.location.hash);
    if (index < 0) return;
    let cancelled = false;
    const align = () => {
      const target = panels.findIndex(({ id }) => '#' + id === window.location.hash);
      if (!cancelled && target >= 0) scrollToPanel(target);
    };
    const observer = new ResizeObserver(align);
    Array.from(trackRef.current.querySelectorAll('.page-panel')).forEach((section) =>
      observer.observe(section),
    );
    const stopFollowing = () => {
      cancelled = true;
      observer.disconnect();
    };
    const afterLoad = () => document.fonts.ready.then(align);
    align();
    if (document.readyState === 'complete') afterLoad();
    else window.addEventListener('load', afterLoad, { once: true });
    for (const event of ['pointerdown', 'wheel', 'touchstart', 'keydown']) {
      window.addEventListener(event, stopFollowing, { once: true, passive: true });
    }
    return () => {
      stopFollowing();
      window.removeEventListener('load', afterLoad);
      for (const event of ['pointerdown', 'wheel', 'touchstart', 'keydown'])
        window.removeEventListener(event, stopFollowing);
    };
  }, [scrollToPanel]);

  useEffect(() => {
    let frame;
    const syncHash = () => {
      const index = panels.findIndex(({ id }) => '#' + id === window.location.hash);
      if (index >= 0) {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        trackRef.current
          ?.querySelectorAll('.page-panel')
          [index]?.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        scrollToPanel(index, reduced ? 'instant' : 'smooth');
        const hash = window.location.hash;
        document.fonts.ready.then(() => {
          if (window.location.hash === hash) scrollToPanel(index);
        });
      }
    };
    const syncResize = () => {
      const index = activeIndexRef.current;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => scrollToPanel(index));
    };
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('resize', syncResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('resize', syncResize);
    };
  }, [scrollToPanel]);

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

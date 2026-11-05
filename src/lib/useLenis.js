import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lenis;
    let rafId;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisInstance = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    } catch (err) {
      // Smooth scroll is a progressive enhancement, never let it block
      // the rest of the page (including all other animations) from working.
      console.warn('Smooth scroll failed to initialize, falling back to native scroll.', err);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo(0, 0);
  }
}

import { useEffect, useState } from 'react';

/**
 * Tracks the pointer position across the whole window.
 * Returns raw pixel coords plus normalized -1..1 coords useful for parallax.
 */
export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    const handle = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setPos({ x: e.clientX, y: e.clientY, nx, ny });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return pos;
}

/** True on devices with a fine pointer (mouse/trackpad) and no touch primary input. */
export function useIsFinePointer() {
  const [isFine, setIsFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setIsFine(mq.matches);
    const handle = (e) => setIsFine(e.matches);
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);
  return isFine;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handle = (e) => setReduced(e.matches);
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);
  return reduced;
}

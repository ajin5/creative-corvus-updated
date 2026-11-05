import { useEffect, useRef, useState } from 'react';
import { useIsFinePointer, usePrefersReducedMotion } from '../../lib/useMousePosition';

/**
 * Replaces the native cursor with a small gold dot plus a fading particle
 * trail. Only mounts on fine pointer devices (mouse/trackpad) and respects
 * prefers-reduced-motion. Never intercepts clicks (pointer-events: none).
 */
export default function CustomCursor() {
  const isFine = useIsFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!isFine || reducedMotion) return;

    let raf;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let lastSpawn = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      setActive(true);

      const now = performance.now();
      if (now - lastSpawn > 40 && containerRef.current) {
        lastSpawn = now;
        spawnParticle(mouseX, mouseY);
      }
    };

    const onLeave = () => setActive(false);

    function spawnParticle(x, y) {
      const el = document.createElement('span');
      el.className = 'cursor-particle';
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      containerRef.current.appendChild(el);
      setTimeout(() => el.remove(), 650);
    }

    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [isFine, reducedMotion]);

  if (!isFine || reducedMotion) return null;

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[95]" aria-hidden="true">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-opacity duration-300"
        style={{ borderColor: 'rgba(242,169,59,0.5)', opacity: active ? 1 : 0 }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500 transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0 }}
      />
      <style>{`
        body { cursor: none; }
        a, button, input, textarea, select, [role="button"] { cursor: none; }
        .cursor-particle {
          position: fixed;
          left: 0; top: 0;
          width: 4px; height: 4px;
          margin-left: -2px; margin-top: -2px;
          border-radius: 9999px;
          background: #f2a93b;
          opacity: 0.7;
          pointer-events: none;
          animation: cursor-particle-fade 0.65s ease-out forwards;
        }
        @keyframes cursor-particle-fade {
          to { opacity: 0; transform: scale(0.3); }
        }
      `}</style>
    </div>
  );
}

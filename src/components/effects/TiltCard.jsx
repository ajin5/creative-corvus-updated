import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useIsFinePointer, usePrefersReducedMotion } from '../../lib/useMousePosition';

/**
 * Wraps a card so it tilts in 3D toward the cursor and shows a soft
 * moving light reflection. Falls through to a plain div on touch
 * devices or when reduced motion is preferred.
 */
export default function TiltCard({ children, className = '', maxTilt = 8 }) {
  const ref = useRef(null);
  const isFine = useIsFinePointer();
  const reducedMotion = usePrefersReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springPx = useSpring(px, { stiffness: 150, damping: 18 });
  const springPy = useSpring(py, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(springPy, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springPx, [0, 1], [-maxTilt, maxTilt]);
  const sheenX = useTransform(px, [0, 1], ['0%', '100%']);
  const sheenY = useTransform(py, [0, 1], ['0%', '100%']);

  const sheenBackground = useTransform([sheenX, sheenY], ([sx, sy]) =>
    `radial-gradient(220px circle at ${sx} ${sy}, rgba(255,255,255,0.12), transparent 60%)`
  );

  if (!isFine || reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: sheenBackground }}
      />
    </motion.div>
  );
}

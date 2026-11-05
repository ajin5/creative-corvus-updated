import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useIsFinePointer, usePrefersReducedMotion } from '../../lib/useMousePosition';

/**
 * Wraps a button/link so it gently pulls toward the cursor when hovered,
 * within a limited radius, then springs back on mouse leave.
 * Falls through to a plain wrapper on touch devices or reduced motion.
 */
export default function MagneticButton({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const isFine = useIsFinePointer();
  const reducedMotion = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  if (!isFine || reducedMotion) {
    return <span className={className}>{children}</span>;
  }

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../lib/useMousePosition';

/**
 * Wraps an <img> so it drifts slightly as the page scrolls past it,
 * a classic parallax effect. The image is scaled up slightly so the
 * drifting motion never reveals empty space at the edges.
 */
export default function ParallaxImage({ src, alt = '', className = '', range = 60 }) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="h-[120%] w-full object-cover"
        style={reducedMotion ? undefined : { y }}
      />
    </div>
  );
}

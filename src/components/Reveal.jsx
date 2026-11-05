import { motion } from 'framer-motion';

/**
 * Wraps children in a scroll triggered fade + slide up reveal.
 * direction: 'up' | 'down' | 'left' | 'right'
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
  once = true,
  distance = 28,
}) {
  const offsets = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
  };
  const { x, y } = offsets[direction] || offsets.up;

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({ children, className = '', staggerChildren = 0.12, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', distance = 24 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: distance },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

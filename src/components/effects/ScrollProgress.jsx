import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400"
      style={{ scaleX }}
    />
  );
}

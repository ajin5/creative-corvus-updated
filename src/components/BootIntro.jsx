import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

let hasBooted = false;

export default function BootIntro() {
  const [show, setShow] = useState(!hasBooted);

  useEffect(() => {
    if (hasBooted) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      hasBooted = true;
      setShow(false);
      return;
    }
    const id = setTimeout(() => {
      hasBooted = true;
      setShow(false);
    }, 1500);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/logo.png" alt="Creative Corvus, Design and Media School" className="h-16 sm:h-20 w-auto object-contain" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { value: 25, suffix: '+', label: 'Courses Offered' },
  { value: 8000, suffix: '+', label: 'Students Trained' },
  { value: 20, suffix: '+', label: 'Hiring Partners' },
  { value: 21, suffix: '+', label: 'Years of Teaching Experience' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-extrabold text-gold-500">
      {display}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <Counter value={s.value} suffix={s.suffix} />
          <p className="mt-2 text-sm text-mist-500">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

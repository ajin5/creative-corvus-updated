import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/siteConfig';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto mb-6 text-gold-500/60" size={40} />
      <AnimatePresence mode="wait">
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg sm:text-xl font-medium text-mist-100 leading-relaxed text-balance">
            {t.quote}
          </p>
          <p className="mt-6 font-display font-bold text-gold-400">{t.name}</p>
          <p className="text-sm text-mist-500">{t.course}</p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 hover:border-gold-500 hover:text-gold-400 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-gold-500' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-300 hover:border-gold-500 hover:text-gold-400 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

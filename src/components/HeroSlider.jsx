import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import KineticHeading from './KineticHeading';
import HeroDecor from './hero/HeroDecor';
import MagneticButton from './effects/MagneticButton';
import { useIsFinePointer, useMousePosition } from '../lib/useMousePosition';

const slides = [
  {
    eyebrow: 'Creative Corvus',
    heading: 'Design and Media School in Chennai',
    subheading:
      'Learn graphic design, animation and visual effects from mentors who build for the industry, not just the classroom.',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    eyebrow: 'Creative Corvus',
    heading: '3D Animation Courses in Saligramam',
    subheading:
      'Master Blender and Maya with a full pipeline curriculum, from modeling to lighting to final render.',
    image:
      'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    eyebrow: 'Creative Corvus',
    heading: 'Visual Effects Training That Builds Showreels',
    subheading:
      'Tracking, rotoscoping and compositing taught the way real studios expect it, in Nuke and After Effects.',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const isFine = useIsFinePointer();
  const { nx, ny } = useMousePosition();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];
  const parallaxX = isFine ? nx * -14 : 0;
  const parallaxY = isFine ? ny * -14 : 0;

  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        >
          <motion.img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
            animate={{ x: parallaxX, y: parallaxY, scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 40, damping: 20 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <HeroDecor />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.heading}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <span className="inline-block rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-400">
                {slide.eyebrow}
              </span>
              <h1 className="sr-only">{slide.heading}</h1>
              <KineticHeading
                as="div"
                text={slide.heading}
                ariaHidden
                className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-mist-100 text-balance"
              />
              <h2 className="mt-5 max-w-xl text-base sm:text-lg font-normal text-mist-300 text-balance">
                {slide.subheading}
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Link
                    to="/courses"
                    className="group inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
                  >
                    Explore Courses
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold text-mist-100 transition-colors hover:border-gold-500 hover:text-gold-400"
                  >
                    See Our Story
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.heading}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className="h-1.5 rounded-full bg-white/20 overflow-hidden transition-all"
                style={{ width: i === index ? 40 : 16 }}
              >
                {i === index && (
                  <motion.div
                    className="h-full bg-gold-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.5, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

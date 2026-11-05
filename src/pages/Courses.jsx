import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal from '../components/Reveal';
import CourseCard from '../components/CourseCard';
import { categories, courses } from '../data/courses';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryIds = categories.map((c) => c.id);
  const initial = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(
    categoryIds.includes(initial) ? initial : 'all'
  );

  useEffect(() => {
    const fromUrl = searchParams.get('category');
    setActiveCategory(categoryIds.includes(fromUrl) ? fromUrl : 'all');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  function selectCategory(id) {
    setActiveCategory(id);
    setSearchParams(id === 'all' ? {} : { category: id });
  }

  const filtered = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <>
      <SEO
        title="Courses"
        description="Explore Master Diplomas, Diplomas, Certificates, AI Integrated Programs and Kids Training courses in graphic design, animation and visual effects at Creative Corvus, Chennai."
        path="/courses"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.creativecorvus.in/' },
            { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://www.creativecorvus.in/courses' },
          ],
        }}
      />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">Courses</span>
          <KineticHeading
            as="h1"
            text="Every course at Creative Corvus"
            className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-mist-100 text-balance"
          />
          <p className="mt-4 text-mist-500 leading-relaxed">
            From short, single tool certificates to full year multimedia master programs,
            browse the complete list of what we teach in graphic design, animation, VFX and more.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          <FilterPill active={activeCategory === 'all'} onClick={() => selectCategory('all')}>
            All Courses
          </FilterPill>
          {categories.map((cat) => (
            <FilterPill
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => selectCategory(cat.id)}
            >
              {cat.label}
            </FilterPill>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}

function FilterPill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`relative isolate overflow-hidden rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-gold-500 text-navy-950'
          : 'border-white/15 text-mist-300 hover:border-gold-500/50 hover:text-gold-400'
      }`}
    >
      {active && (
        <motion.span
          layoutId="courseFilterActive"
          className="absolute inset-0 -z-10 rounded-full bg-gold-500"
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

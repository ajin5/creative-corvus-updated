import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal from '../components/Reveal';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description="Practical articles on graphic design, 3D animation, VFX and UX UI careers from the mentors at Creative Corvus Design and Media School, Chennai."
        path="/blog"
      />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">Blog</span>
          <KineticHeading
            as="h1"
            text="Notes from our studio and classroom"
            className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-mist-100 text-balance"
          />
          <p className="mt-4 text-mist-500 leading-relaxed">
            Practical, mentor written articles on design, animation and visual effects careers.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-800 transition-colors hover:border-gold-500/50"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-500">
                    {post.category}
                  </span>
                  <h2 className="mt-2 font-display text-lg font-bold text-mist-100 group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-mist-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-mist-500">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={12} />
                      {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                    Read article <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories, getCoursesByCategory } from '../data/courses';
import LiveClock from './LiveClock';
import MagneticButton from './effects/MagneticButton';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'bg-navy-950/80 backdrop-blur-xl border-white/10 px-4 py-2 shadow-lg shadow-black/30'
              : 'bg-navy-950/40 backdrop-blur-md border-white/5 px-5 py-3'
          }`}
        >
          <Link to="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
            <img src="/logo.png" alt="Creative Corvus, Design and Media School" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>

            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-mist-300 hover:text-gold-400 transition-colors"
                aria-expanded={megaOpen}
              >
                Courses
                <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full mt-3 w-[760px] -translate-x-1/2 rounded-2xl border border-white/10 bg-navy-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
                  >
                    <div className="flex">
                      <div className="w-56 border-r border-white/10 py-3">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                              activeCategory === cat.id
                                ? 'text-gold-400 bg-white/5'
                                : 'text-mist-300 hover:text-mist-100'
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                      <div className="flex-1 p-5">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-2 gap-1"
                          >
                            {getCoursesByCategory(activeCategory).map((course) => (
                              <Link
                                key={course.slug}
                                to={`/courses/${course.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="rounded-lg px-3 py-2 text-sm text-mist-300 hover:text-gold-400 hover:bg-white/5 transition-colors"
                              >
                                {course.title}
                              </Link>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                        <div className="mt-4 border-t border-white/10 pt-4">
                          <Link
                            to="/courses"
                            onClick={() => setMegaOpen(false)}
                            className="text-sm font-semibold text-gold-500 hover:text-gold-400"
                          >
                            View all courses &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavItem to="/faq">FAQ</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/gallery">Gallery</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          <div className="flex items-center gap-3">
            <LiveClock className="hidden xl:inline-block" />
            <MagneticButton className="hidden md:inline-block" strength={0.25}>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full btn-gold px-5 py-2 text-sm font-semibold text-navy-950 shadow-md shadow-gold-500/20 transition-transform hover:scale-105"
              >
                Enquire Now
              </Link>
            </MagneticButton>
            <button
              className="lg:hidden text-mist-100 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center">
                <img src="/logo.png" alt="Creative Corvus, Design and Media School" className="h-9 w-auto object-contain" />
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-mist-100 p-2" aria-label="Close menu">
                <X size={26} />
              </button>
            </div>

            <motion.nav
              className="flex flex-col px-5 py-6 gap-1 overflow-y-auto max-h-[calc(100vh-72px)]"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {navLinks.filter(l => l.to !== '/').map((link) => (
                <motion.div key={link.to} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium text-mist-100 border-b border-white/5"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                <button
                  onClick={() => setMobileCoursesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-lg font-medium text-mist-100 border-b border-white/5"
                >
                  Courses
                  <ChevronDown size={18} className={`transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-2"
                    >
                      {categories.map((cat) => (
                        <div key={cat.id} className="py-2">
                          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wide mt-2">
                            {cat.label}
                          </p>
                          {getCoursesByCategory(cat.id).map((course) => (
                            <Link
                              key={course.slug}
                              to={`/courses/${course.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-mist-300"
                            >
                              {course.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="mt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center rounded-full btn-gold px-5 py-3 font-semibold text-navy-950"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `px-4 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-gold-400' : 'text-mist-300 hover:text-gold-400'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

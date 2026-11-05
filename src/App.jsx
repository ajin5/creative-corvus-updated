import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import BootIntro from './components/BootIntro';
import ScrollEnquiryPopup from './components/ScrollEnquiryPopup';
import CustomCursor from './components/effects/CustomCursor';
import ScrollProgress from './components/effects/ScrollProgress';
import Spotlight from './components/effects/Spotlight';
import { useLenis } from './lib/useLenis';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Founder = lazy(() => import('./pages/Founder'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-gold-500" />
    </div>
  );
}

export default function App() {
  useLenis();

  return (
    <div className="flex min-h-screen flex-col bg-navy-900 noise-bg">
      <Spotlight />
      <ScrollProgress />
      <CustomCursor />
      <BootIntro />
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingContact />
      <ScrollEnquiryPopup />
    </div>
  );
}

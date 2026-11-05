import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." path="/404" noindex />
      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="font-display text-7xl font-extrabold text-gold-500">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-mist-100">
            We could not find that page
          </h1>
          <p className="mt-2 text-mist-500">
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
          >
            Back to Home
          </Link>
        </Reveal>
      </section>
    </>
  );
}

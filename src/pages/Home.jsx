import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';
import FeatureAccordion from '../components/FeatureAccordion';
import CourseCard from '../components/CourseCard';
import KineticHeading from '../components/KineticHeading';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';
import MagneticButton from '../components/effects/MagneticButton';
import ParallaxImage from '../components/effects/ParallaxImage';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import { categories, getCoursesByCategory } from '../data/courses';
import { siteConfig } from '../data/siteConfig';

export default function Home() {
  const featuredCourses = [
    ...getCoursesByCategory('master').slice(0, 2),
    ...getCoursesByCategory('diploma').slice(0, 2),
    ...getCoursesByCategory('certificate').slice(0, 2),
  ];

  return (
    <>
      <SEO
        title="Design, Animation and VFX Academy in Chennai"
        description="Creative Corvus is a design and media school in Saligramam, Chennai, serving students across Chennai and Tamil Nadu with diploma, master diploma and certificate courses in graphic design, 2D and 3D animation, VFX, UX UI design, multimedia and video editing."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: siteConfig.legalName,
          alternateName: siteConfig.name,
          url: 'https://www.creativecorvus.in',
          logo: 'https://www.creativecorvus.in/logo.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '19A/28, Duraiarasan Street, Saligramam',
            addressLocality: 'Chennai',
            postalCode: '600093',
            addressCountry: 'IN',
          },
          telephone: siteConfig.phones[0].display,
          areaServed: [
            { '@type': 'City', name: 'Chennai' },
            { '@type': 'State', name: 'Tamil Nadu' },
          ],
          foundingDate: '2005',
        }}
      />

      <HeroSlider />

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
            Why Creative Corvus
          </span>
          <KineticHeading
            as="h2"
            text="A studio grade learning experience, not a lecture hall"
            className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance"
          />
          <p className="mt-4 text-mist-500 leading-relaxed">
            Every course is built around the tools and pace of a real production studio, so
            the portfolio you graduate with is one you would be proud to show a hiring manager.
            For more than two decades, Creative Corvus has trained students across Chennai and
            Tamil Nadu in graphic design, animation, visual effects and multimedia production,
            using the same software and workflow that studios in the city actually run on.
          </p>
        </Reveal>
        <div className="mt-10">
          <FeatureAccordion />
        </div>
      </section>

      {/* Course categories */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Programs
            </span>
            <KineticHeading
              as="h2"
              text="Find the right course for where you are today"
              className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat) => (
              <StaggerItem key={cat.id}>
                <Link
                  to={`/courses?category=${cat.id}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-navy-900 p-6 transition-all hover:border-gold-500/50 hover:-translate-y-1"
                >
                  <div>
                    <h3 className="font-display font-bold text-mist-100 group-hover:text-gold-400 transition-colors">
                      {cat.label}
                    </h3>
                    <p className="mt-2 text-sm text-mist-500 leading-relaxed">{cat.blurb}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-500">
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Featured courses */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Popular Courses
            </span>
            <KineticHeading
              as="h2"
              text="Start with one of these"
              className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100"
            />
          </div>
          <Link to="/courses" className="text-sm font-semibold text-gold-500 hover:text-gold-400">
            View all courses &rarr;
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, i) => (
            <CourseCard key={course.slug} course={course} index={i} />
          ))}
        </div>
      </section>

      {/* Software strip */}
      <section className="border-y border-white/10 bg-navy-800/40 py-14">
        <Reveal className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">
            Industry Relevant Softwares
          </p>
          <p className="mt-3 text-mist-500">
            Every course trains on the same professional tools studios and agencies use in production.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <StatsCounter />
      </section>

      {/* Testimonials */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Student Voices
            </span>
            <KineticHeading
              as="h2"
              text="What our graduates say"
              className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100"
            />
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* Local SEO section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Chennai and Tamil Nadu
            </span>
            <KineticHeading
              as="h2"
              text="A design school rooted in Chennai, open to all of Tamil Nadu"
              className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance"
            />
            <div className="mt-5 space-y-4 text-mist-500 leading-relaxed">
              <p>
                Our campus sits on Duraiarasan Street in Saligramam, minutes from Vadapalani,
                Koyambedu, Ashok Nagar and Porur, and an easy commute from Anna Nagar, Valasaravakkam
                and KK Nagar. Most of our students are Chennai residents building a first career in
                design, animation or visual effects.
              </p>
              <p>
                Chennai has grown into one of South India hubs for animation studios, gaming
                companies, advertising agencies and post production houses. Training locally, on
                the same software pipelines those studios use, gives our graduates a real head
                start when they walk into an interview anywhere in Tamil Nadu or beyond.
              </p>
              <p>
                Whether you are searching for a graphic design courses, 3D animation courses,
                AR/VR Courses, Editing and VFX courses in Tamil Nadu, our admissions team can
                talk you through batch timings, fees and the right starting course for your goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400"
            >
              Talk to our admissions team <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal direction="left" className="overflow-hidden rounded-3xl border border-white/10">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
              alt="Design students collaborating at Creative Corvus campus in Saligramam, Chennai"
              className="h-full w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              About Creative Corvus
            </span>
            <KineticHeading
              as="h2"
              text="Twenty one years of teaching design, one student at a time"
              className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100"
            />
            <p className="mt-5 text-mist-500 leading-relaxed">
              Creative Corvus Entertainment Private Limited was built on a simple idea, that
              design and animation are learned by doing, not by watching. Over more than two
              decades we have refined our courses alongside the software updates, industry
              shifts and hiring expectations of studios across Chennai and Tamil Nadu, so what
              you learn in class still matches what a studio expects on day one of the job.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400"
            >
              Read our full story <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-br from-navy-800 to-navy-950 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
          <KineticHeading
            as="h2"
            text="Ready to start your creative career?"
            className="font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance"
          />
          <p className="mx-auto mt-4 max-w-xl text-mist-300">
            Talk to our admission team about the right course, batch timing and career for you.
          </p>
          <MagneticButton className="mt-8 inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full btn-gold px-8 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
            >
              Enquire Now <ArrowRight size={18} />
            </Link>
          </MagneticButton>
        </Reveal>
      </section>
    </>
  );
}

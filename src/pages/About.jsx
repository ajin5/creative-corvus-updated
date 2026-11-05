import { motion } from 'framer-motion';
import { Target, Eye, HeartHandshake, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import StatsCounter from '../components/StatsCounter';
import ParallaxImage from '../components/effects/ParallaxImage';
import TiltCard from '../components/effects/TiltCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const differentiators = [
  { title: 'A graded final piece, not a certificate of attendance', text: 'Every diploma and master program ends in one portfolio project reviewed against a professional rubric, not a quiz you can retake until you pass.' },
  { title: 'Mentors who still work in the industry', text: 'Feedback comes from people designing, animating or compositing on real projects this year, not full time lecturers repeating the same syllabus for a decade.' },
  { title: 'Small enough for one to one notes', text: 'Batches stay small enough that a mentor can give specific, project level feedback every session, not a general comment to the whole room.' },
  { title: 'Built around a hiring pipeline, not just a course catalog', text: 'Placement support and portfolio review start from week one, not bolted on after graduation as an afterthought.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Creative Corvus is a design and media school in Saligramam, Chennai with over 21 years of experience training students from Chennai and across Tamil Nadu in graphic design, animation, VFX and multimedia."
        path="/about"
      />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">About Us</span>
          <KineticHeading
            as="h1"
            text="We teach design the way a studio would run it"
            className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-mist-100 text-balance"
          />
          <h2 className="mt-5 text-lg text-mist-300 leading-relaxed text-balance">
            Creative Corvus Entertainment Private Limited is a design and media school in
            Saligramam, Chennai, training the next generation of designers, animators and
            visual effects artists with industry standard tools, mentor led learning and
            real portfolio ready outcomes, for over twenty one years.
          </h2>
        </Reveal>
      </section>

      {/* Meet our founder */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-gold-500/20 bg-navy-800 p-8 sm:p-10 lg:grid-cols-5 lg:items-center">
            <TiltCard className="lg:col-span-2 mx-auto w-full max-w-xs rounded-2xl" maxTilt={5}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="/founder-cr-boobalan.jpg"
                  alt="C.R. Boobalan, Founder and Director of Creative Corvus Entertainment Private Limited"
                  className="w-full object-cover"
                />
              </div>
            </TiltCard>
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
                Meet Our Founder
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-mist-100">
                C.R. Boobalan, B.Sc., D.P.T.
              </h2>
              <p className="mt-3 text-mist-300 leading-relaxed">
                Thirty eight years across print production, 3D animation and design education
                leadership, from Penta Media Graphics to nearly two decades building curriculum
                at Dreamzone. In 2025 he channeled that lifetime of expertise into founding
                Creative Corvus.
              </p>
              <Link
                to="/founder"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400"
              >
                Read his full story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="rounded-2xl border border-white/10 h-full">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
              alt="Creative Corvus classroom in Saligramam, Chennai"
              className="rounded-2xl h-full w-full"
            />
          </Reveal>
          <Reveal direction="left" className="space-y-4 text-mist-300 leading-relaxed">
            <p>
              Creative Corvus began in Saligramam with a small batch of graphic design students
              and a simple conviction, that the fastest way to learn design, animation or visual
              effects is to build real work under people who already do it for a living. That
              conviction has not changed in twenty one years, even as the software, the client
              expectations and the job titles around us have.
            </p>
            <p>
              Today we run classes across graphic design, UX UI design, 2D and 3D animation,
              visual effects, multimedia and video editing, welcoming students from every
              corner of Chennai, as well as students who relocate from other cities in Tamil
              Nadu for a focused, hands on program.
            </p>
            <p>
              What has stayed constant is our approach, small batches, mentors who are working
              professionals, and a curriculum that gets rebuilt whenever the industry moves,
              not once every few years.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Target, title: 'Our Mission', text: 'To give every student a practical, production ready skill set, not just theory, so they can walk into studio work with confidence.' },
            { icon: Eye, title: 'Our Vision', text: 'To remain Chennai and Tamil Nadu most trusted name for design, animation and visual effects education, known for the quality of our graduates.' },
            { icon: HeartHandshake, title: 'Our Values', text: 'Mentorship over lectures, portfolios over certificates, and honest feedback that helps students grow faster.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-800 p-7">
                  <Icon className="text-gold-500" size={28} />
                  <h3 className="mt-4 font-display text-lg font-bold text-mist-100">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist-500 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How we're different */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">Why Creative Corvus</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
              How a mentor led studio course actually differs from a tutorial platform
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-navy-900 p-6"
              >
                <h3 className="font-display font-bold text-mist-100">{item.title}</h3>
                <p className="mt-2 text-sm text-mist-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">Our Campus</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
            A working studio environment in Saligramam
          </h2>
        </Reveal>
        <Reveal className="rounded-2xl border border-white/10 bg-navy-800 p-7 sm:p-9">
          <div className="flex items-start gap-3">
            <MapPin className="text-gold-500 shrink-0 mt-1" size={22} />
            <div>
              <p className="text-mist-300 leading-relaxed">
                Our campus at {siteConfig.address} is built around lab style classrooms, not
                lecture halls, with dedicated systems for design, 3D animation and visual
                effects work, so every student trains on the same setup they would use in a
                studio job.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <StaggerGroup className="mb-14 text-center">
          <StaggerItem>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">By The Numbers</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
              A track record built one graduate at a time
            </h2>
          </StaggerItem>
        </StaggerGroup>
        <StatsCounter />
      </section>
    </>
  );
}

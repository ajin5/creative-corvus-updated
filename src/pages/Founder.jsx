import { motion } from 'framer-motion';
import { Phone, Mail, Award, BookOpen, Users2, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal';
import MagneticButton from '../components/effects/MagneticButton';
import TiltCard from '../components/effects/TiltCard';

const industryRoots = [
  {
    period: '1984 to 1998',
    title: 'Printing Industry',
    text: 'Fifteen years mastering the fundamentals of print design, layout and pagination. This disciplined foundation still informs precision in every project delivered today.',
  },
  {
    period: '1998 to 2002',
    title: 'Penta Media Graphics',
    text: 'As a 3D Artist, Set Designer, Character Animator and Keyframe Animator, contributed to landmark projects including the 3D animated features Pandavas and Alibaba, the Tamil films Little John and Palayathamman, and the Supari Beetulnut TV advertisement campaign. Also worked as an Editor at Balan Studio, producing promos for Telugu cinema.',
  },
];

const academicRoles = [
  { period: '2002 to 2004', title: 'Faculty Member', org: 'Informatics Centre, Loyola Institute of Business Administration, Loyola College, Chennai' },
  { period: '2004 to 2005', title: 'Faculty cum Technical Head', org: 'Arena Animation, Anna Nagar, Chennai' },
  { period: '2005 to 2024', title: 'Business Support cum Technical Head', org: 'Dreamzone', highlights: [
    'Conceptualized and authored curriculum and textbooks for Fashion Design, Interior Architecture, Graphic and Web Design, 3D Animation, and Editing and VFX programs',
    'Led and mentored a team of authors in developing structured, industry relevant course content',
    'Delivered career guidance and awareness programs on Interior Design, Fashion and Multimedia careers in colleges across India',
    'Served as Technical Head for the DDU GKY Project, a Central Government Skill Development Programme, contributing to national skilling initiatives',
  ]},
];

const associations = [
  {
    org: 'IIID, Indian Institute of Interior Designers',
    roles: 'Vice Chairman (2017 to 19), Honorary Joint Secretary (2019 to 21), Managing Committee Member (2021 to 23), and currently a Development Committee Member',
  },
  {
    org: 'VEGAS, Visual Effects and Gaming Association',
    roles: 'Founder Committee Member',
  },
];

const programs = ['Graphic Design', 'Web Design', '3D Animation', 'Editing', 'Visual Effects (VFX)', 'AR / VR (Augmented and Virtual Reality)'];

const eeat = [
  {
    icon: Award,
    title: 'Experience',
    text: 'Four decades in the creative industry, from hands on print and animation production to national level curriculum design.',
  },
  {
    icon: BookOpen,
    title: 'Expertise',
    text: 'A founder who has personally authored design curricula used to train students in Fashion, Interior, Graphic, Web, 3D Animation, Editing and VFX disciplines nationwide.',
  },
  {
    icon: Users2,
    title: 'Authoritativeness',
    text: 'Recognized leadership roles in IIID and VEGAS, and technical leadership on a Government of India skill development programme.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthiness',
    text: 'A proven, decades long track record of institutional roles, from Loyola College to Arena Animation to Dreamzone, built on consistency, accountability and real outcomes for students and employers alike.',
  },
];

export default function Founder() {
  return (
    <>
      <SEO
        title="Our Founder, C.R. Boobalan"
        description="C.R. Boobalan, founder and director of Creative Corvus Entertainment Private Limited, brings 38 years of experience across print production, 3D animation, and design education leadership in India."
        path="/founder"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'C.R. Boobalan',
          jobTitle: 'Founder cum Director',
          worksFor: {
            '@type': 'EducationalOrganization',
            name: 'Creative Corvus Entertainment Private Limited',
          },
          email: 'info@creativecorvus.com',
          telephone: '9047557666',
        }}
      />

      {/* Hero profile */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-5 lg:items-center">
          <Reveal className="lg:col-span-3 order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Founder and Director
            </span>
            <KineticHeading
              as="h1"
              text="Where four decades of creative mastery meet next generation design education"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-mist-100 text-balance"
            />
            <p className="mt-6 text-lg text-mist-300 leading-relaxed text-balance">
              At Creative Corvus Entertainment Private Limited, we do not just teach design. We
              build careers, shape studios and mentor the storytellers, animators and designers
              of tomorrow. Founded by <strong className="text-mist-100">C.R. Boobalan, B.Sc., D.P.T.</strong>,
              our institution is rooted in a rare combination of hands on industry craftsmanship
              and decades of leadership in design education across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-400">
                38 Years of Industry Experience
              </span>
              <span className="rounded-full border border-white/10 bg-navy-800 px-4 py-2 text-sm text-mist-300">
                Founder, Creative Corvus, 2025
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton>
                <a
                  href="tel:9047557666"
                  className="inline-flex items-center gap-2 rounded-full btn-gold px-6 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
                >
                  <Phone size={16} /> 90475 57666
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="mailto:info@creativecorvus.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-mist-100 transition-colors hover:border-gold-500 hover:text-gold-400"
                >
                  <Mail size={16} /> info@creativecorvus.com
                </a>
              </MagneticButton>
            </div>
          </Reveal>

          {/* Premium photo placement */}
          <Reveal direction="left" className="lg:col-span-2 order-1 lg:order-2">
            <TiltCard className="relative mx-auto max-w-sm rounded-3xl" maxTilt={5}>
              <div className="relative overflow-hidden rounded-3xl border border-gold-500/20 shadow-2xl shadow-black/50">
                <img
                  src="/founder-cr-boobalan.jpg"
                  alt="C.R. Boobalan, Founder and Director of Creative Corvus Entertainment Private Limited"
                  className="w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-6">
                  <p className="font-display text-lg font-bold text-mist-100">C.R. Boobalan</p>
                  <p className="text-sm text-gold-400">B.Sc., D.P.T.</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] border border-gold-500/10" />
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Industry roots */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              1984 to 2002, Nineteen Years on the Production Floor
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
              Industry Roots
            </h2>
          </Reveal>

          <div className="relative border-l border-white/10 pl-8">
            {industryRoots.map((step, i) => (
              <motion.div
                key={step.period}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-500 ring-4 ring-navy-900" />
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-500">{step.period}</p>
                <h3 className="mt-1 font-display font-bold text-mist-100">{step.title}</h3>
                <p className="mt-2 text-sm text-mist-300 leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic leadership */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              2002 to 2024, Over Twenty Years Building India Design Talent
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
              Academic and Institutional Leadership
            </h2>
          </Reveal>

          <div className="space-y-6">
            {academicRoles.map((role) => (
              <Reveal key={role.period} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-500">{role.period}</p>
                <h3 className="mt-1 font-display font-bold text-mist-100">{role.title}</h3>
                <p className="text-sm text-mist-500">{role.org}</p>
                {role.highlights && (
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-mist-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Associations */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-14 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Professional and Industry Associations
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
              Setting Standards, Not Just Teaching Them
            </h2>
            <p className="mt-4 text-mist-500 leading-relaxed max-w-2xl mx-auto">
              This sustained involvement in professional bodies reflects an ongoing commitment
              to setting standards and shaping policy within India design and animation
              industry, not just teaching within it.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {associations.map((a) => (
              <Reveal key={a.org} className="rounded-2xl border border-white/10 bg-navy-900 p-6">
                <h3 className="font-display font-bold text-gold-400">{a.org}</h3>
                <p className="mt-2 text-sm text-mist-300 leading-relaxed">{a.roles}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Corvus founding */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Creative Corvus Entertainment, Established 2025
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance">
              A Lifetime of Expertise, Channeled Into One School
            </h2>
            <p className="mt-5 text-mist-300 leading-relaxed">
              In 2025, C.R. Boobalan channeled this lifetime of expertise into founding Creative
              Corvus Entertainment Private Limited, a dedicated training cum production house
              built to bridge the gap between classroom learning and real industry demands. Every
              course we design draws on decades of production experience, curriculum authorship
              for national training programs, and direct exposure to what studios and employers
              actually look for.
            </p>
          </Reveal>

          <StaggerGroup className="mt-8 flex flex-wrap justify-center gap-2">
            {programs.map((p) => (
              <StaggerItem key={p}>
                <span className="inline-block rounded-full border border-white/10 bg-navy-800 px-4 py-2 text-sm text-mist-300">
                  {p}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why learn with us, E-E-A-T */}
      <section className="bg-navy-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
              Why Learn With Us
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
              Backed by a Founder Who Has Lived Every Side of This Industry
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eeat.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/10 bg-navy-900 p-6">
                    <Icon className="text-gold-500" size={26} />
                    <h3 className="mt-4 font-display font-bold text-mist-100">{item.title}</h3>
                    <p className="mt-2 text-sm text-mist-500 leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-br from-navy-800 to-navy-950 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-mist-100 text-balance">
            Get in touch with our Academic Head
          </h2>
          <p className="mx-auto mt-3 text-mist-300">
            Have a question about curriculum depth or which track fits your goals? Our Academic Head
            personally handles admissions calls that need more than a standard FAQ answer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <a
                href="tel:9047558666"
                className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
              >
                <Phone size={18} /> Call 90475 58666
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="mailto:info@creativecorvus.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-semibold text-mist-100 transition-colors hover:border-gold-500 hover:text-gold-400"
              >
                <Mail size={18} /> info@creativecorvus.com
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}

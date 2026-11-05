import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Code2, Briefcase, ArrowRight, Users, CalendarCheck, ListChecks } from 'lucide-react';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal from '../components/Reveal';
import CourseCard from '../components/CourseCard';
import EnquiryForm from '../components/EnquiryForm';
import AnimatedTabs from '../components/effects/AnimatedTabs';
import MagneticButton from '../components/effects/MagneticButton';
import { getCourseBySlug, courses, categories } from '../data/courses';
import { getCourseNarrative } from '../data/courseContent';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) return <Navigate to="/courses" replace />;

  const categoryLabel = categories.find((c) => c.id === course.category)?.label;
  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, 3);
  const narrative = getCourseNarrative(course);

  return (
    <>
      <SEO
        title={course.title}
        description={`${course.summary} Taught in Saligramam, Chennai, open to students from across Chennai and Tamil Nadu.`}
        path={`/courses/${course.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: course.title,
          description: course.summary,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Creative Corvus Entertainment Private Limited',
            sameAs: 'https://www.creativecorvus.in',
          },
          areaServed: [
            { '@type': 'City', name: 'Chennai' },
            { '@type': 'State', name: 'Tamil Nadu' },
          ],
          timeRequired: course.duration,
        }}
      />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12">
        <Reveal className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-gold-500/10 px-3 py-1 font-semibold text-gold-400">
              {categoryLabel}
            </span>
            <span className="text-mist-500">{course.code}</span>
            {course.ageGroup && (
              <span className="rounded-full bg-white/5 px-3 py-1 text-mist-300">{course.ageGroup}</span>
            )}
          </div>
          <KineticHeading
            as="h1"
            text={course.title}
            className="mt-4 font-display text-3xl sm:text-5xl font-extrabold text-mist-100 text-balance"
          />
          <h2 className="mt-4 text-lg text-mist-300 leading-relaxed text-balance">
            {course.summary}
          </h2>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-mist-300">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold-500" /> {course.duration}
            </span>
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-gold-500" /> {course.software.join(', ')}
            </span>
          </div>

          <MagneticButton className="mt-8 inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
            >
              Enquire About This Course <ArrowRight size={18} />
            </Link>
          </MagneticButton>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <Reveal>
            <h3 className="font-display text-2xl font-bold text-mist-100 mb-5">Course Overview</h3>
            <div className="space-y-4 text-mist-300 leading-relaxed">
              {narrative.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 className="font-display text-2xl font-bold text-mist-100 mb-5 flex items-center gap-2">
              <Users size={22} className="text-gold-500" /> Who This Course Is For
            </h3>
            <ul className="space-y-3">
              {narrative.whoFor.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-800 px-4 py-3 text-sm text-mist-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h3 className="font-display text-2xl font-bold text-mist-100 mb-5 flex items-center gap-2">
              <CalendarCheck size={22} className="text-gold-500" /> What To Expect Through The Course
            </h3>
            <div className="space-y-3">
              {narrative.week.map((w) => (
                <div key={w.label} className="rounded-xl border border-white/10 bg-navy-800 px-5 py-4">
                  <p className="font-display font-bold text-gold-400 text-sm">{w.label}</p>
                  <p className="mt-1 text-sm text-mist-300 leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 className="font-display text-2xl font-bold text-mist-100 mb-5">
              Skills And Career Paths
            </h3>
            <AnimatedTabs
              tabs={[
                {
                  id: 'skills',
                  label: 'Skill Set',
                  icon: ListChecks,
                  content: (
                    <div className="space-y-6">
                      {course.skillSet.map((group) => (
                        <div key={group.group} className="rounded-2xl border border-white/10 bg-navy-800 p-6">
                          <h4 className="font-display font-bold text-gold-400">{group.group}</h4>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {group.points.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-sm text-mist-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  id: 'careers',
                  label: 'Career Opportunities',
                  icon: Briefcase,
                  content: (
                    <div className="flex flex-wrap gap-2">
                      {course.careers.map((role) => (
                        <span
                          key={role}
                          className="rounded-full border border-white/10 bg-navy-800 px-4 py-2 text-sm text-mist-300"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </Reveal>
        </div>

        <Reveal direction="left">
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-navy-800 p-6">
            <h3 className="font-display text-lg font-bold text-mist-100">Enquire About This Course</h3>
            <p className="mt-1 text-sm text-mist-500">Our admissions team will get back to you shortly.</p>
            <div className="mt-5">
              <EnquiryForm presetCourse={course.title} />
            </div>
          </div>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="border-t border-white/10 bg-navy-800/40 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-mist-100 mb-8">
                Related Courses in {categoryLabel}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c, i) => (
                <CourseCard key={c.slug} course={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

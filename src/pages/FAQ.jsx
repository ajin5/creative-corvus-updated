import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal from '../components/Reveal';
import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data/siteConfig';

export default function FAQ() {
  const allQA = faqs.flatMap((g) => g.items);

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Answers to common questions about admissions, fees, batch timings, placement support and certification at Creative Corvus Design and Media School, Chennai."
        path="/faq"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: allQA.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <Reveal className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">FAQ</span>
          <KineticHeading
            as="h1"
            text="Questions, answered"
            className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-mist-100 text-balance"
          />
          <p className="mt-4 text-mist-500">
            Everything you need to know before joining a course at Creative Corvus.
          </p>
        </Reveal>

        <div className="space-y-14">
          {faqs.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <h2 className="mb-5 font-display text-xl font-bold text-gold-400">{group.category}</h2>
              <FAQAccordion items={group.items} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

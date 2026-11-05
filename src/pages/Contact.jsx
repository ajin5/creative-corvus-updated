import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal from '../components/Reveal';
import EnquiryForm from '../components/EnquiryForm';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Creative Corvus Design and Media School in Saligramam, Chennai for admissions, course details and campus visits."
        path="/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: siteConfig.legalName,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '19A/28, Duraiarasan Street, Saligramam',
            addressLocality: 'Chennai',
            postalCode: '600093',
            addressCountry: 'IN',
          },
          telephone: siteConfig.phones.map((p) => p.display),
          email: siteConfig.careersEmail,
        }}
      />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-16">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">Contact Us</span>
          <KineticHeading
            as="h1"
            text="Let us help you start your creative career"
            className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-mist-100 text-balance"
          />
          <p className="mt-4 text-mist-500 leading-relaxed">
            Reach out with any question about courses, batches or fees. Our admissions team
            typically responds within one business day.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2 space-y-4">
          <InfoCard icon={MapPin} title="Campus Address">
            {siteConfig.address}
          </InfoCard>
          <InfoCard icon={Phone} title="Customer Service">
            {siteConfig.phones.map((p) => (
              <a key={p.number} href={`tel:${p.number}`} className="block hover:text-gold-400 transition-colors">
                {p.display}
              </a>
            ))}
          </InfoCard>
          <InfoCard icon={Mail} title="Careers and General Enquiries">
            <a href={`mailto:${siteConfig.careersEmail}`} className="hover:text-gold-400 transition-colors">
              {siteConfig.careersEmail}
            </a>
          </InfoCard>
          <InfoCard icon={Clock} title="Working Hours">
            Monday to Saturday, 10 AM to 7 PM
          </InfoCard>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Creative Corvus campus location"
              src="https://www.google.com/maps?q=Duraiarasan+Street+Saligramam+Chennai+600093&output=embed"
              className="h-64 w-full grayscale invert-[0.9] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal direction="left" className="lg:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-navy-800 p-7 sm:p-9">
            <h2 className="font-display text-xl font-bold text-mist-100">Send an Enquiry</h2>
            <p className="mt-1 text-sm text-mist-500">
              Fill in your details and our team will reach out about the right course for you.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="border-t border-white/10 bg-navy-800/40 py-24 scroll-mt-28">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">Privacy Policy</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-mist-100">
              How we handle your information
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-mist-300">
              <p>
                Creative Corvus Entertainment Private Limited respects your privacy. This policy
                explains what information we collect through this website, why we collect it,
                and how it is used.
              </p>

              <div>
                <h3 className="font-display font-bold text-mist-100 mb-2">Information We Collect</h3>
                <p>
                  When you submit an enquiry form on this website, we collect your name, phone
                  number, email address, the course you are interested in, and any message you
                  choose to include. We do not collect payment information through this website.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-mist-100 mb-2">How We Use Your Information</h3>
                <p>
                  Your information is used only to respond to your enquiry, share course and
                  admissions details, and follow up about batch timings or fees. We do not sell,
                  rent or trade your personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-mist-100 mb-2">Where Your Information Is Stored</h3>
                <p>
                  When you submit an enquiry form or the popup on this website, the details
                  you enter are used to open a WhatsApp message addressed to our admissions
                  number. That message, and any reply, is stored within WhatsApp on our
                  business phone, the same as any other WhatsApp conversation. We do not
                  operate a separate database or spreadsheet for this website.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-mist-100 mb-2">Cookies and Analytics</h3>
                <p>
                  This website may use basic, privacy respecting analytics to understand how
                  visitors use our pages, so we can improve navigation and content. This data is
                  aggregated and is not used to personally identify you.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-mist-100 mb-2">Your Rights</h3>
                <p>
                  You may ask us to access, correct or delete the personal information we hold
                  about you at any time by writing to{' '}
                  <a href={`mailto:${siteConfig.careersEmail}`} className="text-gold-500 hover:text-gold-400">
                    {siteConfig.careersEmail}
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-mist-100 mb-2">Contact About This Policy</h3>
                <p>
                  If you have any questions about this privacy policy or how your information is
                  handled, please contact us at{' '}
                  <a href={`mailto:${siteConfig.careersEmail}`} className="text-gold-500 hover:text-gold-400">
                    {siteConfig.careersEmail}
                  </a>{' '}
                  or call {siteConfig.phones[0].display}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-navy-800 p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
          <Icon size={18} />
        </span>
        <div>
          <h3 className="font-semibold text-mist-100">{title}</h3>
          <div className="mt-1 text-sm text-mist-500">{children}</div>
        </div>
      </div>
    </div>
  );
}

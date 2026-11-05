
import { useState } from 'react';
import { X } from 'lucide-react';
import SEO from '../components/SEO';
import KineticHeading from '../components/KineticHeading';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/effects/MagneticButton';
import { Link } from 'react-router-dom';

const tabs = [
  { key: 'institute', label: 'Institute' },
  { key: 'events', label: 'Events' },
  { key: 'student-work', label: 'Student Work' },
];

const galleryImages = {
  institute: [
    '/gallery/institute/class1.png',
    '/gallery/institute/class2.png',
    '/gallery/institute/class3.png',
    '/gallery/institute/class4.png',
  ],
  events: [
    '/gallery/events/Activities/activity1.jpg',
    '/gallery/events/Activities/activity2.jpg',
    '/gallery/events/Activities/activity3.jpg',
    '/gallery/events/Activities/activity4.jpg',
    '/gallery/events/Activities/activity5.jpg',
    '/gallery/events/Activities/activity6.jpg',
    '/gallery/events/Activities/activity7.jpg',
    '/gallery/events/Activities/activity8.jpg',
    '/gallery/events/Activities/activity9.jpg',
    '/gallery/events/Activities/activity10.jpg',
    '/gallery/events/Activities/activity11.jpg',
    '/gallery/events/Inaguartion/img1.JPG',
    '/gallery/events/Inaguartion/img2.JPG',
    '/gallery/events/Inaguartion/img3.JPG',
    '/gallery/events/Inaguartion/img4.JPG',
    '/gallery/events/Inaguartion/img5.JPG',
    '/gallery/events/Inaguartion/img6.JPG',
    '/gallery/events/Inaguartion/img7.JPG',
    '/gallery/events/Inaguartion/img8.JPG',
    '/gallery/events/Inaguartion/img9.JPG',
    '/gallery/events/Inaguartion/img10.JPG',
    '/gallery/events/Inaguartion/img11.JPG',
    '/gallery/events/Inaguartion/img12.JPG',
    '/gallery/events/Journalistunionevent/union1.jpeg',
    '/gallery/events/Journalistunionevent/union2.jpeg',
    '/gallery/events/Journalistunionevent/union3.jpeg',
    '/gallery/events/Journalistunionevent/union4.jpeg',
    '/gallery/events/Journalistunionevent/union5.jpeg',
    '/gallery/events/Journalistunionevent/union6.jpeg',
    '/gallery/events/Journalistunionevent/union7.jpeg',
    '/gallery/events/Journalistunionevent/union8.jpeg',
    '/gallery/events/Journalistunionevent/union9.jpeg',
    '/gallery/events/Journalistunionevent/union10.jpeg',
    '/gallery/events/Journalistunionevent/union11.jpeg',
    '/gallery/events/Journalistunionevent/union12.jpeg',
    'gallery/events/LIBA_ARVRSeminar/liba1.jpeg',
    'gallery/events/LIBA_ARVRSeminar/liba2.jpeg',
    'gallery/events/LIBA_ARVRSeminar/liba3.jpeg',
    'gallery/events/loyala/loyala1.jpeg',
    'gallery/events/loyala/loyala2.jpeg',
    'gallery/events/loyala/loyala3.jpeg',
    'gallery/events/loyala/loyala4.jpeg',
    'gallery/events/loyala/loyala5.jpeg',
    'gallery/events/loyala/loyala6.jpeg',
    'gallery/events/loyala/loyala7.jpeg',
    'gallery/events/loyala/loyala8.jpeg',
    'gallery/events/loyala/loyala9.jpeg',
    'gallery/events/loyala/loyala10.jpeg',
    'gallery/events/loyala/loyala11.jpeg',
    'gallery/events/loyala/loyala12.jpeg',
    'gallery/events/loyala/loyala14.jpeg',
    'gallery/events/loyala/loyala15.jpeg',
    'gallery/events/loyala/loyala16.jpeg',
    'gallery/events/Photoshopseminar/photoshop1.jpg',
    'gallery/events/Sunshine/sunshine1.jpeg',
    'gallery/events/Sunshine/sunshine2.jpeg',
    'gallery/events/Sunshine/sunshine3.jpeg',
    'gallery/events/Sunshine/sunshine4.jpeg',
    'gallery/events/Sunshine/sunshine5.jpeg',
    'gallery/events/Sunshine/sunshine6.jpeg',
    'gallery/events/Sunshine/sunshine7.jpeg',
    'gallery/events/Sunshine/sunshine8.jpeg',
    'gallery/events/Sunshine/sunshine9.jpeg',
    'gallery/events/Sunshine/sunshine10.jpeg',
    'gallery/events/Sunshine/sunshine11.jpeg',
    'gallery/events/Sunshine/sunshine12.jpeg',

    
  ],
  'student-work': [
    '/gallery/student-work/work1.webp',
    '/gallery/student-work/work2.webp',
    '/gallery/student-work/work3.webp',
  ],
};

export default function Gallery() {
  const [active, setActive] = useState('institute');
  const [selectedImage, setSelectedImage] = useState(null);

  const current = tabs.find((t) => t.key === active);
  const images = galleryImages[active];

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore Creative Corvus academy, events and student work in Chennai."
        path="/gallery"
      />

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-500">
            Gallery
          </span>

          <KineticHeading
            as="h1"
            text="A look inside the academy"
            className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-mist-100"
          />

          <p className="mt-4 text-mist-500 leading-relaxed">
            Explore our campus, studio spaces, academy events,
            and creative student projects.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                active === tab.key
                  ? 'border-gold-500 bg-gold-500 text-navy-950'
                  : 'border-white/15 text-mist-300 hover:border-gold-500/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Images */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedImage(src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800"
            >
              <img
                src={src}
                alt={`${current.label} gallery image ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </button>
          ))}
        </div>
      </section>

      {/* Image Preview */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="Selected gallery preview"
            className="max-h-[85vh] max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-br from-navy-800 to-navy-950 px-8 py-16 text-center sm:px-16">

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-mist-100">
            Want to see the studio in person?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-mist-300">
            Book a campus visit and meet a mentor before you enroll.
          </p>

          <MagneticButton className="mt-8 inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full btn-gold px-8 py-3 font-semibold text-navy-950"
            >
              Enquire Now
            </Link>
          </MagneticButton>
        </Reveal>
      </section>
    </>
  );
}

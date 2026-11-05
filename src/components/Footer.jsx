import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { categories } from '../data/courses';

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 9h2.5V6h-2.5C11.5 6 10 7.5 10 9.5V12H8v3h2v6h3v-6h2.5l.5-3H13V10c0-.6.4-1 1-1Z" />
    </svg>
  );
}
function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.8v4.4l4-2.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5V10M11.5 12.7c0-1.5 1.1-2.7 2.5-2.7s2.5 1 2.5 2.7v3.8" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src="/logo.png" alt="Creative Corvus, Design and Media School" className="h-11 w-auto object-contain" />
          </Link>
          <p className="text-mist-500 text-sm leading-relaxed">
            {siteConfig.shortTagline}. Training Chennai next generation of designers, animators and visual effects artists.
          </p>
          <div className="flex gap-3 mt-5">
            <SocialIcon href={siteConfig.socials.instagram} label="Instagram"><InstagramIcon width={18} height={18} /></SocialIcon>
            <SocialIcon href={siteConfig.socials.facebook} label="Facebook"><FacebookIcon width={18} height={18} /></SocialIcon>
            <SocialIcon href={siteConfig.socials.youtube} label="YouTube"><YoutubeIcon width={18} height={18} /></SocialIcon>
            <SocialIcon href={siteConfig.socials.linkedin} label="LinkedIn"><LinkedinIcon width={18} height={18} /></SocialIcon>
          </div>
        </div>

        <div>
          <h3 className="text-mist-100 font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link to={`/courses?category=${cat.id}`} className="text-sm text-mist-500 hover:text-gold-400 transition-colors">
                  {cat.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/courses" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">
                View All Courses
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-mist-100 font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">About Us</Link></li>
            <li><Link to="/founder" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">Our Founder</Link></li>
            <li><Link to="/gallery" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">Gallery</Link></li>
            <li><Link to="/blog" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">Blog</Link></li>
            <li><Link to="/faq" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">FAQ</Link></li>
            <li><Link to="/contact" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">Contact Us</Link></li>
            <li><Link to="/contact#privacy" className="text-sm text-mist-500 hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
            <li><a href={`mailto:${siteConfig.careersEmail}`} className="text-sm text-mist-500 hover:text-gold-400 transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-mist-100 font-semibold mb-4">Reach Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-mist-500">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
              {siteConfig.address}
            </li>
            {siteConfig.phones.map((p) => (
              <li key={p.number} className="flex items-center gap-2 text-sm text-mist-500">
                <Phone size={16} className="shrink-0 text-gold-500" />
                <a href={`tel:${p.number}`} className="hover:text-gold-400 transition-colors">{p.display}</a>
              </li>
            ))}
            <li className="flex items-center gap-2 text-sm text-mist-500">
              <Mail size={16} className="shrink-0 text-gold-500" />
              <a href={`mailto:${siteConfig.careersEmail}`} className="hover:text-gold-400 transition-colors">
                {siteConfig.careersEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-mist-500">
          Copyright {year} Creative Corvus Entertainment Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-300 transition-all hover:border-gold-500 hover:text-gold-400 hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

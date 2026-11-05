import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/courses';
import { siteConfig } from '../data/siteConfig';

export default function EnquiryForm({ presetCourse = '' }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: presetCourse,
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return;

    const lines = [
      `Hello, my name is ${form.name}.`,
      `My phone number is ${form.phone}.`,
      form.email && `My email is ${form.email}.`,
      form.course && `I am interested in the ${form.course}.`,
      form.message && `Message: ${form.message}`,
      'I would like to know more about the courses at Creative Corvus.',
    ].filter(Boolean);

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join(' '))}`;

    setSent(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-gold-500/30 bg-gold-500/5 p-8 text-center"
      >
        <CheckCircle2 className="text-gold-500" size={40} />
        <h3 className="font-display text-xl font-bold text-mist-100">Opening WhatsApp</h3>
        <p className="text-sm text-mist-300">
          Send the message and our admissions team will reply shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Your full name"
          />
        </Field>
        <Field label="Phone Number" required>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="input"
            placeholder="10 digit mobile number"
          />
        </Field>
      </div>

      <Field label="Email Address">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="input"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Course You Are Interested In">
        <select name="course" value={form.course} onChange={handleChange} className="input">
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>{c.title}</option>
          ))}
        </select>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="input resize-none"
          placeholder="Tell us a little about what you are looking for"
        />
      </Field>

      <label className="flex items-start gap-3 text-xs text-mist-500">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          required
          className="mt-0.5 h-4 w-4 rounded border-white/20 bg-navy-800 accent-gold-500"
        />
        I agree to the{' '}
        <a href="/contact#privacy" className="text-gold-500 hover:text-gold-400 underline">
          Privacy Policy
        </a>{' '}
        and consent to being contacted about this enquiry.
      </label>

      <button
        type="submit"
        disabled={!form.consent}
        className="inline-flex items-center gap-2 rounded-full btn-gold px-7 py-3 font-semibold text-navy-950 transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
      >
        Message Us on WhatsApp
        <Send size={16} />
      </button>
      <p className="text-xs text-mist-500">
        This opens a prefilled WhatsApp message to {siteConfig.whatsappDisplay}.
      </p>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255,255,255,0.1);
          background: var(--color-navy-800);
          padding: 0.65rem 1rem;
          color: var(--color-mist-100);
          font-size: 0.9rem;
        }
        .input::placeholder { color: var(--color-mist-500); }
        .input:focus { border-color: var(--color-gold-500); outline: none; }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-mist-300">
        {label} {required && <span className="text-gold-500">*</span>}
      </span>
      {children}
    </label>
  );
}

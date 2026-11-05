import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

let hasShownThisSession = false;

export default function ScrollEnquiryPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (hasShownThisSession) return;

    const onScroll = () => {
      if (triggered.current) return;
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? scrolled / docHeight : 0;

      if (percent > 0.4) {
        triggered.current = true;
        hasShownThisSession = true;
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => {
    setVisible(false);
    setDismissed(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `Hello, my name is ${name}. My phone number is ${phone}. I would like to know more about the courses at Creative Corvus.`;
    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    setSent(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => setVisible(false), 1200);
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-navy-950/70 backdrop-blur-sm p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-navy-800 p-6 shadow-2xl shadow-black/50"
          >
            <button
              onClick={close}
              aria-label="Close popup"
              className="absolute right-4 top-4 text-mist-500 hover:text-mist-100 transition-colors"
            >
              <X size={20} />
            </button>

            {sent ? (
              <div className="py-6 text-center">
                <p className="font-display text-lg font-bold text-mist-100">Opening WhatsApp</p>
                <p className="mt-2 text-sm text-mist-500">
                  Send the message and our team will reply shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-lg font-bold text-mist-100 pr-6">
                  Have a question about a course?
                </h3>
                <p className="mt-1 text-sm text-mist-500">
                  Leave your name and number, we will message you on WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 focus:border-gold-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 focus:border-gold-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-navy-950 transition-transform hover:scale-105"
                  >
                    Message Us on WhatsApp
                    <Send size={16} />
                  </button>
                </form>
                <p className="mt-3 text-center text-xs text-mist-500">
                  This opens a prefilled WhatsApp message to {siteConfig.whatsappDisplay}.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

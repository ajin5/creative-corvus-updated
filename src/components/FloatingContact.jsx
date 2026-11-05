import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4.02 8.37 4.02 15c0 2.22.6 4.3 1.65 6.09L3 29l8.1-2.6A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.63 28 15S22.65 3 16.02 3Zm0 21.8c-1.94 0-3.75-.53-5.3-1.46l-.38-.22-4.8 1.54 1.57-4.67-.25-.4a9.6 9.6 0 0 1-1.5-5.09c0-5.35 4.36-9.7 9.7-9.7 5.35 0 9.7 4.35 9.7 9.7 0 5.34-4.35 9.7-9.74 9.7Zm5.36-7.28c-.29-.15-1.73-.86-2-.96-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.5-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.77.36-.26.29-1.01.99-1.01 2.41s1.04 2.8 1.18 3c.15.19 2.05 3.14 4.98 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.73-.7 1.97-1.39.24-.68.24-1.26.17-1.39-.07-.12-.26-.19-.55-.34Z"/>
    </svg>
  );
}

export default function FloatingContact() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello, I would like to know more about the courses at Creative Corvus.'
  )}`;
  const phoneHref = `tel:${siteConfig.phones[0].number}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <motion.a
        href={phoneHref}
        aria-label="Call Creative Corvus"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 text-mist-100 shadow-lg shadow-black/40 border border-white/10"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={18} />
      </motion.a>

      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40"
        style={{ height: 52, width: 52 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <WhatsAppIcon className="h-7 w-7 relative" />
      </motion.a>
    </div>
  );
}

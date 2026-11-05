import { motion } from 'framer-motion';

/**
 * Splits text into words and reveals them with a staggered rise, the
 * kinetic typography treatment used on agencidev.com style studio sites.
 * Use for big, characterful headings, not body copy.
 */
export default function KineticHeading({
  text,
  as = 'h2',
  className = '',
  wordClassName = '',
  delay = 0,
  once = true,
  ariaHidden = false,
}) {
  const words = text.split(' ');
  const Tag = motion[as] || motion.h2;

  return (
    <Tag
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
      aria-label={ariaHidden ? undefined : text}
      aria-hidden={ariaHidden ? 'true' : undefined}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            className={`inline-block ${wordClassName}`}
            variants={{
              hidden: { y: '110%' },
              show: { y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {word}{i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

import { motion } from 'framer-motion';
import { useIsFinePointer, useMousePosition } from '../../lib/useMousePosition';

// Seven labels spaced evenly around the ring. Each one is nested inside the
// ring's own rotating container so it genuinely orbits the center, and each
// carries a matching counter-rotation (same duration, opposite direction) so
// the pill text stays upright instead of spinning with the ring.
const orbitLabels = ['Design', 'Composite', 'Animate', 'Editing', 'Render', 'AR/VR', 'Visual Effects'];
const RADIUS = 190;
const SPIN_DURATION = 40;

export default function HeroDecor() {
  const isFine = useIsFinePointer();
  const { nx, ny } = useMousePosition();
  const tiltX = isFine ? ny * -6 : 0;
  const tiltY = isFine ? nx * 6 : 0;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Orbit rings + orbiting labels, parallax tilted toward the cursor */}
      <motion.div
        className="absolute right-[6%] top-1/2 h-[420px] w-[420px] -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: SPIN_DURATION, repeat: Infinity, ease: 'linear' }}
        style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 }}
      >
        <div className="absolute inset-0 rounded-full border border-gold-500/20" />
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-16 rounded-full border border-gold-500/10" />

        {orbitLabels.map((label, i) => {
          const angle = (360 / orbitLabels.length) * i;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2 h-0 w-0"
              style={{ transform: `rotate(${angle}deg) translateX(${RADIUS}px)` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: SPIN_DURATION, repeat: Infinity, ease: 'linear' }}
              >
                <span
                  className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-navy-950/70 px-3 py-1 text-xs font-medium text-mist-200 backdrop-blur-sm"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  {label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Counter-orbiting marker dot */}
      <motion.div
        className="absolute right-[6%] top-1/2 h-[420px] w-[420px] -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-500 shadow-[0_0_12px_2px_rgba(242,169,59,0.6)]" />
      </motion.div>

      {/* Film strip along the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden opacity-30">
        <div className="flex h-full w-max animate-[filmstrip_18s_linear_infinite] gap-3 px-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className="h-4 w-6 rounded-[2px] border border-mist-300/40" />
          ))}
        </div>
      </div>

      {/* Scanning line sweep */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

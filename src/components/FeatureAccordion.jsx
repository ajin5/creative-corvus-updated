import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Laptop2, CalendarClock, Briefcase, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Recognized Certification',
    text: 'Every graduate leaves with a certificate that speaks to real, tested skills, not just attendance.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Users,
    title: 'Mentor Led Learning',
    text: 'Small batches, working industry mentors, and feedback that pushes your portfolio to a hireable standard.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Laptop2,
    title: 'Industry Standard Software',
    text: 'Train on the same tools studios use every day, from Blender and Maya to Nuke and Figma.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Batch Timings',
    text: 'Weekday, weekend and evening batches so working professionals and students can both find a fit.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Briefcase,
    title: 'Placement Support',
    text: 'Portfolio reviews, mock interviews and direct introductions to our hiring partner network.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Beginner Friendly',
    text: 'No prior design experience needed. Our programs start from the fundamentals and build up.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  },
];

export default function FeatureAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex h-[420px] w-full gap-2 overflow-hidden rounded-3xl sm:gap-3">
      {features.map((f, i) => {
        const Icon = f.icon;
        const isActive = active === i;
        return (
          <motion.div
            key={f.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
              e.currentTarget.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
            }}
            animate={{ flex: isActive ? 5 : 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="feature-sheen relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-navy-800"
          >
            <img
              src={f.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              style={{ opacity: isActive ? 0.55 : 0.35 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />

            <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-sm transition-colors"
                style={{
                  borderColor: isActive ? '#f2a93b' : 'rgba(255,255,255,0.25)',
                  color: isActive ? '#f2a93b' : '#f5f5f2',
                  backgroundColor: 'rgba(11,18,32,0.55)',
                }}
              >
                <Icon size={20} />
              </div>

              <div>
                <h3
                  className={`font-display font-bold text-mist-100 transition-all ${
                    isActive ? 'text-lg sm:text-xl mb-2' : 'text-sm sm:text-base [writing-mode:vertical-rl] sm:[writing-mode:horizontal-tb]'
                  }`}
                >
                  {f.title}
                </h3>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="text-sm text-mist-100 leading-relaxed max-w-xs"
                  >
                    {f.text}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

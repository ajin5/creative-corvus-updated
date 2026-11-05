import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import TiltCard from './effects/TiltCard';

export default function CourseCard({ course, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="group h-full rounded-2xl border border-white/10 bg-navy-800 transition-colors hover:border-gold-500/50">
        <div className="flex h-full flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-mist-500">
                {course.code}
              </span>
              <span className="flex items-center gap-1 text-xs text-mist-500">
                <Clock size={12} /> {course.duration}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-mist-100 group-hover:text-gold-400 transition-colors">
              {course.title}
            </h3>
            <p className="mt-2 text-sm text-mist-500 leading-relaxed line-clamp-3">
              {course.summary}
            </p>
          </div>

          <Link
            to={`/courses/${course.slug}`}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-500 group-hover:text-gold-400"
          >
            View course details
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}

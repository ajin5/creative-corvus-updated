import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * tabs: [{ id, label, icon: LucideComponent, content: ReactNode }]
 */
export default function AnimatedTabs({ tabs, defaultTab }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <div>
      <div className="flex gap-2 border-b border-white/10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="relative flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors"
              style={{ color: isActive ? '#f2a93b' : '#8b93a3' }}
            >
              {Icon && <Icon size={16} />}
              {tab.label}
              {isActive && (
                <motion.span
                  layoutId="courseTabUnderline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-gold-500"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="relative mt-6 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab?.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

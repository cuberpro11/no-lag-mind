'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/lib/animations/scroll-reveal';

const stats = [
  { value: '3x', label: 'Faster Workflow', description: 'Average speed increase' },
  { value: '40%', label: 'Time Saved', description: 'Daily productivity gain' },
  { value: '1000+', label: 'Shortcuts', description: 'Keyboard combinations' },
  { value: '60%', label: 'Focus Increase', description: 'Reduced distractions' },
];

export function StatsSection() {

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">The Numbers</span> Don&apos;t Lie
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center glass rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-5xl md:text-6xl font-bold gradient-text mb-4"
                >
                  {stat.value}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


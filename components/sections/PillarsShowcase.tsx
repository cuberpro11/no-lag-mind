'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const supportingPillars = [
  {
    title: 'Words Per Minute',
    description: 'Master typing speed to match your thinking speed. Your hands should keep up with your mind.',
    icon: '⌨️',
  },
  {
    title: 'Keyboard Shortcuts',
    description: 'Leverage your high WPM to execute commands instantly. Build muscle memory for every tool you use.',
    icon: '⚡',
  },
  {
    title: 'Cognitive Flow',
    description: 'Maintain uninterrupted focus. Eliminate context switching and stay in the zone.',
    icon: '🧠',
  },
  {
    title: 'AI Tools',
    description: 'Amplify your capabilities with AI. Let artificial intelligence handle routine tasks while you focus on what matters.',
    icon: '🤖',
  },
];

export function PillarsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden bg-black"
    >
      {/* Morphing background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-500/10 to-black"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        {/* Top Node - No Click Principle */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
          className="flex justify-start mb-8"
        >
          <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/20 rounded-2xl px-8 py-4 border border-white/20 w-full lg:w-[75%]">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
              No Click Principle
            </h3>
          </div>
        </motion.div>

        {/* Supporting Pillars - Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 mb-16"
        >
          {supportingPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.1,
                ease: [0.25, 0.25, 0, 1],
              }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-400">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Explore Blog
            </motion.button>
          </Link>
          <Link href="/note-app">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Check Out Note App
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

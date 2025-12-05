'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Pillar {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const pillars: Pillar[] = [
  {
    title: 'Keyboard Shortcuts',
    description: 'Master keyboard shortcuts to work faster and do things in fewer keystrokes. Reduce friction and work at the speed of thought.',
    icon: '',
    color: 'from-cyan-500/30 to-cyan-500/10',
  },
  {
    title: 'Cognitive Load',
    description: 'Use minimal config and free tools to maintain focus. Let tools handle the complexity so you can think clearly.',
    icon: '',
    color: 'from-purple-500/30 to-purple-500/10',
  },
  {
    title: 'Typing Speed (WPM)',
    description: 'Improve your typing speed and accuracy. Faster typing means faster keyboard work and accelerated productivity.',
    icon: '',
    color: 'from-yellow-500/30 to-yellow-500/10',
  },
  {
    title: 'Tool Mastery',
    description: 'Learn what tools can do and practice until they become second nature. Speed comes from familiarity and muscle memory.',
    icon: '',
    color: 'from-green-500/30 to-green-500/10',
  },
  {
    title: 'AI Integration',
    description: 'Leverage AI tools to automate tedious tasks and handle heavy lifting, allowing you to focus on what actually matters.',
    icon: '',
    color: 'from-blue-500/30 to-blue-500/10',
  },
];

export function FivePillars() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            The Five Pillars of Productivity
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master each pillar to work at the speed of thought
          </p>
        </motion.div>

        {/* Pillars Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center flex-1 w-full"
            >
              {/* Pillar Graphic */}
              <div className="relative h-40 w-16 mb-6 flex flex-col items-center justify-end group">
                {/* Pillar Column */}
                <motion.div
                  whileHover={{ scaleY: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-full h-28 bg-gradient-to-b ${pillar.color} border border-white/10 rounded-sm relative overflow-hidden`}
                >
                  {/* Subtle vertical line detail */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute left-1/2 top-0 w-px h-full bg-white"></div>
                  </div>
                </motion.div>

                {/* Pillar Base */}
                <div className={`w-20 h-1.5 bg-gradient-to-b ${pillar.color} border-t border-white/20`}></div>
              </div>

              {/* Pillar Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative base line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12"
        ></motion.div>
      </div>
    </section>
  );
}

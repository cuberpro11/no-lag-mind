'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface PillarSectionProps {
  title: string;
  description: string;
  graphic?: ReactNode;
  direction?: 'left' | 'right';
  index: number;
  showNoClickBadge?: boolean;
}

export function PillarSection({ 
  title, 
  description, 
  graphic, 
  direction = 'left',
  index,
  showNoClickBadge = false
}: PillarSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.25, 0, 1] as const,
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.25, 0, 1] as const,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-black snap-start"
    >
      {/* Background gradient variation */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute inset-0 ${
            index % 2 === 0
              ? 'bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10'
              : 'bg-gradient-to-bl from-purple-500/10 via-pink-500/5 to-cyan-500/10'
          }`}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex flex-col ${
            direction === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-12 lg:gap-16`}
        >
          {/* Graphic/Image */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex-1 flex items-center justify-center"
          >
            {graphic || (
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <span className="text-6xl md:text-8xl opacity-50">🎯</span>
              </div>
            )}
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex-1 text-center lg:text-left"
          >
            {showNoClickBadge && (
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <span className="text-sm text-gray-400">🖱️</span>
                <span className="text-sm text-gray-400">Part of the No Click Principle</span>
              </div>
            )}
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


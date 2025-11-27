'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  visual?: ReactNode;
  direction?: 'left' | 'right';
  index: number;
}

export function FeatureShowcase({
  title,
  description,
  visual,
  direction = 'left',
  index,
}: FeatureShowcaseProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            direction === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-12 lg:gap-16`}
        >
          {/* Visual */}
          <motion.div
            variants={slideVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex-1 w-full"
          >
            {visual || (
              <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <span className="text-6xl md:text-8xl opacity-50">✨</span>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


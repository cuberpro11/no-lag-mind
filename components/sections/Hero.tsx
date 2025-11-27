'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CircleData {
  size: number;
  left: number;
  top: number;
  opacity: number;
  color: string;
  moveX: number;
  moveY: number;
  duration: number;
  delay: number;
}

export function Hero() {
  const [circles, setCircles] = useState<CircleData[]>([]);

  useEffect(() => {
    // Generate circle data only on client side to avoid hydration mismatch
    const circleData: CircleData[] = Array.from({ length: 25 }, (_, i) => ({
      size: 4 + Math.random() * 12,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.4 + Math.random() * 0.4,
      color: i % 2 === 0 ? '6, 182, 212' : '139, 92, 246',
      moveX: (Math.random() - 0.5) * 30,
      moveY: (Math.random() - 0.5) * 30,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setCircles(circleData);
  }, []);

  return (
    <section className="h-[90vh] flex items-center justify-center relative overflow-hidden bg-black snap-start">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      {/* Abstract Animated Circles */}
      <div className="absolute inset-0 opacity-20">
        {circles.map((circle, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              background: `rgba(${circle.color}, ${circle.opacity})`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, circle.moveX],
              y: [0, circle.moveY],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              delay: circle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight"
        >
          No Lag Mind
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Work at the speed of thought. Master your toolkit, optimize your workflow, and eliminate digital friction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
              Note App Features
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


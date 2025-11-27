'use client';

import { motion } from 'framer-motion';

export function BlogHeader() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
      >
        Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl text-gray-400"
      >
        Productivity, programming, and working at the speed of thought
      </motion.p>
    </>
  );
}


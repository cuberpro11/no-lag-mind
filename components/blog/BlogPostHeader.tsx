'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogPostHeaderProps {
  title: string;
  date: string;
}

export function BlogPostHeader({ title, date }: BlogPostHeaderProps) {
  return (
    <>
      <Link
        href="/blog"
        className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
      >
        ← Back to Blog
      </Link>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
      >
        {title}
      </motion.h1>
      <motion.time
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-gray-400 text-lg"
      >
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </motion.time>
    </>
  );
}


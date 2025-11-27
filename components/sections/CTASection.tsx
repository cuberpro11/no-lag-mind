'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/lib/animations/scroll-reveal';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="fade">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass rounded-3xl p-12 md:p-16 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work at the <span className="gradient-text">Speed of Thought</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Start your journey today. Master keyboard shortcuts, build muscle memory,
              and leverage AI to transform your productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Explore the Blog
                </motion.button>
              </Link>
              <Link href="/note-app">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass text-white font-semibold rounded-lg border border-white/20 hover:border-cyan-500/50 transition-all w-full sm:w-auto"
                >
                  Check Out Note App
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}


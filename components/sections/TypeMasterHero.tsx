'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function TypeMasterHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-orange-500/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Type at the
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Speed of Thought
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Interactive course to reach top 1% typing speed with adaptive learning. Go from 70 WPM to 150 WPM while building the right muscle memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/typemaster/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-xl transition-all w-full sm:w-auto text-lg"
            >
              Take Course
            </motion.button>
          </Link>
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-orange-500/50 hover:bg-white/5 transition-all w-full sm:w-auto text-lg"
            >
              Read My Blog
            </motion.button>
          </Link>
        </motion.div>

        {/* App Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-8 backdrop-blur-sm">
            <div className="bg-black rounded-lg p-6 border border-orange-500/30">
              <div className="space-y-4">
                <div className="text-orange-400 font-semibold mb-4">Your Typing Performance</div>
                
                {/* WPM Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Speed (WPM)</span>
                    <span className="text-orange-400 font-bold">70 → 150</span>
                  </div>
                  <div className="h-3 bg-black rounded-full border border-orange-500/30 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-[47%]"></div>
                  </div>
                </div>

                {/* Accuracy Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Accuracy</span>
                    <span className="text-red-400 font-bold">84% → 99%</span>
                  </div>
                  <div className="h-3 bg-black rounded-full border border-red-500/30 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[85%]"></div>
                  </div>
                </div>

                {/* Muscle Memory */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Muscle Memory</span>
                    <span className="text-orange-400 font-bold">Building...</span>
                  </div>
                  <div className="h-3 bg-black rounded-full border border-orange-500/30 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500/50 to-red-500/50 w-3/5"></div>
                  </div>
                </div>

                {/* Adaptive Learning */}
                <div className="mt-4 pt-3 border-t border-orange-500/30">
                  <div className="text-xs text-gray-400 mb-2">🎯 Adaptive Learning Active</div>
                  <div className="text-xs text-gray-500">Common mistakes identified: 3</div>
                  <div className="text-xs text-gray-500">Lessons customized to your needs</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


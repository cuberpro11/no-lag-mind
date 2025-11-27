'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function NoteAppHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16">
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Your Second Brain,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            At the Speed of Thought
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          A native note-taking app built for power users. Wikilinks, backlinks, custom properties, and everything you need to think faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/blog/sixth_post">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto text-lg"
            >
              Philosophy Behind the App
            </motion.button>
          </Link>
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-white/5 transition-all w-full sm:w-auto text-lg"
            >
              Checkout my blog
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
            <div className="bg-black rounded-lg p-6 border border-white/10">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="font-mono text-sm text-gray-400 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">[[</span>
                  <span className="text-white">Project Ideas</span>
                  <span className="text-cyan-400">]]</span>
                  <span className="text-gray-500 ml-2">← Wikilink</span>
                </div>
                <div className="text-gray-500">- Backlinks: 3 notes</div>
                <div className="text-gray-500">- Tags: #productivity #ideas</div>
                <div className="mt-4 text-white">
                  Write at the speed of thought with slash commands:
                </div>
                <div className="text-gray-400">/heading /todo /code</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


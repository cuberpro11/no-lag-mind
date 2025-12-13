'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function FlowFilesHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-emerald-500/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)',
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
          Work at
          <br />
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Lightning Speed
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          The fastest file manager built to integrate seamlessly with your workflow. Manipulate files and folders at lightning speed while staying connected to your code editors and terminals.
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
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-emerald-500/50 hover:bg-white/5 transition-all w-full sm:w-auto text-lg"
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
            <div className="bg-black rounded-lg p-6 border border-white/10">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-gray-400 mb-3">FlowFiles/</div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>⚡</span>
                  <span>📁 projects/</span>
                  <span className="text-xs text-gray-500 ml-auto">← 0.001s</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 ml-4">
                  <span>⚡</span>
                  <span>📄 app.tsx</span>
                  <span className="text-xs text-teal-400 ml-2">🔗 VS Code</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>⚡</span>
                  <span>📁 scripts/</span>
                  <span className="text-xs text-teal-400 ml-auto">🔗 Terminal</span>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-500/30 text-gray-400">
                  <div className="text-xs">⌨️ Custom shortcuts: ⌘+Shift+F</div>
                  <div className="text-xs">🎯 One-step workflows enabled</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Footer } from '@/components/Footer';

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

export default function Home() {
  const [circles, setCircles] = useState<CircleData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
    <main className="bg-black">
      {/* ===== HERO ===== */}
      <section className="h-[92vh] flex items-center justify-center relative overflow-hidden bg-black snap-start">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        {/* Abstract Animated Circles */}
        {mounted && (
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
        )}

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            No Lag Mind
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Learn to work at the speed of thought.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Explore the Blog →
              </motion.button>
            </Link>
            <Link href="/note-app">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white/15 text-white font-semibold rounded-lg hover:border-cyan-500/40 hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                Try the Note App →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== WHY THIS EXISTS ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                The philosophy
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Most setups add friction with too many clicks, too many menus, and a messy interface. Here, at No Lag Mind, I teach you how to setup your tools and workflows in a way that empowers you and keeps you in the flow state; your laptop will feel like an extension of you, with low cognitive load and tools that work with you instead of against you.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">⚡ Be instant</div>
                <p className="text-gray-400">Muscle‑memory workflows that feel like thought → action.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">🎯 Stay in flow</div>
                <p className="text-gray-400">Fewer decisions, fewer windows, fewer detours.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl mb-2">🧭 Clarity first</div>
                <p className="text-gray-400">Know your next move at a glance. The system gets out of the way.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT YOU'LL FIND ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What you'll find here</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A tight mix of guides, verified workflows, and small tools—each designed to remove one more obstacle
              between you and done.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">Guides that actually ship</h3>
              <p className="text-gray-400">Clear, step‑by‑step posts on macOS, AI, and speed tactics.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Tiny tools with big impact</h3>
              <p className="text-gray-400">Lightweight utilities that remove friction you feel every day.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-2">Verified workflows</h3>
              <p className="text-gray-400">Battle‑tested sequences I use daily to make computers feel instant.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CHOOSE YOUR NEXT CLICK ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose your next click</h2>
            <p className="text-lg text-gray-400">Short, scannable, and mobile‑friendly—jump in anywhere.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog" className="group">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-white/10 transition-all h-full flex flex-col">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-semibold text-white mb-2">Start with the Blog</h3>
                <p className="text-gray-400 mb-4">Guides, shortcuts, and AI how‑tos you can use today.</p>
                <span className="mt-auto text-cyan-400 font-semibold">Read articles →</span>
              </div>
            </Link>

            <Link href="/note-app" className="group">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-purple-500/30 group-hover:bg-white/10 transition-all h-full flex flex-col">
                <div className="text-4xl mb-3">🗒️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning‑fast Notes</h3>
                <p className="text-gray-400 mb-4">Capture ideas instantly and stay in flow.</p>
                <span className="mt-auto text-purple-400 font-semibold">Open the app →</span>
              </div>
            </Link>

            <Link href="/course" className="group">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-white/10 transition-all h-full flex flex-col">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Work 10× Faster</h3>
                <p className="text-gray-400 mb-4">Master macOS and build muscle‑memory workflows.</p>
                <span className="mt-auto text-blue-400 font-semibold">See the course →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S NEXT ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <div className="text-6xl mx-auto mb-6 animate-pulse">✨</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">What's next</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              More articles, utilities, and a structured course are on the way. If something would help you right now,
              let me know—I'll build it.
            </p>
            <Link href="/coming-soon">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
              >
                See the roadmap →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

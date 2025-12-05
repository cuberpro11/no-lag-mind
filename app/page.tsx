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
      {/* ===== HERO SECTION ===== */}
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
            className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            No Lag Mind
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            No Lag Mind helps you cut digital friction. Learn faster, use tools better, and leverage AI to get more done.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            <p>Explore practical guides, free tools, and simple workflows you can apply right away.</p>
          </motion.div>

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
                Explore the Blog →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                A hub for <span className="gradient-text">skills and tools</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-white mb-2">Deep insights</h3>
                <p className="text-gray-400">Clear, actionable posts on productivity, tools, and learning.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10"
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Learn the apps</h3>
                <p className="text-gray-400">Lessons to use Raycast, Karabiner‑Elements, Aerospace, Homerow, Gemini, and more—faster and better.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">Always improving</h3>
                <p className="text-gray-400">New content and updates as I build in public.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== BLOG (PRIMARY) ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="text-6xl mx-auto mb-6">📖</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Start with the blog</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              The core of No Lag Mind: practical guides, shortcuts, tool breakdowns, and AI how‑tos. Learn skills you can use today—with mostly free tools.
            </p>
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all"
              >
                Explore the Blog →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== NOTE APP SECTION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="text-6xl mx-auto mb-6">📄</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Lightning‑fast note app</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Capture ideas instantly. Simple, fast, and free. Organize your thoughts and build your knowledge base without friction.
            </p>
            <Link href="/note-app">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-xl transition-all"
              >
                Learn More →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== PRODUCTS (AFFORDABLE) ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Practical products, fair prices</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">Lightweight tools that save time and pay for themselves quickly.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10"
            >
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold text-white mb-2">Smarter and Faster Calculator</h3>
              <p className="text-gray-400">Advanced calculations with speed and simplicity.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">Vibe Coding Prompt Generator</h3>
              <p className="text-gray-400">Plan your project and generate AI prompts for consistent results.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/10"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-2">Use Mac 10× Faster: Productivity Course</h3>
              <p className="text-gray-400">Learn keyboard shortcuts, automation, and work at the speed of thought.</p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link href="/coming-soon" className="text-cyan-400 font-semibold hover:underline">See roadmap and release timeline →</Link>
          </div>
        </div>
      </section>

      {/* ===== COMING SOON SECTION ===== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="text-6xl mx-auto mb-6 animate-pulse">✨</div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">What's next</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              More articles, utilities, and a structured course are on the way. Follow along for updates.
            </p>
            <Link href="/coming-soon">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
              >
                What's Coming Next →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

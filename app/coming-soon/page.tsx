'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function ComingSoonPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [calcRef, calcInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [promptRef, promptInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [courseRef, courseInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 relative overflow-hidden bg-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Coming Soon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Exciting new tools to help you work at the speed of thought
          </motion.p>
        </div>
      </section>

      {/* Use Mac 10× Faster: Productivity Course */}
      <section
        ref={courseRef}
        className="py-32 relative overflow-hidden bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={courseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/10 p-8">
                <div className="space-y-4">
                  <div className="p-4 bg-black rounded-lg border border-cyan-500/30">
                    <div className="text-cyan-400 font-semibold mb-2">1. Keyboard Shortcuts</div>
                    <p className="text-sm text-gray-300">Work faster and do things in less keystrokes or clicks.</p>
                  </div>
                  <div className="p-4 bg-black rounded-lg border border-purple-500/30">
                    <div className="text-purple-400 font-semibold mb-2">2. Cognitive Load</div>
                    <p className="text-sm text-gray-300">Learn to use tools really fast without thinking—minimal config, maximum flow.</p>
                  </div>
                  <div className="p-4 bg-black rounded-lg border border-blue-500/30">
                    <div className="text-blue-400 font-semibold mb-2">3. WPM ‑ Typing Speed</div>
                    <p className="text-sm text-gray-300">Faster typing means faster keyboard work and faster overall productivity.</p>
                  </div>
                  <div className="p-4 bg-black rounded-lg border border-green-500/30">
                    <div className="text-green-400 font-semibold mb-2">4. AI Integration</div>
                    <p className="text-sm text-gray-300">Leverage AI for tedious tasks, heavy lifting, and accelerated learning.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={courseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Use Mac 10× Faster: Productivity Course</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                A focused course that teaches you how to type faster, use your Mac faster, and work at the speed of thought—built on the five pillars of productivity.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span><span>Typing acceleration: accuracy and WPM that keep up with your ideas</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span><span>Mac mastery: shortcuts, automation, and frictionless navigation</span></li>
                <li className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span><span>Operational system to maintain cognitive flow</span></li>
              </ul>
              <div className="mt-6 inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 text-sm font-semibold">Coming Soon</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Natural Language Calculator */}
      <section
        ref={calcRef}
        className="py-32 relative overflow-hidden bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={calcInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-white/10 p-8">
                <div className="bg-black rounded-lg p-6 border border-white/10">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-gray-400">Natural Language Calculator</div>
                    <div className="text-white">
                      <span className="text-cyan-400">Input:</span> &quot;What&apos;s 15% of $250 plus tax?&quot;
                    </div>
                    <div className="text-gray-500">→</div>
                    <div className="text-white">
                      <span className="text-cyan-400">Result:</span> $37.50 + tax
                    </div>
                    <div className="text-gray-500 mt-4">⚡ Instant calculation</div>
                    <div className="text-gray-500">🚀 Faster than traditional calculators</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={calcInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Natural Language Calculator
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Calculate anything using natural language. No need to remember formulas or syntax—just ask in plain English and get instant results.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Faster than traditional calculators. Type your question naturally and watch it solve complex calculations instantly. Perfect for quick math, percentages, conversions, and more.
              </p>
              <div className="mt-6 inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 text-sm font-semibold">
                Coming Soon
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prompt Generator for Vibe Coding */}
      <section
        ref={promptRef}
        className="py-32 relative overflow-hidden bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={promptInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 p-8">
                <div className="bg-black rounded-lg p-6 border border-white/10">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="font-mono text-sm space-y-3">
                    <div className="text-gray-400">Vibe Coding Prompt Generator</div>
                    <div className="text-white">
                      <span className="text-purple-400">Project:</span> Build a todo app
                    </div>
                    <div className="text-gray-500">→</div>
                    <div className="text-cyan-400">Plan Generated:</div>
                    <div className="text-gray-300 ml-4">1. Setup project structure</div>
                    <div className="text-gray-300 ml-4">2. Create UI components</div>
                    <div className="text-gray-300 ml-4">3. Add state management</div>
                    <div className="text-gray-500 mt-4">→</div>
                    <div className="text-cyan-400">Prompts Generated:</div>
                    <div className="text-gray-300 ml-4">• &quot;Create a Next.js project...&quot;</div>
                    <div className="text-gray-300 ml-4">• &quot;Build a todo list component...&quot;</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={promptInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vibe Coding Prompt Generator
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Get the perfect plan and prompts for your vibe coding sessions. Tell it what you want to build, and it will generate the optimal strategy and all the prompts you need.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                The generator analyzes your project requirements and creates a step-by-step plan tailored to get the best results from your vibe coding tool. Then it automatically generates all the prompts you&apos;ll need, in the right order, to build your project efficiently.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Intelligent plan generation based on your project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Automatically generates all prompts in sequence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Optimized for maximum efficiency with your vibe coding tool</span>
                </li>
              </ul>
              <div className="mt-6 inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-400 text-sm font-semibold">
                Coming Soon
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to be notified when these launch?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Follow along as I build these tools to help you work faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Read My Blog
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-white/5 transition-all w-full sm:w-auto"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


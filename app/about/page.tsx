"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="bg-black min-h-screen">
      {/* Simple Title Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 relative overflow-hidden bg-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            About Me
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section
        ref={contentRef}
        className="pb-32 relative overflow-hidden bg-black"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who I Am
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I love to make things and learn new things. I started this blog
                to benefit people with high-quality information in the best way
                possible.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Everything you read here comes from my own experience and
                research testing and refining high‑speed workflows. I&apos;m
                passionate about sharing what I learn and helping others work
                more efficiently, whether that&apos;s through productivity
                techniques, keyboard shortcuts, AI workflows, or building tools
                that make life easier.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What I Do
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Build Products
                    </h3>
                    <p className="text-gray-300">
                      I create tools and applications that help people work
                      faster and smarter.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✍️</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Write & Teach
                    </h3>
                    <p className="text-gray-300">
                      I share knowledge through blog posts, tutorials, and
                      guides on productivity and workflow optimization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Optimize Workflows
                    </h3>
                    <p className="text-gray-300">
                      I help others master keyboard shortcuts, AI tools, and
                      techniques to eliminate digital friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My Philosophy
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I believe that with the right tools, techniques, and mindset,
                anyone can work at the speed of thought. The key is building
                muscle memory, eliminating unnecessary actions, and leveraging
                technology to amplify your capabilities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every click saved, every shortcut mastered, and every workflow
                optimized brings you closer to seamless productivity where your
                tools become an extension of your mind.
              </p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Back to Home
                </motion.button>
              </Link>
              <Link href="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-white/5 transition-all w-full sm:w-auto"
                >
                  Read My Blog
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

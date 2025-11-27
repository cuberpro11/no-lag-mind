'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/lib/animations/scroll-reveal';
import Link from 'next/link';

const features = [
  {
    title: 'Keyboard Shortcut Library',
    description: 'Comprehensive database of shortcuts for all major apps and tools. Search, learn, and master.',
    icon: '⌨️',
    link: '/blog',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'AI Productivity Guides',
    description: 'Learn to leverage ChatGPT, Claude, and other AI tools to amplify your capabilities.',
    icon: '🤖',
    link: '/blog',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Second Brain System',
    description: 'Build your personal knowledge management system with our note-taking app and strategies.',
    icon: '🧠',
    link: '/note-app',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Muscle Memory Training',
    description: 'Interactive exercises and techniques to build automatic responses through repetition.',
    icon: '💪',
    link: '/blog',
    color: 'from-orange-500 to-red-500',
  },
];

export function FeaturesShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Tools, techniques, and strategies to work at the speed of thought
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} direction="up" delay={index * 0.1}>
              <Link href={feature.link}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all h-full group cursor-pointer"
                >
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Explore →
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


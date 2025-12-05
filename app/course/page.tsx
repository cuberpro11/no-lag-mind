'use client';

import { CourseHero } from '@/components/sections/CourseHero';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { FeatureGroup } from '@/components/sections/FeatureGroup';
import { FivePillars } from '@/components/sections/FivePillars';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CoursePage() {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="bg-black">
      <CourseHero />

      {/* The Five Pillars */}
      <FivePillars />

      {/* Operating System Mastery */}
      <FeatureShowcase
        title="Master Your Operating System"
        description="Learn how to take advantage of your Mac and work 10 times faster. We cover everything from keyboard remapping with Karabiner Elements to app launching with Raycast, building a frictionless workflow that keeps you in flow."
        direction="left"
        visual={
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">macOS Productivity Stack</div>
            <div className="space-y-3 text-white">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">▸</span>
                <span>Raycast - Lightning fast app launcher</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">▸</span>
                <span>Karabiner Elements - Remap Caps Lock to Hyper</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">▸</span>
                <span>Keyboard Shortcuts - Custom workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">▸</span>
                <span>Hyper key - Trigger powerful shortcuts</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-gray-400">
                Result: Work without reaching for your mouse
              </div>
            </div>
          </div>
        }
      />

      {/* Verified Workflows */}
      <FeatureShowcase
        title="Verified Workflows for Speed"
        description="Follow proven workflows that I use daily. Learn the exact sequences and shortcuts that let you do things at the speed of thought. Every technique is verified for maximum efficiency and minimal cognitive load."
        direction="right"
        visual={
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Workflow: Open App & Search</div>
            <div className="space-y-2 text-white">
              <div className="text-gray-500">Cmd + Space</div>
              <div className="text-cyan-400">→ Raycast opens instantly</div>
              <div className="text-gray-500 mt-2">Type app name</div>
              <div className="text-cyan-400">→ Fuzzy search finds it</div>
              <div className="text-gray-500 mt-2">Return</div>
              <div className="text-cyan-400">→ App launches immediately</div>
              <div className="mt-4 pt-4 border-t border-white/10 text-gray-400">
                ⏱️ Under 1 second, zero mouse movement
              </div>
            </div>
          </div>
        }
      />

      {/* Hyper Key Remapping */}
      <FeatureShowcase
        title="Key Remapping with Karabiner Elements"
        description="Remap Caps Lock to Hyper and unlock powerful combinations. Learn how to use Hyper as a modifier for shortcuts in Keyboard Shortcuts and other apps. Eliminate keyboard conflicts and create intuitive, lightning-fast workflows."
        direction="left"
        visual={
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Key Remapping</div>
            <div className="space-y-3 text-white">
              <div className="flex justify-between">
                <span className="text-gray-400">Caps Lock</span>
                <span className="text-cyan-400">→ Hyper</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hyper + B</span>
                <span className="text-cyan-400">→ Open browser</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hyper + E</span>
                <span className="text-cyan-400">→ Open editor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hyper + H/L</span>
                <span className="text-cyan-400">→ Window navigation</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-gray-400">
                ✓ Zero conflicts with existing shortcuts
              </div>
            </div>
          </div>
        }
      />

      {/* Window Management */}
      <FeatureShowcase
        title="Master Window Management"
        description="Use AeroSpace or your preferred window manager to automatically manage new windows and tabs with your keyboard. Learn to use the Option key as your hub for all window management shortcuts and commands. Navigate, resize, and organize windows without touching your mouse."
        direction="right"
        visual={
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Window Management</div>
            <div className="space-y-2 text-white">
              <div className="text-gray-500">Option + H</div>
              <div className="text-cyan-400">→ Focus left window</div>
              <div className="text-gray-500 mt-2">Option + L</div>
              <div className="text-cyan-400">→ Focus right window</div>
              <div className="text-gray-500 mt-2">Option + K</div>
              <div className="text-cyan-400">→ Focus above window</div>
              <div className="text-gray-500 mt-2">Option + J</div>
              <div className="text-cyan-400">→ Focus below window</div>
              <div className="mt-4 pt-4 border-t border-white/10 text-gray-400">
                🎯 Keyboard-driven workspace organization
              </div>
            </div>
          </div>
        }
      />

      {/* Course Structure */}
      <FeatureGroup
        title="What You'll Learn"
        subtitle="Comprehensive training across all pillars of productivity"
        features={[
          {
            title: 'macOS Fundamentals',
            description: 'Understand the tools available in macOS. Learn Raycast, Karabiner Elements, Keyboard Shortcuts, and more. Build your foundation.',
            icon: '🏗️',
          },
          {
            title: 'Keyboard Mastery',
            description: 'Master key remapping, custom shortcuts, and keyboard-driven workflows. Never use your mouse again unless you want to.',
            icon: '🎯',
          },
          {
            title: 'Speed Training',
            description: 'Improve your typing speed and accuracy. Learn techniques to type faster and build muscle memory for common tasks.',
            icon: '🚀',
          },
          {
            title: 'AI Tool Integration',
            description: 'Incorporate AI tools into your workflows. Automate tedious tasks and focus your energy on high-value work.',
            icon: '💡',
          },
          {
            title: 'Workflow Optimization',
            description: 'Combine multiple tools into seamless workflows. Reduce cognitive load and maintain flow state throughout your day.',
            icon: '⚙️',
          },
          {
            title: 'Verified Patterns',
            description: 'Learn proven workflows and patterns I use daily. Every technique is battle-tested for real-world productivity.',
            icon: '✅',
          },
        ]}
      />

      {/* Results Section */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              The Results
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              By mastering these tools and workflows, you'll experience transformative productivity gains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">10×</div>
              <h3 className="text-2xl font-bold text-white mb-3">Faster Workflow</h3>
              <p className="text-gray-300 leading-relaxed">
                Work at the speed of thought with minimal cognitive load. Accomplish more in less time by eliminating friction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">Perfect Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Maintain cognitive flow throughout your day. Simple config and intuitive workflows keep distractions at bay.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Effortless Speed</h3>
              <p className="text-gray-300 leading-relaxed">
                Build muscle memory for everything. Your tools become extensions of your thoughts, requiring minimal conscious effort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Automation</h3>
              <p className="text-gray-300 leading-relaxed">
                Automate the tedious parts of your work. Focus your mental energy on what actually matters—creativity and problem-solving.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-32 relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Work 10× Faster?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Learn all the tools and verified workflows I use daily. Master your operating system and work at the speed of thought.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/coming-soon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto text-lg"
              >
                Enroll Now
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-white/5 transition-all w-full sm:w-auto text-lg"
              >
                Back Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

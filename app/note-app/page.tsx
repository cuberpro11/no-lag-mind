'use client';

import { NoteAppHero } from '@/components/sections/NoteAppHero';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { FeatureGroup } from '@/components/sections/FeatureGroup';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function NoteAppPage() {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="bg-black">
      <NoteAppHero />

      {/* Wikilinks & Backlinks */}
      <FeatureShowcase
        title="Wikilinks & Backlinks"
        description="Create bidirectional links between notes with [[Note Name]] syntax. Every link automatically creates a backlink, building a web of connected knowledge. Search backlinks instantly to see how ideas connect across your vault."
        direction="left"
        index={0}
        visual={
          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Project Ideas.md</div>
            <div className="space-y-2 text-white">
              <div>I'm working on a new <span className="text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">[[Product Launch]]</span> strategy.</div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-gray-400 text-xs mb-2">Backlinks (3):</div>
                <div className="space-y-1">
                  <div className="text-cyan-400">← Marketing Plan</div>
                  <div className="text-cyan-400">← Q4 Goals</div>
                  <div className="text-cyan-400">← Team Notes</div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Slash Commands */}
      <FeatureShowcase
        title="Slash Commands"
        description="Type / to instantly insert headings, todos, code blocks, and more. No need to remember markdown syntax—just type and go. Work at the speed of thought without breaking your flow."
        direction="right"
        index={1}
        visual={
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Quick Note.md</div>
            <div className="space-y-2 text-white">
              <div className="text-gray-500">/heading</div>
              <div className="text-cyan-400"># Meeting Notes</div>
              <div className="mt-4 text-gray-500">/todo</div>
              <div className="text-cyan-400">- [ ] Review proposal</div>
              <div className="text-gray-500">/code</div>
              <div className="text-cyan-400">```javascript</div>
            </div>
          </div>
        }
      />

      {/* Custom Properties */}
      <FeatureShowcase
        title="Custom Properties System"
        description="Add metadata to your notes with custom properties. Use text, numbers, booleans, dates, tags, and lists with autocomplete. Organize and filter your knowledge like never before."
        direction="left"
        index={2}
        visual={
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-white/10 p-6">
            <div className="text-gray-400 mb-4 text-sm font-mono">Properties Panel</div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-cyan-400">In Progress</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Priority:</span>
                <span className="text-cyan-400">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tags:</span>
                <span className="text-cyan-400">#productivity #ideas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Due Date:</span>
                <span className="text-cyan-400">2024-12-31</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Organization Features */}
      <FeatureGroup
        title="Organization & Structure"
        subtitle="Keep your knowledge organized and accessible"
        features={[
          {
            title: 'Vault System',
            description: 'Organize notes in separate vaults. Keep work and personal notes separate, or create vaults for different projects.',
            icon: '📁',
          },
          {
            title: 'Pin Notes',
            description: 'Pin important notes for quick access. Your most-used notes are always one click away.',
            icon: '📌',
          },
          {
            title: 'Multiple Home Screens',
            description: 'Choose your view: grid, list, recent cards, or last note. Customize your workspace to match your workflow.',
            icon: '🏠',
          },
        ]}
      />

      {/* Editor Experience */}
      <FeatureGroup
        title="Editor Experience"
        subtitle="Write and edit with powerful tools"
        features={[
          {
            title: 'WYSIWYG Markdown',
            description: 'Real-time preview with tables, task lists, and formatting. See exactly what you\'ll get as you type.',
            icon: '✍️',
          },
          {
            title: 'Note History',
            description: 'Back/forward navigation that remembers your cursor position per note. Never lose your place.',
            icon: '⏱️',
          },
          {
            title: 'Properties Panel',
            description: 'Manage metadata with autocomplete for property names, tags, and list items. Organize effortlessly.',
            icon: '⚙️',
          },
        ]}
      />

      {/* Power User Features */}
      <FeatureGroup
        title="Power User Features"
        subtitle="Built for speed and efficiency"
        features={[
          {
            title: 'Tag Filtering',
            description: 'Search with tag: syntax and multi-tag support. Find exactly what you need instantly.',
            icon: '🏷️',
          },
          {
            title: 'Smart Search',
            description: 'Fuzzy matching with alias support. Find notes even when you can\'t remember the exact name.',
            icon: '🔍',
          },
          {
            title: 'Auto-save',
            description: 'Saves automatically as you type. Never lose your work—focus on thinking, not saving.',
            icon: '💾',
          },
        ]}
      />

      {/* Technical Excellence */}
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
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for speed, efficiency, and customization
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
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Native Desktop App</h3>
              <p className="text-gray-300 leading-relaxed">
                Powered by Tauri (Rust backend) for incredible speed and efficiency. No Electron bloat—just pure performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Customizable UI</h3>
              <p className="text-gray-300 leading-relaxed">
                Adjust zoom, editor padding, and taskbar position. Make the app work exactly how you want it to.
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
              Ready to Work at the Speed of Thought?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Learn about the philosophy and vision behind the app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/blog/sixth_post"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all w-full sm:w-auto text-lg"
              >
                Philosophy Behind the App
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


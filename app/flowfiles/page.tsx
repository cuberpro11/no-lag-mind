'use client';

import { FlowFilesHero } from '@/components/sections/FlowFilesHero';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { FeatureGroup } from '@/components/sections/FeatureGroup';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FlowFilesPage() {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="bg-black">
      <FlowFilesHero />

      {/* Lightning-Fast Operations */}
      <FeatureShowcase
        title="Lightning-Fast Operations"
        description="Manipulate files and folders at incredible speed. Every action is optimized for performance, from simple moves to complex batch operations. Work faster than you ever thought possible."
        direction="left"
        visual={
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Performance Metrics</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-emerald-500/30">
                <span className="text-white">Move 1000 files</span>
                <span className="text-emerald-400 font-bold">0.3s ⚡</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-emerald-500/30">
                <span className="text-white">Search 10K files</span>
                <span className="text-emerald-400 font-bold">0.1s ⚡</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-black rounded-lg border border-emerald-500/30">
                <span className="text-white">Batch rename</span>
                <span className="text-emerald-400 font-bold">Instant ⚡</span>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-500/30 text-center">
                <div className="text-teal-400 text-xs">10× faster than Finder</div>
              </div>
            </div>
          </div>
        }
      />

      {/* Seamless Integration */}
      <FeatureShowcase
        title="Seamless Integration"
        description="Connect directly with your code editors and terminals. Open files in VS Code, run scripts in Terminal, or execute custom commands—all without leaving FlowFiles. Your entire workflow, unified."
        direction="right"
        visual={
          <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl border border-white/10 p-6">
            <div className="text-gray-400 mb-4 text-sm font-mono">Integration Hub</div>
            <div className="space-y-3">
              <div className="p-4 bg-black rounded-lg border border-teal-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">💻</div>
                  <div className="text-teal-400 font-semibold">VS Code</div>
                </div>
                <p className="text-sm text-gray-300">Open files and folders instantly</p>
              </div>
              <div className="p-4 bg-black rounded-lg border border-teal-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">⌨️</div>
                  <div className="text-teal-400 font-semibold">Terminal</div>
                </div>
                <p className="text-sm text-gray-300">Run commands in current directory</p>
              </div>
              <div className="p-4 bg-black rounded-lg border border-teal-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl">🔧</div>
                  <div className="text-teal-400 font-semibold">Custom Apps</div>
                </div>
                <p className="text-sm text-gray-300">Configure your own integrations</p>
              </div>
            </div>
          </div>
        }
      />

      {/* Extreme Customization */}
      <FeatureShowcase
        title="Extreme Customization"
        description="Work your way. Use the mouse, keyboard shortcuts, or both. Create custom workflows that execute complex operations in a single step. Every aspect is customizable to match your needs."
        direction="left"
        visual={
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Custom Shortcuts</div>
            <div className="space-y-2 text-white">
              <div className="flex justify-between p-2 bg-black rounded border border-emerald-500/20">
                <span className="text-gray-300">Quick Move</span>
                <span className="text-emerald-400">⌘ + M</span>
              </div>
              <div className="flex justify-between p-2 bg-black rounded border border-emerald-500/20">
                <span className="text-gray-300">Batch Rename</span>
                <span className="text-emerald-400">⌘ + R</span>
              </div>
              <div className="flex justify-between p-2 bg-black rounded border border-emerald-500/20">
                <span className="text-gray-300">Open in VS Code</span>
                <span className="text-emerald-400">⌘ + E</span>
              </div>
              <div className="flex justify-between p-2 bg-black rounded border border-emerald-500/20">
                <span className="text-gray-300">Run in Terminal</span>
                <span className="text-emerald-400">⌘ + T</span>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-500/30">
                <div className="text-xs text-gray-400 text-center">+ 50 more customizable shortcuts</div>
              </div>
            </div>
          </div>
        }
      />

      {/* Workflow Features */}
      <FeatureGroup
        title="Workflow Features"
        subtitle="Designed for maximum productivity"
        features={[
          {
            title: 'One-Step Operations',
            description: 'Execute complex workflows with a single command. Move, rename, and organize files in one action.',
            icon: '⚡',
          },
          {
            title: 'Quick Actions',
            description: 'Access frequently used operations instantly. No more digging through menus.',
            icon: '🎯',
          },
          {
            title: 'Smart Navigation',
            description: 'Jump to any directory with fuzzy search. Navigate your entire filesystem at lightning speed.',
            icon: '🧭',
          },
        ]}
      />

      {/* Power User Tools */}
      <FeatureGroup
        title="Power User Tools"
        subtitle="Advanced features for professionals"
        features={[
          {
            title: 'Custom Shortcuts',
            description: 'Create keyboard shortcuts for any action. Work without touching the mouse.',
            icon: '⌨️',
          },
          {
            title: 'Batch Operations',
            description: 'Process hundreds of files at once. Rename, move, or modify in bulk with ease.',
            icon: '📦',
          },
          {
            title: 'Automation',
            description: 'Set up automated workflows that run on triggers. Let FlowFiles handle repetitive tasks.',
            icon: '🤖',
          },
        ]}
      />

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-32 relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-500/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Work at Lightning Speed?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              FlowFiles is coming soon. Check out all our upcoming projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/coming-soon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg shadow-emerald-500/50 hover:shadow-xl transition-all w-full sm:w-auto text-lg"
              >
                View All Coming Soon Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


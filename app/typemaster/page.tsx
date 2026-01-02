'use client';

import { TypeMasterHero } from '@/components/sections/TypeMasterHero';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { FeatureGroup } from '@/components/sections/FeatureGroup';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TypeMasterPage() {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="bg-black">
      <TypeMasterHero />

      {/* Adaptive Learning */}
      <FeatureShowcase
        title="Adaptive Learning"
        description="The course learns your mistakes and customizes lessons to match your needs. Every exercise adapts to your skill level, focusing on the keys and patterns where you need the most practice."
        direction="left"
        visual={
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 p-6">
            <div className="text-gray-400 mb-4 text-sm font-mono">Learning Algorithm</div>
            <div className="space-y-3">
              <div className="p-4 bg-black rounded-lg border border-orange-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-400 font-semibold">Analyzing Mistakes</span>
                  <span className="text-xs text-gray-500">🎯</span>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>• Common errors: &apos;e&apos; → &apos;r&apos; (12×)</div>
                  <div>• Slow keys: &apos;p&apos;, &apos;q&apos; (avg +0.2s)</div>
                  <div>• Weak finger: right pinky</div>
                </div>
              </div>
              <div className="p-4 bg-black rounded-lg border border-red-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-400 font-semibold">Customizing Lessons</span>
                  <span className="text-xs text-gray-500">📚</span>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>• Focus: &apos;e&apos;/&apos;r&apos; combinations</div>
                  <div>• Extra practice: pinky strength</div>
                  <div>• Speed drills: &apos;p&apos;, &apos;q&apos; keys</div>
                </div>
              </div>
              <div className="mt-3 text-center text-xs text-gray-400">
                Lessons adapt in real-time
              </div>
            </div>
          </div>
        }
      />

      {/* Speed & Accuracy */}
      <FeatureShowcase
        title="Speed & Accuracy"
        description="Go from 70 WPM to 150 WPM while improving accuracy from 84% to 99%. The course balances speed and precision, ensuring you type faster without sacrificing correctness."
        direction="right"
        visual={
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-white/10 p-6 font-mono text-sm">
            <div className="text-gray-400 mb-4">Progress Dashboard</div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Current Speed</span>
                  <span className="text-orange-400 font-bold">95 WPM</span>
                </div>
                <div className="h-2 bg-black rounded-full border border-orange-500/30 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-[63%]"></div>
                </div>
                <div className="text-xs text-gray-500">Target: 150 WPM</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Current Accuracy</span>
                  <span className="text-red-400 font-bold">92%</span>
                </div>
                <div className="h-2 bg-black rounded-full border border-red-500/30 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[92%]"></div>
                </div>
                <div className="text-xs text-gray-500">Target: 99%</div>
              </div>

              <div className="pt-3 border-t border-orange-500/30">
                <div className="text-xs text-gray-400">Improvement Rate</div>
                <div className="text-orange-400 font-bold">+5 WPM per week 📈</div>
              </div>
            </div>
          </div>
        }
      />

      {/* Muscle Memory Training */}
      <FeatureShowcase
        title="Muscle Memory Training"
        description="Build correct typing habits through targeted exercises. The course focuses on proper finger placement and movement patterns, ensuring you develop muscle memory that lasts."
        direction="left"
        visual={
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 p-6">
            <div className="text-gray-400 mb-4 text-sm font-mono">Training Focus</div>
            <div className="space-y-3">
              <div className="p-3 bg-black rounded-lg border border-orange-500/30">
                <div className="text-orange-400 font-semibold mb-2 text-sm">Home Row Mastery</div>
                <div className="flex gap-1 justify-center">
                  {['A', 'S', 'D', 'F', 'J', 'K', 'L', ';'].map((key, i) => (
                    <div key={i} className="w-8 h-8 bg-orange-500/20 border border-orange-500/50 rounded flex items-center justify-center text-xs text-orange-400">
                      {key}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-3 bg-black rounded-lg border border-red-500/30">
                <div className="text-red-400 font-semibold mb-2 text-sm">Finger Strength</div>
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">Pinky</div>
                    <div className="text-red-400">★★★☆☆</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Ring</div>
                    <div className="text-red-400">★★★★☆</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Middle</div>
                    <div className="text-red-400">★★★★★</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Index</div>
                    <div className="text-red-400">★★★★★</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Thumb</div>
                    <div className="text-red-400">★★★★☆</div>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-gray-400 pt-2">
                Exercises target weak fingers
              </div>
            </div>
          </div>
        }
      />

      {/* Training Features */}
      <FeatureGroup
        title="Training Features"
        subtitle="Personalized learning for maximum results"
        features={[
          {
            title: 'Personalized Lessons',
            description: 'Every lesson is tailored to your skill level and learning pace. Focus on what you need most.',
            icon: '🎯',
          },
          {
            title: 'Progress Tracking',
            description: 'See your improvement over time with detailed metrics. Track WPM, accuracy, and consistency.',
            icon: '📊',
          },
          {
            title: 'Mistake Analysis',
            description: 'Identify patterns in your errors and get targeted practice. Fix bad habits before they stick.',
            icon: '🔍',
          },
        ]}
      />

      {/* Results */}
      <FeatureGroup
        title="Results You Can Achieve"
        subtitle="Join the top 1% of typists"
        features={[
          {
            title: 'Top 1% Speed',
            description: 'Reach 150+ WPM and type as fast as you think. No more waiting for your fingers to catch up.',
            icon: '⚡',
          },
          {
            title: 'Maximum Accuracy',
            description: 'Achieve 99% accuracy while maintaining speed. Type fast and correct the first time.',
            icon: '🎯',
          },
          {
            title: 'Minimal Time Investment',
            description: 'Just 15-20 minutes per day. See results in weeks, not months. Efficient practice, maximum gains.',
            icon: '⏱️',
          },
        ]}
      />

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-32 relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-orange-500/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Reach Top 1% Typing Speed?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              TypeMaster is coming soon. Check out all our upcoming projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/coming-soon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-xl transition-all w-full sm:w-auto text-lg"
              >
                See What&apos;s Coming Soon
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


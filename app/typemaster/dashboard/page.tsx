'use client';

import { motion } from 'framer-motion';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-orange-500/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Master Typing Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Welcome to your typing journey. Track your progress and improve your speed.
            </p>
          </motion.div>

          {/* Placeholder content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Lessons</h2>
              <p className="text-gray-400">Start your typing journey</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Progress</h2>
              <p className="text-gray-400">Track your improvement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Stats</h2>
              <p className="text-gray-400">View detailed analytics</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


import { motion } from 'framer-motion';
import { TypingStats } from '@/lib/gramtype/typingLogic';

interface EndScreenProps {
  stats: TypingStats;
  onRestart: () => void;
}

export function EndScreen({ stats, onRestart }: EndScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-md bg-black/40"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 rounded-2xl border border-purple-500/30 p-8 max-w-md w-full mx-4 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Session Complete!
        </h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-lg">Speed (WPM)</span>
            <span className="text-4xl font-bold text-purple-300">{stats.wpm}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-lg">Accuracy</span>
            <span className="text-4xl font-bold text-purple-300">{stats.accuracy}%</span>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-purple-500/30">
            <span className="text-gray-400 text-sm">Characters Typed</span>
            <span className="text-xl font-semibold text-gray-300">{stats.charactersTyped}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Errors</span>
            <span className="text-xl font-semibold text-red-400">{stats.errors}</span>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/50"
        >
          Restart Session
        </button>
      </motion.div>
    </motion.div>
  );
}


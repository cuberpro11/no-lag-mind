'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit email');
      }

      setShowDownloadOptions(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadClick = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = '/downloads/No Lag Mind Note App_macOS.zip';
    link.download = 'No Lag Mind Note App_macOS.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowInstructions(true);
  };

  const handleInstructionsComplete = () => {
    setShowDiscord(true);
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl w-full space-y-8">
        {/* Step 1: Email Input - Always visible at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 p-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Get Started
          </h1>
          <p className="text-gray-400 mb-6 text-center">
            Enter your email to download the app
          </p>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              disabled={isSubmitting || showDownloadOptions}
            />
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            {!showDownloadOptions && (
              <motion.button
                type="submit"
                disabled={isSubmitting || !email}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Continue'}
              </motion.button>
            )}
          </form>
        </motion.div>

        {/* Step 2: Download Options - Shows after email submission */}
        {showDownloadOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Choose Your Download
            </h2>
            <div className="space-y-4 mt-6">
              <motion.button
                onClick={handleDownloadClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all text-left flex items-center justify-between"
              >
                <span>Download for macOS (Apple Silicon) v0.1.0</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Instructions - Shows after download selection */}
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              How to Use the App
            </h2>
            <div className="space-y-4 mt-6 text-gray-300">
              <div className="space-y-2">
                <h3 className="text-white font-semibold">1. Download Complete</h3>
                <p className="text-gray-400">
                  Your download should start automatically. If not, check your downloads folder.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-semibold">2. Extract the ZIP File</h3>
                <p className="text-gray-400">
                  Double-click the downloaded ZIP file to extract the app.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-semibold">3. First Launch</h3>
                <p className="text-gray-400">
                  Since this is an unsigned app, macOS may block it. To open:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-400">
                  <li>Right-click the app and select &quot;Open&quot;</li>
                  <li>Or go to System Settings → Privacy & Security and allow it</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-white font-semibold">4. Start Using</h3>
                <p className="text-gray-400">
                  Once opened, create your first vault and start taking notes!
                </p>
              </div>
            </div>
            {!showDiscord && (
              <motion.button
                onClick={handleInstructionsComplete}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl transition-all"
              >
                Got it!
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Step 4: Discord Link - Shows after instructions */}
        {showDiscord && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Join Our Community
            </h2>
            <p className="text-gray-400 mb-6 text-center">
              Connect with other users, get support, and share feedback
            </p>
            <motion.a
              href="https://discord.gg/szGrJzKn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-xl transition-all text-center"
            >
              Join Discord Server
            </motion.a>
          </motion.div>
        )}
      </div>
    </main>
  );
}

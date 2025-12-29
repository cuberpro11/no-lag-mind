'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function DashboardNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <motion.span
                className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                No Lag Mind
              </motion.span>
            </Link>
            <span className="text-gray-500 text-xl">/</span>
            <span className="text-2xl font-bold text-gray-300">Master Typing</span>
          </div>

          {/* Right side - empty for now */}
          <div></div>
        </div>
      </div>
    </nav>
  );
}


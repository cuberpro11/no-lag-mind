'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Navbar() {
  // Desktop dropdown (hover) state
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  // Mobile menu state
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileOpen]);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" onClick={closeMobile}>
            <motion.span
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              No Lag Mind
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>

            {/* Products Dropdown (desktop hover) */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                aria-haspopup="menu"
                aria-expanded={isProductsOpen}
              >
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-0 w-48 bg-gray-900 border border-white/10 rounded-lg shadow-lg py-2 z-50"
                  role="menu"
                >
                  <Link
                    href="/note-app"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    Note App
                  </Link>
                  <Link
                    href="/course"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    Productivity Course
                  </Link>
                </motion.div>
              )}
            </div>

            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/coming-soon" className="text-gray-300 hover:text-white transition-colors">
              Coming Soon
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
            >
              {isMobileOpen ? (
                // X icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Burger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] md:hidden"
        >
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu backdrop"
            onClick={closeMobile}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative bg-gray-950 border-b border-white/10 p-4 pt-20 shadow-xl"
          >
            <div className="space-y-2">
              <Link
                href="/"
                onClick={closeMobile}
                className="block rounded px-3 py-2 text-gray-200 hover:text-white hover:bg-white/5"
              >
                Home
              </Link>

              {/* Products (mobile tap-to-expand) */}
              <div className="rounded">
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-200 hover:text-white hover:bg-white/5"
                  aria-expanded={isMobileProductsOpen}
                  onClick={() => setIsMobileProductsOpen((v) => !v)}
                >
                  <span>Products</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileProductsOpen && (
                  <div className="mt-1 ml-2 border-l border-white/10">
                    <Link
                      href="/note-app"
                      onClick={closeMobile}
                      className="block px-3 py-2 pl-5 text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      Note App
                    </Link>
                    <Link
                      href="/course"
                      onClick={closeMobile}
                      className="block px-3 py-2 pl-5 text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      Productivity Course
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={closeMobile}
                className="block rounded px-3 py-2 text-gray-200 hover:text-white hover:bg-white/5"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={closeMobile}
                className="block rounded px-3 py-2 text-gray-200 hover:text-white hover:bg-white/5"
              >
                About
              </Link>
              <Link
                href="/coming-soon"
                onClick={closeMobile}
                className="block rounded px-3 py-2 text-gray-200 hover:text-white hover:bg-white/5"
              >
                Coming Soon
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}

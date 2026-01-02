'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mode, generateText } from '@/lib/gramtype/textGenerator';
import {
  TypingState,
  initializeTypingState,
  handleCharacterInput,
  handleBackspace,
  resetTypingState,
  getTypingStats,
} from '@/lib/gramtype/typingLogic';
import { Header } from './Header';
import { ModeTabs } from './ModeTabs';
import { LengthSelector } from './LengthSelector';
import { StatsCards } from './StatsCards';
import { TypingArea } from './TypingArea';
import { RestartButton } from './RestartButton';
import { Footer } from './Footer';
import { EndScreen } from './EndScreen';

export function GramTypeApp() {
  const [mode, setMode] = useState<Mode>('MIXED');
  const [length, setLength] = useState<number>(30);
  const [typingState, setTypingState] = useState<TypingState>(() =>
    initializeTypingState('') // Start with empty text to avoid hydration mismatch
  );
  const [stats, setStats] = useState({ wpm: 0, accuracy: 100 });
  const containerRef = useRef<HTMLDivElement>(null);
  const statsIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const typingStateRef = useRef<TypingState>(typingState);
  const isInitialized = useRef(false);

  // Initialize text on client side only to avoid hydration mismatch
  useEffect(() => {
    if (!isInitialized.current) {
      // Use the initial length value (30) to avoid dependency issues
      const initialText = generateText('MIXED', 30);
      setTypingState(initializeTypingState(initialText));
      isInitialized.current = true;
    }
  }, []);

  // Keep ref in sync with state
  useEffect(() => {
    typingStateRef.current = typingState;
  }, [typingState]);

  // Update stats in real-time while typing
  useEffect(() => {
    // Update stats immediately when typing state changes
    const newStats = getTypingStats(typingState);
    setStats(newStats);

    // Set up interval for real-time WPM updates while typing
    // Use longer interval (500ms) to reduce jitter and make updates smoother
    if (typingState.isActive && typingState.startTime) {
      statsIntervalRef.current = setInterval(() => {
        // Use ref to get latest typing state
        const updatedStats = getTypingStats(typingStateRef.current);
        setStats(updatedStats);
      }, 500); // Update every 500ms to reduce jitter
    } else {
      if (statsIntervalRef.current) {
        clearInterval(statsIntervalRef.current);
        statsIntervalRef.current = null;
      }
    }

    return () => {
      if (statsIntervalRef.current) {
        clearInterval(statsIntervalRef.current);
      }
    };
  }, [typingState]);

  // Handle restart
  const handleRestart = useCallback(() => {
    const newText = generateText(mode, length);
    setTypingState(resetTypingState(newText));
    setStats({ wpm: 0, accuracy: 100 });
    
    // Refocus container
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [mode, length]);

  // Handle keyboard input
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Handle TAB to reset
      if (e.key === 'Tab') {
        e.preventDefault();
        handleRestart();
        return;
      }

      // Ignore special keys
      if (
        e.key === 'Shift' ||
        e.key === 'Control' ||
        e.key === 'Alt' ||
        e.key === 'Meta' ||
        e.key === 'CapsLock' ||
        e.key === 'Escape'
      ) {
        return;
      }

      // Handle backspace
      if (e.key === 'Backspace') {
        e.preventDefault();
        setTypingState((prev) => handleBackspace(prev));
        return;
      }

      // Handle regular character input (including spaces)
      // Spacebar key is ' ' (space character), which has length 1
      if (e.key.length === 1) {
        e.preventDefault();
        setTypingState((prev) => {
          if (prev.currentPosition >= prev.text.length) {
            return prev; // Already completed
          }
          // Pass the character (including spaces) to handleCharacterInput
          // Spaces are validated just like any other character
          const newState = handleCharacterInput(prev, e.key);
          // Check if typing is now complete (after typing the last character)
          if (newState.currentPosition >= newState.text.length) {
            // Mark as complete and stop the timer
            return { ...newState, isActive: false };
          }
          return newState;
        });
      }
    },
    [handleRestart]
  );

  // Set up keyboard listeners
  useEffect(() => {
    // Focus the container on mount
    if (containerRef.current) {
      containerRef.current.focus();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Handle mode change
  const handleModeChange = useCallback((newMode: Mode) => {
    setMode(newMode);
    const newText = generateText(newMode, length);
    setTypingState(resetTypingState(newText));
    setStats({ wpm: 0, accuracy: 100 });
  }, [length]);

  // Handle length change
  const handleLengthChange = useCallback((newLength: number) => {
    setLength(newLength);
    const newText = generateText(mode, newLength);
    setTypingState(resetTypingState(newText));
    setStats({ wpm: 0, accuracy: 100 });
  }, [mode]);

  return (
    <main className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-500/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <div
        ref={containerRef}
        tabIndex={0}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6 focus:outline-none"
      >
        <div className="mb-2">
          <Header />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <LengthSelector currentLength={length} onLengthChange={handleLengthChange} />
          <ModeTabs currentMode={mode} onModeChange={handleModeChange} />
        </div>

        <div className="mb-4">
          <StatsCards wpm={stats.wpm} accuracy={stats.accuracy} />
        </div>

        <div className="mb-4">
          <TypingArea
            text={typingState.text}
            typedText={typingState.typedText}
            currentPosition={typingState.currentPosition}
            errors={typingState.errors}
          />
        </div>

        <div className="flex justify-center mb-4">
          <RestartButton onRestart={handleRestart} />
        </div>

        <Footer />
        
        {/* End Screen */}
        {typingState.currentPosition >= typingState.text.length && 
         typingState.text.length > 0 && 
         !typingState.isActive && (
          <EndScreen stats={getTypingStats(typingState)} onRestart={handleRestart} />
        )}
      </div>
    </main>
  );
}


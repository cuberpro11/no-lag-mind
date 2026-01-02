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
  const [length, setLength] = useState<number>(20);
  const [typingState, setTypingState] = useState<TypingState>(() =>
    initializeTypingState('') // Start with empty text to avoid hydration mismatch
  );
  const [stats, setStats] = useState({ wpm: 0, accuracy: 100 });
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const statsIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const typingStateRef = useRef<TypingState>(typingState);
  const isInitialized = useRef(false);
  const lastBackspaceTime = useRef<number>(0);
  const isProcessingBackspace = useRef<boolean>(false);

  // Initialize text on client side only to avoid hydration mismatch
  useEffect(() => {
    if (!isInitialized.current) {
      // Use the initial length value (20) to avoid dependency issues
      const initialText = generateText('MIXED', 20);
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
    
    // Reset input tracking
    previousInputValue.current = '';
    
    // Refocus input for touch devices, or container for desktop
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    } else if (containerRef.current) {
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

      // Handle backspace and delete
      if (e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault();
        // Throttle backspace to one character per 150ms to prevent rapid deletions
        const now = Date.now();
        if (!isProcessingBackspace.current && now - lastBackspaceTime.current >= 150) {
          isProcessingBackspace.current = true;
          lastBackspaceTime.current = now;
          setTypingState((prev) => handleBackspace(prev));
          // Reset the flag after the throttle period to allow next deletion
          setTimeout(() => {
            isProcessingBackspace.current = false;
          }, 150);
        }
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

  // Track previous input value to detect deletions
  const previousInputValue = useRef('');

  // Handle input from virtual keyboard (iPad/mobile)
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const prevValue = previousInputValue.current;
    
    // If value decreased, user deleted character(s)
    // Handle one deletion at a time to prevent rapid deletions
    if (value.length < prevValue.length) {
      // Only process one deletion at a time, even if multiple were deleted
      const now = Date.now();
      if (!isProcessingBackspace.current && now - lastBackspaceTime.current >= 150) {
        isProcessingBackspace.current = true;
        lastBackspaceTime.current = now;
        setTypingState((prev) => handleBackspace(prev));
        // Reset the flag after the throttle period to allow next deletion
        setTimeout(() => {
          isProcessingBackspace.current = false;
        }, 150);
      }
      previousInputValue.current = value;
      return;
    }
    
    // If value increased, user typed a character
    if (value.length > prevValue.length && value.length > 0) {
      // Get the new character(s) - handle case where multiple characters might be pasted
      const newChars = value.slice(prevValue.length);
      const lastChar = newChars[newChars.length - 1];
      
      // Process the last character typed
      setTypingState((prev) => {
        if (prev.currentPosition >= prev.text.length) {
          return prev; // Already completed
        }
        const newState = handleCharacterInput(prev, lastChar);
        if (newState.currentPosition >= newState.text.length) {
          return { ...newState, isActive: false };
        }
        return newState;
      });
    }
    
    // Update previous value
    previousInputValue.current = value;
    
    // Clear the input to allow next character (but keep track of deletions)
    if (inputRef.current && value.length > 0) {
      // Only clear if we processed a new character
      if (value.length > prevValue.length) {
        inputRef.current.value = '';
        previousInputValue.current = '';
      }
    }
  }, []);

  // Set up keyboard listeners
  useEffect(() => {
    // Focus the input field on mount for touch devices
    if (inputRef.current) {
      inputRef.current.focus();
    } else if (containerRef.current) {
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

        <div className="mb-4 relative">
          <TypingArea
            text={typingState.text}
            typedText={typingState.typedText}
            currentPosition={typingState.currentPosition}
            errors={typingState.errors}
          />
          {/* Hidden input for iPad/mobile virtual keyboard - positioned over typing area */}
          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            onChange={handleInput}
            onKeyDown={(e) => {
              // Handle backspace, delete, and tab
              if (e.key === 'Backspace' || e.key === 'Delete') {
                e.preventDefault();
                // Throttle backspace to one character per 150ms to prevent rapid deletions
                const now = Date.now();
                if (!isProcessingBackspace.current && now - lastBackspaceTime.current >= 150) {
                  isProcessingBackspace.current = true;
                  lastBackspaceTime.current = now;
                  setTypingState((prev) => handleBackspace(prev));
                  // Reset the flag after the throttle period to allow next deletion
                  setTimeout(() => {
                    isProcessingBackspace.current = false;
                  }, 150);
                  // Update the previous value ref to track deletion
                  if (inputRef.current) {
                    const currentValue = inputRef.current.value;
                    if (currentValue.length > 0) {
                      previousInputValue.current = currentValue.slice(0, -1);
                    } else {
                      previousInputValue.current = '';
                    }
                    inputRef.current.value = previousInputValue.current;
                  }
                }
              } else if (e.key === 'Tab') {
                e.preventDefault();
                handleRestart();
              }
            }}
            onClick={(e) => {
              // Prevent clicks from bubbling, but allow focus
              e.stopPropagation();
            }}
            className="absolute inset-0 opacity-0 w-full h-full cursor-text"
            aria-label="Typing input"
            tabIndex={0}
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


export interface TypingStats {
  wpm: number;
  accuracy: number;
  charactersTyped: number;
  correctCharacters: number;
  errors: number;
}

export interface TypingState {
  text: string;
  typedText: string;
  currentPosition: number;
  startTime: number | null;
  errors: Set<number>; // Set of positions where errors currently exist (for visual highlighting)
  totalErrors: number; // Total count of all errors ever made (including corrected ones)
  isActive: boolean;
}

/**
 * Calculate WPM (Words Per Minute) based on correct characters only
 * Formula: (correct characters / 5) / (minutes elapsed)
 * This accounts for accuracy - only correct keystrokes count toward WPM
 */
export function calculateWPM(
  correctCharacters: number,
  startTime: number | null
): number {
  if (!startTime) return 0;
  const elapsedMinutes = (Date.now() - startTime) / 1000 / 60;
  if (elapsedMinutes === 0) return 0;
  const words = correctCharacters / 5;
  return Math.round(words / elapsedMinutes);
}

/**
 * Calculate accuracy percentage
 */
export function calculateAccuracy(
  correctCharacters: number,
  totalCharacters: number
): number {
  if (totalCharacters === 0) return 100;
  return Math.round((correctCharacters / totalCharacters) * 100);
}

/**
 * Initialize typing state
 */
export function initializeTypingState(text: string): TypingState {
  return {
    text,
    typedText: '',
    currentPosition: 0,
    startTime: null,
    errors: new Set(), // Current errors (for visual highlighting)
    totalErrors: 0, // Total errors ever made (never decreases)
    isActive: false,
  };
}

/**
 * Handle character input
 * Spaces are validated just like any other character - if a space is expected
 * and the user types something else (or vice versa), it counts as an error.
 */
export function handleCharacterInput(
  state: TypingState,
  char: string
): TypingState {
  const { text, currentPosition, typedText, errors, totalErrors, startTime } = state;
  
  // Start timer on first keystroke
  const newStartTime = startTime || Date.now();
  
  // Check if character matches (including spaces - spaces must match exactly)
  const expectedChar = text[currentPosition];
  const isCorrect = char === expectedChar;
  
  // Update typed text
  const newTypedText = typedText + char;
  
  // Track errors
  const newErrors = new Set(errors);
  let newTotalErrors = totalErrors;
  
  if (!isCorrect) {
    newErrors.add(currentPosition);
    // Increment total errors counter (never decreases, even if corrected later)
    // This includes errors for missing/incorrect spaces
    newTotalErrors += 1;
  }
  
  return {
    ...state,
    typedText: newTypedText,
    currentPosition: currentPosition + 1,
    startTime: newStartTime,
    errors: newErrors,
    totalErrors: newTotalErrors,
    isActive: true,
  };
}

/**
 * Handle backspace - undo last character
 * Note: totalErrors is NOT decremented - we keep track of all errors ever made
 */
export function handleBackspace(state: TypingState): TypingState {
  const { typedText, currentPosition, errors, totalErrors } = state;
  
  // Can't go back further than start
  if (currentPosition === 0) {
    return state;
  }
  
  const newPosition = currentPosition - 1;
  const newTypedText = typedText.slice(0, -1);
  
  // Remove error at the position we're going back to (for visual highlighting)
  // But keep totalErrors unchanged - we still count it as an error that was made
  const newErrors = new Set(errors);
  newErrors.delete(newPosition);
  
  return {
    ...state,
    typedText: newTypedText,
    currentPosition: newPosition,
    errors: newErrors,
    totalErrors, // Keep total errors unchanged - errors are tracked even if corrected
  };
}

/**
 * Reset typing state with new text
 */
export function resetTypingState(newText: string): TypingState {
  return initializeTypingState(newText);
}

/**
 * Get typing stats from current state
 * Uses totalErrors (all errors ever made) for accuracy calculation, not just current errors
 */
export function getTypingStats(state: TypingState): TypingStats {
  const { typedText, text, currentPosition, startTime, totalErrors } = state;
  
  const charactersTyped = typedText.length;
  // Correct characters = total typed - total errors ever made (including corrected ones)
  const correctCharacters = charactersTyped - totalErrors;
  // WPM is calculated using correct characters only to account for accuracy
  const wpm = calculateWPM(correctCharacters, startTime);
  // Accuracy is based on total errors ever made, not just current errors
  const accuracy = calculateAccuracy(correctCharacters, charactersTyped);
  
  return {
    wpm,
    accuracy,
    charactersTyped,
    correctCharacters,
    errors: totalErrors, // Return total errors ever made, not just current errors
  };
}

/**
 * Check if typing is complete
 */
export function isTypingComplete(state: TypingState): boolean {
  return state.currentPosition >= state.text.length;
}


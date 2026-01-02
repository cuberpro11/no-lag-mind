import { COMMON_BIGRAMS, COMMON_TRIGRAMS, RARE_BIGRAMS, RARE_TRIGRAMS } from './constants';

export type Mode = 'MIXED' | 'BIGRAMS' | 'TRIGRAMS' | 'RARE';

/**
 * Generates a random sequence of bigrams
 * @param numGrams - Number of bigrams to generate
 */
function generateBigrams(numGrams: number = 30): string {
  const result: string[] = [];
  
  for (let i = 0; i < numGrams; i++) {
    const bigram = COMMON_BIGRAMS[Math.floor(Math.random() * COMMON_BIGRAMS.length)];
    result.push(bigram);
  }
  
  return result.join(' ');
}

/**
 * Generates a random sequence of trigrams
 * @param numGrams - Number of trigrams to generate
 */
function generateTrigrams(numGrams: number = 30): string {
  const result: string[] = [];
  
  for (let i = 0; i < numGrams; i++) {
    const trigram = COMMON_TRIGRAMS[Math.floor(Math.random() * COMMON_TRIGRAMS.length)];
    result.push(trigram);
  }
  
  return result.join(' ');
}

/**
 * Generates a mixed sequence of bigrams and trigrams
 * @param numGrams - Number of grams (bigrams or trigrams) to generate
 */
function generateMixed(numGrams: number = 30): string {
  const result: string[] = [];
  
  for (let i = 0; i < numGrams; i++) {
    const useTrigram = Math.random() > 0.5;
    const item = useTrigram
      ? COMMON_TRIGRAMS[Math.floor(Math.random() * COMMON_TRIGRAMS.length)]
      : COMMON_BIGRAMS[Math.floor(Math.random() * COMMON_BIGRAMS.length)];
    result.push(item);
  }
  
  return result.join(' ');
}

/**
 * Generates a random sequence of rare bigrams and trigrams
 * @param numGrams - Number of grams (rare bigrams or trigrams) to generate
 */
function generateRare(numGrams: number = 30): string {
  const result: string[] = [];
  
  for (let i = 0; i < numGrams; i++) {
    // Randomly choose between rare bigram or rare trigram
    const useTrigram = Math.random() > 0.5;
    const rare = useTrigram
      ? RARE_TRIGRAMS[Math.floor(Math.random() * RARE_TRIGRAMS.length)]
      : RARE_BIGRAMS[Math.floor(Math.random() * RARE_BIGRAMS.length)];
    result.push(rare);
  }
  
  return result.join(' ');
}

/**
 * Generates text based on the specified mode
 * @param mode - The typing mode (MIXED, BIGRAMS, TRIGRAMS, RARE)
 * @param numGrams - Number of grams to generate (default: 30)
 */
export function generateText(mode: Mode, numGrams: number = 30): string {
  switch (mode) {
    case 'BIGRAMS':
      return generateBigrams(numGrams);
    case 'TRIGRAMS':
      return generateTrigrams(numGrams);
    case 'MIXED':
      return generateMixed(numGrams);
    case 'RARE':
      return generateRare(numGrams);
    default:
      return generateMixed(numGrams);
  }
}


/**
 * Removes Hugo shortcodes from markdown content
 */
export function removeHugoShortcodes(content: string): string {
  // Remove {{< collapse >}} shortcodes
  content = content.replace(
    /\{\{<\s*collapse[^>]*>\}\}([\s\S]*?)\{\{<\s*\/\s*collapse\s*>\}\}/g,
    ''
  );
  
  // Remove any other Hugo shortcodes
  content = content.replace(/\{\{<[^>]+>\}\}/g, '');
  content = content.replace(/\{\{<\s*\/[^>]+>\}\}/g, '');
  
  return content.trim();
}

/**
 * Normalizes markdown formatting by removing excess blank lines before lists
 * This prevents unwanted paragraph breaks before bullet points
 */
export function normalizeMarkdownFormatting(content: string): string {
  // Remove blank lines immediately before unordered lists (- or * or +)
  content = content.replace(/\n\n+(?=\s*[-*+]\s)/g, '\n');
  
  // Remove blank lines immediately before ordered lists (1. 2. etc)
  content = content.replace(/\n\n+(?=\s*\d+\.\s)/g, '\n');
  
  return content;
}


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


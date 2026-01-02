interface TypingAreaProps {
  text: string;
  typedText: string;
  currentPosition: number;
  errors: Set<number>;
}

export function TypingArea({
  text,
  typedText,
  currentPosition,
  errors,
}: TypingAreaProps) {
  const renderCharacter = (char: string, index: number) => {
    const isCurrent = index === currentPosition;
    const isTyped = index < currentPosition;
    const isError = errors.has(index);

    let className = 'inline-block';
    
    if (isCurrent) {
      className += ' bg-purple-500/30 text-purple-300 border-b-2 border-purple-400';
    } else if (isTyped) {
      if (isError) {
        className += ' text-red-400';
      } else {
        className += ' text-gray-300';
      }
    } else {
      className += ' text-gray-500';
    }

    // Handle spaces - make errors more visible
    if (char === ' ') {
      // If it's an error, show a visible underscore character with red styling
      if (isError && isTyped) {
        return (
          <span key={index} className="inline text-red-400 bg-red-500/20 rounded m-0 p-0">
            _
          </span>
        );
      }
      // Current space gets the purple highlight
      if (isCurrent) {
        return (
          <span key={index} className={className}>
            {'\u00A0'}
          </span>
        );
      }
      // Normal space (not typed yet or typed correctly)
      return (
        <span key={index} className={className}>
          {'\u00A0'}
        </span>
      );
    }

    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  };

  // Split text into words (n-grams separated by spaces) to prevent breaking in middle
  const words = text.split(' ');
  let charIndex = 0;
  
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 p-8 min-h-[200px]">
      <div className="font-mono text-4xl leading-relaxed">
        {words.map((word, wordIndex) => {
          const wordStartIndex = charIndex;
          const wordChars = word.split('').map((char) => {
            const currentIndex = charIndex;
            charIndex++;
            return renderCharacter(char, currentIndex);
          });
          
          // Add space after word (except last word)
          let spaceElement = null;
          if (wordIndex < words.length - 1) {
            const spaceIndex = charIndex;
            const isSpaceError = errors.has(spaceIndex);
            const isSpaceTyped = spaceIndex < currentPosition;
            
            // If space is an error, render it inline without extra margin or padding
            if (isSpaceError && isSpaceTyped) {
              spaceElement = (
                <span key={spaceIndex} className="inline text-red-400 bg-red-500/20 rounded m-0 p-0">
                  _
                </span>
              );
            } else {
              spaceElement = renderCharacter(' ', spaceIndex);
            }
            charIndex++;
          }
          
          return (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {wordChars}
              {spaceElement}
            </span>
          );
        })}
      </div>
    </div>
  );
}


import { Mode } from '@/lib/gramtype/textGenerator';

interface ModeTabsProps {
  currentMode: Mode;
  onModeChange: (mode: Mode) => void;
}

export function ModeTabs({ currentMode, onModeChange }: ModeTabsProps) {
  const modes: Mode[] = ['MIXED', 'BIGRAMS', 'TRIGRAMS', 'RARE'];

  return (
    <div className="flex gap-3">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => onModeChange(mode)}
          className={`px-6 py-3 rounded-lg text-base font-medium transition-all ${
            currentMode === mode
              ? 'bg-purple-500 text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}


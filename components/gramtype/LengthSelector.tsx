interface LengthSelectorProps {
  currentLength: number;
  onLengthChange: (length: number) => void;
}

const LENGTH_OPTIONS = [10, 15, 20, 25, 30];

export function LengthSelector({ currentLength, onLengthChange }: LengthSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">Length:</span>
      <div className="flex gap-2">
        {LENGTH_OPTIONS.map((length) => (
          <button
            key={length}
            onClick={() => onLengthChange(length)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              currentLength === length
                ? 'bg-purple-500 text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {length}
          </button>
        ))}
      </div>
    </div>
  );
}


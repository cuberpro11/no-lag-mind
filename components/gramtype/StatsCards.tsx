interface StatsCardsProps {
  wpm: number;
  accuracy: number;
}

export function StatsCards({ wpm, accuracy }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Speed Card */}
      <div className="bg-white/5 rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400 uppercase font-medium">Speed</span>
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-white">{wpm}</span>
          <span className="text-lg text-purple-400">WPM</span>
        </div>
      </div>

      {/* Accuracy Card */}
      <div className="bg-white/5 rounded-lg border border-white/10 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400 uppercase font-medium">Accuracy</span>
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-white">{accuracy}</span>
          <span className="text-lg text-purple-400">%</span>
        </div>
      </div>
    </div>
  );
}


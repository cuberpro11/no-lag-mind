interface RestartButtonProps {
  onRestart: () => void;
}

export function RestartButton({ onRestart }: RestartButtonProps) {
  return (
    <button
      onClick={onRestart}
      className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 hover:border-purple-500/50 transition-all"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      <span className="text-base font-medium">RESTART SESSION</span>
    </button>
  );
}


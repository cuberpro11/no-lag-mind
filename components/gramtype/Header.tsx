export function Header() {
  return (
    <div className="flex items-center gap-3 mb-1">
      {/* Purple keyboard icon */}
      <div className="w-10 h-10 bg-purple-500/20 rounded flex items-center justify-center border border-purple-500/30">
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </div>
      
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            GRAMTYPE
          </span>
        </h1>
        <p className="text-xs text-gray-400">PRECISION PRACTICE</p>
      </div>
    </div>
  );
}


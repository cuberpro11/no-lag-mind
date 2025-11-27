'use client';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">No Lag Mind</h3>
            <p className="text-gray-400 text-sm">
              Work at the speed of thought
            </p>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} No Lag Mind. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


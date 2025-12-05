'use client';

// Keyboard Shortcuts Graphic - Exact match to provided image
export function KeyboardShortcutsGraphic() {
  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center p-4 md:p-8">
      <svg
        viewBox="0 0 800 240"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definitions for key outlines - cyan to purple */}
          <linearGradient id="keyGradient0" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="keyGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="keyGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="keyGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="keyGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          {/* Glossy highlight gradient */}
          <linearGradient id="keyboardHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Keyboard base with rounded corners and highlight */}
        <rect
          x="40"
          y="30"
          width="720"
          height="180"
          rx="8"
          fill="rgba(10, 10, 15, 0.95)"
        />
        <rect
          x="40"
          y="30"
          width="720"
          height="180"
          rx="8"
          fill="url(#keyboardHighlight)"
        />

        {/* Row 1: ~, ! 1, @ 2, # 3, $ 4, % 5, ^ 6, & 7, * 8, ( 9, ) 0, _ -, + =, BACKSPACE */}
        {/* ~ key */}
        <rect x="50" y="40" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <text x="66" y="58" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">~</text>
        <text x="66" y="68" textAnchor="middle" fill="white" fontSize="8" fontWeight="400">`</text>
        
        {/* Number keys 1-0 */}
        {['! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0'].map((label, i) => {
          const x = 87 + i * 37;
          const gradientId = i < 3 ? 'keyGradient0' : i < 6 ? 'keyGradient1' : i < 8 ? 'keyGradient2' : 'keyGradient3';
          return (
            <g key={i}>
              <rect x={x} y="40" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
              <text x={x + 16} y="55" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">{label.split(' ')[0]}</text>
              <text x={x + 16} y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">{label.split(' ')[1]}</text>
            </g>
          );
        })}
        
        {/* _ - key */}
        <rect x="457" y="40" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="473" y="55" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">_</text>
        <text x="473" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">-</text>
        
        {/* + = key */}
        <rect x="494" y="40" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="510" y="55" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">+</text>
        <text x="510" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">=</text>
        
        {/* BACKSPACE key (wide) with X icon */}
        <rect x="531" y="40" width="70" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient4)" strokeWidth="1.5" />
        <rect x="556" y="45" width="10" height="10" rx="1" fill="none" stroke="url(#keyGradient4)" strokeWidth="1" />
        <line x1="558" y1="47" x2="564" y2="53" stroke="url(#keyGradient4)" strokeWidth="1.2" />
        <line x1="564" y1="47" x2="558" y2="53" stroke="url(#keyGradient4)" strokeWidth="1.2" />
        <text x="566" y="68" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">BACKSPACE</text>

        {/* Row 2: TAB, Q, W, E, R, T, Y, U, I, O, P, { [, } ], | \ */}
        {/* TAB key (wide) with arrow icon */}
        <rect x="50" y="73" width="52" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <path d="M 60 78 L 65 83 L 60 88 M 65 83 L 75 83" stroke="url(#keyGradient0)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <text x="76" y="95" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">TAB</text>
        
        {/* Q-P keys */}
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter, i) => {
          const x = 107 + i * 37;
          const gradientId = i < 3 ? 'keyGradient0' : i < 6 ? 'keyGradient1' : i < 8 ? 'keyGradient2' : 'keyGradient3';
          return (
            <g key={letter}>
              <rect x={x} y="73" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
              <text x={x + 16} y="93" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">{letter}</text>
            </g>
          );
        })}
        
        {/* { [ key */}
        <rect x="477" y="73" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="493" y="88" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">{'{'}</text>
        <text x="493" y="98" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">[</text>
        
        {/* } ] key */}
        <rect x="514" y="73" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="530" y="88" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">{'}'}</text>
        <text x="530" y="98" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">]</text>
        
        {/* | \ key */}
        <rect x="551" y="73" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient4)" strokeWidth="1.5" />
        <text x="567" y="88" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">|</text>
        <text x="567" y="98" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">\</text>

        {/* Row 3: CAPS LOCK, A, S, D, F, G, H, J, K, L, : ;, " ', RETURN */}
        {/* CAPS LOCK key (wide) with arrow icon */}
        <rect x="50" y="106" width="52" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <path d="M 70 111 L 70 116 M 65 116 L 70 121 L 75 116" stroke="url(#keyGradient0)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="65" y1="123" x2="75" y2="123" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <text x="76" y="135" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">CAPS LOCK</text>
        
        {/* A-L keys */}
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter, i) => {
          const x = 107 + i * 37;
          const gradientId = i < 2 ? 'keyGradient0' : i < 5 ? 'keyGradient1' : i < 7 ? 'keyGradient2' : 'keyGradient3';
          return (
            <g key={letter}>
              <rect x={x} y="106" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
              <text x={x + 16} y="128" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">{letter}</text>
            </g>
          );
        })}
        
        {/* : ; key */}
        <rect x="440" y="106" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="456" y="121" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">:</text>
        <text x="456" y="131" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">;</text>
        
        {/* " ' key */}
        <rect x="477" y="106" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="493" y="121" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">"</text>
        <text x="493" y="131" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">'</text>
        
        {/* RETURN key (tall, spans 2 rows) with bent arrow */}
        <rect x="514" y="106" width="50" height="60" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient4)" strokeWidth="1.5" />
        <path d="M 524 111 L 529 111 L 529 116 M 529 116 L 534 121 L 529 126" stroke="url(#keyGradient4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <text x="539" y="150" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">RETURN</text>

        {/* Row 4: SHIFT, Z, X, C, V, B, N, M, < ,, > ., ? /, SHIFT */}
        {/* Left SHIFT key (wide) with arrow icon */}
        <rect x="50" y="139" width="70" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <path d="M 70 144 L 70 149 M 65 149 L 70 154 L 75 149" stroke="url(#keyGradient0)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <text x="85" y="161" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">SHIFT</text>
        
        {/* Z-M keys */}
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter, i) => {
          const x = 125 + i * 37;
          const gradientId = i < 2 ? 'keyGradient0' : i < 4 ? 'keyGradient1' : i < 6 ? 'keyGradient2' : 'keyGradient3';
          return (
            <g key={letter}>
              <rect x={x} y="139" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
              <text x={x + 16} y="161" textAnchor="middle" fill="white" fontSize="12" fontWeight="500">{letter}</text>
            </g>
          );
        })}
        
        {/* < , key */}
        <rect x="384" y="139" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="400" y="154" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">{'<'}</text>
        <text x="400" y="164" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">,</text>
        
        {/* > . key */}
        <rect x="421" y="139" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="437" y="154" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">{'>'}</text>
        <text x="437" y="164" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">.</text>
        
        {/* ? / key */}
        <rect x="458" y="139" width="32" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <text x="474" y="154" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">?</text>
        <text x="474" y="164" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">/</text>
        
        {/* Right SHIFT key (wide) with arrow icon */}
        <rect x="495" y="139" width="70" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient4)" strokeWidth="1.5" />
        <path d="M 515 144 L 515 149 M 510 149 L 515 154 L 520 149" stroke="url(#keyGradient4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <text x="530" y="161" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">SHIFT</text>

        {/* Row 5: CONTROL, WIN, ALT, SPACE, ALT, WIN, MENU, CONTROL */}
        {/* Left CONTROL key with snowflake icon */}
        <rect x="50" y="172" width="45" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <g transform="translate(72.5, 183)">
          <path d="M 0 -4 L 0 4 M -4 0 L 4 0 M -3 -3 L 3 3 M 3 -3 L -3 3" stroke="url(#keyGradient0)" strokeWidth="1" fill="none" />
        </g>
        <text x="72.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">CONTROL</text>
        
        {/* Left WIN key with Windows logo */}
        <rect x="100" y="172" width="35" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <g transform="translate(117.5, 186)">
          <rect x="-6" y="-6" width="4" height="4" fill="url(#keyGradient0)" />
          <rect x="2" y="-6" width="4" height="4" fill="url(#keyGradient0)" />
          <rect x="-6" y="2" width="4" height="4" fill="url(#keyGradient0)" />
          <rect x="2" y="2" width="4" height="4" fill="url(#keyGradient0)" />
        </g>
        <text x="117.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">WIN</text>
        
        {/* Left ALT key with tilde/slash icon */}
        <rect x="140" y="172" width="35" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient0)" strokeWidth="1.5" />
        <g transform="translate(157.5, 183)">
          <path d="M -4 -2 Q -2 -4 0 -2 Q 2 -4 4 -2" stroke="url(#keyGradient0)" strokeWidth="1" fill="none" />
          <line x1="0" y1="-2" x2="0" y2="2" stroke="url(#keyGradient0)" strokeWidth="1" />
          <line x1="-2" y1="2" x2="2" y2="2" stroke="url(#keyGradient0)" strokeWidth="1" />
        </g>
        <text x="157.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">ALT</text>
        
        {/* SPACE key (very wide) with dash icon */}
        <rect x="180" y="172" width="200" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient2)" strokeWidth="1.5" />
        <line x1="260" y1="186" x2="300" y2="186" stroke="url(#keyGradient2)" strokeWidth="1.5" />
        <text x="280" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">SPACE</text>
        
        {/* Right ALT key */}
        <rect x="385" y="172" width="35" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <g transform="translate(402.5, 183)">
          <path d="M -4 -2 Q -2 -4 0 -2 Q 2 -4 4 -2" stroke="url(#keyGradient3)" strokeWidth="1" fill="none" />
          <line x1="0" y1="-2" x2="0" y2="2" stroke="url(#keyGradient3)" strokeWidth="1" />
          <line x1="-2" y1="2" x2="2" y2="2" stroke="url(#keyGradient3)" strokeWidth="1" />
        </g>
        <text x="402.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">ALT</text>
        
        {/* Right WIN key */}
        <rect x="425" y="172" width="35" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient3)" strokeWidth="1.5" />
        <g transform="translate(442.5, 186)">
          <rect x="-6" y="-6" width="4" height="4" fill="url(#keyGradient3)" />
          <rect x="2" y="-6" width="4" height="4" fill="url(#keyGradient3)" />
          <rect x="-6" y="2" width="4" height="4" fill="url(#keyGradient3)" />
          <rect x="2" y="2" width="4" height="4" fill="url(#keyGradient3)" />
        </g>
        <text x="442.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">WIN</text>
        
        {/* MENU key with three lines icon */}
        <rect x="465" y="172" width="35" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient4)" strokeWidth="1.5" />
        <g transform="translate(482.5, 186)">
          <line x1="-4" y1="-2" x2="4" y2="-2" stroke="url(#keyGradient4)" strokeWidth="1.2" />
          <line x1="-4" y1="0" x2="4" y2="0" stroke="url(#keyGradient4)" strokeWidth="1.2" />
          <line x1="-4" y1="2" x2="4" y2="2" stroke="url(#keyGradient4)" strokeWidth="1.2" />
        </g>
        <text x="482.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">MENU</text>
        
        {/* Right CONTROL key with snowflake icon */}
        <rect x="505" y="172" width="45" height="28" rx="4" fill="rgba(20, 20, 30, 0.95)" stroke="url(#keyGradient4)" strokeWidth="1.5" />
        <g transform="translate(527.5, 183)">
          <path d="M 0 -4 L 0 4 M -4 0 L 4 0 M -3 -3 L 3 3 M 3 -3 L -3 3" stroke="url(#keyGradient4)" strokeWidth="1" fill="none" />
        </g>
        <text x="527.5" y="194" textAnchor="middle" fill="white" fontSize="8" fontWeight="500">CONTROL</text>
      </svg>
    </div>
  );
}

// Cognitive Flow Graphic
export function CognitiveFlowGraphic() {
  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center p-8">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central brain node */}
        <circle cx="200" cy="100" r="40" fill="rgba(139, 92, 246, 0.3)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="2" />
        <path
          d="M 180 90 Q 200 85 220 90 Q 215 100 220 110 Q 200 115 180 110 Q 185 100 180 90"
          fill="rgba(139, 92, 246, 0.2)"
          stroke="rgba(139, 92, 246, 0.5)"
          strokeWidth="1.5"
        />
        
        {/* Flow nodes */}
        <circle cx="100" cy="60" r="25" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />
        <circle cx="300" cy="60" r="25" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />
        <circle cx="100" cy="140" r="25" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />
        <circle cx="300" cy="140" r="25" fill="rgba(6, 182, 212, 0.3)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />
        
        {/* Flow connections */}
        <path
          d="M 125 60 Q 150 50 175 80"
          stroke="rgba(6, 182, 212, 0.4)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 275 80 Q 250 50 225 60"
          stroke="rgba(6, 182, 212, 0.4)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 125 140 Q 150 150 175 120"
          stroke="rgba(6, 182, 212, 0.4)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M 275 120 Q 250 150 225 140"
          stroke="rgba(6, 182, 212, 0.4)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        
        {/* Flow arrows */}
        <path
          d="M 170 85 L 175 80 L 170 75"
          stroke="rgba(6, 182, 212, 0.6)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 230 75 L 225 80 L 230 85"
          stroke="rgba(6, 182, 212, 0.6)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 170 115 L 175 120 L 170 125"
          stroke="rgba(6, 182, 212, 0.6)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 230 125 L 225 120 L 230 115"
          stroke="rgba(6, 182, 212, 0.6)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}

// AI Tools Graphic - AI company logos and brain representation
export function AIToolsGraphic() {
  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center p-8">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central brain */}
        <g transform="translate(200, 100)">
          {/* Brain outline */}
          <path
            d="M -25 -20 Q -30 -25 -25 -30 Q -20 -35 -10 -35 Q 0 -35 10 -35 Q 20 -35 25 -30 Q 30 -25 25 -20 Q 30 -15 25 -10 Q 20 -5 10 -5 Q 0 -5 -10 -5 Q -20 -5 -25 -10 Q -30 -15 -25 -20"
            fill="rgba(139, 92, 246, 0.3)"
            stroke="rgba(139, 92, 246, 0.7)"
            strokeWidth="2"
          />
          {/* Brain details */}
          <path
            d="M -15 -20 Q -10 -25 -5 -20 Q 0 -25 5 -20 Q 10 -25 15 -20"
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -10 -10 Q -5 -15 0 -10 Q 5 -15 10 -10"
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="-10" cy="-15" r="2" fill="rgba(6, 182, 212, 0.6)" />
          <circle cx="10" cy="-15" r="2" fill="rgba(6, 182, 212, 0.6)" />
        </g>
        
        {/* OpenAI logo (simplified) */}
        <g transform="translate(80, 60)">
          <circle cx="0" cy="0" r="20" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.5)" strokeWidth="2" />
          <path
            d="M -8 -8 L 8 0 L -8 8 Z"
            fill="rgba(6, 182, 212, 0.6)"
          />
          <text x="0" y="35" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="9" fontWeight="500">OpenAI</text>
        </g>
        
        {/* Anthropic logo (simplified) */}
        <g transform="translate(320, 60)">
          <rect x="-20" y="-20" width="40" height="40" rx="6" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
          <circle cx="0" cy="0" r="12" fill="none" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="rgba(139, 92, 246, 0.4)" />
          <text x="0" y="35" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="9" fontWeight="500">Claude</text>
        </g>
        
        {/* Robot icon */}
        <g transform="translate(80, 140)">
          <rect x="-18" y="-20" width="36" height="30" rx="4" fill="rgba(6, 182, 212, 0.25)" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="2" />
          <rect x="-12" y="-12" width="8" height="8" rx="2" fill="rgba(6, 182, 212, 0.6)" />
          <rect x="4" y="-12" width="8" height="8" rx="2" fill="rgba(6, 182, 212, 0.6)" />
          <rect x="-6" y="2" width="12" height="6" rx="2" fill="rgba(139, 92, 246, 0.5)" />
          <text x="0" y="25" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="9" fontWeight="500">AI Bot</text>
        </g>
        
        {/* Gemini/Google AI logo (simplified) */}
        <g transform="translate(320, 140)">
          <circle cx="0" cy="0" r="18" fill="rgba(139, 92, 246, 0.2)" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2" />
          <path
            d="M -10 -5 L 0 5 L 10 -5"
            stroke="rgba(139, 92, 246, 0.7)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="0" y="25" textAnchor="middle" fill="rgba(255, 255, 255, 0.7)" fontSize="9" fontWeight="500">Gemini</text>
        </g>
        
        {/* Connection lines from brain to AI tools */}
        <line x1="100" y1="60" x2="175" y2="90" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="300" y1="60" x2="225" y2="90" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="100" y1="140" x2="175" y2="110" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
        <line x1="300" y1="140" x2="225" y2="110" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" strokeDasharray="3,3" />
      </svg>
    </div>
  );
}

// Words Per Minute Graphic - Typing speed visualization
export function WordsPerMinuteGraphic() {
  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center p-8">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Speedometer arc */}
        <path
          d="M 80 140 A 120 120 0 0 1 320 140"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M 80 140 A 120 120 0 0 1 320 140"
          stroke="rgba(6, 182, 212, 0.6)"
          strokeWidth="6"
          fill="none"
          strokeDasharray="280 100"
        />
        
        {/* Speed indicator needle */}
        <g transform="translate(200, 140)">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-100"
            stroke="rgba(139, 92, 246, 0.8)"
            strokeWidth="3"
            strokeLinecap="round"
            transform="rotate(45)"
          />
          <circle cx="0" cy="0" r="8" fill="rgba(139, 92, 246, 0.6)" stroke="rgba(139, 92, 246, 0.9)" strokeWidth="2" />
        </g>
        
        {/* WPM text */}
        <text x="200" y="80" textAnchor="middle" fill="rgba(255, 255, 255, 0.9)" fontSize="32" fontWeight="bold">120</text>
        <text x="200" y="100" textAnchor="middle" fill="rgba(255, 255, 255, 0.6)" fontSize="14" fontWeight="500">WPM</text>
        
        {/* Typing visualization - words appearing */}
        <g transform="translate(200, 160)">
          <rect x="-60" y="-8" width="120" height="16" rx="4" fill="rgba(6, 182, 212, 0.2)" stroke="rgba(6, 182, 212, 0.4)" />
          <text x="0" y="4" textAnchor="middle" fill="rgba(255, 255, 255, 0.8)" fontSize="12" fontWeight="500">typing speed</text>
        </g>
      </svg>
    </div>
  );
}

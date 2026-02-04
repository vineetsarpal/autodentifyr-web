"use client"

export function CircuitBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal lines */}
            <line x1="0" y1="20" x2="30" y2="20" stroke="#00F0FF" strokeWidth="1" />
            <line x1="40" y1="20" x2="100" y2="20" stroke="#00F0FF" strokeWidth="1" />
            <line x1="0" y1="50" x2="60" y2="50" stroke="#00F0FF" strokeWidth="1" />
            <line x1="70" y1="50" x2="100" y2="50" stroke="#00F0FF" strokeWidth="1" />
            <line x1="0" y1="80" x2="20" y2="80" stroke="#00F0FF" strokeWidth="1" />
            <line x1="50" y1="80" x2="100" y2="80" stroke="#00F0FF" strokeWidth="1" />
            
            {/* Vertical lines */}
            <line x1="20" y1="0" x2="20" y2="30" stroke="#00F0FF" strokeWidth="1" />
            <line x1="50" y1="40" x2="50" y2="70" stroke="#00F0FF" strokeWidth="1" />
            <line x1="80" y1="10" x2="80" y2="50" stroke="#00F0FF" strokeWidth="1" />
            
            {/* Connection nodes */}
            <circle cx="30" cy="20" r="3" fill="#00F0FF" />
            <circle cx="40" cy="20" r="2" fill="#00F0FF" />
            <circle cx="60" cy="50" r="3" fill="#00F0FF" />
            <circle cx="70" cy="50" r="2" fill="#00F0FF" />
            <circle cx="20" cy="80" r="3" fill="#00F0FF" />
            <circle cx="50" cy="80" r="2" fill="#00F0FF" />
            <circle cx="20" cy="30" r="2" fill="#00F0FF" />
            <circle cx="50" cy="40" r="2" fill="#00F0FF" />
            <circle cx="80" cy="50" r="3" fill="#00F0FF" />
            
            {/* Small corner pieces */}
            <path d="M 30 20 L 30 30 L 40 30" fill="none" stroke="#00F0FF" strokeWidth="1" />
            <path d="M 60 50 L 60 60 L 70 60" fill="none" stroke="#00F0FF" strokeWidth="1" />
            <path d="M 80 10 L 90 10 L 90 20" fill="none" stroke="#00F0FF" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
      
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  )
}

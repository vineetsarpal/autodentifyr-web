"use client"

export function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-cyan/20 blur-3xl rounded-full opacity-30" />
      
      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-card rounded-[3rem] border-4 border-silver/30 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl z-20" />
        
        {/* Screen content */}
        <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a]">
          {/* Car image area */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Scanning line animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-cyan/40 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
            </div>

            {/* Simplified car silhouette with damage detection boxes */}
            <svg
              viewBox="0 0 200 150"
              className="w-full max-w-[90%] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Car body */}
              <path
                d="M20 100 L30 70 L50 50 L80 45 L120 45 L150 50 L170 70 L180 100 L180 110 L20 110 L20 100 Z"
                fill="#2D3748"
                stroke="#4A5568"
                strokeWidth="2"
              />
              {/* Car roof */}
              <path
                d="M50 50 L60 30 L140 30 L150 50"
                fill="#2D3748"
                stroke="#4A5568"
                strokeWidth="2"
              />
              {/* Windows */}
              <path
                d="M55 48 L63 32 L95 32 L95 48 Z"
                fill="#1a202c"
                stroke="#4A5568"
                strokeWidth="1"
              />
              <path
                d="M100 48 L100 32 L137 32 L145 48 Z"
                fill="#1a202c"
                stroke="#4A5568"
                strokeWidth="1"
              />
              {/* Wheels */}
              <circle cx="50" cy="110" r="18" fill="#1a202c" stroke="#4A5568" strokeWidth="2" />
              <circle cx="50" cy="110" r="10" fill="#2D3748" />
              <circle cx="150" cy="110" r="18" fill="#1a202c" stroke="#4A5568" strokeWidth="2" />
              <circle cx="150" cy="110" r="10" fill="#2D3748" />
              
              {/* Damage detection bounding boxes with animation */}
              {/* Front fender dent */}
              <g className="animate-[fadeInScale_1s_ease-out_0.5s_forwards]" style={{ opacity: 0 }}>
                <rect
                  x="28"
                  y="65"
                  width="30"
                  height="35"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="animate-[dashSlide_20s_linear_infinite]"
                />
                <circle cx="43" cy="82" r="3" fill="#00F0FF" className="animate-pulse" />
              </g>
              
              {/* Door scratch */}
              <g className="animate-[fadeInScale_1s_ease-out_1.2s_forwards]" style={{ opacity: 0 }}>
                <rect
                  x="85"
                  y="55"
                  width="45"
                  height="40"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="animate-[dashSlide_20s_linear_infinite]"
                />
                <line x1="90" y1="70" x2="120" y2="85" stroke="#00F0FF" strokeWidth="1.5" className="opacity-60" />
                <circle cx="105" cy="77" r="3" fill="#00F0FF" className="animate-pulse" />
              </g>

              {/* Rear bumper damage */}
              <g className="animate-[fadeInScale_1s_ease-out_1.8s_forwards]" style={{ opacity: 0 }}>
                <rect
                  x="155"
                  y="75"
                  width="20"
                  height="25"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  className="animate-[dashSlide_20s_linear_infinite]"
                />
                <circle cx="165" cy="87" r="3" fill="#00F0FF" className="animate-pulse" />
              </g>
            </svg>
            
            {/* Cost overlay labels with staggered animation */}
            <div className="absolute top-16 left-4 px-2 py-1 bg-cyan/20 backdrop-blur-sm rounded border border-cyan/50 text-xs font-mono text-cyan animate-[fadeInScale_0.8s_ease-out_1s_forwards]" style={{ opacity: 0 }}>
              Headlight: $400
            </div>
            <div className="absolute top-32 right-4 px-2 py-1 bg-cyan/20 backdrop-blur-sm rounded border border-cyan/50 text-xs font-mono text-cyan animate-[fadeInScale_0.8s_ease-out_1.6s_forwards]" style={{ opacity: 0 }}>
              Door: $500
            </div>
            <div className="absolute bottom-20 right-4 px-2 py-1 bg-cyan/20 backdrop-blur-sm rounded border border-cyan/50 text-xs font-mono text-cyan animate-[fadeInScale_0.8s_ease-out_2.2s_forwards]" style={{ opacity: 0 }}>
              Bumper: $550
            </div>
            
            {/* Bottom HUD */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-silver">Detection Active</span>
                <span className="text-cyan flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                  Live Scan
                </span>
              </div>
              <div className="mt-2 h-1 bg-silver/20 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-cyan/0 via-cyan to-cyan/0 animate-[shimmer_2s_ease-in-out_infinite]" />
              </div>
              <p className="mt-1 text-xs text-silver">Confidence: 94.7%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Global animations */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        @keyframes dashSlide {
          to { stroke-dashoffset: -8; }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

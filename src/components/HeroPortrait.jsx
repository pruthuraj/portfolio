export default function HeroPortrait() {
  return (
    <div className="hero-portrait" aria-hidden="true">
      <div className="hp-stage">
        <img src="/portrait.png" alt="" className="hp-img" />

        <svg
          className="hp-drips"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Heavy turbulent displacement so the splash has organic torn edges */}
            <filter id="splashTurb" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.018 0.06"
                numOctaves="3"
                seed="11"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="11s"
                  values="0.018 0.06;0.022 0.07;0.018 0.06"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="58" />
            </filter>

            {/* Vertical streaks — drips */}
            <filter id="dripsTurb" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.6 0.012"
                numOctaves="2"
                seed="3"
              />
              <feDisplacementMap in="SourceGraphic" scale="22" />
            </filter>

            <filter id="softBlur">
              <feGaussianBlur stdDeviation="1.6" />
            </filter>

            {/* Mask localizing splash to upper head only */}
            <mask id="headBand">
              <rect width="600" height="800" fill="black" />
              {/* main blob covering top of head */}
              <ellipse cx="300" cy="190" rx="180" ry="120" fill="white" />
              {/* vertical drip lanes falling down across the face */}
              <rect x="180" y="180" width="240" height="280" fill="white" opacity="0.85" />
            </mask>

            {/* Drip lanes — actual streaks */}
            <linearGradient id="dripFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.85" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="dripStreaks">
              <rect width="600" height="800" fill="black" />
              <g fill="url(#dripFade)" filter="url(#dripsTurb)">
                <rect x="200" y="150" width="22" height="320" />
                <rect x="240" y="170" width="14" height="280" />
                <rect x="270" y="160" width="30" height="380" />
                <rect x="310" y="170" width="20" height="340" />
                <rect x="340" y="160" width="34" height="400" />
                <rect x="380" y="180" width="18" height="300" />
                <rect x="408" y="170" width="12" height="260" />
              </g>
            </mask>
          </defs>

          {/* Splash — solid red shape with torn edges, masked to head band */}
          <g mask="url(#headBand)">
            <g filter="url(#splashTurb)">
              <rect x="100" y="80" width="400" height="320" fill="#E03030" />
              <rect x="160" y="160" width="300" height="240" fill="#a51a1a" />
            </g>
          </g>

          {/* Drips — vertical streaks falling from splash */}
          <g mask="url(#dripStreaks)" filter="url(#softBlur)">
            <rect x="0" y="0" width="600" height="800" fill="#E03030" />
          </g>
        </svg>

        <div className="hp-vignette" />
        <div className="hp-grain" />
      </div>
    </div>
  )
}

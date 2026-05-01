import { useId } from 'react'

export default function BleedingName({ first, last }) {
  const uid = useId().replace(/:/g, '')
  const ids = {
    textTear: `textTear-${uid}`,
    bleedRough: `bleedRough-${uid}`,
    bleedMask: `bleedMask-${uid}`,
    dripPattern: `dripPattern-${uid}`,
    fade: `bleedFade-${uid}`,
    bottomWipe: `bleedBottomWipe-${uid}`,
  }

  const view = { w: 1500, h: 760 }
  const font = 'Playfair Display, serif'
  const size = 238
  const x = 0
  const y1 = 230
  const y2 = 488
  const copies = [18, 42, 76, 118, 170, 230, 300]

  const lineProps = {
    x,
    fontFamily: font,
    fontWeight: 900,
    fontSize: size,
    letterSpacing: '-0.028em',
  }

  return (
    <div className="bleed-wrap">
      <svg
        className="bleed-svg"
        viewBox={`0 0 ${view.w} ${view.h}`}
        preserveAspectRatio="xMinYMid meet"
        aria-label={`${first} ${last}`}
        role="img"
      >
        <defs>
          <filter id={ids.textTear} x="-6%" y="-12%" width="112%" height="138%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.016 0.18"
              numOctaves="2"
              seed="8"
            />
            <feDisplacementMap in="SourceGraphic" scale="8" />
          </filter>

          <filter id={ids.bleedRough} x="-10%" y="-10%" width="120%" height="150%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.42 0.012"
              numOctaves="3"
              seed="14"
            />
            <feDisplacementMap in="SourceGraphic" scale="34" />
          </filter>

          <linearGradient id={ids.fade} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="62%" stopColor="white" stopOpacity="0.86" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id={ids.bottomWipe}
            x1="0"
            y1="560"
            x2="0"
            y2="720"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="1" />
          </linearGradient>

          <pattern
            id={ids.dripPattern}
            x="0"
            y="-40"
            width="150"
            height={view.h + 160}
            patternUnits="userSpaceOnUse"
          >
            <g filter={`url(#${ids.bleedRough})`}>
              <rect x="6" y="0" width="22" height={view.h + 160} fill="#E03030" />
              <rect x="36" y="0" width="10" height={view.h + 80} fill="#9f1717" />
              <rect x="52" y="0" width="30" height={view.h + 170} fill="#E03030" />
              <rect x="91" y="0" width="14" height={view.h + 20} fill="#b51b1b" />
              <rect x="113" y="0" width="26" height={view.h + 150} fill="#E03030" />
            </g>
          </pattern>

          <mask id={ids.bleedMask} maskUnits="userSpaceOnUse">
            <rect width={view.w} height={view.h} fill="black" />
            <g fill="white">
              <text {...lineProps} y={y1}>{first}</text>
              <text {...lineProps} y={y2} fontStyle="italic">{last}</text>
            </g>
            <g className="bleed-mask-drop" fill={`url(#${ids.fade})`}>
              {copies.map((dy, index) => (
                <g key={dy} opacity={1 - index * 0.105} transform={`translate(0 ${dy})`}>
                  <text {...lineProps} y={y1}>{first}</text>
                  <text {...lineProps} y={y2} fontStyle="italic">{last}</text>
                </g>
              ))}
            </g>
            <rect x="0" y="560" width={view.w} height="200" fill={`url(#${ids.bottomWipe})`} />
          </mask>
        </defs>

        <g mask={`url(#${ids.bleedMask})`} className="bleed-red-layer">
          <rect
            className="bleed-sheet"
            x="-160"
            y="-80"
            width={view.w + 320}
            height={view.h + 260}
            fill={`url(#${ids.dripPattern})`}
          />
          <g className="bleed-long-streaks" filter={`url(#${ids.bleedRough})`} opacity="0.72">
            <rect x="56" y="120" width="18" height="560" fill="#E03030" />
            <rect x="158" y="190" width="11" height="430" fill="#961515" />
            <rect x="275" y="145" width="25" height="600" fill="#E03030" />
            <rect x="446" y="165" width="15" height="530" fill="#b51b1b" />
            <rect x="575" y="120" width="28" height="650" fill="#E03030" />
            <rect x="748" y="178" width="13" height="500" fill="#a11717" />
            <rect x="890" y="138" width="24" height="610" fill="#E03030" />
            <rect x="1048" y="196" width="14" height="460" fill="#9f1717" />
            <rect x="1175" y="150" width="26" height="590" fill="#E03030" />
          </g>
        </g>

        <g className="bleed-cream-layer" filter={`url(#${ids.textTear})`}>
          <text {...lineProps} y={y1}>{first}</text>
          <text {...lineProps} y={y2} fontStyle="italic" opacity="0.9">{last}</text>
        </g>
      </svg>
    </div>
  )
}

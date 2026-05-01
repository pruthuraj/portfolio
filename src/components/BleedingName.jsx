/**
 * Hero name with red paint-bleed effect.
 *
 * Single SVG so the text and the bleed are aligned by construction.
 * Composition (back → front in z order):
 *   1. Drip pattern (vertical streaks, red) clipped by a mask whose
 *      shape is the text + a downward-extruded copy of the text.
 *   2. The same text rendered in cream on top.
 */
export default function BleedingName({ first, last }) {
  const VIEW_W = 1400
  const VIEW_H = 760

  // Glyph rendering settings (must match between mask + visible text)
  const FONT = 'Playfair Display, serif'
  const SIZE = 240
  const X = 0
  const Y1 = 220
  const Y2 = 470

  return (
    <div className="bleed-wrap">
      <svg
        className="bleed-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMinYMid meet"
        aria-label={`${first} ${last}`}
      >
        <defs>
          <filter id="dripDisp" x="-5%" y="-5%" width="110%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55 0.008"
              numOctaves="2"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="14s"
                values="0.55 0.008;0.7 0.012;0.55 0.008"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="38" />
          </filter>

          <filter id="tearText" x="-5%" y="-10%" width="110%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.025 0.6" numOctaves="2" seed="9" />
            <feDisplacementMap in="SourceGraphic" scale="10" />
          </filter>

          <pattern id="dripCols" x="0" y="0" width="120" height={VIEW_H} patternUnits="userSpaceOnUse">
            <g filter="url(#dripDisp)">
              <rect x="6"  y="0" width="14" height={VIEW_H} fill="#E03030" />
              <rect x="28" y="0" width="8"  height={VIEW_H - 80} fill="#a51a1a" />
              <rect x="42" y="0" width="22" height={VIEW_H} fill="#E03030" />
              <rect x="72" y="0" width="10" height={VIEW_H - 120} fill="#c01c1c" />
              <rect x="88" y="0" width="20" height={VIEW_H} fill="#E03030" />
            </g>
          </pattern>

          {/* Mask: white = visible. Built from the text shape itself + several
              downward-translated copies that fade out, creating an extrusion
              that the drip pattern can flow through. */}
          <mask id="bleedMask" maskUnits="userSpaceOnUse">
            <rect width={VIEW_W} height={VIEW_H} fill="black" />
            <g
              fontFamily={FONT}
              fontWeight="900"
              fontSize={SIZE}
              letterSpacing="-0.025em"
              fill="white"
            >
              {/* Original glyph shapes */}
              <text x={X} y={Y1}>{first}</text>
              <text x={X} y={Y2} fontStyle="italic">{last}</text>

              {/* Extruded copies — drip downward, fading */}
              {[20, 50, 90, 140, 200, 260].map((dy, i) => (
                <g key={i} opacity={1 - i * 0.13} transform={`translate(0, ${dy})`}>
                  <text x={X} y={Y1}>{first}</text>
                  <text x={X} y={Y2} fontStyle="italic">{last}</text>
                </g>
              ))}
            </g>
          </mask>
        </defs>

        {/* Red bleed: drip pattern clipped to the text-extrusion mask */}
        <g mask="url(#bleedMask)">
          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#dripCols)" />
        </g>

        {/* The actual cream name text on top, with subtle torn-edge displacement */}
        <g
          fontFamily={FONT}
          fontWeight="900"
          fontSize={SIZE}
          letterSpacing="-0.025em"
          fill="var(--cream, #F0E8D8)"
          filter="url(#tearText)"
        >
          <text x={X} y={Y1}>{first}</text>
          <text x={X} y={Y2} fontStyle="italic" opacity="0.92">{last}</text>
        </g>
      </svg>
    </div>
  )
}

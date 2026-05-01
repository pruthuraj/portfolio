import { useId } from 'react'

export default function HeroPortrait() {
  const uid = useId().replace(/:/g, '')
  const photoSrc = `${import.meta.env.BASE_URL}me.jpg`
  const ids = {
    redPhoto: `profileRedPhoto-${uid}`,
    darkPhoto: `profileDarkPhoto-${uid}`,
    tornDisplace: `profileTornDisplace-${uid}`,
    dripDisplace: `profileDripDisplace-${uid}`,
    headMask: `profileHeadMask-${uid}`,
    headMaskTorn: `profileHeadMaskTorn-${uid}`,
    dripMask: `profileDripMask-${uid}`,
    dripFade: `profileDripFade-${uid}`,
    staticNoise: `profileStaticNoise-${uid}`,
  }

  const imageProps = {
    href: photoSrc,
    x: -12,
    y: -10,
    width: 624,
    height: 820,
    preserveAspectRatio: 'xMidYMid slice',
  }

  return (
    <div className="hero-portrait" aria-hidden="true">
      <div className="hp-stage">
        <img src={photoSrc} alt="" className="hp-img" />

        <svg
          className="hp-drips"
          viewBox="0 0 600 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id={ids.redPhoto} colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="
                  1.55 0.22 0.12 0 0.03
                  0.08 0.10 0.04 0 0
                  0.03 0.02 0.02 0 0
                  0 0 0 1 0"
              />
              <feComponentTransfer>
                <feFuncR type="gamma" amplitude="1.2" exponent="0.76" offset="0" />
                <feFuncG type="gamma" amplitude="0.7" exponent="1.2" offset="0" />
                <feFuncB type="gamma" amplitude="0.45" exponent="1.25" offset="0" />
              </feComponentTransfer>
            </filter>

            <filter id={ids.darkPhoto} colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="
                  0.32 0.16 0.08 0 0
                  0.06 0.05 0.04 0 0
                  0.04 0.03 0.03 0 0
                  0 0 0 1 0"
              />
              <feComponentTransfer>
                <feFuncR type="gamma" amplitude="0.75" exponent="1.45" offset="0" />
                <feFuncG type="gamma" amplitude="0.5" exponent="1.55" offset="0" />
                <feFuncB type="gamma" amplitude="0.45" exponent="1.55" offset="0" />
              </feComponentTransfer>
            </filter>

            <filter id={ids.tornDisplace} x="-12%" y="-16%" width="124%" height="136%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.018 0.11"
                numOctaves="4"
                seed="15"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="8s"
                  values="0.018 0.11;0.026 0.14;0.018 0.11"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="48" />
            </filter>

            <filter id={ids.dripDisplace} x="-16%" y="-12%" width="132%" height="150%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.88 0.018"
                numOctaves="3"
                seed="27"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="6s"
                  values="0.88 0.018;0.66 0.026;0.88 0.018"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="34" />
            </filter>

            <filter id={ids.headMaskTorn} x="-14%" y="-20%" width="128%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.032 0.16" numOctaves="3" seed="6" />
              <feDisplacementMap in="SourceGraphic" scale="46" />
            </filter>

            <filter id={ids.staticNoise} x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="2" seed="31" />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncA type="table" tableValues="0 0.42" />
              </feComponentTransfer>
            </filter>

            <mask id={ids.headMask} maskUnits="userSpaceOnUse">
              <rect width="600" height="800" fill="black" />
              <g fill="white" filter={`url(#${ids.headMaskTorn})`}>
                <ellipse cx="300" cy="205" rx="205" ry="136" />
                <rect x="118" y="192" width="365" height="185" opacity="0.9" />
              </g>
            </mask>

            <linearGradient id={ids.dripFade} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="42%" stopColor="white" stopOpacity="0.86" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id={ids.dripMask} maskUnits="userSpaceOnUse">
              <rect width="600" height="800" fill="black" />
              <g fill={`url(#${ids.dripFade})`} filter={`url(#${ids.dripDisplace})`}>
                <rect x="118" y="210" width="42" height="260" />
                <rect x="171" y="178" width="25" height="355" />
                <rect x="212" y="192" width="54" height="430" />
                <rect x="284" y="164" width="30" height="380" />
                <rect x="330" y="186" width="60" height="455" />
                <rect x="414" y="198" width="34" height="340" />
                <rect x="462" y="216" width="22" height="280" />
              </g>
              <g fill="white" opacity="0.34" filter={`url(#${ids.headMaskTorn})`}>
                <rect x="144" y="268" width="320" height="120" />
              </g>
            </mask>
          </defs>

          <g className="hp-photo-bleed">
            <g className="hp-head-tear" mask={`url(#${ids.headMask})`} filter={`url(#${ids.tornDisplace})`}>
              <image {...imageProps} filter={`url(#${ids.darkPhoto})`} opacity="0.58" />
              <image {...imageProps} filter={`url(#${ids.redPhoto})`} opacity="0.86" />
            </g>

            <g className="hp-bleed-streams" mask={`url(#${ids.dripMask})`}>
              <image
                {...imageProps}
                className="hp-stream hp-stream-red hp-stream-a"
                filter={`url(#${ids.redPhoto})`}
                opacity="0.92"
              />
              <image
                {...imageProps}
                className="hp-stream hp-stream-red hp-stream-b"
                filter={`url(#${ids.redPhoto})`}
                opacity="0.7"
              />
              <image
                {...imageProps}
                className="hp-stream hp-stream-dark hp-stream-c"
                filter={`url(#${ids.darkPhoto})`}
                opacity="0.82"
              />
            </g>

            <rect className="hp-noise-sheet" width="600" height="800" filter={`url(#${ids.staticNoise})`} />
          </g>
        </svg>

        <div className="hp-vignette" />
        <div className="hp-grain" />
      </div>
    </div>
  )
}

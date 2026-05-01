export default function NoiseOverlay() {
  return (
    <>
      <svg
        aria-hidden="true"
        style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}
      >
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.94
                    0 0 0 0 0.91
                    0 0 0 0 0.85
                    0 0 0 0.55 0"
          />
        </filter>
      </svg>
      <div className="noise" aria-hidden="true" />
      <style>{`
        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9000;
          mix-blend-mode: overlay;
          opacity: 0.55;
          filter: url(#grain);
          background: transparent;
        }
        .noise::before {
          content: '';
          position: absolute;
          inset: 0;
          backdrop-filter: contrast(1) brightness(1);
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.94 0 0 0 0 0.91 0 0 0 0 0.85 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }
      `}</style>
    </>
  )
}

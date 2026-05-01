const items = ['Available for select work', 'Brand · Web · Motion', 'Independent practice', 'Based everywhere']

export default function Marquee() {
  const track = (
    <div className="marquee-track" aria-hidden="true">
      {[...items, ...items, ...items, ...items].map((t, i) => (
        <span key={i}>
          {t}
          <span className="red"> ● </span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" role="presentation">
      {track}
    </div>
  )
}

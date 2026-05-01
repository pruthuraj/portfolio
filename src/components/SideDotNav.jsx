export default function SideDotNav({ active, sections }) {
  return (
    <nav className="dotnav" aria-label="Section navigation">
      {sections.map((s, i) => (
        <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <a href={`#${s.id}`} className={i === active ? 'active' : ''} aria-label={s.label} data-hover>
            <span className="dot" />
          </a>
          {i < sections.length - 1 && <span className="line" aria-hidden="true" />}
        </div>
      ))}
    </nav>
  )
}

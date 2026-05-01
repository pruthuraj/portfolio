import { aboutCopy, stats, skills } from '../data/content.js'

export default function About() {
  return (
    <div>
      <span className="section-label">About — Studio</span>

      <div className="about-grid">
        <div>
          <h2 className="lead reveal">
            Quiet design,<br />
            considered code.
          </h2>
          <div className="stats reveal delay-1">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="v">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-copy">
          {aboutCopy.map((p, i) => (
            <p key={i} className="reveal delay-2">{p}</p>
          ))}
          <ul className="skills reveal delay-3" aria-label="Skills">
            {skills.map((s) => (
              <li key={s.name}>
                <span>{s.name}</span>
                <span className="bar" style={{ '--lvl': `${s.level}%` }} />
                <span className="num">{String(s.level).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

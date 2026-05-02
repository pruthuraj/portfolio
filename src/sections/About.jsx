import { aboutCopy, stats, skillGroups, education } from '../data/content.js'

export default function About() {
  return (
    <div>
      <span className="section-label">About - Profile</span>

      <div className="about-grid">
        <div>
          <h2 className="lead reveal">
            ML pipelines,<br />
            reliable systems.
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

          <div className="education reveal delay-3" aria-label="Education">
            {education.map((e) => (
              <div key={e.degree} className="edu-item">
                <span className="edu-degree">{e.degree}</span>
                <span className="edu-inst">
                  {e.institution} · {e.period}{e.note ? ` · ${e.note}` : ''}
                </span>
              </div>
            ))}
          </div>

          <div className="skill-groups reveal delay-3" aria-label="Skills">
            {skillGroups.map((g) => (
              <div key={g.category} className="skill-group">
                <span className="skill-cat">{g.category}</span>
                <div className="skill-tags">
                  {g.tools.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

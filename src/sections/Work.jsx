import { projects } from '../data/content.js'

export default function Work() {
  return (
    <div>
      <span className="section-label">Work - Selected</span>

      <div className="work-intro reveal">
        <h2>
          Selected<br />
          <em>projects.</em>
        </h2>
        <span className="meta">{`01 / ${String(projects.length).padStart(2, '0')}`}</span>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <article key={p.n} className="project reveal" data-hover>
            <div className="ghost" aria-hidden="true">{p.title.toUpperCase()}</div>
            <div className="project-inner">
              <div className="project-meta">
                <span className="num">{p.n}</span>
                <span>{p.year}</span>
                <span>{p.role}</span>
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <p className="blurb">{p.blurb}</p>
              </div>
              <div className="project-cta">
                <a
                  className="circle"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${p.title} on GitHub`}
                  data-hover
                >
                  ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

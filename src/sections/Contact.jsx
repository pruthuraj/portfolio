import { identity } from '../data/content.js'

export default function Contact() {
  return (
    <div className="contact">
      <span className="section-label">Contact - Roles</span>

      <div className="eyebrow reveal">{identity.availability}</div>
      <h2 className="reveal delay-1">
        Build<br />
        <em>with me.</em>
      </h2>
      <a className="email reveal delay-2" href={`mailto:${identity.email}`} data-hover>
        {identity.email}
      </a>

      <div className="socials reveal delay-3">
        {identity.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-hover>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { identity } from '../data/content.js'
import HeroPortrait from '../components/HeroPortrait.jsx'

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIdx((i) => (i + 1) % identity.roles.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="hero">
      <span className="section-label">Index - Hero</span>
      <span className="vertical-counter">01 / 04</span>
      <HeroPortrait />

      <div className="hero-copy">
        <div className="tag-row reveal">
          <span className="tag">MSc - Frankfurt</span>
        </div>

        <h1 className="name">
          <span className="line-1">{identity.fullName.first}</span>
          <span className="line-2">{identity.fullName.last}</span>
        </h1>

        <div className="footer">
          <p className="tagline reveal delay-3">{identity.tagline}</p>
          <a
            className="cv-dl reveal delay-3"
            href="/portfolio/current_cv.pdf"
            target="_blank"
            rel="noreferrer"
            data-hover
          >
            Download CV ↓
          </a>
          <ul className="roles" aria-label="Disciplines">
            {identity.roles.map((r, i) => (
              <li key={r} className={i === roleIdx ? 'active-role' : ''}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

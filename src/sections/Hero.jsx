import { useEffect, useState } from 'react'
import { identity } from '../data/content.js'
import BleedingName from '../components/BleedingName.jsx'

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
      <span className="section-label">Index — Hero</span>
      <span className="vertical-counter">01 / 04</span>

      <div className="tag-row reveal">
        <span className="tag">Portfolio — 2026</span>
      </div>

      <BleedingName
        first={identity.fullName.first}
        last={identity.fullName.last}
      />

      <div className="footer">
        <p className="tagline reveal delay-3">{identity.tagline}</p>
        <ul className="roles" aria-label="Disciplines">
          {identity.roles.map((r, i) => (
            <li key={r} className={i === roleIdx ? 'active-role' : ''}>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

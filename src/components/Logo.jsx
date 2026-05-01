import { identity } from '../data/content.js'

export default function Logo() {
  return (
    <a href="#hero" className="logo" data-hover>
      <span>{identity.initials}</span>
      <span className="dot">.</span>
    </a>
  )
}

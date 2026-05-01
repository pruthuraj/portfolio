export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <span>© {year} — Studio</span>
      <span className="center">Version 0.1 · Built with care</span>
      <span className="right">No cookies. No trackers.</span>
    </footer>
  )
}

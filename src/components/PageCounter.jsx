export default function PageCounter({ current, total }) {
  const pad = (n) => String(n + 1).padStart(2, '0')
  return (
    <div className="page-counter" aria-live="polite">
      <span className="current">{pad(current)}</span>
      <span className="sep" aria-hidden="true" />
      <span className="total">{String(total).padStart(2, '0')}</span>
    </div>
  )
}

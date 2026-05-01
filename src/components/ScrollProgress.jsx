import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      const h = document.documentElement
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)
      if (ref.current) ref.current.style.height = `${pct * 100}%`
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="scroll-progress" ref={ref} aria-hidden="true" />
}

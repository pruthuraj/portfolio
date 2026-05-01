import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 900px)').matches) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let raf = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`
      }
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      }
      if (Math.abs(mx - rx) > 0.3 || Math.abs(my - ry) > 0.3) {
        raf = requestAnimationFrame(loop)
      } else {
        raf = 0
      }
    }

    const onOver = (e) => {
      const t = e.target
      if (t.closest && t.closest('a, button, [data-hover]')) {
        ringRef.current?.classList.add('expanded')
      }
    }
    const onOut = (e) => {
      const t = e.target
      if (t.closest && t.closest('a, button, [data-hover]')) {
        ringRef.current?.classList.remove('expanded')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}

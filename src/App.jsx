import { useEffect, useRef, useState } from 'react'
import NoiseOverlay from './components/NoiseOverlay.jsx'
import Logo from './components/Logo.jsx'
import TopNav from './components/TopNav.jsx'
import SideDotNav from './components/SideDotNav.jsx'
import Divider from './components/Divider.jsx'
import PageCounter from './components/PageCounter.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Cursor from './components/Cursor.jsx'
import Hero from './sections/Hero.jsx'
import Marquee from './sections/Marquee.jsx'
import Work from './sections/Work.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import { sections } from './data/content.js'

export default function App() {
  const [activeIdx, setActiveIdx] = useState(0)
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === e.target)
            if (idx !== -1) setActiveIdx(idx)
          }
        })
      },
      { threshold: 0.5 },
    )
    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const setRef = (i) => (el) => (sectionRefs.current[i] = el)

  return (
    <>
      <Cursor />
      <NoiseOverlay />
      <Logo />
      <TopNav />
      <SideDotNav active={activeIdx} sections={sections} />
      <Divider />
      <PageCounter current={activeIdx} total={sections.length} />
      <ScrollProgress />

      <main>
        <section id="hero" ref={setRef(0)} className="section">
          <Hero />
        </section>
        <Marquee />
        <section id="work" ref={setRef(1)} className="section">
          <Work />
        </section>
        <section id="about" ref={setRef(2)} className="section">
          <About />
        </section>
        <section id="contact" ref={setRef(3)} className="section">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  )
}

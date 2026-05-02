import { useEffect, useState } from 'react'
import heroImg from '../assets/hero.png'

const NAV_ITEMS = [
  { href: '#apropos',  label: 'À propos' },
  { href: '#concerts', label: 'Concerts' },
  { href: '#stream',   label: 'Stream' },
  { href: '#videos',   label: 'Vidéos' },
  { href: '#photos',   label: 'Photos' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    // On observe chaque section — dès qu'elle occupe au moins 30% de l'écran, elle devient active
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ href }) => {
      const id = href.slice(1) // retire le #
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <>
      {/* Hero — pleine largeur */}
      <header className="relative w-full overflow-hidden border-b-2 border-[#1A1A1A]">
        <div className="relative h-[280px] md:h-[560px] w-full bg-[#1A1A1A]">
          <img
            src={heroImg}
            alt="Antenox sur scène"
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          />
          {/* Overlay dégradé */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E5E5E5]" />

          {/* Nom du groupe */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 md:gap-2">
            <p className="font-mono text-[#E5E5E5] text-[10px] md:text-sm tracking-[0.4em] uppercase opacity-70">
              Rock Alternatif
            </p>
            <h1
              className="font-display text-[clamp(3.5rem,14vw,14rem)] leading-none text-[#E5E5E5] select-none"
              style={{ textShadow: '4px 4px 0px #2D4B73, 8px 8px 0px rgba(0,0,0,0.3)' }}
            >
              ANTENOX
            </h1>
            <p className="font-mono text-[#2D4B73] text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase">
              ── Depuis 2019 ──
            </p>
          </div>
        </div>
      </header>

      {/* Nav sticky — frère du <header> pour que sticky fonctionne */}
      <nav className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-[#2D4B73]">
        <div className="site-wrapper">
          <ul className="flex items-center justify-evenly md:justify-center gap-2 md:gap-6 px-4 overflow-x-auto">
            {NAV_ITEMS.map(({ href, label }) => {
              const id = href.slice(1)
              const isActive = activeSection === id
              return (
                <li key={href} className="shrink-0">
                  <a
                    href={href}
                    className={`nav-link font-mono text-xs md:text-sm tracking-widest uppercase
                                px-4 md:px-6 py-8 border-b-2 border-transparent
                                ${isActive ? 'is-active' : ''}`}
                  >
                    <span>{label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

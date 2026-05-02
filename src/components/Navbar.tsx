import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#apropos',  label: 'À propos' },
  { href: '#concerts', label: 'Concerts' },
  { href: '#stream',   label: 'Streams' },
  { href: '#videos',   label: 'Vidéos' },
  { href: '#photos',   label: 'Photos' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('apropos')

  useEffect(() => {
    const NAV_HEIGHT = 60

    function onScroll() {
      // Récupère toutes les sections dans l'ordre du DOM
      const sections = NAV_ITEMS.map(({ href }) => {
        const id = href.slice(1)
        const el = document.getElementById(id)
        return el ? { id, top: el.getBoundingClientRect().top } : null
      }).filter(Boolean) as { id: string; top: number }[]

      // La section active est la dernière dont le haut est au-dessus
      // du milieu de l'écran (en tenant compte de la nav)
      const midpoint = window.innerHeight / 2

      let current = sections[0].id
      for (const section of sections) {
        if (section.top <= midpoint + NAV_HEIGHT) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initialisation au montage

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Filtre SVG pour l'effet "tracé à la main" */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="nav-rough" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <nav className="sticky top-0 z-50 bg-[#1A1A1A] border-b border-[#2D4B73]">
        <div className="site-wrapper">
          <ul className="flex items-center justify-evenly md:justify-center md:gap-6 px-4">
            {NAV_ITEMS.map(({ href, label }) => {
              const id = href.slice(1)
              const isActive = activeSection === id

              return (
                <li key={href}>
                  <a href={href} className="nav-link" aria-current={isActive ? 'page' : undefined}>
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

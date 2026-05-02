import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#apropos',  label: 'À PROPOS' },
  { href: '#concerts', label: 'CONCERTS' },
  { href: '#stream',   label: 'STREAMS' },
  // { href: '#videos',   label: 'VIDÉOS' },
  // { href: '#photos',   label: 'PHOTOS' },
  // { href: '#contact',  label: 'CONTACT' },
  { href: '#documents', label: 'DOCUMENTS' },
]

// Icônes SVG inline pour le menu burger
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('apropos')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const NAV_HEIGHT = 80

    function onScroll() {
      const sections = NAV_ITEMS.map(({ href }) => {
        const id = href.slice(1)
        const el = document.getElementById(id)
        return el ? { id, top: el.getBoundingClientRect().top } : null
      }).filter(Boolean) as { id: string; top: number }[]

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
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className="sticky top-0 z-50 bg-[#E5E5E5] border-b-[3px] border-[#1A1A1A]
                 shadow-[0_6px_0_0_rgba(26,26,26,0.3)]
                 backdrop-blur-[2px] bg-opacity-95"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="site-wrapper">
        <div className="flex items-center justify-between px-4 py-4 md:py-5">
          {/* Logo "tamponné" */}
          <a
            href="#apropos"
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#1A1A1A] opacity-5 rotate-[-2deg] rounded-[2px]" />
            <h1 className="relative font-display text-4xl md:text-5xl text-[#1A1A1A]
                           leading-none tracking-tight
                           hover:skew-x-[-2deg] transition-transform duration-150
                           select-none">
              ANTENOX
            </h1>
            {/* Effet tampon rouge */}
            <div className="absolute -bottom-1 -right-1 w-16 h-16 border-[3px] border-[#ff0000]
                            rounded-full opacity-20 rotate-[15deg] pointer-events-none" />
          </a>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex items-center gap-3">
            {NAV_ITEMS.map(({ href, label }) => {
              const id = href.slice(1)
              const isActive = activeSection === id

              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`
                      relative block px-4 py-2 
                      font-mono text-xs font-black uppercase tracking-[0.15em]
                      border-2 rounded-[2px]
                      transition-all duration-150
                      hover:rotate-[-0.5deg] hover:translate-y-[-2px]
                      active:translate-y-[1px]
                      ${isActive 
                        ? 'text-[#E5E5E5] bg-[#1A1A1A] border-[#1A1A1A] shadow-[4px_4px_0_0_rgba(26,26,26,0.4)]' 
                        : 'text-[#1A1A1A] bg-[#E5E5E5] border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#E5E5E5] shadow-[2px_2px_0_0_rgba(26,26,26,0.3)] hover:shadow-[3px_3px_0_0_rgba(26,26,26,0.4)]'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {/* Barre accent pour le lien actif */}
                    {isActive && (
                      <span className="absolute top-0 left-0 right-0 h-[3px] bg-[#2D4B73]" />
                    )}

                    <span className="relative z-10">
                      {label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Menu Burger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2 border-2 border-[#1A1A1A] rounded-[2px]
                       bg-[#1A1A1A] text-[#E5E5E5]
                       hover:bg-[#2D4B73] hover:border-[#2D4B73]
                       active:translate-y-[2px]
                       shadow-[3px_3px_0_0_rgba(26,26,26,0.4)]
                       active:shadow-[1px_1px_0_0_rgba(26,26,26,0.4)]
                       transition-all duration-150"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Menu Mobile Déroulant */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-[#1A1A1A] bg-[#1A1A1A] bg-opacity-95
                         shadow-[0_8px_0_0_rgba(26,26,26,0.5)]
                         animate-[slideDown_0.2s_ease-out]">
            <ul className="flex flex-col p-4 gap-2">
              {NAV_ITEMS.map(({ href, label }) => {
                const id = href.slice(1)
                const isActive = activeSection === id

                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={handleLinkClick}
                      className={`
                        relative block px-4 py-3
                        font-mono text-sm font-black uppercase tracking-[0.15em]
                        border-2 rounded-[2px]
                        transition-all duration-150
                        hover:translate-x-[4px]
                        active:translate-x-[2px]
                        ${isActive
                          ? 'text-[#1A1A1A] bg-[#E5E5E5] border-[#E5E5E5] shadow-[4px_4px_0_0_rgba(229,229,229,0.3)]'
                          : 'text-[#E5E5E5] bg-transparent border-[#3a3a3a] hover:border-[#E5E5E5] hover:bg-[#2D4B73]'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[60%] bg-[#2D4B73] rounded-r-full" />
                      )}
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

import SectionLabel from '../SectionLabel'
import { FaSpotify, FaApple, FaDeezer, FaYoutube } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const PLATFORMS: Array<{ name: string; href: string; color: string; icon: IconType }> = [
  { name: 'Spotify',       href: 'https://open.spotify.com/intl-fr/artist/4ZpeelFSXU5c2wtESb0ZHB?si=-rC3I57JTbOfduoGSgFutQ', color: '#1DB954', icon: FaSpotify },
  { name: 'Apple Music',   href: 'https://music.apple.com/fr/artist/antenox/1715163085', color: '#fc3c44', icon: FaApple },
  { name: 'Deezer',        href: 'https://www.deezer.com/fr/artist/241848561', color: '#a238ff', icon: FaDeezer },
  { name: 'YouTube Music', href: 'https://www.youtube.com/channel/UCkb4RzKBEuFTUXcXxHRrogQ', color: '#ff0000', icon: FaYoutube },
]

export default function SectionStream() {
  return (
    <section id="stream" aria-labelledby="stream-title">
      <SectionLabel>03</SectionLabel>
      <h2 id="stream-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        STREAMS
      </h2>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {PLATFORMS.map((p) => {
          const Icon = p.icon
          return (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 min-w-[160px] flex items-center justify-between gap-4 p-4
                         border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#E5E5E5]
                         hover:bg-[#E5E5E5] hover:text-[#1A1A1A] hover:border-[#1A1A1A]
                         transition-all duration-200 hover:rotate-[-0.5deg] hover:scale-[1.02]
                         shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                         hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.4)]"
            >
              <span className="font-mono text-sm uppercase tracking-widest font-bold">{p.name}</span>
              <Icon
                className="w-7 h-7 shrink-0 transition-all duration-200 group-hover:rotate-[5deg]"
                style={{ color: p.color }}
              />
            </a>
          )
        })}
      </div>
    </section>
  )
}

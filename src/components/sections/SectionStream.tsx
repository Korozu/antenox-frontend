import SectionLabel from '../SectionLabel'

const PLATFORMS = [
  { name: 'Spotify',       href: '#', color: '#1DB954' },
  { name: 'Apple Music',   href: '#', color: '#fc3c44' },
  { name: 'Bandcamp',      href: '#', color: '#1da0c3' },
  { name: 'SoundCloud',    href: '#', color: '#ff5500' },
  { name: 'Deezer',        href: '#', color: '#a238ff' },
  { name: 'YouTube Music', href: '#', color: '#ff0000' },
]

export default function SectionStream() {
  return (
    <section id="stream" aria-labelledby="stream-title">
      <SectionLabel>03</SectionLabel>
      <h2 id="stream-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        STREAM
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {PLATFORMS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 p-5
                       border-2 border-[#1A1A1A] bg-[#E5E5E5]
                       hover:bg-[#1A1A1A] hover:text-[#E5E5E5]
                       transition-colors duration-200"
          >
            <span className="font-display text-2xl tracking-wide">{p.name}</span>
            <span
              className="w-3 h-3 rounded-full shrink-0 group-hover:scale-125 transition-transform"
              style={{ background: p.color }}
            />
          </a>
        ))}
      </div>
    </section>
  )
}


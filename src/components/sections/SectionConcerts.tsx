import SectionLabel from '../SectionLabel'
import { CONCERTS } from '../../data/concerts'

export default function SectionConcerts() {
  return (
    <section id="concerts" aria-labelledby="concerts-title">
      <SectionLabel>02</SectionLabel>
      <h2 id="concerts-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        CONCERTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONCERTS.map((c) => {
          const d = new Date(c.date)
          return (
            <div key={c.id} className="flyer-card p-5 flex flex-col gap-2">
              <div className="font-display text-5xl leading-none text-[#2D4B73]">
                {d.toLocaleDateString('fr-FR', { day: '2-digit' })}
              </div>
              <div className="font-mono text-[10px] text-[#E5E5E5] tracking-widest uppercase">
                {d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </div>
              <hr className="border-[#3a3a3a] my-1" />
              <p className="font-display text-2xl leading-tight text-[#E5E5E5]">{c.venue}</p>
              <p className="font-mono text-xs text-[#7a7a7a]">{c.city}, {c.country}</p>
              {c.ticketUrl ? (
                <a
                  href={c.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block font-mono text-[10px] tracking-widest uppercase
                             text-center py-2 px-3 border border-[#2D4B73] text-[#3d6399]
                             hover:bg-[#2D4B73] hover:text-white transition-colors"
                >
                  Billets →
                </a>
              ) : (
                <span className="mt-auto font-mono text-[10px] text-[#3a3a3a] uppercase tracking-widest">
                  Billetterie bientôt
                </span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}


import { useTranslation } from 'react-i18next'
import SectionLabel from '../SectionLabel'
import ConcertCard from '../ConcertCard'
import PastConcerts from '../PastConcerts'
import StickyNote from '../StickyNote'
import { CONCERTS } from '../../data/concerts'

function todayStr() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export default function SectionConcertsWithNotes() {
  const { t } = useTranslation()
  const sorted = [...CONCERTS].sort((a, b) => a.date.localeCompare(b.date))
  const today = todayStr()
  const upcoming = sorted.filter(c => c.date >= today)
  const past = sorted.filter(c => c.date < today).reverse()

  // Couleurs alternées pour les post-its
  const colors: Array<'yellow' | 'blue' | 'pink' | 'gray'> = ['yellow', 'blue', 'pink']
  // Rotations variées pour un effet naturel
  const rotations = [1.5, -1.2, 0.8, -1.8, 1.3, -0.9]

  return (
    <section id="concerts" aria-labelledby="concerts-title">
      <SectionLabel>{t('concerts.section')}</SectionLabel>
      <h2 id="concerts-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        {t('concerts.title')}
      </h2>

      {/* Concerts à venir — cartes en post-it */}
      {upcoming.length > 0 ? (
        <>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a]">
              — {t('concerts.upcoming')}
            </span>
            <div className="flex-1 border-t border-dashed border-[#3a3a3a]" />
            <span className="font-mono text-xs text-[#3a3a3a]">{upcoming.length}</span>
          </div>

          {/* Grille de post-its responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {upcoming.map((concert, index) => (
              <StickyNote
                key={concert.id}
                color={colors[index % colors.length]}
                rotation={rotations[index % rotations.length]}
                tapeColor={index % 2 === 0 ? 'light' : 'dark'}
              >
                <ConcertCard concert={concert} />
              </StickyNote>
            ))}
          </div>
        </>
      ) : (
        <StickyNote color="yellow" rotation={-1.5}>
          <p className="font-handwriting text-lg text-[#1A1A1A] text-center">
            {t('concerts.no_upcoming')}
          </p>
        </StickyNote>
      )}

      {/* Concerts passés */}
      <PastConcerts concerts={past} />
    </section>
  )
}


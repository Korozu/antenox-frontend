import { useTranslation } from 'react-i18next'
import SectionLabel from '../SectionLabel'
import ConcertCard from '../ConcertCard'
import PastConcerts from '../PastConcerts'
import { CONCERTS } from '../../data/concerts'

function todayStr() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export default function SectionConcerts() {
  const { t } = useTranslation()
  const sorted = [...CONCERTS].sort((a, b) => a.date.localeCompare(b.date))
  const today = todayStr()
  const upcoming = sorted.filter(c => c.date >= today)
  const past = sorted.filter(c => c.date < today).reverse()

  return (
    <section id="concerts" aria-labelledby="concerts-title">
      <SectionLabel>{t('concerts.section')}</SectionLabel>
      <h2 id="concerts-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        {t('concerts.title')}
      </h2>

      {/* Concerts à venir — cartes */}
      {upcoming.length > 0 ? (
        <>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a]">
              — {t('concerts.upcoming')}
            </span>
            <div className="flex-1 border-t border-dashed border-[#3a3a3a]" />
            <span className="font-mono text-xs text-[#3a3a3a]">{upcoming.length}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 auto-rows-fr">
            {upcoming.map(c => <ConcertCard key={c.id} concert={c} />)}
          </div>
        </>
      ) : (
        <p className="font-mono text-sm text-[#7a7a7a] uppercase tracking-widest mb-12">
          {t('concerts.no_upcoming')}
        </p>
      )}

      {/* Concerts passés */}
      <PastConcerts concerts={past} />
    </section>
  )
}

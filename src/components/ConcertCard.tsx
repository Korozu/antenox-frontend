import { useTranslation } from 'react-i18next'
import type { Concert } from '../data/concerts'

interface ConcertCardProps {
  concert: Concert
}

function ConcertFooter({ concert: c }: Readonly<{ concert: Concert }>) {
  const { t } = useTranslation()

  if (c.isFree) {
    return (
      <p className="font-mono text-xs text-[#E5E5E5] uppercase tracking-widest text-center py-3 border border-[#E5E5E5]">
        {t('concerts.free_entry')}
      </p>
    )
  }
  if (c.ticketUrl) {
    return (
      <a
        href={c.ticketUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t('concerts.tickets')} - ${c.venue} ${c.city}`}
        className="block w-full text-center font-mono text-xs tracking-widest uppercase
                   py-3 px-4 bg-[#E5E5E5] text-[#1A1A1A] hover:bg-white transition-colors duration-150"
      >
        {t('concerts.tickets')} →
      </a>
    )
  }
  return (
    <p className="font-mono text-xs text-[#7a7a7a] uppercase tracking-widest text-center py-3">
      {t('concerts.tickets_soon')}
    </p>
  )
}

export default function ConcertCard({ concert: c }: Readonly<ConcertCardProps>) {
  const { t, i18n } = useTranslation()
  const d = new Date(c.date + 'T00:00:00')
  const locale = i18n.language === 'fr' ? 'fr-FR' : 'en-US'

  return (
    <article
      aria-label={`${t('concerts.upcoming_concert')}: ${c.venue}, ${c.city}`}
      className="flex flex-col flyer-card transition-opacity duration-200 w-[calc(25%-12px)] min-w-[220px]"
    >
      {/* En-tête */}
      <div className="bg-white p-4 flex items-start justify-between gap-4">
        <div>
          <span className="font-display text-6xl leading-none text-[#1A1A1A]">
            {d.toLocaleDateString(locale, { day: '2-digit' })}
          </span>
          <p className="font-mono text-xs text-[#1A1A1A] tracking-widest uppercase mt-1">
            {d.toLocaleDateString(locale, { month: 'long', year: 'numeric' })}
          </p>
        </div>
        <span className="font-mono text-xs font-bold text-[#1A1A1A] border border-[#1A1A1A] px-2 py-1">
          {c.country}
        </span>
      </div>

      {/* Corps */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <p className="font-display text-2xl leading-tight text-[#E5E5E5]">{c.venue}</p>
        <p className="font-mono text-sm text-[#c8c8c8]">{c.city}</p>
      </div>

      {/* Pied */}
      <div className="px-4 pb-4">
        <ConcertFooter concert={c} />
      </div>
    </article>
  )
}

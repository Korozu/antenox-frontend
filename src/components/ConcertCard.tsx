import { useTranslation } from 'react-i18next'
import type { Concert } from '../data/concerts'

interface ConcertCardProps {
  concert: Concert
}

function ConcertFooter({ concert: c }: Readonly<{ concert: Concert }>) {
  const { t } = useTranslation()

  if (c.isFree) {
    return (
      <p className="font-typewriter text-xs text-[#1A1A1A] uppercase tracking-widest text-center py-2 border-2 border-dashed border-[#1A1A1A]">
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
        className="block w-full text-center font-typewriter text-xs tracking-widest uppercase
                   py-2 px-4 bg-[#1A1A1A] text-white hover:bg-[#3a3a3a]
                   transition-colors duration-150 border-2 border-[#1A1A1A]
                   shadow-[2px_2px_0_0_rgba(26,26,26,0.3)]"
      >
        {t('concerts.tickets')} →
      </a>
    )
  }
  return (
    <p className="font-handwriting text-sm text-[#3a3a3a] text-center py-2">
      {t('concerts.tickets_soon')}
    </p>
  )
}

export default function ConcertCard({ concert: c }: ConcertCardProps) {
  const { t, i18n } = useTranslation()
  const d = new Date(c.date + 'T00:00:00')
  const locale = i18n.language === 'fr' ? 'fr-FR' : 'en-US'

  return (
    <article
      aria-label={`${t('concerts.upcoming_concert')}: ${c.venue}, ${c.city}`}
      className="flex flex-col h-full"
    >
      {/* En-tête - style tampon */}
      <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b-2 border-dashed border-[#1A1A1A]">
        <div>
          <span className="font-display text-5xl leading-none text-[#1A1A1A] block">
            {d.toLocaleDateString(locale, { day: '2-digit' })}
          </span>
          <p className="font-typewriter text-[10px] text-[#1A1A1A] tracking-wider uppercase mt-1">
            {d.toLocaleDateString(locale, { month: 'short', year: 'numeric' })}
          </p>
        </div>
        <span className="font-typewriter text-[9px] font-bold text-[#1A1A1A] border-2 border-[#1A1A1A] px-2 py-1 rotate-12">
          {c.country}
        </span>
      </div>

      {/* Corps - style manuscrit */}
      <div className="flex flex-col gap-2 flex-1 mb-4">
        <p className="font-handwriting text-2xl leading-tight text-[#1A1A1A]">
          {c.venue}
        </p>
        <p className="font-typewriter text-xs text-[#3a3a3a] tracking-wide">
          📍 {c.city}
        </p>
      </div>

      {/* Pied */}
      <div>
        <ConcertFooter concert={c} />
      </div>
    </article>
  )
}

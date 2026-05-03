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
      className="flex flex-col flyer-card transition-opacity duration-200 h-full"
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
      <div className="flex flex-col gap-2 p-4 h-32">
        <p className="font-display text-2xl leading-tight text-[#E5E5E5] line-clamp-2">{c.venue}</p>
        <p className="font-mono text-sm text-[#c8c8c8]">{c.city}</p>
      </div>

      {/* Pied - toujours à la même position */}
      <div className="px-4 pb-4 mt-auto">
        <div className="flex flex-col gap-2">
          {/* Lien Facebook Event d'abord */}
          {c.facebookEventUrl ? (
            <a
              href={c.facebookEventUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t('concerts.facebook_event')} - ${c.venue} ${c.city}`}
              className="flex items-center justify-center gap-2 w-full text-center font-mono text-xs tracking-widest uppercase
                         py-3 px-4 bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors duration-150
                         border-2 border-[#1877F2] hover:border-[#166FE5]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              {t('concerts.facebook_event')}
            </a>
          ) : (
            <div className="h-[49px]" aria-hidden="true"></div>
          )}

          {/* Puis le bouton de billetterie */}
          <ConcertFooter concert={c} />
        </div>
      </div>
    </article>
  )
}

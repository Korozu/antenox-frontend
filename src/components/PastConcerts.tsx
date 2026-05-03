import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Concert } from '../data/concerts'

interface PastConcertsProps {
  concerts: Concert[]
}

export default function PastConcerts({ concerts }: PastConcertsProps) {
  const { t, i18n } = useTranslation()
  const years = [...new Set(concerts.map(c => c.date.slice(0, 4)))].sort((a, b) => b.localeCompare(a))
  const [selectedYear, setSelectedYear] = useState<string>('all')

  if (concerts.length === 0) return null

  const filtered = selectedYear === 'all' ? concerts : concerts.filter(c => c.date.startsWith(selectedYear))

  return (
    <div className="mt-16">
      {/* Titre section */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a]">
          — {t('concerts.past')}
        </span>
        <div className="flex-1 border-t border-dashed border-[#3a3a3a]" />
        <span className="font-mono text-xs text-[#3a3a3a]">{concerts.length}</span>
      </div>

      {/* Filtres année */}
      <div className="flex gap-2 mb-3 flex-wrap">
        <button
          onClick={() => setSelectedYear('all')}
          className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border transition-colors
            ${selectedYear === 'all'
              ? 'bg-[#E5E5E5] text-[#1A1A1A] border-[#E5E5E5]'
              : 'bg-transparent text-[#7a7a7a] border-[#3a3a3a] hover:border-[#7a7a7a] hover:text-[#a0a0a0]'}`}
        >
          {t('concerts.all')}
        </button>
        {years.map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border transition-colors
              ${selectedYear === year
                ? 'bg-[#E5E5E5] text-[#1A1A1A] border-[#E5E5E5]'
                : 'bg-transparent text-[#7a7a7a] border-[#3a3a3a] hover:border-[#7a7a7a] hover:text-[#a0a0a0]'}`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* En-têtes colonnes - masqué sur mobile */}
      <div className="hidden md:grid md:grid-cols-[160px_1fr_1fr] gap-x-6 px-0 py-2 mb-0 border-b border-[#555555] bg-[#1A1A1A]">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] ml-2">
          {t('concerts.date')}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] ml-2">
          {t('concerts.venue')}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9A9A9A] ml-2">
          {t('concerts.city')}
        </span>
      </div>

      <div className="max-h-[300px] overflow-y-auto">
        <ul className="flex flex-col">
          {filtered.map((c, i) => {
            const d = new Date(c.date + 'T00:00:00')
            const locale = i18n.language === 'fr' ? 'fr-FR' : 'en-US'
            const day = d.toLocaleDateString(locale, { day: '2-digit' })
            const month = d.toLocaleDateString(locale, { month: 'short' }).toUpperCase().replace('.', '')
            const year = d.getFullYear()

            return (
              <li
                key={c.id}
                className={`flex flex-col md:grid md:grid-cols-[160px_1fr_1fr] gap-x-6 group
                  ${i % 2 === 0 ? 'bg-[#2A2A2A]' : 'bg-[#333333]'}
                  ${i !== filtered.length - 1 ? 'border-b border-[#444444]' : ''}
                  hover:bg-[#3D3D3D] transition-colors`}
              >
                {/* Date */}
                <div className="py-3 px-3 md:pr-6 md:px-0 shrink-0 md:ml-2 flex items-baseline gap-2">
                  <span className="font-display text-xl leading-none text-[#D4D4D4] group-hover:text-[#FFFFFF] transition-colors">
                    {day}
                  </span>
                  <span className="font-mono text-[10px] text-[#9A9A9A] group-hover:text-[#C8C8C8] transition-colors uppercase tracking-widest">
                    {month} {year}
                  </span>
                </div>

                {/* Venue */}
                <div className="py-0 md:py-3 px-3 md:px-0">
                  <span className="font-mono text-sm text-[#E5E5E5] group-hover:text-[#FFFFFF] transition-colors md:ml-2">
                    {c.venue}
                  </span>
                </div>

                {/* Ville */}
                <div className="py-0 pb-3 md:py-3 px-3 md:px-0">
                  <span className="font-mono text-xs text-[#9A9A9A] group-hover:text-[#C8C8C8] transition-colors md:ml-2">
                    {c.city}
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

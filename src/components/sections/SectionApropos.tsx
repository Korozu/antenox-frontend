import { useTranslation } from 'react-i18next'
import SectionLabel from '../SectionLabel'
import MusicianCard from '../MusicianCard'
import StickyNote from '../StickyNote'
import { MUSICIANS } from '../../data/musicians'

export default function SectionApropos() {
  const { t } = useTranslation()

  return (
    <section id="apropos" aria-labelledby="apropos-title">
      <SectionLabel>{t('about.section')}</SectionLabel>
      <h2 id="apropos-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-12">
        {t('about.title')}
      </h2>

      {/* Présentation du groupe en post-it */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-20 md:mb-28">
        <div className="flex-1">
          <StickyNote color="yellow" rotation={-1} tapeColor="light">
            <div className="space-y-4 font-typewriter text-sm leading-relaxed text-[#1A1A1A]">
              <p dangerouslySetInnerHTML={{ __html: t('about.intro_p1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.intro_p2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.intro_p3') }} />
            </div>
          </StickyNote>
        </div>

        {/* Citation en post-it rose */}
          {/*<div className="flex-1">
          <StickyNote color="pink" rotation={1.5} tapeColor="dark">
            <blockquote className="font-handwriting text-2xl md:text-3xl text-[#1A1A1A] leading-tight">
              "Le bruit est la seule honnêteté qui reste."
              <cite className="block font-typewriter text-xs text-[#3a3a3a] mt-4 not-italic tracking-wider uppercase">
                — Kael, 2023
              </cite>
            </blockquote>
          </StickyNote>

        </div>*/}
      </div>

      {/* Séparateur avec style grunge */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#c8c8c8] to-transparent" />
        <span className="font-typewriter text-[11px] text-[#7a7a7a] tracking-[0.4em] uppercase shrink-0
                       border-2 border-dashed border-[#7a7a7a] px-3 py-1">
          {t('about.musicians_separator')}
        </span>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#c8c8c8] to-transparent" />
      </div>

      {/* Fiches musiciens — alternance photo / texte */}
      <div className="flex flex-col gap-16 md:gap-20">
        {MUSICIANS.map((m, i) => (
          <MusicianCard key={m.name} musician={m} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}

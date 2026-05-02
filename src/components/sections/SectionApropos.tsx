import { useTranslation } from 'react-i18next'
import SectionLabel from '../SectionLabel'
import MusicianCard from '../MusicianCard'
import { MUSICIANS } from '../../data/musicians'

export default function SectionApropos() {
  const { t } = useTranslation()

  return (
    <section id="apropos" aria-labelledby="apropos-title">
      <SectionLabel>{t('about.section')}</SectionLabel>
      <h2 id="apropos-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-12">
        {t('about.title')}
      </h2>

      {/* Présentation du groupe */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-20 md:mb-28">
        <div className="flex flex-col gap-5 flex-1 font-mono text-sm leading-relaxed text-[#1A1A1A]">
          <p dangerouslySetInnerHTML={{ __html: t('about.intro_p1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.intro_p2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.intro_p3') }} />
        </div>
        <blockquote className="hidden flex-1 border-l-4 border-[#2D4B73] pl-5 font-display text-2xl md:text-4xl text-[#2D4B73] leading-tight">
          {`"Le bruit est la seule honnêteté qui reste."`}
          <cite className="block font-mono text-xs text-[#7a7a7a] mt-4 not-italic tracking-widest uppercase">
            {`— Kael, 2023`}
          </cite>
        </blockquote>
      </div>

      {/* Séparateur */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-[#c8c8c8]" />
        <span className="font-mono text-[11px] text-[#7a7a7a] tracking-[0.4em] uppercase shrink-0">
          {t('about.musicians_separator')}
        </span>
        <div className="flex-1 h-px bg-[#c8c8c8]" />
      </div>

      {/* Fiches musiciens — alternance photo / texte */}
      <div className="my=10 flex flex-col gap-10">
        {MUSICIANS.map((m, i) => (
          <MusicianCard key={m.name} musician={m} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}

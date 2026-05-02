import SectionLabel from '../SectionLabel'
import MusicianCard from '../MusicianCard'
import { MUSICIANS } from '../../data/musicians'

export default function SectionApropos() {
  return (
    <section id="apropos" aria-labelledby="apropos-title">
      <SectionLabel>01</SectionLabel>
      <h2 id="apropos-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-12">
        À PROPOS
      </h2>

      {/* Présentation du groupe */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-28">
        <div className="space-y-5 font-mono text-sm leading-relaxed text-[#1A1A1A]">
          <p>
            <strong>ANTENOX</strong> est un groupe de rock alternatif fondé en 2019 à Paris,
            à l'intersection du post-punk industriel, du noise rock et des atmosphères
            électroniques corrosives.
          </p>
          <p>
            Leur son — brut, tendu, constamment en équilibre entre l'effondrement et la
            maîtrise — s'est forgé au fil de centaines de concerts en club et de trois
            albums autoproduits.
          </p>
          <p>
            Trois albums, une tournée européenne et des centaines de scènes plus tard,
            le groupe continue de repousser les limites de ce que le rock peut absorber
            sans imploser.
          </p>
        </div>
        <blockquote className="border-l-4 border-[#2D4B73] pl-5 font-display text-2xl md:text-4xl text-[#2D4B73] leading-tight">
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
          Les musiciens
        </span>
        <div className="flex-1 h-px bg-[#c8c8c8]" />
      </div>

      {/* Fiches musiciens — alternance photo / texte */}
      <div className="space-y-16 md:space-y-20">
        {MUSICIANS.map((m, i) => (
          <MusicianCard key={m.name} musician={m} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}


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
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center mb-20 md:mb-28">
        <div className="flex flex-col gap-5 flex-1 font-mono text-sm leading-relaxed text-[#1A1A1A]">
          <p>
              <strong>ANTENOX</strong>, c’est une décharge d’<strong>énergie brute</strong>.
              Le groupe balance un <strong>rock alternatif</strong> nerveux, entre <strong>punk</strong> et <strong>grunge</strong>, avec des
              grosses <strong>guitares saturées</strong>, des <strong>ambiances planantes</strong> et une rythmique bien vénère.
          </p>
          <p>
              Chaque live est un <strong>moment intense</strong> et sans
              filtre, où le public est embarqué dans la
              tempête. Pas de barrière, pas de frime –
              juste une <strong>grosse claque sonore</strong> et une belle sueur collective.
          </p>
          <p>
              Formé en décembre 2022 à Lille, <strong>ANTENOX</strong> réunit <strong>Victor</strong> (chant/guitare), <strong>Rémi</strong> (guitare/chœurs), <strong>Alexandre</strong> (basse) et <strong>Marion</strong> (batterie) autour d’un <strong>son puissant</strong> et
              sans détour. Le groupe compose et
              enregistre tout en <strong>home studio</strong>, à l’instinct,
              avec les moyens du bord et <strong>beaucoup de cœur</strong>. Après un an de création, ils montent
              sur scène en <strong>décembre 2023</strong> au <strong>Black Lab</strong> (Wasquehal) et sortent leur premier single <strong>Airplane</strong>. En 2024, ils enchaînent avec <strong>Bored
              Inside</strong> et multiplient les dates entre les <strong>Hauts-de-France</strong> et la <strong>Belgique</strong>.
          </p>
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
          Les musiciens
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

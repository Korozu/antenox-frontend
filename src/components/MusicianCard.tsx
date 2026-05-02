import { useTranslation } from 'react-i18next'
import type { Musician } from '../data/musicians'

interface MusicianCardProps {
  musician: Musician
  reverse?: boolean
}

export default function MusicianCard({ musician, reverse = false }: MusicianCardProps) {
  const { t } = useTranslation()

  // Déterminer la clé de traduction basée sur le nom du musicien
  const musicianKey = musician.name.toLowerCase()

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>

      {/* Photo */}
      <div className="w-full md:w-1/3 shrink-0">
        <img
          src={musician.photo}
          alt={musician.name}
          loading="lazy"
          className="w-full aspect-[3/4] object-cover grayscale border-2 border-[#1A1A1A]"
        />
      </div>

      {/* Texte */}
      <div className="flex-1 flex flex-col justify-center gap-4 py-2">
        <div>
          <p className="font-display text-5xl md:text-6xl leading-none text-[#1A1A1A]">
            {musician.name}
          </p>
          <p className="font-mono text-xs text-[#2D4B73] tracking-[0.3em] uppercase mt-1">
            {t(`musicians.${musicianKey}.role`)}
          </p>
        </div>

        <p className="font-mono text-sm leading-relaxed text-[#1A1A1A]">
          {t(`musicians.${musicianKey}.bio`)}
        </p>

        {musician.quote && (
          <blockquote className="border-l-4 border-[#1A1A1A] font-display text-xl md:text-2xl text-[#1A1A1A] leading-snug pl-4">
            {t(`musicians.${musicianKey}.quote`)}
          </blockquote>
        )}
      </div>

    </div>
  )
}

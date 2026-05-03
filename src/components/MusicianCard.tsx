import { useTranslation } from 'react-i18next'
import type { Musician } from '../data/musicians'

interface MusicianCardProps {
  musician: Musician
  reverse?: boolean
}

export default function MusicianCard({ musician, reverse = false }: Readonly<MusicianCardProps>) {
  const { t } = useTranslation()

  // Déterminer la clé de traduction basée sur le nom du musicien
  const musicianKey = musician.name.toLowerCase()

  // Rotations variées pour chaque musicien
  const rotations = [2, -1.5, 1.8, -2]
  const musicianIndex = ['vic', 'marion', 'alex', 'rem'].indexOf(musicianKey)
  const rotation = rotations[musicianIndex] || 0

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>

      {/* Photo style Polaroid avec scotch */}
      <div className="w-full md:w-1/3 shrink-0">
        <div
          className="relative transition-all duration-300 hover:rotate-0 hover:scale-105"
          style={{
            rotate: `${rotation}deg`,
            transformOrigin: 'center center'
          }}
        >
          {/* Effet de ruban adhésif (scotch) */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8
                       bg-white/40
                       backdrop-blur-[2px]
                       border border-white/20
                       shadow-sm
                       -rotate-2
                       z-10"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
            }}
          />

          {/* Cadre Polaroid blanc */}
          <div className="bg-white p-3 pb-8 shadow-xl border border-[#d9d9d9]">
            <img
              src={musician.photo}
              alt={musician.name}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover grayscale"
              style={{
                filter: 'contrast(1.1) brightness(0.95)'
              }}
            />
            {/* Légende manuscrite en bas - style Polaroid */}
            <p className="font-handwriting text-lg text-center text-[#1A1A1A] mt-3">
              {musician.name}
            </p>
          </div>
        </div>
      </div>

      {/* Texte avec effets grunge subtils */}
      <div className="flex-1 flex flex-col justify-center gap-4 py-2">
        {/* Nom et rôle */}
        <div>
          <p className="font-display text-5xl md:text-6xl leading-none text-[#1A1A1A]">
            {musician.name}
          </p>
          {/* Rôle style étiquette déchirée/tag */}
          <div className="relative inline-flex items-center gap-2 mt-2">
            {/* Barre verticale style marqueur */}
            <div className="w-1 h-4 bg-[#2D4B73] -rotate-12" />
            <p className="font-mono text-xs text-[#2D4B73] tracking-[0.3em] uppercase font-bold">
              {t(`musicians.${musicianKey}.role`)}
            </p>
            {/* Trait de soulignement irrégulier */}
            <div className="absolute -bottom-1 left-6 right-0 h-[1px] bg-[#2D4B73]/30" />
          </div>
        </div>

        {/* Bio simple */}
        <p className="font-mono text-sm leading-relaxed text-[#1A1A1A]">
          {t(`musicians.${musicianKey}.bio`)}
        </p>

        {/* Citation avec trait de marqueur diagonal */}
        {musician.quote && (
          <div className="relative mt-2">
            {/* Trait de marqueur diagonal en fond */}
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-[#2D4B73]/60 -rotate-2" />

            <blockquote className="pl-6 pr-2">
              <p className="font-display text-xl md:text-2xl text-[#1A1A1A] leading-tight italic relative">
                {/* Guillemets discrets */}
                <span className="text-[#2D4B73]/40">"</span>
                {t(`musicians.${musicianKey}.quote`)}
                <span className="text-[#2D4B73]/40">"</span>
              </p>
            </blockquote>
          </div>
        )}
      </div>

    </div>
  )
}

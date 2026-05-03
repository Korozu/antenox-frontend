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
  const musicianIndex = ['clément', 'mathis', 'erwan', 'antoine'].indexOf(musicianKey)
  const rotation = rotations[musicianIndex] || 0

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>

      {/* Photo avec scotch */}
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

          {/* Photo avec ombre portée */}
          <div className="bg-white p-3 shadow-xl border border-[#d9d9d9]">
            <img
              src={musician.photo}
              alt={musician.name}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover grayscale"
              style={{
                filter: 'contrast(1.1) brightness(0.95)'
              }}
            />
            {/* Légende manuscrite sous la photo - style Polaroid */}
            <p className="font-handwriting text-lg text-center text-[#1A1A1A] mt-2 pt-1">
              {musician.name}
            </p>
          </div>
        </div>
      </div>

      {/* Texte avec style post-it */}
      <div className="flex-1 flex flex-col justify-center gap-5 py-2">
        {/* Nom et rôle avec style tampon */}
        <div className="border-b-2 border-dashed border-[#1A1A1A] pb-4">
          <p className="font-display text-5xl md:text-6xl leading-none text-[#1A1A1A]">
            {musician.name}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-typewriter text-[10px] text-[#1A1A1A] tracking-[0.3em] uppercase border-2 border-[#2D4B73] px-2 py-1 inline-block rotate-1">
              {t(`musicians.${musicianKey}.role`)}
            </span>
          </div>
        </div>

        {/* Bio avec style manuscrit */}
        <div className="space-y-3">
          <p className="font-mono text-sm leading-relaxed text-[#1A1A1A]">
            {t(`musicians.${musicianKey}.bio`)}
          </p>
        </div>

        {/* Citation en post-it style */}
        {musician.quote && (
          <div className="mt-2 relative">
            {/* Petit scotch décoratif sur la citation */}
            <div
              className="absolute -top-2 -left-2 w-16 h-5
                         bg-yellow-200/30
                         backdrop-blur-[1px]
                         border border-yellow-300/20
                         shadow-sm
                         rotate-12
                         z-10"
            />
            <blockquote className="relative bg-[#FFF4A3]/20 border-l-4 border-dashed border-[#1A1A1A]
                                   font-handwriting text-xl md:text-2xl text-[#1A1A1A] leading-snug
                                   pl-4 pr-3 py-3 italic -rotate-1
                                   shadow-sm">
              "{t(`musicians.${musicianKey}.quote`)}"
            </blockquote>
          </div>
        )}
      </div>

    </div>
  )
}

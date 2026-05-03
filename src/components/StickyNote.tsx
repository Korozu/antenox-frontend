import { type ReactNode } from 'react'

type StickyNoteColor = 'yellow' | 'blue' | 'gray' | 'pink'

interface StickyNoteProps {
  children: ReactNode
  color?: StickyNoteColor
  rotation?: number
  className?: string
  tapeColor?: 'light' | 'dark'
}

const colorClasses: Record<StickyNoteColor, string> = {
  yellow: 'bg-[#FFF4A3] border-[#E5D985]',
  blue: 'bg-[#A8D8EA] border-[#8FBFD6]',
  gray: 'bg-[#D9D9D9] border-[#B8B8B8]',
  pink: 'bg-[#FFB6C1] border-[#E89AA6]',
}

const tapeClasses: Record<string, string> = {
  light: 'bg-white/40',
  dark: 'bg-gray-400/30',
}

export default function StickyNote({
  children,
  color = 'yellow',
  rotation = 0,
  className = '',
  tapeColor = 'light',
}: StickyNoteProps) {
  return (
    <div
      className={`relative transition-all duration-300 hover:rotate-0 hover:scale-105 ${className}`}
      style={{
        rotate: `${rotation}deg`,
        transformOrigin: 'center center'
      }}
    >
      {/* Effet de ruban adhésif (scotch) */}
      <div
        className={`absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 
                   ${tapeClasses[tapeColor]} 
                   backdrop-blur-[2px] 
                   border border-white/20
                   shadow-sm
                   -rotate-2
                   z-10`}
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
        }}
      />

      {/* Le papier/post-it */}
      <div
        className={`relative
                   ${colorClasses[color]}
                   border-2 
                   rounded-sm
                   p-6 md:p-8
                   shadow-lg hover:shadow-xl
                   transition-shadow duration-300
                   font-['Courier_New',_'Courier',_monospace]`}
        style={{
          // Texture papier légère
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

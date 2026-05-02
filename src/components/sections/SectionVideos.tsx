import SectionLabel from '../SectionLabel'
import { VIDEOS } from '../../data/videos'

export default function SectionVideos() {
  return (
    <section id="videos" aria-labelledby="videos-title">
      <SectionLabel>04</SectionLabel>
      <h2 id="videos-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-8">
        VIDÉOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {VIDEOS.map((v) => (
          <div key={v.id} className="flex flex-col gap-2">
            <div className="relative aspect-video bg-[#1A1A1A] overflow-hidden border-2 border-[#1A1A1A]">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="font-mono text-sm text-[#1A1A1A] font-bold leading-tight">
              {v.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}


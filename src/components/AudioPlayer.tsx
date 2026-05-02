import { useCallback, useEffect, useRef, useState } from 'react'
import type { Track } from '../data/tracks'

export type { Track }

interface AudioPlayerProps {
  tracks: Track[]
  /** Index de la piste à jouer au montage */
  initialTrackIndex?: number
}

/* ──────────────────────────────────────────
   Helpers
────────────────────────────────────────── */
function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

/* ──────────────────────────────────────────
   Icônes inline (SVG) — aucune dépendance
────────────────────────────────────────── */
const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8 5v14l11-7z" />
  </svg>
)
const IconPause = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)
const IconPrev = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
  </svg>
)
const IconNext = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5 4V8l-5.5 4zM16 6h2v12h-2z" />
  </svg>
)
const IconVolume = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
  </svg>
)

/* ──────────────────────────────────────────
   Composant principal
────────────────────────────────────────── */
export default function AudioPlayer({ tracks, initialTrackIndex = 0 }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [trackIndex, setTrackIndex] = useState<number>(initialTrackIndex)
  const [isPlaying, setIsPlaying]   = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration]     = useState<number>(0)
  const [volume, setVolume]         = useState<number>(0.8)

  const currentTrack: Track | undefined = tracks[trackIndex]

  /* Changer de piste */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return
    audio.src = currentTrack.url
    audio.load()
    if (isPlaying) {
      audio.play().catch((err) => {
        console.error('Failed to play on track change:', err)
        setIsPlaying(false)
      })
    }
    setCurrentTime(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackIndex, currentTrack])

  /* Volume */
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime)
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) setDuration(audioRef.current.duration)
  }, [])

  const handleEnded = useCallback(() => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex((i) => i + 1)
    } else {
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }, [trackIndex, tracks.length])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) {
      console.log('Audio element not found')
      return
    }

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error('Play failed:', error)
          setIsPlaying(false)
        })
    }
  }, [isPlaying])

  const seekTo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (audioRef.current) audioRef.current.currentTime = value
    setCurrentTime(value)
  }, [])

  const prev = useCallback(() => {
    setTrackIndex((i) => Math.max(0, i - 1))
    setIsPlaying(true)
  }, [])

  const next = useCallback(() => {
    setTrackIndex((i) => Math.min(tracks.length - 1, i + 1))
    setIsPlaying(true)
  }, [tracks.length])

  if (!currentTrack) return null

  return (
    <section
      className="audio-player fixed bottom-0 left-0 right-0 z-[10000]
                 flex flex-col md:flex-row items-center gap-1 md:gap-3 px-3 md:px-8 py-1 md:py-2"
      aria-label="Lecteur audio"
    >
      {/* Audio natif — pas de track car c'est de la musique, pas de la vidéo parlée */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Titre mobile - au-dessus sur mobile */}
      <div className="flex md:hidden w-full justify-center mb-0.5">
        <span className="font-mono text-[9px] text-[#E5E5E5] truncate font-bold">
          {currentTrack.title}
        </span>
      </div>

      {/* Titre de la piste - desktop */}
      <div className="hidden md:flex flex-col min-w-[140px] max-w-[200px]">
        <span className="font-mono text-[10px] text-[#3d6399] uppercase tracking-widest truncate">
          {currentTrack.artist ?? 'Antenox'}
        </span>
        <span className="font-mono text-xs text-[#E5E5E5] truncate font-bold">
          {currentTrack.title}
        </span>
      </div>

      {/* Container pour les contrôles et la timeline sur mobile */}
      <div className="flex items-center gap-1.5 md:gap-3 w-full md:flex-1">
        {/* Contrôles */}
        <div className="flex items-center gap-0.5 md:gap-2 shrink-0">
          <button
            onClick={prev}
            disabled={trackIndex === 0}
            aria-label="Piste précédente"
            className="text-[#E5E5E5] hover:text-[#3d6399] disabled:opacity-30 transition-colors p-1.5 md:p-1 -m-1.5 md:m-0"
          >
            <IconPrev />
          </button>

          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Lecture'}
            className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-[#2D4B73] hover:bg-[#3d6399] text-white flex items-center justify-center transition-colors shrink-0 active:scale-95 touch-manipulation"
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>

          <button
            onClick={next}
            disabled={trackIndex === tracks.length - 1}
            aria-label="Piste suivante"
            className="text-[#E5E5E5] hover:text-[#3d6399] disabled:opacity-30 transition-colors p-1.5 md:p-1 -m-1.5 md:m-0"
          >
            <IconNext />
          </button>
        </div>

        {/* Barre de progression */}
        <div className="flex items-center gap-1 md:gap-2 flex-1 min-w-0">
          <span className="font-mono text-[8px] md:text-[10px] text-[#7a7a7a] shrink-0 w-6 md:w-8 text-right">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.5}
            value={currentTime}
            onChange={seekTo}
            aria-label="Progression"
            className="flex-1 h-1 cursor-pointer touch-manipulation"
          />
          <span className="font-mono text-[8px] md:text-[10px] text-[#7a7a7a] shrink-0 w-6 md:w-8">
            {formatTime(duration)}
          </span>
        </div>

        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <IconVolume />
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Volume"
            className="w-20 h-1 cursor-pointer"
          />
        </div>
      </div>
    </section>
  )
}

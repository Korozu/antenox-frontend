export interface Track {
  id: string
  title: string
  artist?: string
  url: string
  duration: number
}

export const TRACKS: Track[] = [
  { id: 'track-01', title: 'Static Pulse',    artist: 'Antenox', url: '/audio/static-pulse.mp3',    duration: 214 },
  { id: 'track-02', title: 'Concrete Waves',  artist: 'Antenox', url: '/audio/concrete-waves.mp3',  duration: 187 },
  { id: 'track-03', title: 'Blue Noise',      artist: 'Antenox', url: '/audio/blue-noise.mp3',      duration: 253 },
]


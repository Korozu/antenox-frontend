export interface Track {
  id: string
  title: string
  artist?: string
  url: string
  duration?: number // Optionnel, sera chargé dynamiquement
}

export const TRACKS: Track[] = [
  { id: 'track-01', title: 'Bored Inside', artist: 'Antenox', url: '/antenox-frontend/audio/bored_inside.mp3' },
  { id: 'track-02', title: 'Airplane', artist: 'Antenox', url: '/antenox-frontend/audio/airplane.mp3' },
]

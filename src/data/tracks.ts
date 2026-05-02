export interface Track {
  id: string
  title: string
  artist?: string
  url: string
  duration?: number // Optionnel, sera chargé dynamiquement
}

export const TRACKS: Track[] = [
  { id: 'track-01', title: 'Bored Inside', artist: 'Antenox', url: '/audio/Bored_Inside.wav' },
  { id: 'track-02', title: 'Airplane', artist: 'Antenox', url: '/audio/AIRPLANE.wav' },
]

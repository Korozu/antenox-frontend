export interface Musician {
  name: string
  role: string
  photo: string
  quote?: string
}

export const MUSICIANS: Musician[] = [
  {
    name: 'Vic',
    role: 'Guitare & Voix',
    photo: 'https://picsum.photos/seed/kael/400/530',
    quote: '"No Worries"',
  },
  {
    name: 'Marion',
    role: 'Batterie',
    photo: 'https://picsum.photos/seed/mira/400/530',
  },
  {
    name: 'Alex',
    role: 'Basse',
    photo: 'https://picsum.photos/seed/dov/400/530'
    },
  {
    name: 'Rem',
    role: 'Guitare & Voix',
    photo: 'https://picsum.photos/seed/nyx/400/530',
  },
]


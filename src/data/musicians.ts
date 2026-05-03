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
    photo: '/photos/musicians/vic.jpg',
    quote: '"No Worries"',
  },
  {
    name: 'Marion',
    role: 'Batterie',
    photo: '/photos/musicians/marion.jpg',
  },
  {
    name: 'Alex',
    role: 'Basse',
    photo: '/photos/musicians/alex.jpg',
    },
  {
    name: 'Rem',
    role: 'Guitare & Voix',
    photo: '/photos/musicians/rem.jpg',
  },
]


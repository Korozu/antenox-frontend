export interface Concert {
  id: string
  date: string
  venue: string
  city: string
  country: string
  ticketUrl?: string
}

export const CONCERTS: Concert[] = [
  { id: 'c1', date: '2025-09-12', venue: 'La Cigale',      city: 'Paris',    country: 'FR', ticketUrl: '#' },
  { id: 'c2', date: '2025-09-19', venue: 'Le Bikini',      city: 'Toulouse', country: 'FR', ticketUrl: '#' },
  { id: 'c3', date: '2025-10-04', venue: "L'Olympia",      city: 'Paris',    country: 'FR', ticketUrl: '#' },
  { id: 'c4', date: '2025-10-18', venue: 'Transbordeur',   city: 'Lyon',     country: 'FR' },
]


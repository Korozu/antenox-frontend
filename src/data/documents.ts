export interface Document {
  id: string
  title: string
  subtitle: string
  fileSize?: string // Optionnel, sera chargé dynamiquement
  url: string
  category: 'rider' | 'stage' | 'tech' | 'press'
}

export const DOCUMENTS: Document[] = [
  {
    id: 'doc-01',
    title: 'FICHE TECHNIQUE',
    subtitle: 'Version 2026',
    url: '/documents/antenox-fiche-technique.pdf',
    category: 'tech'
  },
  {
    id: 'doc-04',
    title: 'PRESS BOOK',
    subtitle: 'Dossier de Presse',
    url: '/documents/antenox-press-book.pdf',
    category: 'press'
  }
]

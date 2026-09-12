export interface Document {
  id: string
  titleKey: string      // Clé i18n pour le titre
  subtitleKey: string   // Clé i18n pour le sous-titre
  fileSize?: string     // Optionnel, sera chargé dynamiquement
  url: string
  category: 'rider' | 'stage' | 'tech' | 'press'
}

export const DOCUMENTS: Document[] = [
  {
    id: 'doc-01',
    titleKey: 'documents.tech_sheet_FR',
    subtitleKey: 'documents.tech_sheet_subtitle',
    url: '/documents/tech-rider-FR.pdf',
    category: 'tech'
  },
  {
    id: 'doc-02',
    titleKey: 'documents.tech_sheet_EN',
    subtitleKey: 'documents.tech_sheet_subtitle',
    url: '/documents/tech-rider-EN.pdf',
    category: 'tech'
  },
  {
    id: 'doc-04',
    titleKey: 'documents.press_book',
    subtitleKey: 'documents.press_book_subtitle',
    url: '/documents/antenox-press-book.pdf',
    category: 'press'
  }
]

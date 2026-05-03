import { useTranslation } from 'react-i18next'
import SectionLabel from '../SectionLabel'
import DocumentCard from '../DocumentCard'
import StickyNote from '../StickyNote'
import { DOCUMENTS } from '../../data/documents'

export default function SectionDocuments() {
  const { t } = useTranslation()

  // Couleurs alternées pour les post-its
  const colors: Array<'yellow' | 'blue' | 'pink' | 'gray'> = ['gray', 'blue', 'yellow']
  // Rotations variées pour un effet naturel
  const rotations = [-1.5, 1.2, -0.8, 1.8, -1.3, 0.9]

  return (
    <section id="documents" aria-labelledby="documents-title">
      <SectionLabel>{t('documents.section')}</SectionLabel>
      <h2 id="documents-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-4">
        {t('documents.title')}
      </h2>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a] mb-8">
        — {t('documents.subtitle')}
      </p>

      {/* Grille de post-its avec documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        {DOCUMENTS.map((doc, index) => (
          <StickyNote
            key={doc.id}
            color={colors[index % colors.length]}
            rotation={rotations[index % rotations.length]}
            tapeColor={index % 2 === 0 ? 'dark' : 'light'}
          >
            <DocumentCard document={doc} />
          </StickyNote>
        ))}
      </div>

      {/* Note légale en post-it gris */}
      <div className="max-w-2xl mx-auto">
        <StickyNote color="gray" rotation={0.5} tapeColor="dark">
          <div className="space-y-2">
            <p className="font-typewriter text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
              ⚠️ {t('documents.note_title')}
            </p>
            <p className="font-typewriter text-[10px] text-[#3a3a3a] leading-relaxed">
              {t('documents.note_text')}
            </p>
          </div>
        </StickyNote>
      </div>
    </section>
  )
}

import { useTranslation } from 'react-i18next'
import SectionLabel from '../SectionLabel'
import DocumentCard from '../DocumentCard'
import ScrollReveal from '../ScrollReveal'
import { DOCUMENTS } from '../../data/documents'

export default function SectionDocuments() {
  const { t } = useTranslation()

  return (
    <section id="documents" aria-labelledby="documents-title">
      <ScrollReveal direction="fade">
        <SectionLabel>{t('documents.section')}</SectionLabel>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 id="documents-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-4">
          {t('documents.title')}
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="fade" delay={150}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a] mb-8">
          — {t('documents.subtitle')}
        </p>
      </ScrollReveal>

      {/* Grille de documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOCUMENTS.map((doc, index) => (
          <ScrollReveal
            key={doc.id}
            direction="up"
            delay={200 + (index * 100)}
          >
            <DocumentCard document={doc} />
          </ScrollReveal>
        ))}
      </div>

      {/* Note légale en bas */}
      <ScrollReveal direction="fade" delay={200}>
        <div className="mt-8 p-4 border-l-4 border-[#2D4B73] bg-[#1A1A1A] bg-opacity-5">
          <p className="font-mono text-[10px] text-[#9a9a9a] leading-relaxed">
            <span className="font-bold text-[#2D4B73] uppercase">{t('documents.note_title')}</span> {t('documents.note_text')}
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}

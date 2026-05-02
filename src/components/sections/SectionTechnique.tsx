import SectionLabel from '../SectionLabel'
import DocumentCard from '../DocumentCard'
import { DOCUMENTS } from '../../data/documents'

export default function SectionDocuments() {
  return (
    <section id="documents" aria-labelledby="documents-title">
      <SectionLabel>06</SectionLabel>
      <h2 id="documents-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-4">
        DOCUMENTS
      </h2>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a] mb-8">
        — Documents Officiels
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOCUMENTS.map((doc) => (
          <DocumentCard key={doc.id} document={doc} />
        ))}
      </div>

      {/* Note légale en bas */}
      <div className="mt-8 p-4 border-l-4 border-[#2D4B73] bg-[#1A1A1A] bg-opacity-5">
        <p className="font-mono text-[10px] text-[#9a9a9a] leading-relaxed">
          <span className="font-bold text-[#2D4B73] uppercase">Note :</span> Ces documents sont destinés aux professionnels du spectacle et de la presse.
          Pour toute question, contactez notre management via la section contact.
        </p>
      </div>
    </section>
  )
}

import { useTranslation } from 'react-i18next'
import { FaFileAlt, FaDownload, FaBook } from 'react-icons/fa'
import type { Document } from '../data/documents'

interface DocumentCardProps {
  document: Document
}

export default function DocumentCard({ document: doc }: DocumentCardProps) {
  const { t } = useTranslation()

  return (
    <article
      className="relative border-2 border-[#1A1A1A] bg-[#E5E5E5] p-5
                 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]
                 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)]
                 transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
    >
      {/* Effet "scotch" en haut à gauche et droite */}
      <div className="absolute -top-2 -left-2 w-12 h-6 bg-[#7a7a7a] opacity-20 rotate-[-8deg]" />
      <div className="absolute -top-2 -right-2 w-12 h-6 bg-[#7a7a7a] opacity-20 rotate-[8deg]" />

      {/* En-tête avec icône */}
      <div className="flex items-start gap-3 mb-4 pb-3 border-b-2 border-dashed border-[#3a3a3a]">
        <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#1A1A1A] text-[#E5E5E5] rounded-sm">
          {doc.category === 'press' ? (
            <FaBook className="w-6 h-6" />
          ) : (
            <FaFileAlt className="w-6 h-6" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl leading-tight text-[#1A1A1A] mb-1">
            {t(doc.titleKey)}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#7a7a7a]">
            {t(doc.subtitleKey)}
          </p>
        </div>
      </div>

      {/* Infos fichier */}
      <div className="mb-4 space-y-1">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#5a5a5a]">
            Format
          </span>
          <span className="font-mono text-xs font-bold text-[#1A1A1A]">
            PDF
          </span>
        </div>
      </div>

      {/* Bouton téléchargement */}
      <a
        href={doc.url}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 w-full py-3 px-4
                   bg-[#1A1A1A] text-[#E5E5E5] border-2 border-[#1A1A1A]
                   font-mono text-xs uppercase tracking-widest font-bold
                   hover:bg-[#2D4B73] hover:border-[#2D4B73]
                   active:translate-y-[2px] active:shadow-none
                   transition-all duration-150
                   shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                   hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)]"
      >
        <FaDownload className="w-3 h-3 group-hover:translate-y-[2px] transition-transform" />
        {t('documents.download')}
      </a>

      {/* Tampon "OFFICIEL" en filigrane */}
      <div className="absolute bottom-3 right-3 opacity-[0.08] pointer-events-none">
        <div className="w-16 h-16 rounded-full border-4 border-[#1A1A1A] flex items-center justify-center rotate-[-12deg]">
          <span className="font-display text-[10px] leading-none">
            OFFICIEL
          </span>
        </div>
      </div>
    </article>
  )
}

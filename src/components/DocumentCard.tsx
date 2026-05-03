import { useTranslation } from 'react-i18next'
import { FaFileAlt, FaDownload, FaBook } from 'react-icons/fa'
import type { Document } from '../data/documents'

interface DocumentCardProps {
  document: Document
}

export default function DocumentCard({ document: doc }: Readonly<DocumentCardProps>) {
  const { t } = useTranslation()

  return (
    <article className="flex flex-col h-full">
      {/* En-tête avec icône - style tampon */}
      <div className="flex items-start gap-3 mb-4 pb-3 border-b-2 border-dashed border-[#1A1A1A]">
        <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#1A1A1A] text-white rounded-sm rotate-3 shadow-sm">
          {doc.category === 'press' ? (
            <FaBook className="w-6 h-6" />
          ) : (
            <FaFileAlt className="w-6 h-6" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-handwriting text-2xl leading-tight text-[#1A1A1A] mb-1">
            {t(doc.titleKey)}
          </h3>
          <p className="font-typewriter text-[10px] uppercase tracking-wider text-[#3a3a3a]">
            {t(doc.subtitleKey)}
          </p>
        </div>
      </div>

      {/* Infos fichier - style manuscrit */}
      <div className="mb-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-typewriter text-[10px] uppercase tracking-wider text-[#5a5a5a]">
            📄 Format
          </span>
          <span className="font-typewriter text-xs font-bold text-[#1A1A1A] border-2 border-[#1A1A1A] px-2 py-0.5 -rotate-2">
            PDF
          </span>
        </div>
      </div>

      {/* Bouton téléchargement - style post-it */}
      <div className="mt-auto">
        <a
          href={doc.url}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 w-full py-2 px-4
                   bg-[#1A1A1A] text-white border-2 border-[#1A1A1A]
                   font-typewriter text-xs uppercase tracking-widest font-bold
                   hover:bg-[#3a3a3a]
                   active:translate-y-[2px] active:shadow-none
                   transition-all duration-150
                   shadow-[2px_2px_0_0_rgba(26,26,26,0.3)]
                   hover:shadow-[3px_3px_0_0_rgba(26,26,26,0.4)]"
        >
          <FaDownload className="w-3 h-3 group-hover:translate-y-[1px] transition-transform" />
          {t('documents.download')}
        </a>
      </div>

      {/* Tampon "OFFICIEL" en filigrane - style grunge */}
      <div className="absolute bottom-2 right-2 opacity-[0.12] pointer-events-none -rotate-12">
        <div className="w-14 h-14 rounded-full border-[3px] border-dashed border-[#1A1A1A] flex items-center justify-center">
          <span className="font-typewriter text-[8px] leading-none font-bold">
            OFFICIEL
          </span>
        </div>
      </div>
    </article>
  )
}

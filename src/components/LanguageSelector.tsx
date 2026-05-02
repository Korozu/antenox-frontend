import { useTranslation } from 'react-i18next'

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-2 px-3 py-2
                 font-mono text-[10px] uppercase tracking-[0.2em]
                 border-2 border-[#1A1A1A] bg-[#E5E5E5]
                 hover:bg-[#1A1A1A] hover:text-[#E5E5E5]
                 transition-all duration-200
                 shadow-[2px_2px_0px_0px_rgba(26,26,26,0.3)]
                 hover:shadow-[3px_3px_0px_0px_rgba(26,26,26,0.4)]
                 hover:rotate-[-1deg]
                 active:scale-95"
      aria-label="Changer de langue"
      title={currentLang === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      {/* Indicateur visuel de la langue active */}
      <span className="relative flex items-center gap-1.5">
        <span className={`transition-opacity ${currentLang === 'fr' ? 'opacity-100 font-bold' : 'opacity-40'}`}>
          FR
        </span>
        <span className="text-[#7a7a7a]">/</span>
        <span className={`transition-opacity ${currentLang === 'en' ? 'opacity-100 font-bold' : 'opacity-40'}`}>
          EN
        </span>
      </span>

      {/* Icône de globe */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0 group-hover:rotate-12 transition-transform"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    </button>
  )
}


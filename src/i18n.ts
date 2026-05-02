import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import direct des fichiers JSON
import translationFR from '../src/locales/fr/translation.json'
import translationEN from '../src/locales/en/translation.json'

i18n
  // Détection automatique de la langue du navigateur
  .use(LanguageDetector)
  // Intégration avec React
  .use(initReactI18next)
  // Initialisation
  .init({
    // Langue de secours
    fallbackLng: 'fr',
    // Langues supportées
    supportedLngs: ['fr', 'en'],
    // Debug en développement seulement
    debug: import.meta.env.DEV,

    // Interpolation
    interpolation: {
      escapeValue: false, // React échappe déjà par défaut
    },

    // Configuration du détecteur de langue
    detection: {
      // Ordre de détection : localStorage > navigateur
      order: ['localStorage', 'navigator'],
      // Clé de stockage dans localStorage
      lookupLocalStorage: 'i18nextLng',
      // Cache la langue détectée
      caches: ['localStorage'],
    },

    // Ressources inline (importées directement)
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
    },
  })

export default i18n

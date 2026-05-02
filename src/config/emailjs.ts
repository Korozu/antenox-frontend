// Configuration EmailJS - Utilise les variables d'environnement
// Les clés sont stockées dans le fichier .env (non commité sur Git)

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

// Validation en développement
if (import.meta.env.DEV) {
  const missing: string[] = []

  if (!EMAILJS_CONFIG.serviceId) missing.push('VITE_EMAILJS_SERVICE_ID')
  if (!EMAILJS_CONFIG.templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID')
  if (!EMAILJS_CONFIG.publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY')

  if (missing.length > 0) {
    console.warn(
      `⚠️ Configuration EmailJS incomplète. Variables manquantes:\n${missing.join('\n')}\n\nVeuillez créer un fichier .env avec ces variables.`
    )
  }
}

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import SectionLabel from '../SectionLabel'
import { EMAILJS_CONFIG } from '../../config/emailjs'

interface FormData {
  from_email: string
  subject: string
  message: string
}

export default function SectionContact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState<FormData>({
    from_email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Effacer l'erreur du champ en cours de modification
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    const newErrors: Partial<FormData> = {}

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email requis'
    } else if (!validateEmail(formData.from_email)) {
      newErrors.from_email = 'Email invalide'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Objet requis'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message requis'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Générer l'horodatage au moment de l'envoi
    const now = new Date()
    const timestamp = now.toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    // Envoi via EmailJS avec sendForm (méthode recommandée)
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!formRef.current) {
        throw new Error('Référence au formulaire introuvable')
      }

      // Préparer les paramètres avec le timestamp
      const templateParams = {
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
        time: timestamp,
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      console.log('Email envoyé avec succès à', timestamp)
      setSubmitStatus('success')

      // Réinitialiser le formulaire
      setFormData({ from_email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="hidden">
      <SectionLabel>05</SectionLabel>
      <h2 id="contact-title" className="font-display text-5xl md:text-8xl text-[#1A1A1A] leading-none mb-4">
        CONTACT
      </h2>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a7a7a] mb-8">
        — Tournée, Booking & Management
      </p>

      <div className="max-w-2xl mx-auto">
        {/* Formulaire légèrement incliné */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative -rotate-1 hover:rotate-0 transition-transform duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E")`,
          }}
        >
          <div className="bg-[#E5E5E5] bg-opacity-95 border-2 border-[#1A1A1A] p-6 md:p-8
                         shadow-[6px_6px_0px_0px_rgba(26,26,26,0.3)]">

            {/* Effet de bande scotchée en haut */}
            <div className="absolute -top-3 left-8 w-24 h-6 bg-[#7a7a7a] opacity-30 rotate-[-5deg]" />
            <div className="absolute -top-3 right-8 w-24 h-6 bg-[#7a7a7a] opacity-30 rotate-[5deg]" />

            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-2 font-bold"
                >
                  [ Email ]
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="votre.email@exemple.com"
                  className={`w-full px-4 py-3 
                            font-mono text-sm text-[#1A1A1A]
                            bg-[#E5E5E5] bg-opacity-50
                            border-2 rounded-[2px]
                            transition-all duration-150
                            placeholder:text-[#7a7a7a] placeholder:italic
                            focus:outline-none focus:bg-opacity-80
                            ${errors.from_email 
                              ? 'border-[#ff0000] focus:border-[#ff0000]' 
                              : 'border-[#1A1A1A] focus:border-[#2D4B73]'
                            }`}
                />
                {errors.from_email && (
                  <p className="mt-1 font-mono text-[10px] text-[#ff0000] uppercase tracking-widest">
                    ⚠ {errors.from_email}
                  </p>
                )}
              </div>

              {/* Objet */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-mono text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-2 font-bold"
                >
                  [ Objet ]
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Booking, demande de renseignements..."
                  className={`w-full px-4 py-3 
                            font-mono text-sm text-[#1A1A1A]
                            bg-[#E5E5E5] bg-opacity-50
                            border-2 rounded-[2px]
                            transition-all duration-150
                            placeholder:text-[#7a7a7a] placeholder:italic
                            focus:outline-none focus:bg-opacity-80
                            ${errors.subject 
                              ? 'border-[#ff0000] focus:border-[#ff0000]' 
                              : 'border-[#1A1A1A] focus:border-[#2D4B73]'
                            }`}
                />
                {errors.subject && (
                  <p className="mt-1 font-mono text-[10px] text-[#ff0000] uppercase tracking-widest">
                    ⚠ {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-[0.2em] text-[#1A1A1A] mb-2 font-bold"
                >
                  [ Message ]
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message ici..."
                  rows={6}
                  className={`w-full px-4 py-3 
                            font-mono text-sm text-[#1A1A1A]
                            bg-[#E5E5E5] bg-opacity-50
                            border-2 rounded-[2px]
                            transition-all duration-150
                            placeholder:text-[#7a7a7a] placeholder:italic
                            focus:outline-none focus:bg-opacity-80
                            resize-none
                            ${errors.message 
                              ? 'border-[#ff0000] focus:border-[#ff0000]' 
                              : 'border-[#1A1A1A] focus:border-[#2D4B73]'
                            }`}
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-[10px] text-[#ff0000] uppercase tracking-widest">
                    ⚠ {errors.message}
                  </p>
                )}
              </div>

              {/* Bouton Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full px-6 py-4
                           bg-[#1A1A1A] text-[#E5E5E5]
                           border-2 border-[#1A1A1A]
                           font-mono text-sm uppercase tracking-[0.25em] font-black
                           transition-all duration-150
                           hover:bg-[#2D4B73] hover:border-[#2D4B73]
                           hover:translate-x-[4px] hover:translate-y-[4px]
                           active:translate-x-[2px] active:translate-y-[2px]
                           disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-[6px_6px_0px_0px_rgba(26,26,26,0.4)]
                           hover:shadow-[2px_2px_0px_0px_rgba(26,26,26,0.4)]
                           active:shadow-[0px_0px_0px_0px_rgba(26,26,26,0.4)]"
                >
                  {isSubmitting ? '[ ENVOI EN COURS... ]' : '[ ENVOYER ]'}
                </button>
              </div>

              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="p-4 border-2 border-[#2D4B73] bg-[#2D4B73] bg-opacity-10">
                  <p className="font-mono text-xs text-[#1A1A1A] uppercase tracking-widest text-center font-bold">
                    ✓ Message envoyé avec succès !
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 border-2 border-[#ff0000] bg-[#ff0000] bg-opacity-10">
                  <p className="font-mono text-xs text-[#1A1A1A] uppercase tracking-widest text-center font-bold">
                    ✗ Erreur lors de l'envoi. Veuillez réessayer.
                  </p>
                </div>
              )}
            </div>

            {/* Tampon "URGENT" en filigrane */}
            <div className="absolute bottom-4 right-4 opacity-[0.06] pointer-events-none rotate-[-12deg]">
              <div className="w-24 h-24 rounded-full border-4 border-[#1A1A1A] flex items-center justify-center">
                <span className="font-display text-sm leading-none">
                  URGENT
                </span>
              </div>
            </div>
          </div>
        </form>

        {/* Note informative */}
        <div className="mt-6 p-4 border-l-4 border-[#2D4B73] bg-[#1A1A1A] bg-opacity-5 rotate-1">
          <p className="font-mono text-[10px] text-[#5a5a5a] leading-relaxed">
            <span className="font-bold text-[#2D4B73] uppercase">Info :</span> Nous répondons généralement sous 48h.
            Pour les demandes urgentes, contactez-nous directement par téléphone au +33 6 XX XX XX XX.
          </p>
        </div>
      </div>
    </section>
  )
}

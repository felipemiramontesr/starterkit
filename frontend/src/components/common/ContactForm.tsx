import { type ReactElement, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useTranslation } from 'react-i18next'
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { BUSINESS_CONFIG } from '../../config/business'

/**
 * ContactForm Component.
 * High-conversion lead capture form with Zod validation and WhatsApp integration.
 * Features a professional dark-glass aesthetic with real-time error feedback.
 *
 * @component
 * @returns {ReactElement} The secure lead capture form.
 */
export const ContactForm = (): ReactElement => {
  const { t } = useTranslation()

  const contactSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(3, t('contact.errors.name')),
        email: z.string().email(t('contact.errors.email')),
        phone: z.string().min(10, t('contact.errors.phone')),
        message: z.string().min(10, t('contact.errors.message')),
        website: z.string().optional(), // Honeypot field
      }),
    [t]
  )

  type ContactFormData = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    // Construct WhatsApp message with localized intro
    const waMessage = `${t('hero.title')}: ${data.name}. ${data.email}. ${data.phone}. ${data.message}`
    const finalUrl = BUSINESS_CONFIG.whatsapp.getApiUrl(waMessage)

    window.open(finalUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/60 p-6 shadow-2xl backdrop-blur-xl md:p-8">
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)]" />

      <div className="mb-4 text-center">
        <h3 className="mb-4 text-3xl font-extrabold text-white">{t('contact.form_title')}</h3>
        <p className="mx-auto max-w-lg text-lg leading-relaxed font-light text-gray-400">
          {t('contact.form_subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot field - Hidden from users */}
        <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
          <input
            {...register('website')}
            tabIndex={-1}
            autoComplete="off"
            placeholder="Your Website"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="ml-1 text-sm font-medium text-gray-400">
              {t('contact.name_label')}
            </label>
            <div className="relative">
              <User className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                {...register('name')}
                placeholder={t('contact.name_placeholder')}
                className="w-full rounded-xl border border-gray-800 bg-black/40 py-2.5 pr-4 pl-12 text-white transition-all placeholder:text-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            {errors.name && <p className="ml-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="ml-1 text-sm font-medium text-gray-400">
              {t('contact.email_label')}
            </label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                {...register('email')}
                placeholder={t('contact.email_placeholder')}
                className="w-full rounded-xl border border-gray-800 bg-black/40 py-2.5 pr-4 pl-12 text-white transition-all placeholder:text-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            {errors.email && <p className="ml-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="ml-1 text-sm font-medium text-gray-400">
            {t('contact.phone_label')}
          </label>
          <div className="relative">
            <Phone className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              {...register('phone')}
              placeholder={t('contact.phone_placeholder')}
              className="w-full rounded-xl border border-gray-800 bg-black/40 py-4 pr-4 pl-12 text-white transition-all placeholder:text-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.phone && <p className="ml-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <label className="ml-1 text-sm font-medium text-gray-400">
            {t('contact.message_label')}
          </label>
          <div className="relative">
            <MessageSquare className="absolute top-6 left-4 h-5 w-5 text-gray-500" />
            <textarea
              {...register('message')}
              rows={4}
              placeholder={t('contact.message_placeholder')}
              className="w-full resize-none rounded-xl border border-gray-800 bg-black/40 py-4 pr-4 pl-12 text-white transition-all placeholder:text-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {errors.message && <p className="ml-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full transform items-center justify-center gap-3 rounded-xl bg-[var(--primary)] px-8 py-3.5 text-lg font-bold text-white shadow-[0_0_20px_var(--primary-shadow)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:shadow-[0_0_30px_var(--primary-shadow)] active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">{t('contact.submitting')}</span>
          ) : (
            <>
              <Send className="h-6 w-6" />
              {t('contact.submit')}
            </>
          )}
        </button>
      </form>
    </div>
  )
}

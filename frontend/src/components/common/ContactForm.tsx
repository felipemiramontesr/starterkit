import { type ReactElement, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const ContactForm = (): ReactElement => {
  const { t } = useTranslation();

  const contactSchema = useMemo(() => z.object({
    name: z.string().min(3, t('contact.errors.name')),
    email: z.string().email(t('contact.errors.email')),
    phone: z.string().min(10, t('contact.errors.phone')),
    message: z.string().min(10, t('contact.errors.message')),
  }), [t]);

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Construct WhatsApp message with localized intro
    const waMessage = `${t('hero.title')}: ${data.name}. ${data.email}. ${data.phone}. ${data.message}`;
    const finalUrl = BUSINESS_CONFIG.whatsapp.getApiUrl(waMessage);
    
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-hover)]" />
      
      <div className="text-center mb-4">
        <h3 className="text-3xl font-extrabold text-white mb-4">{t('contact.form_title')}</h3>
        <p className="text-gray-400 text-lg max-w-lg mx-auto font-light leading-relaxed">
          {t('contact.form_subtitle')}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">{t('contact.name_label')}</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                {...register('name')}
                placeholder={t('contact.name_placeholder')}
                className="w-full pl-12 pr-4 py-2.5 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">{t('contact.email_label')}</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                {...register('email')}
                placeholder={t('contact.email_placeholder')}
                className="w-full pl-12 pr-4 py-2.5 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">{t('contact.phone_label')}</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              {...register('phone')}
              placeholder={t('contact.phone_placeholder')}
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>}
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">{t('contact.message_label')}</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
            <textarea
              {...register('message')}
              rows={4}
              placeholder={t('contact.message_placeholder')}
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600 resize-none"
            />
          </div>
          {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-3.5 text-lg font-bold bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl shadow-[0_0_20px_var(--primary-shadow)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_var(--primary-shadow)] active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">{t('contact.submitting')}</span>
          ) : (
            <>
              <Send className="w-6 h-6" />
              {t('contact.submit')}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

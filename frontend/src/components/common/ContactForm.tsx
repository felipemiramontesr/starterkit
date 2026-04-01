import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

const contactSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Por favor, ingresa un correo válido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
  message: z.string().min(10, 'El mensaje es demasiado corto'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Construct WhatsApp message
    const waMessage = `Hola, mi nombre es ${data.name}. Mi correo es ${data.email}. Mi teléfono es ${data.phone}. Me interesa: ${data.message}`;
    const finalUrl = BUSINESS_CONFIG.whatsapp.getApiUrl(waMessage);
    
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-12 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 shadow-2xl relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-700" />
      
      <div className="text-center mb-10">
        <h3 className="text-3xl font-extrabold text-white mb-4">¿Quieres una página web así?</h3>
        <p className="text-gray-400 text-lg max-w-lg mx-auto font-light leading-relaxed">
          Completa los campos a continuación para iniciar la construcción de tu imperio digital vía WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nombre */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                {...register('name')}
                placeholder="Juan Pérez"
                className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600"
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Correo Electrónico</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                {...register('email')}
                placeholder="juan@ejemplo.com"
                className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600"
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
          </div>
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Teléfono (WhatsApp)</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              {...register('phone')}
              placeholder="5512345678"
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>}
        </div>

        {/* Mensaje */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400 ml-1">Cuéntanos sobre tu proyecto</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
            <textarea
              {...register('message')}
              rows={4}
              placeholder="Me gustaría una landing page para mi negocio de..."
              className="w-full pl-12 pr-4 py-4 bg-black/40 border border-gray-800 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white placeholder:text-gray-600 resize-none"
            />
          </div>
          {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-95 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">Enviando...</span>
          ) : (
            <>
              <Send className="w-6 h-6" />
              Solicitar Presupuesto vía WhatsApp
            </>
          )}
        </button>
      </form>
    </div>
  );
};

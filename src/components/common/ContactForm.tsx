import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  subject: z.string().min(5, { message: 'El asunto es muy corto' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * Interface for ContactForm props.
 */
interface ContactFormProps {
  /** The API endpoint to send the form payload to. Defaults to /api/contact */
  submitUrl?: string;
}

/**
 * ContactForm Component.
 * High-conversion contact form using React Hook Form + Zod for strict validation.
 * Features an internal loading state and simulates or executes a fetch to the given submitUrl.
 *
 * @param {ContactFormProps} props
 * @returns {JSX.Element}
 */
export const ContactForm = ({ submitUrl = '/api/contact' }: ContactFormProps): ReactElement => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // Mocking fetch delay for UX validation
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log(`Sending to ${submitUrl}:`, data);
      
      // Simulate successful request
      setSubmitSuccess(true);
      reset();
    } catch {
      setSubmitError('Hubo un error al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 shadow-2xl relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600" />
      
      <h3 className="text-2xl font-bold text-white mb-6">Inicia Operaciones</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
          <input
            id="name"
            type="text"
            className={`w-full bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
            placeholder="Introduce tu nombre"
            {...register('name')}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              id="email"
              type="email"
              className={`w-full bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
              placeholder="tu@email.com"
              {...register('email')}
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Asunto</label>
            <input
              id="subject"
              type="text"
              className={`w-full bg-gray-900 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
              placeholder="Motivo de contacto"
              {...register('subject')}
            />
            {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
          <textarea
            id="message"
            rows={4}
            className={`w-full bg-gray-900 border ${errors.message ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors resize-none`}
            placeholder="Describe tus requerimientos..."
            {...register('message')}
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 py-4 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Procesando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Mensaje Seguro
            </>
          )}
        </button>

        {submitSuccess && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
            Mensaje enviado correctamente. Operaciones confirmadas.
          </div>
        )}
        {submitError && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
            {submitError}
          </div>
        )}
      </form>
    </div>
  );
};

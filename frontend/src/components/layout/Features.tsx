import { type ReactElement } from 'react';
import { Rocket, Target, Headphones } from 'lucide-react';

export const Features = (): ReactElement => {
  const pillars = [
    {
      title: 'Servicio Estrella',
      description: 'Describe aquí el principal beneficio o producto que ofreces. Haz que sea irresistible para tu cliente ideal mostrando el valor real.',
      icon: Rocket,
    },
    {
      title: 'Propuesta de Valor',
      description: 'Explica por qué tu empresa es única. Qué te diferencia de la competencia y cómo garantizas resultados extraordinarios.',
      icon: Target,
    },
    {
      title: 'Atención 24/7',
      description: 'Destaca tus garantías, tiempos de entrega rápidos o soporte continuo para generar confianza absoluta en tu prospecto.',
      icon: Headphones,
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-900 border-b border-gray-800" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Muestra aquí las soluciones comerciales que impulsarán el éxito de tus clientes. Usa este espacio para brillar.
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800 transition-colors group">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
         </div>
      </div>
    </section>
  );
};

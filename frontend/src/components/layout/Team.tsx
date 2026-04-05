import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Globe, ExternalLink } from 'lucide-react';

/**
 * Team component - Human Trust.
 * Displays specialists with glassmorphism cards and professional social links.
 * Optimized with native lazy loading.
 */
const Team = (): ReactElement => {
  const { t } = useTranslation();

  const members = [
    { name: 'Alex Rivera', role: 'lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
    { name: 'Sofia Chen', role: 'design', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
    { name: 'Marcus Vogt', role: 'dev', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Elena Torres', role: 'strategy', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section id="equipo" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            {t('team.title')}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="group relative">
              {/* Profile Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-[var(--primary)]/30">
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Info Container */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-white/10 text-center">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--primary)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)]/60">
                    {t(`team.roles.${member.role}`)}
                  </p>
                  
                  {/* Hover Socials */}
                  <div className="mt-4 flex justify-center gap-4 max-h-0 group-hover:max-h-12 overflow-hidden transition-all duration-500">
                    <Mail className="w-4 h-4 text-gray-400 hover:text-[var(--primary)] cursor-pointer" />
                    <Globe className="w-4 h-4 text-gray-400 hover:text-[var(--primary)] cursor-pointer" />
                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[var(--primary)] cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

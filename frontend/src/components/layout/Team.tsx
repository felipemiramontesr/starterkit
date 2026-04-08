import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Globe, ExternalLink } from 'lucide-react'

/**
 * Team Component.
 * Human Trust - Displays specialists with glassmorphism cards and professional social links.
 * Optimized with native lazy loading for high-performance profile image rendering.
 *
 * @component
 * @returns {ReactElement} The team showcase section.
 */
const Team = (): ReactElement => {
  const { t } = useTranslation()

  const members = [
    {
      name: 'Alex Rivera',
      role: 'lead',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Sofia Chen',
      role: 'design',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Marcus Vogt',
      role: 'dev',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Elena Torres',
      role: 'strategy',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
  ]

  return (
    <section id="equipo" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-black tracking-[0.3em] text-[var(--primary)] uppercase">
            {t('team.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {members.map((member, idx) => (
            <div key={idx} className="group relative">
              {/* Profile Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-800 bg-gray-900 transition-all duration-500 hover:border-[var(--primary)]/30">
                {/* Image */}
                <div className="aspect-[4/5] h-80 overflow-hidden grayscale transition-all duration-700 group-hover:grayscale-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Info Container */}
                <div className="absolute right-4 bottom-4 left-4 rounded-3xl border border-white/10 bg-gray-900/40 p-4 text-center backdrop-blur-xl">
                  <h3 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-[var(--primary)]">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-black tracking-widest text-[var(--accent)]/60 uppercase">
                    {t(`team.roles.${member.role}`)}
                  </p>

                  {/* Hover Socials */}
                  <div className="mt-4 flex max-h-0 justify-center gap-4 overflow-hidden transition-all duration-500 group-hover:max-h-12">
                    <Mail className="h-4 w-4 cursor-pointer text-gray-400 hover:text-[var(--primary)]" />
                    <Globe className="h-4 w-4 cursor-pointer text-gray-400 hover:text-[var(--primary)]" />
                    <ExternalLink className="h-4 w-4 cursor-pointer text-gray-400 hover:text-[var(--primary)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

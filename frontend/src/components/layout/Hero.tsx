import { type ReactElement } from 'react';
import { useDesignSystem } from '../../hooks/useDesignSystem';

/**
 * Interface defining the properties for the Hero component.
 */
interface HeroProps {
  /** The main title of the landing page */
  title: string;
  /** A brief description or subtitle */
  subtitle: string;
  /** Primary Call to Action button text */
  ctaText: string;
  /** Action handler when CTA is clicked */
  onCtaClick?: () => void;
}

/**
 * Hero component for the landing page.
 * Displays a prominent title, subtitle, and a call-to-action button.
 * Supports dynamic background types (Gradient vs Cinematic Image).
 */
export const Hero = ({
  title,
  subtitle,
  ctaText,
  onCtaClick
}: HeroProps): ReactElement => {
  const { bgType } = useDesignSystem();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[var(--bg-primary)] text-white overflow-hidden">
      {/* Background Layer: Dynamic Gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[var(--primary)]/30 via-[var(--bg-primary)] to-black transition-opacity duration-1000 ${
          bgType === 'gradient' ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      {/* Background Layer: Cinematic Office Image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          bgType === 'image' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src="/assets/office-bg.png" 
          alt="Office Background" 
          className="w-full h-full object-cover filter brightness-[0.4] saturate-[0.8]"
        />
        {/* Adaptive Color Filter Overlay */}
        <div className="absolute inset-0 bg-[var(--primary)]/20 mix-blend-overlay backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 max-w-2xl animate-fade-in-up delay-100">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 text-lg font-semibold bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[var(--primary-shadow)]"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;

/**
 * @module Hero
 * @description Cinematic entrance component for the landing page.
 * Manages high-resolution assets and adaptive background rendering.
 */
import { type ReactElement } from 'react'
import { useDesignSystem } from '../../hooks/useDesignSystem'

/**
 * HeroProps Interface.
 * Defines the strict schema for the Hero component configuration.
 *
 * @interface
 */
interface HeroProps {
  /** The primary brand slogan or title (e.g., 'PROJECT ALPHA') */
  title: string
  /** High-impact subtitle or value proposition */
  subtitle: string
  /** Text label for the primary conversion button */
  ctaText: string
  /** Optional callback for handling call-to-action interactions */
  onCtaClick?: () => void
}

/**
 * Hero Component.
 * The visual cornerstone of the landing page experience.
 * Supports dynamic rendering modes (Atmospheric Gradient vs Cinematic Brand Image).
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - The primary brand slogan or title.
 * @param {string} props.subtitle - High-impact subtitle or value proposition.
 * @param {string} props.ctaText - Text label for the primary conversion button.
 * @param {() => void} [props.onCtaClick] - Optional callback for handling interactions.
 * @returns {ReactElement} The rendered hero section.
 */
export const Hero = ({ title, subtitle, ctaText, onCtaClick }: HeroProps): ReactElement => {
  const { bgType } = useDesignSystem()

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)] text-white">
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
          className="h-full w-full object-cover brightness-[0.4] saturate-[0.8] filter"
          fetchPriority="high"
        />
        {/* Adaptive Color Filter Overlay */}
        <div className="absolute inset-0 bg-[var(--primary)]/20 mix-blend-overlay backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/40" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center px-4 text-center">
        <h1 className="animate-fade-in-up mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="animate-fade-in-up mb-10 max-w-2xl text-xl font-light text-gray-300 delay-100 md:text-2xl">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="transform rounded-full bg-[var(--primary)] px-8 py-4 text-lg font-semibold text-white shadow-[var(--primary-shadow)] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--primary-hover)] active:scale-95"
        >
          {ctaText}
        </button>
      </div>
    </section>
  )
}

export default Hero

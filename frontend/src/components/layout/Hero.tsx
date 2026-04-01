import { type ReactElement } from 'react';

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
 *
 * @param {HeroProps} props - The complete props of the Hero component.
 * @returns {JSX.Element} The rendered React component.
 * 
 * @example
 * ```tsx
 * <Hero
 *   title="Starter Kit Pro"
 *   subtitle="A high-performance landing page boilerplate"
 *   ctaText="Get Started"
 *   onCtaClick={() => console.log('CTA clicked')}
 * />
 * ```
 */
export const Hero = ({
  title,
  subtitle,
  ctaText,
  onCtaClick
}: HeroProps): ReactElement => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-80" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-300 mb-10 max-w-2xl">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 text-lg font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

// Also exporting as default for lazy loading if needed
export default Hero;

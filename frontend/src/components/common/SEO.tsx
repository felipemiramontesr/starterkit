import { type ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Interface defining the properties for the SEO component.
 */
interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

/**
 * SEO Component.
 * Injects metadata natively into the document head using React 19's Document Metadata Hoisting concept.
 */
export const SEO = ({
  title,
  description,
  image = 'https://starterkit.felipemiramontesr.net/og-image.jpg',
  url = 'https://starterkit.felipemiramontesr.net',
}: SEOProps): ReactElement => {
  const { t } = useTranslation();

  const finalTitle = title || `${t('hero.title')} | ${t('features.strategy.title')}`;
  const finalDescription = description || t('hero.subtitle');

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

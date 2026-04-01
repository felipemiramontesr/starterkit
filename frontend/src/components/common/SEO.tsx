import { type ReactElement } from 'react';

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
 *
 * @param {SEOProps} props
 * @returns {ReactElement}
 */
export const SEO = ({
  title = 'Starter Kit Pro | Arquitectura de Alta Conversión',
  description = 'Una base técnica de grado militar optimizada para crear landing pages veloces y seguras en React y Vite.',
  image = 'https://starterkit.felipemiramontesr.net/og-image.jpg',
  url = 'https://starterkit.felipemiramontesr.net',
}: SEOProps): ReactElement => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

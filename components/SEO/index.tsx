/* eslint-disable react/no-unused-prop-types */
import { FC } from 'react';
import { NextSeo } from 'next-seo';

export const JSONLD = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Jhonny Santanna',
  brand: 'jhonnysantannacantor',
  description: 'Jhonny Santanna é um cantor e compositor brasileiro, nascido em Chapecó, Santa Catarina, Brasil.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chapecó',
    addressRegion: 'SC',
    postalCode: '89803400',
    streetAddress: 'Av. São Pedro, 887-E - Sala 21 - São Cristóvão, Chapecó - SC, 89803-400'
  },
  social: [
    'https://twitter.com/Jhonnysantanna',
    'https://www.facebook.com/jhonnysantannacantor',
    'https://www.instagram.com/cantorjhonnysantanna',
    'https://www.youtube.com/c/JhonnySantanna',
  ],
  email: 'mailto:mauriciobw17@gmail.com',
  image: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1700420727/ffne47regdnmzxusagj7.jpg',
  jobTitle: 'Cantor e Compositor',
  telephone: '(54) 99671-1324',
  url: 'https://jhonnysantanna.vercel.app/',
};

interface SEOProps {
  title: string;
  description: string;
  url: string;
  content: 'website' | 'article';
  image: string;
  author?: string;
  canonical?: string;
  ogtype?: 'article:section' | 'website' | 'article:author' | 'article:tag' | '';
}

export const NextSEO: FC<SEOProps> = (props) => {
  const {
    title, description, canonical, url, content = 'website', image, author = 'Jhonny Santanna',
  } = props;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical || 'https://jhonnysantanna.vercel.app/'}
      openGraph={{
        url: `${url}`,
        title,
        description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: `Imagem de ${content} ${title}`,
            type: 'image/jpeg',
            secureUrl: image,
          },
          {
            url: image,
            width: 900,
            height: 800,
            alt: `Imagem de ${content} ${title}`,
            type: 'image/jpeg',
            secureUrl: image,
          },
          {
            url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1700420727/ffne47regdnmzxusagj7.jpg',
          },
          {
            url: 'https://res.cloudinary.com/ddwnioveu/image/upload/v1700420727/ffne47regdnmzxusagj7.jpg',
          },
        ],
        site_name: author,
      }}
      additionalLinkTags={[
        {
          href: '/manifest.json',
          rel: 'manifest',
        },
      ]}
      additionalMetaTags={[
        {
          name: 'theme-color',
          content: '#13141c',
        },
      ]}
      twitter={{
        handle: '@Jhonnysantanna',
        site: 'https://jhonnysantanna.vercel.app/',
        cardType: 'summary_large_image',
      }}
      facebook={{
        appId: 'Jhonnysantanna',
      }}
      titleTemplate='%s | Jhonny Santanna'
      defaultTitle='Jhonny Santanna - Cantor e Compositor'
    />
  );
};
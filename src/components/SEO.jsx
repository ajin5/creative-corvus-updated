import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.creativecorvus.in';

export default function SEO({
  title,
  description,
  path = '/',
  image = '/logo.png',
  jsonLd = null,
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | Creative Corvus Design and Media School`
    : 'Creative Corvus | Design, Animation and VFX Academy in Chennai';
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:site_name" content="Creative Corvus" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

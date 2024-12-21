import { Helmet } from "react-helmet";

const ResourceHints = () => {
  return (
    <Helmet>
      {/* Preconnect to critical origins */}
      <link
        rel="preconnect"
        href="https://daniikhan23.github.io"
        crossOrigin="anonymous"
      />

      {/* Preload critical assets */}
      <link
        rel="preload"
        href="/assets/fonts/CeraRoundPro/fontspring-demo-ceraroundpro-regular.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />

      {/* Prefetch important images */}
      <link rel="prefetch" href="/assets/landing/main-bg.webp" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://daniikhan23.github.io" />

      {/* Add Cache Control meta tags */}
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </Helmet>
  );
};

export default ResourceHints;

import React from "react";
import { Helmet } from "react-helmet";

const ResourceLoader = () => {
  return (
    <Helmet>
      {/* Meta tags */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Critical CSS */}
      <style>{`
        /* Critical above-the-fold styles */
        body {
          margin: 0;
          padding: 0;
          background-color: #000;
          color: #fff;
        }

        /* Font fallbacks */
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        /* Prevent FOIT (Flash of Invisible Text) */
        .font-loading {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
      `}</style>

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/assets/fonts/CeraRoundPro/fontspring-demo-ceraroundpro-regular.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/fonts/CeraRoundPro/fontspring-demo-ceraroundpro-medium.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />

      {/* Preconnect to critical origins */}
      <link
        rel="preconnect"
        href="https://daniikhan23.github.io"
        crossOrigin="anonymous"
      />

      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://daniikhan23.github.io" />

      {/* Favicon */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/src/assets/navbar/logo.webp"
      />
    </Helmet>
  );
};

export default ResourceLoader;

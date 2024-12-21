import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      xs: "0px", // Extra small: 0px and up
      sm: "576px", // Small: 576px and up
      md: "768px", // Medium: 768px and up
      lg: "992px", // Large: 992px and up
      xl: "1200px", // Extra large: 1200px and up
      "2xl": "1400px", // Extra extra large: 1400px and up
    },
    fonts: {
      body: `'CeraRoundPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
      heading: `'CeraRoundPro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`,
    },
  },
  components: {
    Image: {
      baseStyle: {
        loading: "lazy",
        decoding: "async",
      },
      defaultProps: {
        loading: "lazy",
        decoding: "async",
      },
    },
    Box: {
      baseStyle: ({ bgImage }) => ({
        position: bgImage ? "relative" : "static",
        "&[data-bg]": {
          backgroundImage: "none",
          "&.visible": {
            backgroundImage: bgImage,
            transition: "background-image 0.3s ease-in-out",
          },
        },
      }),
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

// Add background image observer
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    document
      .querySelectorAll("[data-bg]")
      .forEach((el) => observer.observe(el));
  });
}

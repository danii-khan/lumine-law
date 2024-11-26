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
  },
});

export const system = createSystem(defaultConfig, customConfig);

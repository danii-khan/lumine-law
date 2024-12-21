// components/FontPreloader.jsx
import { useEffect } from "react";

const FontPreloader = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontFiles = [
      "../assets/fonts/CeraRoundPro/fontspring-demo-ceraroundpro-regular.otf",
      "../assets/fonts/CeraRoundPro/fontspring-demo-ceraroundpro-medium.otf",
    ];

    fontFiles.forEach((font) => {
      const link = document.createElement("link");
      link.href = font;
      link.rel = "preload";
      link.as = "font";
      link.type = "font/otf";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });

    // Add fonts-loading class initially
    document.documentElement.classList.add("fonts-loading");

    // Check if fonts are loaded
    document.fonts.ready.then(() => {
      document.documentElement.classList.remove("fonts-loading");
      document.documentElement.classList.add("fonts-loaded");
    });
  }, []);

  return null;
};

export default FontPreloader;

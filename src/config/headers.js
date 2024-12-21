// src/config/headers.js
export const headers = {
  "/*": {
    "Cache-Control": "public, max-age=3600",
  },
  "/*.html": {
    "Cache-Control": "no-cache, must-revalidate",
  },
  "/assets/*.css": {
    "Cache-Control": "public, max-age=31536000, immutable",
  },
  "/assets/*.js": {
    "Cache-Control": "public, max-age=31536000, immutable",
  },
  "/assets/*.{png,jpg,jpeg,gif,webp,svg}": {
    "Cache-Control": "public, max-age=31536000, immutable",
  },
  "/assets/fonts/*": {
    "Cache-Control": "public, max-age=31536000, immutable",
    "Access-Control-Allow-Origin": "*",
  },
};

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eklavya",
    short_name: "Eklavya",
    description:
      "Eklavya is a learning platform for software development, AI, data, cybersecurity and modern technology skills.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#A41034",
    orientation: "portrait",

    icons: [
      {
        src: "/brand/logo/logo-mark.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/brand/logo/logo-mark.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

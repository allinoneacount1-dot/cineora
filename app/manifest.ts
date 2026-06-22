import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cineora — A Living Cinematic Civilization",
    short_name: "Cineora",
    description:
      "Where imagination becomes ownership, ownership becomes legacy, and legacy becomes immortality.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0A0F2C",
    theme_color: "#0A0F2C",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
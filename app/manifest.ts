import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lotus Roots Technologies",
    short_name: "LRT",
    description:
      "Digital transformation solutions for Architecture, Engineering & Construction industry",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#ec4899",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo 01.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/logo 01.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}

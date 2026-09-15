import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "*.trycloudflare.com"],
  async redirects() {
    return [
      {
        source: "/fanello-naturbett",
        destination: "/betten/fanello-naturbett",
        permanent: true,
      },
      {
        source: "/fanello-Naturbett",
        destination: "/betten/fanello-naturbett",
        permanent: true,
      },
      {
        source: "/betten/bever",
        destination: "/betten/jana",
        permanent: true,
      },
      {
        source: "/betten/surava",
        destination: "/betten/bondo",
        permanent: true,
      },
      {
        source: "/betten/lain",
        destination: "/betten/viktoria",
        permanent: true,
      },
      {
        source: "/betten/lavin",
        destination: "/betten/marco",
        permanent: true,
      },
      {
        source: "/decken-kissen",
        destination: "/schlaftextilien",
        permanent: true,
      },
      {
        source: "/bettwaesche",
        destination: "/schlaftextilien/bettwaesche",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    qualities: [75, 85, 100],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

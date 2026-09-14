import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Cursor Simple Browser / Cloudflare tunnels proxy the app off localhost.
  // Without this, Next blocks HMR and JS chunks so the preview stays stale.
  allowedDevOrigins: [
    "127.0.0.1",
    "*.trycloudflare.com",
  ],
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable caching for development
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  // Disable static optimization
  output: 'standalone',
  // Disable image optimization caching
  images: {
    unoptimized: true,
  },
  // Disable build cache

};

export default nextConfig;

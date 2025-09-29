import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the workspace root to avoid lockfile warnings
  turbopack: {
    root: __dirname,
  },
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
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;

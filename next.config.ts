import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.univervideo.com'
      },
      {
        protocol: 'https',
        hostname: 'univer-prod.cloud.seachange.com'
      }
    ]
  }

};

export default nextConfig;

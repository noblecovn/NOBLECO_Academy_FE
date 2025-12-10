import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'api.noblecovn.com',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      }
    ],
    // Tối ưu hóa hình ảnh
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
  /* config options here */
};

export default nextConfig;

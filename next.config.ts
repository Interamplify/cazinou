import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/casino/billionairespin-casino',
        destination: '/bonus/billionairespin-casino/',
        permanent: true,
      },
      {
        source: '/casino/billionairespin-casino/',
        destination: '/bonus/billionairespin-casino/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

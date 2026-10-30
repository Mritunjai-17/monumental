const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },
  // Belt-and-braces noindex for staging: also covers PDFs and images.
  async headers() {
    if (process.env.SITE_ENV === 'production') return [];
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
  async rewrites() {
    const isProduction = process.env.NODE_ENV === 'production';
    const defaultBackend = isProduction
      ? 'https://monumentalbackend.vercel.app'
      : 'http://localhost:5001';

    const rawBackendUrl =
      process.env.BACKEND_INTERNAL_URL ||
      process.env.NEXT_PUBLIC_API_URL ||
      defaultBackend;
    const backendOrigin = rawBackendUrl.replace(/\/api\/v1\/?$/, '').replace(/\/+$/, '');

    return [
      {
        source: '/api/v1/:path*',
        destination: `${backendOrigin}/api/v1/:path*`,
      },
      {
        source: '/backend-api/:path*',
        destination: `${backendOrigin}/api/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;

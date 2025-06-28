import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'example.com',
          },
        ],
        destination: 'https://www.example.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

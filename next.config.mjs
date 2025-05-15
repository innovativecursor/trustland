import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Your Next.js config here
  images: {
    domains: ['localhost', 'www.youtube.com', 'img.youtube.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '*',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dip2pjbju/**',
      },
    ],
  },
}

export default withPayload(nextConfig)

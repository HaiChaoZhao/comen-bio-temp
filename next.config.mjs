/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alioss.comen.com',
        port: '',
        pathname: '/bio/**',
      },
    ]
  }
};

export default nextConfig;

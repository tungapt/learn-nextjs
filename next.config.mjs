/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/learn-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/learn-nextjs/' : '',
};

export default nextConfig;

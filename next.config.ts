/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/my-portfolio' : '', // replace with your actual repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

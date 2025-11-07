/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // optional — keeps things simple
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

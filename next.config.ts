/** @type {import('next').NextConfig} */

// Detect if we’re running in production (GitHub Pages) or locally
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // ✅ Required for static export (replaces next export)
  output: "export",

  // ✅ Disable Next.js image optimization — GitHub Pages doesn’t support it
  images: {
    unoptimized: true,
  },

  // ✅ Add basePath and assetPrefix only in production
  // Replace "portfolio" with your repo name if different
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",

  // ✅ Prevent ESLint from stopping your build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Optional (for better static exports)
  trailingSlash: true, // Ensures /about/ instead of /about
};

export default nextConfig;

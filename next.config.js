/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Don’t fail the production build on ESLint errors
    ignoreDuringBuilds: true
  },
  typescript: {
    // Don’t fail the production build on type errors
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
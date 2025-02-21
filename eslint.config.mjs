/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
    // disable: true // (If supported in the final Next.js 15 release)
  },
};

export default nextConfig;

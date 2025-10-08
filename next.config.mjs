/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

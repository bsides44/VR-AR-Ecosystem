/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  productionBrowserSourceMaps: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }

    // Important: return the modified config
    return config
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disableDevLogs: true
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['gcdnb.pbrd.co'],
  }
}

module.exports = withPWA(nextConfig)

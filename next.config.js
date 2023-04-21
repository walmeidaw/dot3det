const withPWA = require('next-pwa')({
  dest: 'public',
  disableDevLogs: true
})

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withPWA(nextConfig)

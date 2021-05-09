const withSass = require('@zeit/next-sass')
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})

module.exports = withSass({
  cssModules: true
})

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'style'),
      path.join(__dirname, '')
    ]
  },
}
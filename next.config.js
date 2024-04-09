/** @type {import('next').NextConfig} */

require('dotenv').config()
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig

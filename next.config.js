/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MAPBOX_TOKEN: process.env.MAPBOX_TOKEN
  }
}

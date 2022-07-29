/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withFonts = require("next-fonts");
module.exports = withFonts();

const withPlugins = require("next-compose-plugins");

const withImages = require("next-images");
module.exports = withPlugins([[withImages]], nextConfig);

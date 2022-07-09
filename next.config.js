/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  image: {
    domains: ["yt3.ggpht.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;

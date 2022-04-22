/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const env = {
  APP_TITLE: "Greenie",
  URL_API: "http://localhost:1337/",
};

module.exports = { nextConfig, env };

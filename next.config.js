/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const env = {
  APP_TITLE: "Greenie",
  URL_API: "https://greenie-api.herokuapp.com/",
};

module.exports = { nextConfig, env };

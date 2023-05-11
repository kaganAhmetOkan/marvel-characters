/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        port: "",
        hostname: "i.annihil.us",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

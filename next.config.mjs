/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/out",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.11.81"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tpev.fra1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons**",
      },
    ],
  },
};

export default nextConfig;

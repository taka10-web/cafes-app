import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.googleapis.com"], // GCSのドメインを追加
  },
  /* config options here */
};

export default nextConfig;

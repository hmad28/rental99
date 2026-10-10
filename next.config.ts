import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

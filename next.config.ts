import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages project site: https://tie23.github.io/muse-test-page/
  basePath: "/muse-test-page",
};

export default nextConfig;

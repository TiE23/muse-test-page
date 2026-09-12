import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages project sites (username.github.io/repo-name),
  // uncomment and set basePath below. For username.github.io root sites, leave empty.
  // basePath: "/REPO_NAME",
};

export default nextConfig;

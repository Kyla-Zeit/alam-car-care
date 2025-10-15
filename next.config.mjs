// next.config.mjs — Next 15, static export for GitHub Pages
const isActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // Next 15 uses this; no `next export` step needed
  trailingSlash: true,         // nicer static paths
  basePath: isActions ? `/${repo}` : '',
  assetPrefix: isActions ? `/${repo}/` : '',
  images: { unoptimized: true } // static host, no Image Optimization API
};

export default nextConfig;

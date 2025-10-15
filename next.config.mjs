// next.config.mjs
const isActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isActions ? `/${repo}` : '',
  assetPrefix: isActions ? `/${repo}/` : '',
  images: { unoptimized: true }
};
export default nextConfig;

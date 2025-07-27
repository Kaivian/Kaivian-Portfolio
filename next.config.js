/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isGithubPages ? '' : '',
  assetPrefix: isGithubPages ? './' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
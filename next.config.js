/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  assetPrefix: isGithubPages ? '/kaivian.github.io/' : '',
  basePath: isGithubPages ? '/kaivian.github.io' : '',
  trailingSlash: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@campnetwork/ui-kit"],
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;

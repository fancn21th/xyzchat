const API_URL = process.env.API_URL;

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  async rewrites() {
    return [
      {
        source: "/v2/:path*",
        destination: `${API_URL}/v1/:path*`,
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/donate",
        destination: "https://donate.stripe.com/fZeg2og22aMK17q288",
        permanent: true,
      },
      {
        source: "/lodge",
        destination: "https://discord.gg/SQJdbteCNF",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

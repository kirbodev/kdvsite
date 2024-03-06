/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
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
    ];
  },
};

module.exports = nextConfig;

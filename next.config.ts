// import { NextConfig } from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';

// const nextConfig: NextConfig = {
//   images: {
//     domains: [
//       "087a87050fb35936828b2df899a476ad.r2.cloudflarestorage.com",
//     ],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "087a87050fb35936828b2df899a476ad.r2.cloudflarestorage.com",
//         pathname: "/**",

//       },
//     ],
//   },
// };

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "087a87050fb35936828b2df899a476ad.r2.cloudflarestorage.com",
      "pub-8e5815ffce294020889d1cfc5c418b91.r2.dev", 
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "087a87050fb35936828b2df899a476ad.r2.cloudflarestorage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-8e5815ffce294020889d1cfc5c418b91.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

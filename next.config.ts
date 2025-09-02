import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: [
      "087a87050fb35936828b2df899a476ad.r2.cloudflarestorage.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "sherlegal-production.up.railway.app",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
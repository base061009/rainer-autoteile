import type { NextConfig } from "next";

const catalogUrl =
  process.env.NEXT_PUBLIC_CATALOG_URL ??
  "https://tm2-test.carparts-cat.com/login/rainer";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/login",
        destination: catalogUrl,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

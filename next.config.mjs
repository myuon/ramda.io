import { withKumaUI } from "@kuma-ui/next-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // public/works/<name>/index.html を /works/<name> で配信する
      {
        source: "/works/:name",
        destination: "/works/:name/index.html",
      },
    ];
  },
};

export default withKumaUI(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js blocks dev-server requests from origins other than localhost by
  // default; without this, opening the dev server from a phone on the same
  // Wi-Fi (a different LAN IP) gets every /_next/* asset 403'd, so the page
  // loads but nothing hydrates or becomes interactive.
  allowedDevOrigins: [
    "192.168.*.*",
    "10.*.*.*",
    ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.*.*`),
  ],
};

export default nextConfig;

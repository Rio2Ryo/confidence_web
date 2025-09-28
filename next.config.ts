import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ベースパスを/confidenceに設定 */
  basePath: '/confidence',
  /* アセットのプレフィックスを設定 */
  assetPrefix: '/confidence',
  /* Turbopackを無効化 */
  experimental: {
    turbo: undefined
  }
};

export default nextConfig;

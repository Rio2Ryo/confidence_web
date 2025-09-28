import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ベースパスを/confidenceに設定 */
  basePath: '/confidence',
  /* アセットのプレフィックスを設定 */
  assetPrefix: '/confidence',
  /* 静的エクスポート設定 */
  output: 'export',
  /* 画像の最適化を無効化（静的エクスポート時に必要） */
  images: {
    unoptimized: true
  },
  /* Turbopackを無効化 */
  experimental: {
    turbo: undefined
  }
};

export default nextConfig;

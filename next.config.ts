import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Defaults plus 448/512 so the ~224–256px About photo on high-DPR phones
    // doesn't jump straight to the 640px variant.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 448, 512],
  },
};

export default nextConfig;

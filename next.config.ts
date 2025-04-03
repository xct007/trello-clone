import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		reactCompiler: true,
		webpackMemoryOptimizations: true,
		optimizePackageImports: ["@chakra-ui/react"],
	},
};

export default nextConfig;

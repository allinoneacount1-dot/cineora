/** @type {import('next').NextConfig} */
const nextConfig = {
  // MetaMask SDK transitively imports @react-native-async-storage/async-storage
  // which is a React Native peer dep we don't need on web. Alias to false so
  // webpack treats it as an empty module and stops resolving the dep tree.
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@react-native-async-storage/async-storage": false,
    };
    return config;
  },
  // Silence the build warning about missing peer dep without failing the build.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;

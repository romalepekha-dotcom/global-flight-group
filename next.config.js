/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config, { dev, isServer }) => {
    // Windows-specific file watcher configuration
    if (dev) {
      // Build new ignored patterns array
      const newIgnoredPatterns = [
        // Windows system files at C:\ root
        'C:/hiberfil.sys',
        'C:/pagefile.sys',
        'C:/swapfile.sys',
        'C:/DumpStack.log.tmp',
        // Windows system directories
        '**/System Volume Information/**',
        '**/$RECYCLE.BIN/**',
        // Standard ignores
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
      ];

      // Only set watchOptions if we have valid patterns
      config.watchOptions = {
        ...config.watchOptions,
        ignored: newIgnoredPatterns,
      };

      // Use memory cache in development to avoid Windows file locking issues
      // This prevents webpack cache pack.gz rename ENOENT errors
      config.cache = {
        type: 'memory',
      };
    }

    return config;
  },
}

module.exports = nextConfig


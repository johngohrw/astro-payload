import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  output: 'standalone',
  // below: https://github.com/payloadcms/payload/issues/11790
  outputFileTracingIncludes: {
    '*': [
      'node_modules/@libsql/**',
      'node_modules/.pnpm/@libsql*/node_modules/**',
      'node_modules/.pnpm/@neon-rs*/node_modules/**',
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })

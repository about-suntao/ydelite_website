/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: "@import '@/assets/styles/globals.scss';",
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icon-apply.oss-cn-hangzhou.aliyuncs.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

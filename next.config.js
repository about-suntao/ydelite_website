/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: "@import '@/assets/styles/globals.scss';",
    },
}

module.exports = nextConfig

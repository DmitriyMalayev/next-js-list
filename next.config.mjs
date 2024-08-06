/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['www.thecocktaildb.com'],
    // }
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.thecocktaildb.com',
                port: '',
                pathname: '/images/**',
            }
        ]
    }
}

export default nextConfig;
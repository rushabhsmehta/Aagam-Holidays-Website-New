/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        domains: ['res.cloudinary.com']
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://send2.digital/whatsapp/:path*',
            },
        ]
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        domains: ['res.cloudinary.com']
    },
    async rewrites() {
        return [
            {
                source: '/:whatsapp_send_message',
                destination: 'https://send2.digital/whatsapp/api/sendwhatsapp_1.php',
            },
        ]
    }
}

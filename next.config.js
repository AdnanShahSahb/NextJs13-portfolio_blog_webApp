/** @type {import('next').NextConfig} */
const nextConfig = {
    // swcMinify:true,
    
    fastRefresh: true,

    images: {
        domains: ["images.pexels.com","lh3.googleusercontent.com"],
        // domains: ['lh3.googleusercontent.com']
    }
}

module.exports = nextConfig

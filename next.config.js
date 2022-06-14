/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: ['images.prismic.io', 'ollie-taylor.cdn.prismic.io']
	},
}

module.exports = nextConfig

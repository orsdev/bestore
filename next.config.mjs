/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    env: {
      BASE_ENDPOINT: process.env.BASE_ENDPOINT
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**example.com'
        }, 
          {
          protocol: 'https',
          hostname: '**.dummyjson.com'
        },

      ]
    }
  };
  
  export default nextConfig;
  
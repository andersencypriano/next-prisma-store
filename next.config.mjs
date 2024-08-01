/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'fakestoreapi.com',
      'http://127.0.0.1:1337',
      'dummyjson.com',
      'cdn.dummyjson.com',
    ],
  }
};

export default nextConfig;

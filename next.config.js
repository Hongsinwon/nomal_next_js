/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  //redirects = source의 URL을 destination으로 바꿔서 연결해줌
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ];
  },
  //rewrites = 실제 URL은 destination 이지만 source라고 구라침
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;

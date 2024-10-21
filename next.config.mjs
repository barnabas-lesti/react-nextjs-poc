/** @type {import('next').NextConfig} */
export default {
  async redirects() {
    return [
      {
        source: "/app",
        destination: "/app/dashboard",
        permanent: true,
      },
    ];
  },
};

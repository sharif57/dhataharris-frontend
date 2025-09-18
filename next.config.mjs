// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["127.0.0.1"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "192.168.10.33" , 'enitiative.org', 'api.enitiative.org'], // ✅ No port in domains
  },
};

export default nextConfig;

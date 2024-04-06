/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "salvation-ministries.up.railway.app/v1",
				port: "",
			},
		],
	},
};

export default nextConfig;

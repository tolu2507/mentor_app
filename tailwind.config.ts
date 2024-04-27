import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 80s linear infinite",
        "bounce-slow": "bounce 20s linear infinite",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;

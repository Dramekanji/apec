import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#dd743a",
          light: "#f4a261",
        },
        background: "#f5f3e8",
        dark: "#278793",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        accent: ["var(--font-fraunces)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

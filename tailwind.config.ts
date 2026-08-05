import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#0B1B54", // KMD Logo Deep Navy Blue (KM & Ring)
            hover: "#061038",
            light: "#172A75"
          },
          accent: {
            DEFAULT: "#ED1C24", // KMD Logo Vivid Red (D)
            hover: "#C81219",
            light: "#F0484E"
          },
          neutral: {
            50: "#FAFAFA",
            100: "#F4F4F5",
            200: "#E4E4E7",
            300: "#D4D4D8",
            400: "#A1A1AA",
            500: "#71717A",
            600: "#52525B",
            700: "#3F3F46",
            800: "#27272A",
            900: "#18181B",
            950: "#09090B"
          }
        },
        sand: {
          50: "#fffdfc",
          100: "#f7f4ee",
          200: "#efe7dc",
          300: "#e3d9cb",
          400: "#d8cec2"
        },
        ink: {
          700: "#5f574f",
          900: "#2f2a26"
        },
        bronze: {
          500: "#8a6a4a",
          600: "#a88662"
        },
        olive: {
          500: "#6f8a6a"
        }
      },
      boxShadow: {
        card: "0 18px 40px rgba(47, 42, 38, 0.06)"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

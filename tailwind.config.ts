import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/styles/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}", // shadcn default
  ],
  theme: {
    extend: {
      // Add a terminal green and mono font later if you like
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

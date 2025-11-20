import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}", // shadcn default
  ],
  theme: {
    extend: {
      // Add a terminal green and mono font later if you like
      colors: {
        'alternate-background': '#555bc0',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

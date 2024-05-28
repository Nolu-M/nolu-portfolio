/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff3385",
        secondary: "#ff0066",
        texlight: "#a7a7a7",
        bgPrimary: "#020010",
      },
    },
  },
  plugins: [],
}


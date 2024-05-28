/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: "#ff3385", 
          green: "#00cccc",
        },
        secondary: {
          pink: "#ff0066",
          green: "#009999",
        },
        texlight: "#a7a7a7",
        bgPrimary: "#020010",
      },
    },
  },
  plugins: [],
}


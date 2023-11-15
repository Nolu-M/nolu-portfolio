/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7E22CE',
        'gray': '#d1d5db'
      },
      backgroundImage: {
        'background': "url('assets/images/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
}


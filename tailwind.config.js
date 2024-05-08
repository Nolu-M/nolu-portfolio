/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Ubuntu', 'sans-serif'],
        'secondary': ['Raleway', 'sans-serif'],
        'tertiary': ['Dancing Script', 'cursive']
      },
      colors: {
        'purple': '#7E22CE',
        'gray': '#d1d5db'
      },
      backgroundImage: {
        'background': "url('assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
}


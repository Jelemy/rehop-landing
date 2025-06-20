/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: 'rgba(255, 187, 78, 1)',
      },
    },
    screens: {
      xs: '300px',
      sm: '400px',
      smmd: '700px',
      md: '1024px',
      lg: '1200px',
      // etc...
    },
  },
  plugins: [],
}


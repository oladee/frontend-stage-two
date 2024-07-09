/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black : {
          100 : '#1D1B20',
          200 : '#49454F',
          // 300 : ''
        }
      },
      fontFamily : {
        roboto : ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}


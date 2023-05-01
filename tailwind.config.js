/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main": "#0C77FF",
        "main-hover": "#085bc4",
        "not-gray": "#8D8D8D",
      },

      screens:{
        "lg3": "1100px",
        "lg2": "1178px",
        "xl2": "1542px"
      }
    },
  },
  plugins: [],
}
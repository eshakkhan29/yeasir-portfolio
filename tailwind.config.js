/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary' : "#EB4A4A",
      'secondary' : "#808DAD",
      'white' : "#ffff"
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'grey' : '#F5F8FA',
      'white': '#FFFFFF',
      'blue' : '#5144E0'
    },
    fontFamily:{
      inter : ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
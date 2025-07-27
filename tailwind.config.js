/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        'primary': '#4285F4',
        'secondary': '#14171A',
        'accent': '#FFAD1F',
        'danger': '#E0245E',
        'background': '#FFFFFF',
      },
    },
  },
  plugins: [],
}


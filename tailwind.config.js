/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sofia: '"Sofia Sans", sans-serif', 
      },
      colors: {
        'bg-1': '#F46926',
        'bg-2': '#F34126',
        'bg-3': '#F4EDE8',
      }
    },
  },
  plugins: [require('daisyui'),],
}


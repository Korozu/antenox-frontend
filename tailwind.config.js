/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grunge-white': '#E5E5E5',
        'grunge-dark': '#1A1A1A',
        'grunge-blue': '#2D4B73',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        surface: '#13131A',
        border: '#1E1E2E',
        accent: '#6366F1',
        'accent-hover': '#818CF8',
        muted: '#52525B',
        subtle: '#27272A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
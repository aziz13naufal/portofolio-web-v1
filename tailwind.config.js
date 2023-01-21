/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        extraDark: '#141517',
        extraDarkSecondary: '#1a1b1e',
      }
    },
  },
  plugins: [],
}

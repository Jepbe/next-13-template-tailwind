/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ncblue: "#131E3A",
      ncdarkblue: "#0E162A",
      light: "#e8e8e8",
    },

    extend: {},
  },
  plugins: [],
}

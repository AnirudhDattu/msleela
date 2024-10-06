/** @type {import('tailwindcss').Config} */
// import '@fontsource/playfair-display'; // Defaults to 400 weight

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        play: ['Play', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        neon: ['Tilt Neon', 'cursive'], 
        sansation: ['Sansation', 'sans-serif'],
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.681rem',
    },
  },
  plugins: [],
}


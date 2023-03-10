/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'mobile-header': "url('/image-hero-mobile.jpg')",
        'desktop-header': "url('/image-hero-desktop.jpg')"
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        darkGray: 'hsl(0, 0%, 55%)',
        veryDarkGray: 'hsl(0, 0%, 41%)'
      },
      fontFamily:{
        'alata': ['Alata', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

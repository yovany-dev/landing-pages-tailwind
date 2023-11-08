/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif']
      },
      colors: {
        'primary-white': 'hsl(0, 0%, 100%)',
        'primary-black': 'hsl(0, 0%, 0%)',
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
      },
      backgroundImage: {
        'hero-mobile': "url('../images/mobile/image-hero.jpg')",
        'hero-desktop': "url('../images/desktop/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}


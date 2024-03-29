/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    }
  },
  plugins: [],
}

/*
screens: {
  'sm': {'min': '640px', 'max': '767px'},
  // => @media (min-width: 640px and max-width: 767px) { ... }

  'md': {'min': '768px', 'max': '1023px'},
  // => @media (min-width: 768px and max-width: 1023px) { ... }

  'lg': {'min': '1024px', 'max': '1279px'},
  // => @media (min-width: 1024px and max-width: 1279px) { ... }

  'xl': {'min': '1280px', 'max': '1535px'},
  // => @media (min-width: 1280px and max-width: 1535px) { ... }
*/
